import { z } from "zod";

export const inputSchema = z
  .object({
    loanAmount: z.number().min(1000).max(10_000_000),
    annualRate: z.number().min(0).max(30),
    termYears: z.number().int().min(1).max(30),
    downPayment: z.number().min(0).default(0),
  })
  .refine((d) => d.downPayment <= d.loanAmount, {
    path: ["downPayment"],
    message: "Down payment cannot exceed loan amount",
  });

export type MortgageInputs = z.infer<typeof inputSchema>;

export interface AmortizationRow {
  readonly month: number;
  readonly payment: number;
  readonly principal: number;
  readonly interest: number;
  readonly balance: number;
}

export interface MortgageResult extends Record<string, unknown> {
  readonly monthlyPayment: number;
  readonly totalPayment: number;
  readonly totalInterest: number;
  readonly principalAmount: number;
  readonly amortizationSchedule: AmortizationRow[];
}

export function compute(inputs: MortgageInputs): MortgageResult {
  const principal = inputs.loanAmount - inputs.downPayment;
  const n = inputs.termYears * 12;
  const monthlyRate = inputs.annualRate / 100 / 12;

  let monthlyPayment: number;
  if (inputs.annualRate === 0) {
    monthlyPayment = principal / n;
  } else {
    const factor = Math.pow(1 + monthlyRate, n);
    monthlyPayment = (principal * (monthlyRate * factor)) / (factor - 1);
  }

  const totalPayment = monthlyPayment * n;
  const totalInterest = totalPayment - principal;

  const amortizationSchedule: AmortizationRow[] = [];
  let balance = principal;
  const limit = Math.min(n, 360);

  for (let month = 1; month <= limit; month++) {
    const interestPart = balance * monthlyRate;
    const principalPart = monthlyPayment - interestPart;
    const newBalance = Math.max(0, balance - principalPart);
    amortizationSchedule.push({
      month,
      payment: Math.round(monthlyPayment * 100) / 100,
      principal: Math.round(principalPart * 100) / 100,
      interest: Math.round(interestPart * 100) / 100,
      balance: Math.round(newBalance * 100) / 100,
    });
    balance = newBalance;
  }

  return {
    monthlyPayment: Math.round(monthlyPayment * 100) / 100,
    totalPayment: Math.round(totalPayment * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    principalAmount: Math.round(principal * 100) / 100,
    amortizationSchedule,
  };
}
