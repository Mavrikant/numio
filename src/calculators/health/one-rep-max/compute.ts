import { z } from "zod";

/**
 * Estimate one-rep max (1RM) from a weight lifted for a number of reps.
 *   Epley:   1RM = w · (1 + reps/30)
 *   Brzycki: 1RM = w · 36 / (37 − reps)
 * Estimates diverge above ~10 reps; use lower-rep sets for accuracy.
 */
export const inputSchema = z.object({
  weight: z.number().positive().max(2000),
  reps: z.number().int().min(1).max(30),
});

export type OneRepMaxInputs = z.infer<typeof inputSchema>;

export interface OneRepMaxResult extends Record<string, unknown> {
  readonly epley: number;
  readonly brzycki: number;
  readonly average: number;
  readonly weightAt90: number;
  readonly weightAt80: number;
}

export function compute(inputs: OneRepMaxInputs): OneRepMaxResult {
  const { weight, reps } = inputs;
  const epley = reps === 1 ? weight : weight * (1 + reps / 30);
  const brzycki = (weight * 36) / (37 - reps);
  const average = (epley + brzycki) / 2;
  return {
    epley,
    brzycki,
    average,
    weightAt90: average * 0.9,
    weightAt80: average * 0.8,
  };
}
