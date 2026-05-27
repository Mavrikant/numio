import { z } from "zod";

/**
 * Compare two products by unit price (price ÷ quantity) and show how much
 * cheaper the better-value option is.
 */
export const inputSchema = z.object({
  priceA: z.number().positive().max(1e9),
  quantityA: z.number().positive().max(1e9),
  priceB: z.number().positive().max(1e9),
  quantityB: z.number().positive().max(1e9),
});

export type UnitPriceInputs = z.infer<typeof inputSchema>;

export interface UnitPriceResult extends Record<string, unknown> {
  readonly unitPriceA: number;
  readonly unitPriceB: number;
  readonly savingsPercent: number;
}

export function compute(inputs: UnitPriceInputs): UnitPriceResult {
  const unitPriceA = inputs.priceA / inputs.quantityA;
  const unitPriceB = inputs.priceB / inputs.quantityB;
  const hi = Math.max(unitPriceA, unitPriceB);
  const lo = Math.min(unitPriceA, unitPriceB);
  return {
    unitPriceA,
    unitPriceB,
    savingsPercent: hi > 0 ? ((hi - lo) / hi) * 100 : 0,
  };
}
