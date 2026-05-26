import { z } from "zod";

export const inputSchema = z
  .object({
    country: z.enum(["tr", "us"]),
    grossIncome: z.number().min(0),
    filingStatus: z.enum(["single", "married", "head"]).default("single"),
    deductions: z.number().min(0).default(0),
  })
  .superRefine((data, ctx) => {
    if (data.grossIncome < 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["grossIncome"],
        message: "Gross income must be zero or positive.",
      });
    }
  });

export type IncomeTaxInputs = z.infer<typeof inputSchema>;

export interface BracketEntry {
  readonly bracket: string;
  readonly rate: number;
  readonly taxOnBracket: number;
}

export interface IncomeTaxResult extends Record<string, unknown> {
  readonly taxableIncome: number;
  readonly estimatedTax: number;
  readonly effectiveRate: number;
  readonly afterTaxIncome: number;
  readonly bracketBreakdown: BracketEntry[];
}

// ────────────────────────────────────────────────────────────
// Turkey 2024 progressive brackets (GVK - Gelir Vergisi Kanunu)
// ────────────────────────────────────────────────────────────
interface TaxBracket {
  min: number;
  max: number; // Infinity for top bracket
  rate: number;
}

const TR_BRACKETS: TaxBracket[] = [
  { min: 0, max: 110_000, rate: 0.15 },
  { min: 110_000, max: 230_000, rate: 0.20 },
  { min: 230_000, max: 870_000, rate: 0.27 },
  { min: 870_000, max: 3_000_000, rate: 0.35 },
  { min: 3_000_000, max: Infinity, rate: 0.40 },
];

// US 2024 Federal Income Tax Brackets (single filer base)
const US_SINGLE_BRACKETS: TaxBracket[] = [
  { min: 0, max: 11_600, rate: 0.10 },
  { min: 11_600, max: 47_150, rate: 0.12 },
  { min: 47_150, max: 100_525, rate: 0.22 },
  { min: 100_525, max: 191_950, rate: 0.24 },
  { min: 191_950, max: 243_725, rate: 0.32 },
  { min: 243_725, max: 609_350, rate: 0.35 },
  { min: 609_350, max: Infinity, rate: 0.37 },
];

// US 2024 Standard deductions
const US_STANDARD_DEDUCTIONS: Record<"single" | "married" | "head", number> = {
  single: 14_600,
  married: 29_200,
  head: 21_900,
};

function buildUsMarriedBrackets(): TaxBracket[] {
  // Married filing jointly: double all single thresholds
  return US_SINGLE_BRACKETS.map((b) => ({
    min: b.min * 2,
    max: b.max === Infinity ? Infinity : b.max * 2,
    rate: b.rate,
  }));
}

function buildUsHeadBrackets(): TaxBracket[] {
  // Head of household uses specific IRS thresholds for 2024
  const headBrackets: TaxBracket[] = [
    { min: 0, max: 16_550, rate: 0.10 },
    { min: 16_550, max: 63_100, rate: 0.12 },
    { min: 63_100, max: 100_500, rate: 0.22 },
    { min: 100_500, max: 191_950, rate: 0.24 },
    { min: 191_950, max: 243_700, rate: 0.32 },
    { min: 243_700, max: 609_350, rate: 0.35 },
    { min: 609_350, max: Infinity, rate: 0.37 },
  ];
  return headBrackets;
}

function computeTaxFromBrackets(
  taxableIncome: number,
  brackets: TaxBracket[],
): { tax: number; breakdown: BracketEntry[] } {
  let tax = 0;
  const breakdown: BracketEntry[] = [];

  for (const b of brackets) {
    if (taxableIncome <= b.min) break;
    const taxableInBracket = Math.min(taxableIncome, b.max) - b.min;
    const taxOnBracket = taxableInBracket * b.rate;
    tax += taxOnBracket;
    breakdown.push({
      bracket:
        b.max === Infinity
          ? `${b.min.toLocaleString()}+`
          : `${b.min.toLocaleString()} – ${b.max.toLocaleString()}`,
      rate: b.rate * 100,
      taxOnBracket: Math.round(taxOnBracket * 100) / 100,
    });
  }

  return { tax, breakdown };
}

export function compute(inputs: IncomeTaxInputs): IncomeTaxResult {
  const { country, grossIncome, filingStatus, deductions } = inputs;

  let taxableIncome: number;
  let brackets: TaxBracket[];

  if (country === "tr") {
    taxableIncome = Math.max(0, grossIncome - deductions);
    brackets = TR_BRACKETS;
  } else {
    // US: apply standard deduction first, then additional deductions
    const standardDeduction = US_STANDARD_DEDUCTIONS[filingStatus];
    taxableIncome = Math.max(0, grossIncome - standardDeduction - deductions);

    switch (filingStatus) {
      case "married":
        brackets = buildUsMarriedBrackets();
        break;
      case "head":
        brackets = buildUsHeadBrackets();
        break;
      default:
        brackets = US_SINGLE_BRACKETS;
    }
  }

  const { tax, breakdown } = computeTaxFromBrackets(taxableIncome, brackets);

  const estimatedTax = Math.round(tax * 100) / 100;
  const effectiveRate =
    grossIncome > 0
      ? Math.round((estimatedTax / grossIncome) * 10000) / 100
      : 0;
  const afterTaxIncome = Math.round((grossIncome - estimatedTax) * 100) / 100;

  return {
    taxableIncome: Math.round(taxableIncome * 100) / 100,
    estimatedTax,
    effectiveRate,
    afterTaxIncome,
    bracketBreakdown: breakdown,
  };
}
