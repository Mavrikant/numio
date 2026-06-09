import { z } from "zod";

// Two ways people use a sales-tax calculator:
//   - "add":    you have a pre-tax price and want the tax + final total.
//   - "remove": you have a tax-inclusive total and want the original price.
export const SALES_TAX_MODES = ["add", "remove"] as const;

export const inputSchema = z.object({
  amount: z.number().min(0).max(1_000_000_000),
  taxRate: z.number().min(0).max(100),
  mode: z.enum(SALES_TAX_MODES).default("add"),
});

export type SalesTaxInputs = z.infer<typeof inputSchema>;

export interface SalesTaxResult extends Record<string, unknown> {
  preTaxAmount: number;
  taxAmount: number;
  totalAmount: number;
}

export function compute(inputs: SalesTaxInputs): SalesTaxResult {
  const { amount, taxRate, mode } = inputs;
  const rate = taxRate / 100;

  let preTaxAmount: number;
  let totalAmount: number;

  if (mode === "remove") {
    // `amount` is the tax-inclusive total; back out the original price.
    // Guard: taxRate >= 0 (schema) ⇒ 1 + rate >= 1, so never divides by zero.
    totalAmount = amount;
    preTaxAmount = amount / (1 + rate);
  } else {
    // `amount` is the pre-tax base; add tax on top.
    preTaxAmount = amount;
    totalAmount = amount * (1 + rate);
  }

  const taxAmount = totalAmount - preTaxAmount;

  return { preTaxAmount, taxAmount, totalAmount };
}
