import { z } from "zod";

/**
 * Present value of a future lump sum: PV = FV / (1 + r)^n.
 * What a future amount is worth today given a discount rate.
 */
export const inputSchema = z.object({
  futureValue: z.number().positive().max(1e12),
  rate: z.number().min(0).max(100),
  periods: z.number().positive().max(1000),
});

export type PresentValueInputs = z.infer<typeof inputSchema>;

export interface PresentValueResult extends Record<string, unknown> {
  readonly presentValue: number;
  readonly totalDiscount: number;
  readonly discountFactor: number;
}

export function compute(inputs: PresentValueInputs): PresentValueResult {
  const factor = Math.pow(1 + inputs.rate / 100, inputs.periods);
  const presentValue = inputs.futureValue / factor;
  return {
    presentValue,
    totalDiscount: inputs.futureValue - presentValue,
    discountFactor: 1 / factor,
  };
}
