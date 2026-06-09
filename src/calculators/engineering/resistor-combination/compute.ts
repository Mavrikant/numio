import { z } from "zod";

export const inputSchema = z.object({
  r1: z.number().min(0.000001).max(1_000_000_000),
  r2: z.number().min(0.000001).max(1_000_000_000),
});

export type ResistorCombinationInputs = z.infer<typeof inputSchema>;

export interface ResistorCombinationResult extends Record<string, unknown> {
  series: number;
  parallel: number;
}

export function compute(inputs: ResistorCombinationInputs): ResistorCombinationResult {
  const { r1, r2 } = inputs;

  // In series, resistances add: R = R₁ + R₂.
  const series = r1 + r2;

  // In parallel, the product-over-sum rule: R = (R₁·R₂) / (R₁ + R₂).
  // Both resistors are >= 1 µΩ (schema), so the denominator is never zero.
  const parallel = (r1 * r2) / (r1 + r2);

  return { series, parallel };
}
