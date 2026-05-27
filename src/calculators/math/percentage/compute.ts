import { z } from "zod";

export const inputSchema = z.object({
  mode: z.enum(["what_is_x_pct_of_y", "x_is_what_pct_of_y", "pct_change"]),
  x: z.number().finite(),
  y: z.number().finite(),
});

export type PercentageInputs = z.infer<typeof inputSchema>;

export interface PercentageResult extends Record<string, unknown> {
  readonly result: number;
  readonly resultFormatted: string;
  readonly explanation: string;
  readonly absoluteDifference: number;
}

/**
 * Unified percentage calculator supporting 3 problem types:
 * 1. "what_is_x_pct_of_y": X% of Y = (X / 100) * Y
 * 2. "x_is_what_pct_of_y": X is what % of Y = (X / Y) * 100
 * 3. "pct_change": ((Y - X) / X) * 100
 */
export function compute(inputs: PercentageInputs): PercentageResult {
  const { mode, x, y } = inputs;
  let result: number;
  let explanation: string;

  if (mode === "what_is_x_pct_of_y") {
    result = (x / 100) * y;
    explanation = `${x}% of ${y} = ${result}`;
  } else if (mode === "x_is_what_pct_of_y") {
    if (y === 0) {
      result = 0;
      explanation = "Cannot divide by zero";
    } else {
      result = (x / y) * 100;
      explanation = `${x} is ${result}% of ${y}`;
    }
  } else {
    // pct_change: x = old, y = new
    if (x === 0) {
      result = Infinity;
      explanation = "Cannot calculate percentage change from zero base";
    } else {
      result = ((y - x) / x) * 100;
      explanation = `Change from ${x} to ${y} = ${result}%`;
    }
  }

  const absoluteDifference = Math.abs(y - x);

  const resultFormatted = Number.isFinite(result)
    ? (Math.round(result * 10000) / 10000).toString()
    : result.toString();

  return {
    result,
    resultFormatted,
    explanation,
    absoluteDifference,
  };
}
