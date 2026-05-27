import { z } from "zod";

export const inputSchema = z
  .object({
    homePrice: z.number().min(1000).max(100_000_000),
    downPaymentPercent: z
      .number()
      .min(0)
      .max(100)
      .optional(),
    downPaymentAmount: z
      .number()
      .min(0)
      .max(100_000_000)
      .optional(),
    annualRate: z.number().min(0).max(30),
    termYears: z.number().int().min(1).max(40),
    propertyTaxRate: z.number().min(0).max(10).default(0),
    insuranceRate: z.number().min(0).max(10).default(0),
    pmiRate: z.number().min(0).max(5).default(0.5),
  })
  .refine(
    (d) => d.downPaymentPercent !== undefined || d.downPaymentAmount !== undefined,
    {
      message: "Provide either downPaymentPercent or downPaymentAmount",
      path: ["downPaymentPercent"],
    },
  )
  .refine(
    (d) => {
      // If amount supplied (and percent not), it must not exceed home price.
      if (d.downPaymentPercent !== undefined) return true;
      if (d.downPaymentAmount === undefined) return true;
      return d.downPaymentAmount <= d.homePrice;
    },
    {
      message: "Down payment amount cannot exceed home price",
      path: ["downPaymentAmount"],
    },
  );

export type DownPaymentInputs = z.infer<typeof inputSchema>;

export interface DownPaymentResult extends Record<string, unknown> {
  readonly downPaymentAmount: number;
  readonly downPaymentPercent: number;
  readonly loanAmount: number;
  readonly monthlyPrincipalInterest: number;
  readonly monthlyTax: number;
  readonly monthlyInsurance: number;
  readonly monthlyPmi: number;
  readonly totalMonthlyPayment: number;
  readonly pmiRequired: 0 | 1;
  readonly loanToValue: number;
}

/**
 * Standard fixed-rate mortgage monthly payment (P&I).
 * M = P × [r(1+r)^n] / [(1+r)^n - 1]
 */
function monthlyPI(principal: number, annualRatePct: number, years: number): number {
  if (principal <= 0) return 0;
  const n = years * 12;
  const r = annualRatePct / 100 / 12;
  if (r === 0) return principal / n;
  const factor = Math.pow(1 + r, n);
  return (principal * (r * factor)) / (factor - 1);
}

/**
 * Compute down payment + monthly cost breakdown (P&I + tax + insurance + PMI).
 *
 * Rules:
 *  - If both downPaymentPercent and downPaymentAmount are supplied, % wins.
 *  - PMI is required when down payment is below 20% of home price.
 *  - PMI monthly = pmiRate% × loan amount / 12.
 */
export function compute(inputs: DownPaymentInputs): DownPaymentResult {
  const {
    homePrice,
    downPaymentPercent,
    downPaymentAmount,
    annualRate,
    termYears,
    propertyTaxRate,
    insuranceRate,
    pmiRate,
  } = inputs;

  // Resolve down payment: percent wins over amount.
  let dpAmount: number;
  let dpPercent: number;
  if (downPaymentPercent !== undefined) {
    dpPercent = downPaymentPercent;
    dpAmount = (downPaymentPercent / 100) * homePrice;
  } else {
    // amount is defined (schema guarantees one of the two).
    dpAmount = downPaymentAmount ?? 0;
    dpPercent = homePrice > 0 ? (dpAmount / homePrice) * 100 : 0;
  }

  // Clamp down payment so we never produce a negative loan.
  if (dpAmount > homePrice) {
    dpAmount = homePrice;
    dpPercent = 100;
  }

  const loanAmount = Math.max(0, homePrice - dpAmount);
  const monthlyPI_ = monthlyPI(loanAmount, annualRate, termYears);

  const monthlyTax = (propertyTaxRate / 100) * homePrice / 12;
  const monthlyInsurance = (insuranceRate / 100) * homePrice / 12;

  const pmiRequired: 0 | 1 = dpPercent < 20 && loanAmount > 0 ? 1 : 0;
  const monthlyPmi = pmiRequired === 1 ? (pmiRate / 100) * loanAmount / 12 : 0;

  const totalMonthlyPayment = monthlyPI_ + monthlyTax + monthlyInsurance + monthlyPmi;
  const loanToValue = homePrice > 0 ? (loanAmount / homePrice) * 100 : 0;

  const round = (n: number) => Math.round(n * 100) / 100;

  return {
    downPaymentAmount: round(dpAmount),
    downPaymentPercent: Math.round(dpPercent * 100) / 100,
    loanAmount: round(loanAmount),
    monthlyPrincipalInterest: round(monthlyPI_),
    monthlyTax: round(monthlyTax),
    monthlyInsurance: round(monthlyInsurance),
    monthlyPmi: round(monthlyPmi),
    totalMonthlyPayment: round(totalMonthlyPayment),
    pmiRequired,
    loanToValue: Math.round(loanToValue * 100) / 100,
  };
}
