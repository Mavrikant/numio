import { z } from "zod";

export const inputSchema = z
  .object({
    vehiclePrice: z.number().min(1000).max(500_000),
    downPayment: z.number().min(0),
    tradeInValue: z.number().min(0).default(0),
    annualRate: z.number().min(0).max(40),
    termMonths: z.number().int().min(12).max(96),
  })
  .refine((d) => d.downPayment + d.tradeInValue <= d.vehiclePrice, {
    path: ["downPayment"],
    message: "Down payment and trade-in value combined cannot exceed vehicle price",
  });

export type AutoLoanInputs = z.infer<typeof inputSchema>;

export interface AutoLoanResult extends Record<string, unknown> {
  readonly loanAmount: number;
  readonly monthlyPayment: number;
  readonly totalPayment: number;
  readonly totalInterest: number;
}

export function compute(inputs: AutoLoanInputs): AutoLoanResult {
  const loanAmount = inputs.vehiclePrice - inputs.downPayment - inputs.tradeInValue;
  const monthlyRate = inputs.annualRate / 100 / 12;
  const n = inputs.termMonths;

  let monthlyPayment: number;
  if (inputs.annualRate === 0 || loanAmount <= 0) {
    monthlyPayment = loanAmount <= 0 ? 0 : loanAmount / n;
  } else {
    const factor = Math.pow(1 + monthlyRate, n);
    monthlyPayment = (loanAmount * (monthlyRate * factor)) / (factor - 1);
  }

  const totalPayment = monthlyPayment * n;
  const totalInterest = totalPayment - Math.max(0, loanAmount);

  return {
    loanAmount: Math.round(loanAmount * 100) / 100,
    monthlyPayment: Math.round(monthlyPayment * 100) / 100,
    totalPayment: Math.round(totalPayment * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
  };
}
