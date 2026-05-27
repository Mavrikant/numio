/**
 * nl-parser.ts — Natural-language → calculator inputs parser
 *
 * Deterministic, pure, no IO, no Date.now(), no external API calls.
 * Strategy: regex-based extraction with unit normalization, multi-pass.
 *
 * Pass 1: unit-bearing extractions (most specific, least ambiguous)
 * Pass 2: bare-number positional matching for remaining empty fields
 */

import type { AnyCalculatorDefinition, InputDef } from "@/types/calculator";
import type { Locale } from "@/config/site";

// ─── Public types ─────────────────────────────────────────────────────────────

export interface NlMatchedField {
  readonly field: string;
  readonly value: unknown;
  readonly matchedText: string;
}

export interface NlParseResult {
  readonly inputs: Record<string, number | string | boolean>;
  readonly matched: ReadonlyArray<NlMatchedField>;
  readonly unmatched: ReadonlyArray<string>;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Normalise decimal separator: European "1.234,56" or "1,5" → "1.5" */
function normDecimal(s: string): number {
  // If the string contains both "." and "," — European grouping+decimal
  if (s.includes(",") && s.includes(".")) {
    // e.g. "1.234,56" → remove dots, replace comma with dot
    return parseFloat(s.replace(/\./g, "").replace(",", "."));
  }
  // Only comma: could be European decimal (e.g. "1,5") or thousands separator
  if (s.includes(",") && !s.includes(".")) {
    // If the comma separates fewer than 4 digits after it → decimal
    const parts = s.split(",");
    if (parts.length === 2 && parts[1].length <= 2) {
      return parseFloat(s.replace(",", "."));
    }
    // Otherwise: thousands separator
    return parseFloat(s.replace(/,/g, ""));
  }
  return parseFloat(s);
}

/** Parse magnitude suffix: k / K → ×1000, m / M → ×1000000 */
function parseMagnitude(numStr: string, suffix?: string): number {
  const n = normDecimal(numStr);
  if (suffix) {
    const s = suffix.toLowerCase();
    if (s === "k") return n * 1000;
    if (s === "m") return n * 1_000_000;
    if (s === "b") return n * 1_000_000_000;
  }
  return n;
}

/** Convert feet+inches string to total inches */
function feetInchesToInches(feet: number, inches: number): number {
  return feet * 12 + inches;
}

// ─── Pattern library ──────────────────────────────────────────────────────────

// Shared number fragment (handles European decimals, thousands separators)
const NUM = "([\\d][\\d.,]*)";
const MAG = "([kmb])?"; // optional magnitude suffix (case-insensitive flag used)

// ─── Per-field extraction strategies ─────────────────────────────────────────

interface FieldExtraction {
  readonly field: string;
  readonly value: number | string | boolean;
  readonly matchedText: string;
}

/**
 * Try to extract a numeric value for a number-type input from the text.
 * Returns null if no match.
 */
function extractNumber(
  text: string,
  inputId: string,
  unit: string | undefined,
): FieldExtraction | null {
  const t = text; // keep original for matchedText

  // Age-specific
  if (inputId === "age" || inputId === "currentAge") {
    const patterns = [
      /(?:i[''`]?m|am|age[d]?|aged?)\s+(\d+)\s*(?:years?\s*old|y\.?o\.?|yr)/i,
      /(\d+)\s*(?:years?\s*old|y\.?o\.?|yr\.?)\b/i,
      /(?:age|aged?)[:\s]+(\d+)/i,
      /\b(\d{1,3})\s*(?:years?|yrs?)\s*(?:old)?\b/i,
    ];
    for (const pat of patterns) {
      const m = t.match(pat);
      if (m?.[1]) {
        return { field: inputId, value: parseInt(m[1], 10), matchedText: m[0] };
      }
    }
  }

  // Retirement age
  if (inputId === "retirementAge") {
    const m = t.match(/(?:retire(?:ment)?\s+at|retiring\s+at|retire\s+at)\s*(\d+)/i);
    if (m?.[1]) return { field: inputId, value: parseInt(m[1], 10), matchedText: m[0] };
  }

  // Weight — kg
  if (inputId === "weight" || inputId === "weightKg") {
    // kg
    const kgPat = new RegExp(`${NUM}\\s*(?:kg|kilograms?|kilo(?:s)?|kgs?)\\b`, "i");
    const kgM = t.match(kgPat);
    if (kgM?.[1]) {
      return { field: inputId, value: normDecimal(kgM[1]), matchedText: kgM[0] };
    }
    // lbs / pounds — return in kg? No — we return raw lb value.
    // The caller must handle unit system detection separately.
    const lbPat = new RegExp(`${NUM}\\s*(?:lbs?|pounds?)\\b`, "i");
    const lbM = t.match(lbPat);
    if (lbM?.[1]) {
      return { field: inputId, value: normDecimal(lbM[1]), matchedText: lbM[0] };
    }
  }

  // Height — cm or feet/inches
  if (inputId === "height") {
    // cm
    const cmPat = /([.\d,]+)\s*(?:cm|centimeters?)\b/i;
    const cmM = t.match(cmPat);
    if (cmM?.[1]) return { field: inputId, value: normDecimal(cmM[1]), matchedText: cmM[0] };

    // Feet + inches: 5'10", 5 ft 10 in, 5 feet 10 inches
    const ftInPat =
      /(\d+)\s*(?:\'|ft\.?|feet)\s*(\d+)\s*(?:\"|\"|in\.?|inches?)?/i;
    const ftInM = t.match(ftInPat);
    if (ftInM?.[1]) {
      const totalIn = feetInchesToInches(parseInt(ftInM[1], 10), parseInt(ftInM[2] ?? "0", 10));
      return { field: inputId, value: totalIn, matchedText: ftInM[0] };
    }

    // Just feet: 5'
    const ftPat = /(\d+)\s*(?:\'|ft\.?|feet)\b/i;
    const ftM = t.match(ftPat);
    if (ftM?.[1]) {
      return { field: inputId, value: parseInt(ftM[1], 10) * 12, matchedText: ftM[0] };
    }

    // Just inches: 70 inches
    const inPat = /(\d+)\s*(?:in\.?|inches?)\b/i;
    const inM = t.match(inPat);
    if (inM?.[1]) return { field: inputId, value: parseInt(inM[1], 10), matchedText: inM[0] };

    // Meters: 1.75 m
    const mPat = /([12]\.\d+)\s*m\b/i;
    const mM = t.match(mPat);
    if (mM?.[1]) return { field: inputId, value: Math.round(normDecimal(mM[1]) * 100), matchedText: mM[0] };
  }

  // Percentage fields
  if (
    inputId === "annualRate" ||
    inputId === "annualReturn" ||
    inputId === "interestRate" ||
    inputId === "rate" ||
    inputId === "apr" ||
    unit === "percent"
  ) {
    const pat = new RegExp(
      `${NUM}\\s*(?:%|percent(?:age)?|apr|annual(?:\\s+rate)?)`,
      "i",
    );
    const m = t.match(pat);
    if (m?.[1]) return { field: inputId, value: normDecimal(m[1]), matchedText: m[0] };
  }

  // Term in years
  if (inputId === "termYears" || (inputId === "term" && unit === "year")) {
    const m = t.match(/(\d+)[\s-]*year(?:\s+(?:term|loan|mortgage|fixed))?\b/i);
    if (m?.[1]) return { field: inputId, value: parseInt(m[1], 10), matchedText: m[0] };
  }

  // Term in months
  if (inputId === "termMonths") {
    // Try "60 months", "48-month"
    const mPat = /(\d+)[\s-]*month(?:s)?\b/i;
    const mM = t.match(mPat);
    if (mM?.[1]) return { field: inputId, value: parseInt(mM[1], 10), matchedText: mM[0] };

    // Also accept year-based for months: "5 year" → 60 months
    const yPat = /(\d+)[\s-]*year(?:s)?\b/i;
    const yM = t.match(yPat);
    if (yM?.[1]) return { field: inputId, value: parseInt(yM[1], 10) * 12, matchedText: yM[0] };
  }

  // Hours elapsed
  if (inputId === "hoursElapsed" || (inputId.includes("hour") && unit === "hour")) {
    const m = t.match(/(\d+(?:[.,]\d+)?)\s*hours?\s*(?:ago|elapsed)?\b/i);
    if (m?.[1]) return { field: inputId, value: normDecimal(m[1]), matchedText: m[0] };
  }

  // Standard drinks
  if (inputId === "drinks") {
    const m = t.match(/(\d+(?:\.\d+)?)\s*(?:standard\s+)?drinks?\b/i);
    if (m?.[1]) return { field: inputId, value: normDecimal(m[1]), matchedText: m[0] };
  }

  // Currency / money fields
  if (
    unit === "usd" ||
    unit === "eur" ||
    unit === "gbp" ||
    unit === "try" ||
    unit === "jpy" ||
    inputId.toLowerCase().includes("amount") ||
    inputId.toLowerCase().includes("payment") ||
    inputId.toLowerCase().includes("savings") ||
    inputId.toLowerCase().includes("price") ||
    inputId.toLowerCase().includes("value") ||
    inputId.toLowerCase().includes("contribution")
  ) {
    // Build a currency pattern for this specific field based on its id/context
    // Match optional currency symbol + number + optional magnitude
    const currPat = new RegExp(
      `(?:[$€£₺¥])?\\s*${NUM}${MAG}(?:\\s*(?:[$€£₺¥]|usd|eur|gbp|try|jpy|dollars?|euros?|pounds?))?`,
      "i",
    );

    // We need context — try to find the amount preceded by a keyword related to the field
    const fieldKeywords = getFieldKeywords(inputId);
    for (const kw of fieldKeywords) {
      const contextPat = new RegExp(
        `(?:${kw})\\s*[:=]?\\s*(?:[$€£₺¥])?\\s*${NUM}${MAG}`,
        "i",
      );
      const cm = t.match(contextPat);
      if (cm?.[1]) {
        return {
          field: inputId,
          value: parseMagnitude(cm[1], cm[2]),
          matchedText: cm[0],
        };
      }
    }

    // Fallback: first currency-symbol-prefixed number in text (only for loanAmount / vehiclePrice / targetAmount)
    if (
      inputId === "loanAmount" ||
      inputId === "vehiclePrice" ||
      inputId === "targetAmount"
    ) {
      const firstCurr = t.match(
        new RegExp(`[$€£₺¥]\\s*${NUM}${MAG}`, "i"),
      );
      if (firstCurr?.[1]) {
        return {
          field: inputId,
          value: parseMagnitude(firstCurr[1], firstCurr[2]),
          matchedText: firstCurr[0],
        };
      }
    }
    return null;
  }

  // Monthly contribution (no currency unit but has "monthly")
  if (inputId === "monthlyContribution") {
    const m = t.match(
      new RegExp(`(?:monthly\\s*(?:contribution|saving|deposit|payment))[:\\s]*[$€£₺¥]?\\s*${NUM}${MAG}`, "i"),
    );
    if (m?.[1]) return { field: inputId, value: parseMagnitude(m[1], m[2]), matchedText: m[0] };
  }

  // Generic number with known unit
  if (unit) {
    const unitAliases: Record<string, string[]> = {
      kg: ["kg", "kilograms?", "kilo(?:s)?"],
      lb: ["lbs?", "pounds?"],
      cm: ["cm", "centimeters?"],
      m: ["m\\b", "meters?"],
      year: ["years?", "yrs?", "y\\.?o\\.?"],
      month: ["months?", "mos?\\.?"],
      hour: ["hours?", "hrs?\\.?"],
      percent: ["%", "percent(?:age)?"],
    };
    const aliases = unitAliases[unit];
    if (aliases) {
      const pat = new RegExp(
        `${NUM}\\s*(?:${aliases.join("|")})\\b`,
        "i",
      );
      const m = t.match(pat);
      if (m?.[1]) return { field: inputId, value: normDecimal(m[1]), matchedText: m[0] };
    }
  }

  return null;
}

/** Keywords associated with specific field ids for contextual currency extraction */
function getFieldKeywords(inputId: string): string[] {
  const map: Record<string, string[]> = {
    loanAmount: ["loan", "borrow(?:ed)?", "mortgage", "principal", "amount"],
    downPayment: ["down\\s*(?:payment)?", "put\\s+down", "deposit"],
    vehiclePrice: ["car|vehicle|truck|auto", "price", "cost", "purchase"],
    tradeInValue: ["trade(?:\\s*-?\\s*in)?", "tradein"],
    targetAmount: ["goal|target|save(?:\\s+up)?|need"],
    currentSavings: ["current(?:ly)?|already|have|saved"],
    monthlyContribution: ["monthly|per\\s*month|each\\s*month|/month|contribution"],
    annualRate: ["rate|apr|interest|apy"],
    currentAge: ["age|old|born"],
    retirementAge: ["retire(?:ment)?"],
  };
  return map[inputId] ?? [inputId.toLowerCase()];
}

/** Extract sex/gender from text */
function extractSex(text: string, inputId: string): FieldExtraction | null {
  const femaleRe = /\b(female|woman|women|girl|f\b|she|her)\b/i;
  const maleRe = /\b(male|man|men|boy|m\b|he|him)\b/i;

  if (femaleRe.test(text)) {
    const m = text.match(femaleRe)!;
    return { field: inputId, value: "female", matchedText: m[0] };
  }
  if (maleRe.test(text)) {
    const m = text.match(maleRe)!;
    return { field: inputId, value: "male", matchedText: m[0] };
  }
  return null;
}

/** Extract unit system (metric / imperial) from text */
function extractUnitSystem(text: string): "metric" | "imperial" | null {
  const hasImperial =
    /\b(?:lbs?|pounds?|feet|ft|inches?|in\b|imperial|freedom\s*units|oz|ounces?|miles?|mi\b)\b/i.test(text);
  const hasMetric =
    /\b(?:kg|kilograms?|cm|centimeters?|meters?|metric|si\s*units?|mm)\b/i.test(text);
  // Feet+inches pattern also implies imperial
  const hasFtIn = /\d+\s*(?:'|ft\.?|feet)\s*\d*/i.test(text);

  if ((hasImperial || hasFtIn) && !hasMetric) return "imperial";
  if (hasMetric && !hasImperial && !hasFtIn) return "metric";
  // Both present — metric wins (more precise)
  if (hasMetric) return "metric";
  return null;
}

/** Extract boolean value from text (for toggle inputs) */
function extractBoolean(text: string, inputId: string): FieldExtraction | null {
  // Generic yes/no
  if (/\byes\b/i.test(text)) return { field: inputId, value: true, matchedText: "yes" };
  if (/\bno\b/i.test(text)) return { field: inputId, value: false, matchedText: "no" };
  return null;
}

// ─── Per-calc overrides ───────────────────────────────────────────────────────

/**
 * Calc-specific extraction overrides. These supplement (not replace) generic logic.
 * Returns a partial map of fieldId → extraction or null to signal "not found".
 */
function calcOverrides(
  slug: string,
  text: string,
  inputs: ReadonlyArray<InputDef>,
): Partial<Record<string, FieldExtraction>> {
  const result: Partial<Record<string, FieldExtraction>> = {};

  if (slug === "mortgage") {
    // "$400k loan, $80k down" — the second currency amount is the down payment
    // Approach: find all currency amounts in order
    const allCurr = [
      ...text.matchAll(/[$€£₺¥]\s*([\d.,]+)([kmb])?/gi),
    ];
    if (allCurr.length >= 1 && !result["loanAmount"]) {
      const [m, num, mag] = [allCurr[0][0], allCurr[0][1], allCurr[0][2]];
      result["loanAmount"] = {
        field: "loanAmount",
        value: parseMagnitude(num, mag),
        matchedText: m,
      };
    }
    // Look for explicit down payment
    const downM = text.match(
      /(?:down\s*(?:payment)?|deposit|put\s+down)[:\s]*[$€£₺¥]?\s*([\d.,]+)([kmb])?/i,
    );
    if (downM?.[1]) {
      result["downPayment"] = {
        field: "downPayment",
        value: parseMagnitude(downM[1], downM[2]),
        matchedText: downM[0],
      };
    }
  }

  if (slug === "bmi") {
    // Turkish aliases: "kilo" = kg, "santimetre/boyum" = height, "yaşındayım/yaşında" = age
    // Turkish: "70 kilo" → weight, "175 cm", "30 yaşındayım"
    const trWeightM = text.match(/(\d+(?:[.,]\d+)?)\s*(?:kilo(?:gram)?|kg)\b/i);
    if (trWeightM?.[1] && !result["weight"]) {
      result["weight"] = {
        field: "weight",
        value: normDecimal(trWeightM[1]),
        matchedText: trWeightM[0],
      };
    }
    const trAgeM = text.match(/(\d+)\s*yaş(?:ında(?:yım|y[ıi]m)?|[ıi]nda)?\b/i);
    if (trAgeM?.[1]) {
      // BMI doesn't have age field but we store it in case it's needed
      result["_age_tr"] = {
        field: "_age_tr",
        value: parseInt(trAgeM[1], 10),
        matchedText: trAgeM[0],
      };
    }
  }

  if (slug === "bac") {
    // "3 standard drinks", "female", "60 kg", "2 hours ago"
    const drinkM = text.match(/(\d+(?:\.\d+)?)\s*(?:standard\s+)?drinks?\b/i);
    if (drinkM?.[1]) {
      result["drinks"] = {
        field: "drinks",
        value: normDecimal(drinkM[1]),
        matchedText: drinkM[0],
      };
    }
    const hoursM = text.match(/(\d+(?:[.,]\d+)?)\s*hours?\s*(?:ago|elapsed)?\b/i);
    if (hoursM?.[1]) {
      result["hoursElapsed"] = {
        field: "hoursElapsed",
        value: normDecimal(hoursM[1]),
        matchedText: hoursM[0],
      };
    }
  }

  return result;
}

// ─── Main parser ──────────────────────────────────────────────────────────────

export function parseNaturalLanguage(
  text: string,
  calc: AnyCalculatorDefinition,
  _locale: Locale,
): NlParseResult {
  if (!text || text.trim().length === 0) {
    return {
      inputs: {},
      matched: [],
      unmatched: calc.inputs.map((i) => i.id),
    };
  }

  const extracted = new Map<string, FieldExtraction>();

  // Step 0: per-calc overrides
  const overrides = calcOverrides(calc.slug, text, calc.inputs);
  for (const [fieldId, extraction] of Object.entries(overrides)) {
    if (extraction && !fieldId.startsWith("_")) {
      extracted.set(fieldId, extraction);
    }
  }

  // Step 1: detect unit system (for calcs that have a "unit" select)
  const unitSystemInput = calc.inputs.find(
    (i) => i.id === "unit" && i.type.kind === "select",
  );
  if (unitSystemInput) {
    const unitSystem = extractUnitSystem(text);
    if (unitSystem) {
      extracted.set("unit", {
        field: "unit",
        value: unitSystem,
        matchedText: `[unit: ${unitSystem}]`,
      });
    }
  }

  // Step 2: iterate each input and try to extract
  for (const input of calc.inputs) {
    const { id, type } = input;

    // Already extracted by override
    if (extracted.has(id)) continue;

    if (type.kind === "select") {
      // Sex / gender selects
      const opts = type.options.map((o) => o.value);
      if (
        (id === "sex" || id === "gender") &&
        opts.includes("male") &&
        opts.includes("female")
      ) {
        const sexExtraction = extractSex(text, id);
        if (sexExtraction) extracted.set(id, sexExtraction);
        continue;
      }
      // Unit system handled above
      if (id === "unit") continue;
      // Activity level
      if (id === "activity") {
        const actPat =
          /\b(sedentary|lightly?\s*active|moderately?\s*active|very\s*active|extra\s*active|active)\b/i;
        const actM = text.match(actPat);
        if (actM?.[0]) {
          const raw = actM[0].toLowerCase().replace(/\s+/g, "");
          let val = "sedentary";
          if (/veryactive|extraactive/.test(raw)) val = "veryActive";
          else if (/moderately?active|moderatelyactive/.test(raw)) val = "moderate";
          else if (/lightlyactive|lightly/.test(raw)) val = "light";
          else if (/active/.test(raw)) val = "active";
          extracted.set(id, { field: id, value: val, matchedText: actM[0] });
        }
        continue;
      }
      continue;
    }

    if (type.kind === "toggle") {
      const boolExtraction = extractBoolean(text, id);
      if (boolExtraction) extracted.set(id, boolExtraction);
      continue;
    }

    if (type.kind === "number") {
      const unit = (type as { kind: "number"; unit?: string }).unit;
      const numExtraction = extractNumber(text, id, unit);
      if (numExtraction) extracted.set(id, numExtraction);
      continue;
    }
  }

  // Step 3: unit-system awareness — adjust weight/height values based on detected unit
  const detectedUnit = extracted.get("unit")?.value as "metric" | "imperial" | undefined;
  const weightExtraction = extracted.get("weight") ?? extracted.get("weightKg");
  const heightExtraction = extracted.get("height");

  if (detectedUnit === "metric" && heightExtraction) {
    // If height was extracted as feet+inches total, it's in inches — but metric was detected
    // This shouldn't normally happen (user said cm if metric), but if they mixed "175 cm" it's fine
    // No adjustment needed for cm
  }

  if (detectedUnit === "imperial" && heightExtraction) {
    // Value is already in total inches from extractNumber
    // No further adjustment
  }

  // Step 4: if unit is "imperial" and we have a height in inches, ensure weight is in lbs (not kg)
  // The extractNumber for weight returns the raw numeric from the text regardless of kg/lb
  // The user said "190 lbs" → 190 (correct for imperial BMI)
  // The user said "70 kg" → 70 (correct for metric BMI)
  // So no additional conversion — the calculator handles unit internally

  // Build final result
  const inputs: Record<string, number | string | boolean> = {};
  const matched: NlMatchedField[] = [];

  for (const [fieldId, extraction] of extracted) {
    if (fieldId.startsWith("_")) continue;
    // Verify fieldId exists in calc.inputs
    const inputDef = calc.inputs.find((i) => i.id === fieldId);
    if (!inputDef) continue;
    inputs[fieldId] = extraction.value as number | string | boolean;
    matched.push({
      field: fieldId,
      value: extraction.value,
      matchedText: extraction.matchedText,
    });
  }

  const unmatched = calc.inputs
    .map((i) => i.id)
    .filter((id) => !(id in inputs));

  return { inputs, matched, unmatched };
}
