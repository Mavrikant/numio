import { z } from "zod";
import { mean, median, mode, range } from "../_helpers/statistics";

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
});

export type AverageInputs = z.infer<typeof inputSchema>;

export interface AverageResult extends Record<string, unknown> {
  readonly mean: number;
  readonly median: number;
  readonly mode: number;
  readonly count: number;
  readonly sum: number;
  readonly range: number;
}

const round4 = (x: number) => Math.round(x * 10000) / 10000;

export function compute(inputs: AverageInputs): AverageResult {
  const nums = inputs.values;

  const meanValue = mean(nums);
  const medianValue = median(nums);
  const modeValue = mode(nums);
  const rangeValue = range(nums);
  const sum = nums.reduce((acc, v) => acc + v, 0);

  return {
    mean: round4(meanValue),
    median: round4(medianValue),
    mode: modeValue !== null ? round4(modeValue) : round4(meanValue),
    count: nums.length,
    sum: round4(sum),
    range: round4(rangeValue),
  };
}
