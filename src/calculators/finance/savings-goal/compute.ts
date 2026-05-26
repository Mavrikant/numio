import { z } from "zod";

export const inputSchema = z
  .object({
    targetAmount: z.number().positive(),
    currentSavings: z.number().min(0),
    monthlyContribution: z.number().positive(),
    annualReturn: z.number().min(0).max(100).default(5),
  })
  .superRefine((data, ctx) => {
    if (data.targetAmount <= 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["targetAmount"],
        message: "Target amount must be greater than zero.",
      });
    }
    if (data.monthlyContribution <= 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["monthlyContribution"],
        message: "Monthly contribution must be greater than zero.",
      });
    }
  });

export type SavingsGoalInputs = z.infer<typeof inputSchema>;

export interface SavingsGoalResult extends Record<string, unknown> {
  readonly monthsToGoal: number;
  readonly yearsToGoal: number;
  readonly totalContributions: number;
  readonly totalInterest: number;
}

const MAX_MONTHS = 1200; // 100 years

export function compute(inputs: SavingsGoalInputs): SavingsGoalResult {
  const { targetAmount, currentSavings, monthlyContribution, annualReturn } =
    inputs;

  // Already at or past goal
  if (currentSavings >= targetAmount) {
    return {
      monthsToGoal: 0,
      yearsToGoal: 0,
      totalContributions: 0,
      totalInterest: 0,
    };
  }

  const r = annualReturn / 100 / 12; // monthly interest rate

  let balance = currentSavings;
  let months = 0;

  if (r === 0) {
    // No interest — linear calculation
    const remaining = targetAmount - currentSavings;
    months = Math.ceil(remaining / monthlyContribution);
    if (months > MAX_MONTHS) months = MAX_MONTHS;
    const totalContributions = currentSavings + months * monthlyContribution;
    return {
      monthsToGoal: months,
      yearsToGoal: Math.round((months / 12) * 100) / 100,
      totalContributions: Math.round(totalContributions * 100) / 100,
      totalInterest: 0,
    };
  }

  // Iterative compound growth
  while (balance < targetAmount && months < MAX_MONTHS) {
    balance = balance * (1 + r) + monthlyContribution;
    months++;
  }

  const totalContributions = currentSavings + months * monthlyContribution;
  const totalInterest = Math.max(
    0,
    Math.min(balance, targetAmount) - totalContributions,
  );

  return {
    monthsToGoal: months,
    yearsToGoal: Math.round((months / 12) * 100) / 100,
    totalContributions: Math.round(totalContributions * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
  };
}
