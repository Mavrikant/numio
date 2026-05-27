import { z } from "zod";
import { standardDeviation, variance, mean } from "../_helpers/statistics";

export const inputSchema = z.object({
  values: z.string().transform((val) => {
    const nums = val.split(",").map((v) => {
      const n = parseFloat(v.trim());
      if (isNaN(n)) throw new Error(`Invalid number: ${v}`);
      return n;
    });
    if (nums.length === 0) throw new Error("At least one number required");
    return nums;
  }),
  type: z.enum(["population", "sample"]),
});

export type StandardDeviationInputs = z.infer<typeof inputSchema>;

export interface StandardDeviationResult extends Record<string, unknown> {
  readonly mean: number;
  readonly variance: number;
  readonly standardDeviation: number;
  readonly count: number;
}

export function compute(inputs: StandardDeviationInputs): StandardDeviationResult {
  const isSample = inputs.type === "sample";
  const meanValue = mean(inputs.values);
  const varianceValue = variance(inputs.values, isSample);
  const stdDevValue = standardDeviation(inputs.values, isSample);

  return {
    mean: Math.round(meanValue * 10000) / 10000,
    variance: Math.round(varianceValue * 10000) / 10000,
    standardDeviation: Math.round(stdDevValue * 10000) / 10000,
    count: inputs.values.length,
  };
}
