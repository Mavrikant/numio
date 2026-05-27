import { z } from "zod";

/**
 * Rule of 72 — quick estimate of how long an investment takes to double at a
 * fixed annual rate. The 72, 70 and 69.3 variants trade simplicity for
 * accuracy (69.3 is the exact continuous-compounding constant, ln 2 × 100).
 */
export const inputSchema = z.object({
  rate: z.number().positive().max(100),
});

export type Rule72Inputs = z.infer<typeof inputSchema>;

export interface Rule72Result extends Record<string, unknown> {
  readonly years72: number;
  readonly years70: number;
  readonly years69: number;
  readonly exactYears: number;
}

export function compute(inputs: Rule72Inputs): Rule72Result {
  const r = inputs.rate;
  return {
    years72: 72 / r,
    years70: 70 / r,
    years69: 69.3 / r,
    exactYears: Math.log(2) / Math.log(1 + r / 100),
  };
}
