import { z } from "zod";

/**
 * Percent error between a measured (experimental) value and an actual
 * (true/accepted) value: |measured − actual| / |actual| × 100.
 */
export const inputSchema = z.object({
  measured: z.number().min(-1e15).max(1e15),
  actual: z.number().refine((v) => v !== 0, "Actual value cannot be zero"),
});

export type PercentErrorInputs = z.infer<typeof inputSchema>;

export interface PercentErrorResult extends Record<string, unknown> {
  readonly percentError: number;
  readonly absoluteError: number;
  readonly relativeError: number;
}

export function compute(inputs: PercentErrorInputs): PercentErrorResult {
  const absoluteError = Math.abs(inputs.measured - inputs.actual);
  const relativeError = absoluteError / Math.abs(inputs.actual);
  return { percentError: relativeError * 100, absoluteError, relativeError };
}
