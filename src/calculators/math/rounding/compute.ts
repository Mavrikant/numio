import { z } from "zod";

/** Round a number to a chosen number of decimal places, four ways. */
export const inputSchema = z.object({
  value: z.number().min(-1e15).max(1e15),
  decimals: z.number().int().min(0).max(15).default(0),
});

export type RoundingInputs = z.infer<typeof inputSchema>;

export interface RoundingResult extends Record<string, unknown> {
  readonly rounded: number;
  readonly roundedUp: number;
  readonly roundedDown: number;
  readonly truncated: number;
}

export function compute(inputs: RoundingInputs): RoundingResult {
  const f = Math.pow(10, inputs.decimals);
  const v = inputs.value * f;
  return {
    rounded: Math.round(v) / f,
    roundedUp: Math.ceil(v) / f,
    roundedDown: Math.floor(v) / f,
    truncated: Math.trunc(v) / f,
  };
}
