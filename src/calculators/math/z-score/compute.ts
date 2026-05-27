import { z } from "zod";
import { zScore, normalCDF, percentileFromZ } from "../_helpers/statistics";

export const inputSchema = z.object({
  value: z.number(),
  mean: z.number(),
  standardDeviation: z.number().min(0),
});

export type ZScoreInputs = z.infer<typeof inputSchema>;

export interface ZScoreResult extends Record<string, unknown> {
  readonly zScore: number;
  readonly percentile: number;
  readonly oneTailPValue: number;
  readonly twoTailPValue: number;
  readonly interpretation: string;
}

export function compute(inputs: ZScoreInputs): ZScoreResult {
  const z = zScore(inputs.value, inputs.mean, inputs.standardDeviation);
  const percentile = percentileFromZ(z);
  const oneTailP = 1 - normalCDF(Math.abs(z));
  const twoTailP = 2 * oneTailP;

  // Interpretation based on z-score magnitude
  let interpretation = "neutral";
  const absZ = Math.abs(z);
  if (absZ <= 1) interpretation = "within 1σ";
  else if (absZ <= 2) interpretation = "within 2σ";
  else if (absZ <= 3) interpretation = "within 3σ";
  else interpretation = "extreme (>3σ)";

  return {
    zScore: Math.round(z * 10000) / 10000,
    percentile: Math.round(percentile * 100) / 100,
    oneTailPValue: Math.round(oneTailP * 10000) / 10000,
    twoTailPValue: Math.round(twoTailP * 10000) / 10000,
    interpretation,
  };
}
