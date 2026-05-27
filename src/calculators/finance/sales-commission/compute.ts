import { z } from "zod";

/** Sales commission plus optional base salary. */
export const inputSchema = z.object({
  saleAmount: z.number().min(0).max(1e12),
  commissionRate: z.number().min(0).max(100),
  baseSalary: z.number().min(0).max(1e12).default(0),
});

export type CommissionInputs = z.infer<typeof inputSchema>;

export interface CommissionResult extends Record<string, unknown> {
  readonly commission: number;
  readonly totalPay: number;
  readonly effectiveRate: number;
}

export function compute(inputs: CommissionInputs): CommissionResult {
  const commission = (inputs.saleAmount * inputs.commissionRate) / 100;
  const totalPay = commission + inputs.baseSalary;
  return {
    commission,
    totalPay,
    effectiveRate: inputs.saleAmount > 0 ? (totalPay / inputs.saleAmount) * 100 : 0,
  };
}
