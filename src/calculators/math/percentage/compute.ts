import { z } from "zod";

export const inputSchema = z.object({
  problemType: z.enum(["percentage-of", "what-percentage", "percentage-change"]),
  value1: z.number().finite(),
  value2: z.number().finite(),
});

export type PercentageInputs = z.infer<typeof inputSchema>;

export interface PercentageResult extends Record<string, unknown> {
  readonly result: number;
  readonly resultFormatted: string;
  readonly explanation: string;
}

/**
 * Unified percentage calculator supporting 3 problem types:
 * 1. "percentage-of": X% of Y = (X / 100) * Y
 * 2. "what-percentage": X is what % of Y = (X / Y) * 100
 * 3. "percentage-change": (new - old) / old * 100
 */
export function compute(inputs: PercentageInputs): PercentageResult {
  const { problemType, value1, value2 } = inputs;
  let result: number;
  let explanation: string;

  if (problemType === "percentage-of") {
    // value1 = percentage, value2 = base
    result = (value1 / 100) * value2;
    explanation = `${value1}% of ${value2} = ${result}`;
  } else if (problemType === "what-percentage") {
    // value1 = part, value2 = whole
    if (value2 === 0) {
      result = 0;
      explanation = "Cannot divide by zero";
    } else {
      result = (value1 / value2) * 100;
      explanation = `${value1} is ${result}% of ${value2}`;
    }
  } else {
    // percentage-change: value1 = old, value2 = new
    if (value1 === 0) {
      result = value2 === 0 ? 0 : Infinity;
      explanation = "Cannot calculate percentage change from zero base";
    } else {
      result = ((value2 - value1) / value1) * 100;
      explanation = `Change from ${value1} to ${value2} = ${result}%`;
    }
  }

  // Format result with 2 decimal places
  const resultFormatted = isFinite(result)
    ? Math.round(result * 100) / 100
    : result.toString();

  return {
    result: resultFormatted as number,
    resultFormatted:
      typeof resultFormatted === "number"
        ? resultFormatted.toFixed(2)
        : resultFormatted,
    explanation,
  };
}
