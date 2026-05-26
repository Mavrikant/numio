import { z } from "zod";

export const inputSchema = z.object({
  mode: z.enum(["what_is_x_pct_of_y", "x_is_what_pct_of_y", "pct_change"]),
  x: z.number(),
  y: z.number(),
});

export type PercentageInputs = z.infer<typeof inputSchema>;

export interface PercentageResult extends Record<string, unknown> {
  result: number;
  absoluteDifference: number;
}

export function compute(inputs: PercentageInputs): PercentageResult {
  const { mode, x, y } = inputs;
  let result = 0;
  let absoluteDifference = 0;

  if (mode === "what_is_x_pct_of_y") {
    result = (x / 100) * y;
    absoluteDifference = result;
  } else if (mode === "x_is_what_pct_of_y") {
    if (y === 0) {
      result = 0;
    } else {
      result = (x / y) * 100;
    }
    absoluteDifference = x;
  } else if (mode === "pct_change") {
    absoluteDifference = y - x;
    if (x === 0) {
      result = 0;
    } else {
      result = ((y - x) / x) * 100;
    }
  }

  return {
    result: Math.round(result * 10000) / 10000,
    absoluteDifference: Math.round(absoluteDifference * 10000) / 10000,
  };
}
