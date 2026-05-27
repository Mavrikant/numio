import { z } from "zod";

export const inputSchema = z
  .object({
    annualIncome: z.number().min(1).max(100_000_000),
    monthlyDebts: z.number().min(0).max(1_000_000).default(0),
    downPayment: z.number().min(0).max(100_000_000).default(0),
    annualRate: z.number().min(0).max(30),
    termYears: z.number().int().min(1).max(40).default(30),
    propertyTaxRate: z.number().min(0).max(10).default(1.2),
    insuranceRate: z.number().min(0).max(5).default(0.35),
  })
  .superRefine((data, ctx) => {
    if (data.annualIncome <= 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["annualIncome"],
        message: "Annual income must be positive.",
      });
    }
  });

export type HomeAffordabilityInputs = z.infer<typeof inputSchema>;

export type AffordabilityCategory =
  | "stretched"
  | "tight"
  | "comfortable"
  | "very_comfortable";

export interface HomeAffordabilityResult extends Record<string, unknown> {
  readonly maxHomePrice: number;
  readonly maxLoanAmount: number;
  readonly monthlyPaymentAtMax: number;
  readonly monthlyPiti: number;
  readonly monthlyPi: number;
  readonly monthlyTax: number;
  readonly monthlyInsurance: number;
  readonly frontEndDti: number;
  readonly backEndDti: number;
  readonly bindingRule: "front" | "back";
  readonly affordabilityCategory: AffordabilityCategory;
}

const FRONT_END_LIMIT = 0.28;
const BACK_END_LIMIT = 0.36;

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

/**
 * Monthly principal-and-interest factor per $1 of loan.
 * P&I = loan × factor.  Closed-form annuity.
 */
function monthlyPiFactor(annualRate: number, termYears: number): number {
  const n = termYears * 12;
  const r = annualRate / 100 / 12;
  if (r === 0) return 1 / n;
  const f = Math.pow(1 + r, n);
  return (r * f) / (f - 1);
}

function categorize(backEndDti: number): AffordabilityCategory {
  if (backEndDti > 0.42) return "stretched";
  if (backEndDti > 0.36) return "tight";
  if (backEndDti > 0.28) return "comfortable";
  return "very_comfortable";
}

export function compute(inputs: HomeAffordabilityInputs): HomeAffordabilityResult {
  const {
    annualIncome,
    monthlyDebts,
    downPayment,
    annualRate,
    termYears,
    propertyTaxRate,
    insuranceRate,
  } = inputs;

  const monthlyIncome = annualIncome / 12;

  // 28/36 rule (Ref: Fannie Mae underwriting / CFPB Ability-to-Repay).
  // Front-end: housing PITI ≤ 28% of gross monthly income.
  // Back-end:  housing PITI + other debts ≤ 36% of gross monthly income.
  const frontEndMaxPiti = monthlyIncome * FRONT_END_LIMIT;
  const backEndMaxPiti = Math.max(0, monthlyIncome * BACK_END_LIMIT - monthlyDebts);
  const maxPiti = Math.min(frontEndMaxPiti, backEndMaxPiti);
  const bindingRule: "front" | "back" =
    backEndMaxPiti <= frontEndMaxPiti ? "back" : "front";

  // Solve for home price H such that:
  //   PITI(H) = (H − DP) × piFactor + H × (taxRate + insRate) / 12 = maxPiti
  // H × [piFactor + monthlyTI] − DP × piFactor = maxPiti
  // H = (maxPiti + DP × piFactor) / (piFactor + monthlyTI)
  const piFactor = monthlyPiFactor(annualRate, termYears);
  const monthlyTI = (propertyTaxRate / 100 + insuranceRate / 100) / 12;

  let maxHomePrice = 0;
  if (piFactor + monthlyTI > 0 && maxPiti > 0) {
    maxHomePrice = (maxPiti + downPayment * piFactor) / (piFactor + monthlyTI);
  }
  // Affordability can't go below the down payment (no negative loan).
  if (maxHomePrice < downPayment) maxHomePrice = downPayment;

  const maxLoanAmount = Math.max(0, maxHomePrice - downPayment);
  const monthlyPi = maxLoanAmount * piFactor;
  const monthlyTax = (maxHomePrice * (propertyTaxRate / 100)) / 12;
  const monthlyInsurance = (maxHomePrice * (insuranceRate / 100)) / 12;
  const monthlyPiti = monthlyPi + monthlyTax + monthlyInsurance;

  const frontEndDti = monthlyIncome > 0 ? monthlyPiti / monthlyIncome : 0;
  const backEndDti =
    monthlyIncome > 0 ? (monthlyPiti + monthlyDebts) / monthlyIncome : 0;

  return {
    maxHomePrice: round2(maxHomePrice),
    maxLoanAmount: round2(maxLoanAmount),
    monthlyPaymentAtMax: round2(monthlyPiti),
    monthlyPiti: round2(monthlyPiti),
    monthlyPi: round2(monthlyPi),
    monthlyTax: round2(monthlyTax),
    monthlyInsurance: round2(monthlyInsurance),
    frontEndDti: round2(frontEndDti * 100),
    backEndDti: round2(backEndDti * 100),
    bindingRule,
    affordabilityCategory: categorize(backEndDti),
  };
}
