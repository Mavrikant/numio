import { z } from "zod";

/**
 * Waist-to-height ratio (WHtR) — a simple central-obesity indicator. A ratio
 * below 0.5 is the widely-used "keep your waist to less than half your height"
 * guideline.
 */
export const inputSchema = z.object({
  waist: z.number().positive().max(300),
  height: z.number().positive().max(260),
});

export type WhtrInputs = z.infer<typeof inputSchema>;

export interface WhtrResult extends Record<string, unknown> {
  readonly ratio: number;
  readonly percentOfHeight: number;
  readonly healthyWaistMax: number;
}

export function compute(inputs: WhtrInputs): WhtrResult {
  const ratio = inputs.waist / inputs.height;
  return {
    ratio,
    percentOfHeight: ratio * 100,
    healthyWaistMax: inputs.height * 0.5,
  };
}
