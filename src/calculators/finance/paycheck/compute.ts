import { z } from "zod";

export const inputSchema = z
  .object({
    grossSalary: z.number().min(0).max(10_000_000),
    payFrequency: z
      .enum(["weekly", "biweekly", "semimonthly", "monthly", "annual"])
      .default("biweekly"),
    filingStatus: z.enum(["single", "married"]).default("single"),
    stateTaxRate: z.number().min(0).max(15).default(0),
    pretax401k: z.number().min(0).max(100_000).default(0),
    pretaxHsa: z.number().min(0).max(50_000).default(0),
  })
  .superRefine((data, ctx) => {
    if (data.pretax401k + data.pretaxHsa > data.grossSalary) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["pretax401k"],
        message: "Pretax deductions cannot exceed gross salary.",
      });
    }
  });

export type PaycheckInputs = z.infer<typeof inputSchema>;

export interface PaycheckResult extends Record<string, unknown> {
  readonly annualGross: number;
  readonly annualFederalTax: number;
  readonly annualFica: number;
  readonly annualStateTax: number;
  readonly annualPretax: number;
  readonly annualNet: number;
  readonly perPeriodGross: number;
  readonly perPeriodFederalTax: number;
  readonly perPeriodFica: number;
  readonly perPeriodStateTax: number;
  readonly perPeriodNet: number;
  readonly effectiveTaxRate: number;
}

type Frequency = "weekly" | "biweekly" | "semimonthly" | "monthly" | "annual";

const PERIODS_PER_YEAR: Record<Frequency, number> = {
  weekly: 52,
  biweekly: 26,
  semimonthly: 24,
  monthly: 12,
  annual: 1,
};

interface TaxBracket {
  min: number;
  max: number;
  rate: number;
}

// US 2024 Federal Income Tax Brackets (single filer)
const US_SINGLE_BRACKETS: TaxBracket[] = [
  { min: 0, max: 11_600, rate: 0.10 },
  { min: 11_600, max: 47_150, rate: 0.12 },
  { min: 47_150, max: 100_525, rate: 0.22 },
  { min: 100_525, max: 191_950, rate: 0.24 },
  { min: 191_950, max: 243_725, rate: 0.32 },
  { min: 243_725, max: 609_350, rate: 0.35 },
  { min: 609_350, max: Infinity, rate: 0.37 },
];

// US 2024 Federal Income Tax Brackets (married filing jointly) — double of single
const US_MFJ_BRACKETS: TaxBracket[] = US_SINGLE_BRACKETS.map((b) => ({
  min: b.min * 2,
  max: b.max === Infinity ? Infinity : b.max * 2,
  rate: b.rate,
}));

const STANDARD_DEDUCTION = { single: 14_600, married: 29_200 } as const;

// FICA constants (2024)
const SS_WAGE_BASE = 168_600;
const SS_RATE = 0.062;
const MEDICARE_RATE = 0.0145;
const ADDITIONAL_MEDICARE_RATE = 0.009;
const ADDITIONAL_MEDICARE_THRESHOLD = { single: 200_000, married: 250_000 } as const;

function computeFederalTax(taxableIncome: number, status: "single" | "married"): number {
  if (taxableIncome <= 0) return 0;
  const brackets = status === "married" ? US_MFJ_BRACKETS : US_SINGLE_BRACKETS;
  let tax = 0;
  for (const b of brackets) {
    if (taxableIncome <= b.min) break;
    const taxableInBracket = Math.min(taxableIncome, b.max) - b.min;
    tax += taxableInBracket * b.rate;
  }
  return tax;
}

function computeFica(wagesForFica: number, status: "single" | "married"): number {
  const ss = Math.min(wagesForFica, SS_WAGE_BASE) * SS_RATE;
  const medicare = wagesForFica * MEDICARE_RATE;
  const threshold = ADDITIONAL_MEDICARE_THRESHOLD[status];
  const addlMedicare =
    wagesForFica > threshold ? (wagesForFica - threshold) * ADDITIONAL_MEDICARE_RATE : 0;
  return ss + medicare + addlMedicare;
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

export function compute(inputs: PaycheckInputs): PaycheckResult {
  const {
    grossSalary,
    payFrequency,
    filingStatus,
    stateTaxRate,
    pretax401k,
    pretaxHsa,
  } = inputs;

  const pretax = pretax401k + pretaxHsa;

  // Federal taxable income: gross - pretax (401k, HSA) - standard deduction
  const wagesAfterPretax = Math.max(0, grossSalary - pretax);
  const federalTaxable = Math.max(0, wagesAfterPretax - STANDARD_DEDUCTION[filingStatus]);
  const federalTax = computeFederalTax(federalTaxable, filingStatus);

  // FICA: HSA is pre-FICA (cafeteria plan); 401k is NOT pre-FICA.
  // Wages for FICA = gross - HSA only.
  const wagesForFica = Math.max(0, grossSalary - pretaxHsa);
  const fica = computeFica(wagesForFica, filingStatus);

  // State tax: flat % applied to wages after pretax
  const stateTax = wagesAfterPretax * (stateTaxRate / 100);

  const annualNet = grossSalary - federalTax - fica - stateTax - pretax;
  const periods = PERIODS_PER_YEAR[payFrequency];

  const effectiveTaxRate =
    grossSalary > 0 ? ((federalTax + fica + stateTax) / grossSalary) * 100 : 0;

  return {
    annualGross: round2(grossSalary),
    annualFederalTax: round2(federalTax),
    annualFica: round2(fica),
    annualStateTax: round2(stateTax),
    annualPretax: round2(pretax),
    annualNet: round2(annualNet),
    perPeriodGross: round2(grossSalary / periods),
    perPeriodFederalTax: round2(federalTax / periods),
    perPeriodFica: round2(fica / periods),
    perPeriodStateTax: round2(stateTax / periods),
    perPeriodNet: round2(annualNet / periods),
    effectiveTaxRate: round2(effectiveTaxRate),
  };
}
