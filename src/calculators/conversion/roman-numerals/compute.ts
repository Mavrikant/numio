import { z } from "zod";

/**
 * Roman numeral converter — both directions.
 *
 * Standard (subtractive) notation covers 1–3999. The Romans had no symbol for
 * zero and no standard for numbers ≥ 4000, so we cap the range and report
 * invalid input rather than guessing.
 */
export const inputSchema = z.object({
  mode: z.enum(["to-roman", "to-arabic"]).default("to-roman"),
  value: z.string().min(1).max(20),
});

export type RomanInputs = z.infer<typeof inputSchema>;

export interface RomanResult extends Record<string, unknown> {
  readonly roman: string;
  readonly arabic: number;
  readonly valid: boolean;
}

const TABLE: ReadonlyArray<readonly [string, number]> = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

function toRoman(n: number): string {
  let out = "";
  let rest = n;
  for (const [sym, val] of TABLE) {
    while (rest >= val) {
      out += sym;
      rest -= val;
    }
  }
  return out;
}

const ROMAN_VALUE: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function fromRoman(raw: string): number {
  const s = raw.toUpperCase().replace(/\s+/g, "");
  if (!/^[IVXLCDM]+$/.test(s)) return NaN;
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = ROMAN_VALUE[s[i]!]!;
    const next = i + 1 < s.length ? ROMAN_VALUE[s[i + 1]!]! : 0;
    total += cur < next ? -cur : cur;
  }
  // Canonical check: only accept strictly-correct numerals (e.g. reject "IIII").
  if (total < 1 || total > 3999 || toRoman(total) !== s) return NaN;
  return total;
}

export function compute(inputs: RomanInputs): RomanResult {
  if (inputs.mode === "to-roman") {
    const n = Number(inputs.value.trim());
    if (!Number.isInteger(n) || n < 1 || n > 3999) {
      return { roman: "—", arabic: NaN, valid: false };
    }
    return { roman: toRoman(n), arabic: n, valid: true };
  }

  const arabic = fromRoman(inputs.value);
  if (!Number.isFinite(arabic)) {
    return { roman: inputs.value.toUpperCase().trim(), arabic: NaN, valid: false };
  }
  return { roman: toRoman(arabic), arabic, valid: true };
}
