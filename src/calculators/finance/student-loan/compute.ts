import { z } from "zod";

export const inputSchema = z.object({
  balance: z.number().min(100).max(500_000),
  apr: z.number().min(0).max(30),
  loanTerm: z.number().int().min(1).max(30),
  graceMonths: z.number().int().min(0).max(12).default(6),
  extraMonthlyPayment: z.number().min(0).default(0),
});

export type StudentLoanInputs = z.infer<typeof inputSchema>;

export interface StudentLoanResult extends Record<string, unknown> {
  readonly monthlyPayment: number;
  readonly totalPaid: number;
  readonly totalInterest: number;
  readonly balanceAfterGrace: number;
  readonly monthsToPayoff: number;
  readonly interestSavedByExtra: number;
}

export function compute(inputs: StudentLoanInputs): StudentLoanResult {
  const { balance, apr, loanTerm, graceMonths, extraMonthlyPayment } = inputs;

  const monthlyRate = apr / 12 / 100;
  const n = loanTerm * 12;

  // Balance after grace period: interest accrues, no payments
  // newBalance = P × (1 + r)^graceMonths
  let balanceAfterGrace: number;
  if (monthlyRate === 0) {
    balanceAfterGrace = balance;
  } else {
    balanceAfterGrace = balance * Math.pow(1 + monthlyRate, graceMonths);
  }

  // Standard amortization payment on balance after grace
  // M = P × [r(1+r)^n] / [(1+r)^n - 1]
  let monthlyPayment: number;
  if (monthlyRate === 0) {
    monthlyPayment = balanceAfterGrace / n;
  } else {
    const factor = Math.pow(1 + monthlyRate, n);
    monthlyPayment = (balanceAfterGrace * monthlyRate * factor) / (factor - 1);
  }

  const totalPaid = monthlyPayment * n;
  const totalInterest = totalPaid - balanceAfterGrace;

  // Simulate payoff with extra payment (month-by-month, cap at loanTerm×12)
  let monthsToPayoff: number;
  let totalPaidWithExtra: number;
  if (extraMonthlyPayment <= 0) {
    monthsToPayoff = n;
    totalPaidWithExtra = totalPaid;
  } else {
    let remaining = balanceAfterGrace;
    let months = 0;
    let paidWithExtra = 0;
    const maxMonths = n;
    while (remaining > 0.005 && months < maxMonths) {
      const interestCharge = remaining * monthlyRate;
      const principalPayment = monthlyPayment + extraMonthlyPayment - interestCharge;
      if (principalPayment <= 0) {
        // Extra payment doesn't cover interest — treat as standard
        months = maxMonths;
        paidWithExtra = totalPaid;
        break;
      }
      remaining -= principalPayment;
      if (remaining < 0) remaining = 0;
      paidWithExtra += monthlyPayment + extraMonthlyPayment;
      months++;
    }
    monthsToPayoff = months;
    totalPaidWithExtra = paidWithExtra;
  }

  const interestSavedByExtra =
    extraMonthlyPayment > 0
      ? Math.max(0, totalPaid - totalPaidWithExtra)
      : 0;

  return {
    monthlyPayment: Math.round(monthlyPayment * 100) / 100,
    totalPaid: Math.round(totalPaid * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    balanceAfterGrace: Math.round(balanceAfterGrace * 100) / 100,
    monthsToPayoff,
    interestSavedByExtra: Math.round(interestSavedByExtra * 100) / 100,
  };
}
