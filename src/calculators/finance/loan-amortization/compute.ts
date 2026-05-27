import { z } from "zod";

export const inputSchema = z.object({
  principal: z.number().min(100).max(10_000_000),
  annualRate: z.number().min(0).max(50),
  termMonths: z.number().int().min(1).max(600),
  startDate: z.string().optional(),
});

export type LoanAmortizationInputs = z.infer<typeof inputSchema>;

export interface AmortizationRow extends Record<string, unknown> {
  readonly month: number;
  readonly date?: string;
  readonly payment: number;
  readonly principal: number;
  readonly interest: number;
  readonly balance: number;
}

export interface LoanAmortizationResult extends Record<string, unknown> {
  readonly monthlyPayment: number;
  readonly totalPayment: number;
  readonly totalInterest: number;
  readonly amortizationSchedule: AmortizationRow[];
}

// Parse a YYYY-MM-DD date string purely numerically — no Date.now() dependency
function addMonthsToDate(dateStr: string, months: number): string {
  const [yearStr, monthStr] = dateStr.split("-");
  let year = parseInt(yearStr, 10);
  let month = parseInt(monthStr, 10) - 1 + months; // 0-based
  year += Math.floor(month / 12);
  month = month % 12;
  const mm = String(month + 1).padStart(2, "0");
  return `${year}-${mm}-01`;
}

export function compute(inputs: LoanAmortizationInputs): LoanAmortizationResult {
  const { principal, annualRate, termMonths } = inputs;
  const monthlyRate = annualRate / 100 / 12;

  let monthlyPayment: number;
  if (annualRate === 0) {
    monthlyPayment = principal / termMonths;
  } else {
    const factor = Math.pow(1 + monthlyRate, termMonths);
    monthlyPayment = (principal * (monthlyRate * factor)) / (factor - 1);
  }

  const totalPayment = monthlyPayment * termMonths;
  const totalInterest = totalPayment - principal;

  const amortizationSchedule: AmortizationRow[] = [];
  let balance = principal;

  for (let month = 1; month <= termMonths; month++) {
    const interestPart = balance * monthlyRate;
    const principalPart = monthlyPayment - interestPart;
    const newBalance = Math.max(0, balance - principalPart);

    const row: AmortizationRow = {
      month,
      payment: Math.round(monthlyPayment * 100) / 100,
      principal: Math.round(principalPart * 100) / 100,
      interest: Math.round(interestPart * 100) / 100,
      balance: Math.round(newBalance * 100) / 100,
    };

    if (inputs.startDate) {
      (row as Record<string, unknown>)["date"] = addMonthsToDate(inputs.startDate, month - 1);
    }

    amortizationSchedule.push(row);
    balance = newBalance;
  }

  return {
    monthlyPayment: Math.round(monthlyPayment * 100) / 100,
    totalPayment: Math.round(totalPayment * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    amortizationSchedule,
  };
}
