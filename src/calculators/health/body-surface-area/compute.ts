import { z } from "zod";

/**
 * Body surface area (BSA) in m² from weight (kg) and height (cm), using three
 * standard formulas. BSA is widely used for drug dosing and physiology.
 */
export const inputSchema = z.object({
  weight: z.number().positive().max(500),
  height: z.number().positive().max(260),
});

export type BsaInputs = z.infer<typeof inputSchema>;

export interface BsaResult extends Record<string, unknown> {
  readonly mosteller: number;
  readonly duBois: number;
  readonly haycock: number;
}

export function compute(inputs: BsaInputs): BsaResult {
  const { weight: w, height: h } = inputs;
  return {
    mosteller: Math.sqrt((h * w) / 3600),
    duBois: 0.007184 * Math.pow(h, 0.725) * Math.pow(w, 0.425),
    haycock: 0.024265 * Math.pow(h, 0.3964) * Math.pow(w, 0.5378),
  };
}
