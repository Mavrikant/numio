import { z } from "zod";

/**
 * Daily protein target from body weight and activity level, using common
 * g-per-kg ranges. Returns a midpoint plus the low/high of the range and a
 * per-meal figure (assuming 4 meals).
 */
export const inputSchema = z.object({
  weight: z.number().positive().max(500),
  activity: z.enum(["sedentary", "active", "athlete"]).default("active"),
});

export type ProteinInputs = z.infer<typeof inputSchema>;

export interface ProteinResult extends Record<string, unknown> {
  readonly proteinGrams: number;
  readonly proteinLow: number;
  readonly proteinHigh: number;
  readonly perMeal: number;
}

const RANGES: Record<ProteinInputs["activity"], [number, number]> = {
  sedentary: [0.8, 1.0],
  active: [1.2, 1.6],
  athlete: [1.6, 2.2],
};

export function compute(inputs: ProteinInputs): ProteinResult {
  const [lo, hi] = RANGES[inputs.activity];
  const proteinLow = inputs.weight * lo;
  const proteinHigh = inputs.weight * hi;
  const proteinGrams = (proteinLow + proteinHigh) / 2;
  return { proteinGrams, proteinLow, proteinHigh, perMeal: proteinGrams / 4 };
}
