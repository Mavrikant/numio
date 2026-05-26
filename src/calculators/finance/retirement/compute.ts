import { z } from "zod";

export const inputSchema = z
  .object({
    currentAge: z.number().int().min(18).max(80),
    retirementAge: z.number().int().min(45).max(90),
    currentSavings: z.number().min(0),
    monthlyContribution: z.number().min(0),
    annualReturn: z.number().min(0).max(20),
    withdrawalRate: z.number().min(1).max(10),
  })
  .superRefine((data, ctx) => {
    if (data.retirementAge <= data.currentAge) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["retirementAge"],
        message: "Retirement age must be greater than current age",
      });
    }
  });

export type RetirementInputs = z.infer<typeof inputSchema>;

export interface RetirementResult extends Record<string, unknown> {
  readonly totalAtRetirement: number;
  readonly monthlyIncome: number;
  readonly yearsOfIncome: number;
  readonly totalContributions: number;
  readonly totalInterest: number;
}

/**
 * Retirement Savings Calculation:
 *
 * 1. Future Value of current savings:
 *    FV_savings = PV × (1 + r)^n
 *
 * 2. Future Value of monthly contributions (ordinary annuity):
 *    FV_annuity = PMT × [(1 + r)^n - 1] / r
 *    where r = monthly rate = annualReturn / 12 / 100
 *    and n = number of months until retirement
 *
 * 3. Total at retirement:
 *    totalAtRetirement = FV_savings + FV_annuity
 *
 * 4. Monthly income using withdrawal rate (e.g., 4% rule):
 *    monthlyIncome = totalAtRetirement × (withdrawalRate / 100) / 12
 *
 * 5. Years until depleted (annuity formula, finite):
 *    yearsUntilDeplete = -ln(1 - totalAtRetirement × r_monthly / monthlyWithdrawal) / (12 × ln(1 + r_monthly))
 *    If monthlyWithdrawal <= 0 or totalAtRetirement × r_monthly >= monthlyWithdrawal → indefinite (999)
 *
 * References:
 * - Vanguard Retirement Planning: https://investor.vanguard.com/tools-calculators/retirement-income-calculator
 * - Bengen, W.P. (1994). Determining Withdrawal Rates Using Historical Data. JFPA.
 */
export function compute(inputs: RetirementInputs): RetirementResult {
  const {
    currentAge,
    retirementAge,
    currentSavings,
    monthlyContribution,
    annualReturn,
    withdrawalRate,
  } = inputs;

  const yearsToRetirement = retirementAge - currentAge;
  const monthsToRetirement = yearsToRetirement * 12;

  // Monthly interest rate
  const monthlyRate = annualReturn / 100 / 12;

  // FV of current savings: PV × (1 + r)^n
  const fvSavings = currentSavings * Math.pow(1 + monthlyRate, monthsToRetirement);

  // FV of monthly contributions (ordinary annuity)
  let fvAnnuity: number;
  if (monthlyRate === 0) {
    // No return — simple sum
    fvAnnuity = monthlyContribution * monthsToRetirement;
  } else {
    fvAnnuity =
      monthlyContribution * (Math.pow(1 + monthlyRate, monthsToRetirement) - 1) / monthlyRate;
  }

  const totalAtRetirement = fvSavings + fvAnnuity;

  // Monthly income based on withdrawal rate (annualized)
  const monthlyIncome = (totalAtRetirement * (withdrawalRate / 100)) / 12;

  // Total contributions (excluding growth)
  const totalContributions = currentSavings + monthlyContribution * monthsToRetirement;

  // Total interest earned
  const totalInterest = Math.max(0, totalAtRetirement - totalContributions);

  // Years of income (time to deplete the portfolio):
  // Uses the present value of annuity formula solved for n:
  // n_months = -ln(1 - balance * r / pmt) / ln(1 + r)
  let yearsOfIncome: number;
  if (monthlyIncome <= 0 || totalAtRetirement <= 0) {
    yearsOfIncome = 0;
  } else if (monthlyRate === 0) {
    // No return — simple division
    yearsOfIncome = totalAtRetirement / monthlyIncome / 12;
  } else {
    const ratio = (totalAtRetirement * monthlyRate) / monthlyIncome;
    if (ratio >= 1) {
      // Portfolio never depletes (withdrawals covered by growth alone)
      yearsOfIncome = 999;
    } else {
      const nMonths = -Math.log(1 - ratio) / Math.log(1 + monthlyRate);
      yearsOfIncome = nMonths / 12;
    }
  }

  return {
    totalAtRetirement: Math.round(totalAtRetirement * 100) / 100,
    monthlyIncome: Math.round(monthlyIncome * 100) / 100,
    yearsOfIncome: Math.round(yearsOfIncome * 10) / 10,
    totalContributions: Math.round(totalContributions * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
  };
}
