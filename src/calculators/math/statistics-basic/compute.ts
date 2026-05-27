import { z } from "zod";
import {
  mean,
  median,
  mode,
  range,
  minMax,
  quartiles,
  variance,
  standardDeviation,
} from "../_helpers/statistics";

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

export type StatisticsBasicInputs = z.infer<typeof inputSchema>;

export interface StatisticsBasicResult extends Record<string, unknown> {
  readonly count: number;
  readonly min: number;
  readonly max: number;
  readonly range: number;
  readonly mean: number;
  readonly median: number;
  readonly mode: number | string;
  readonly q1: number;
  readonly q3: number;
  readonly iqr: number;
  readonly variance: number;
  readonly stdDev: number;
}

export function compute(inputs: StatisticsBasicInputs): StatisticsBasicResult {
  const { min, max } = minMax(inputs.values);
  const meanValue = mean(inputs.values);
  const medianValue = median(inputs.values);
  const modeValue = mode(inputs.values);
  const rangeValue = range(inputs.values);
  const { q1, q3 } = quartiles(inputs.values);
  const iqr = q3 - q1;
  const varValue = variance(inputs.values, false);
  const stdDevValue = standardDeviation(inputs.values, false);

  return {
    count: inputs.values.length,
    min: Math.round(min * 10000) / 10000,
    max: Math.round(max * 10000) / 10000,
    range: Math.round(rangeValue * 10000) / 10000,
    mean: Math.round(meanValue * 10000) / 10000,
    median: Math.round(medianValue * 10000) / 10000,
    mode: modeValue !== null ? (Math.round(modeValue * 10000) / 10000).toString() : "No unique mode",
    q1: Math.round(q1 * 10000) / 10000,
    q3: Math.round(q3 * 10000) / 10000,
    iqr: Math.round(iqr * 10000) / 10000,
    variance: Math.round(varValue * 10000) / 10000,
    stdDev: Math.round(stdDevValue * 10000) / 10000,
  };
}
