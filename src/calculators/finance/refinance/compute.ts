import { z } from "zod";

export const inputSchema = z.object({
  currentBalance: z.number().min(1).max(2_000_000),
  currentAPR: z.number().min(0).max(20),
  currentRemainingYears: z.number().int().min(1).max(30),
  newAPR: z.number().min(0).max(20),
  newTermYears: z.number().int().min(5).max(30).default(30),
  closingCosts: z.number().min(0).max(50_000).default(3000),
});

export type RefinanceInputs = z.infer<typeof inputSchema>;

export interface RefinanceResult extends Record<string, unknown> {
  readonly currentMonthlyPayment: number;
  readonly newMonthlyPayment: number;
  readonly monthlySavings: number;
  readonly breakEvenMonths: number;
  readonly lifetimeInterestSaved: number;
  readonly isWorthRefinancing: boolean;
}

function monthlyPayment(principal: number, apr: number, years: number): number {
  const r = apr / 12 / 100;
  const n = years * 12;
  if (r === 0) return principal / n;
  const factor = Math.pow(1 + r, n);
  return (principal * r * factor) / (factor - 1);
}

export function compute(inputs: RefinanceInputs): RefinanceResult {
  const {
    currentBalance,
    currentAPR,
    currentRemainingYears,
    newAPR,
    newTermYears,
    closingCosts,
  } = inputs;

  const currentMonthlyPayment = monthlyPayment(currentBalance, currentAPR, currentRemainingYears);
  const newMonthlyPayment = monthlyPayment(currentBalance, newAPR, newTermYears);
  const monthlySavings = currentMonthlyPayment - newMonthlyPayment;

  // Break-even months = closingCosts / monthlySavings
  // If no savings (or negative savings), break-even is infinite (represented as 9999)
  let breakEvenMonths: number;
  if (monthlySavings <= 0) {
    breakEvenMonths = 9999;
  } else {
    breakEvenMonths = Math.ceil(closingCosts / monthlySavings);
  }

  // Lifetime interest saved = (current total payments - new total payments) - closingCosts
  const remainingMonths = currentRemainingYears * 12;
  const currentTotalPayments = currentMonthlyPayment * remainingMonths;
  const newTotalPayments = newMonthlyPayment * (newTermYears * 12);
  const lifetimeInterestSaved = currentTotalPayments - newTotalPayments - closingCosts;

  // Worth refinancing if break-even is before the end of remaining term
  const isWorthRefinancing = breakEvenMonths < remainingMonths && monthlySavings > 0;

  return {
    currentMonthlyPayment: Math.round(currentMonthlyPayment * 100) / 100,
    newMonthlyPayment: Math.round(newMonthlyPayment * 100) / 100,
    monthlySavings: Math.round(monthlySavings * 100) / 100,
    breakEvenMonths,
    lifetimeInterestSaved: Math.round(lifetimeInterestSaved * 100) / 100,
    isWorthRefinancing,
  };
}
