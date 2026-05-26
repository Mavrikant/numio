/**
 * Pregnancy Weight Gain Calculator (IOM 2009 Guidelines)
 *
 * Institute of Medicine (2009) recommended weight gain during pregnancy by pre-pregnancy BMI:
 *
 * | BMI Category      | Pre-pregnancy BMI | Total Gain (kg) | Weekly Rate (kg) 2nd/3rd tri |
 * |-------------------|-------------------|-----------------|------------------------------|
 * | Underweight       | <18.5             | 12.5–18         | 0.5                          |
 * | Normal weight     | 18.5–24.9         | 11.5–16         | 0.42                         |
 * | Overweight        | 25–29.9           | 7–11.5          | 0.28                         |
 * | Obese             | ≥30               | 5–9             | 0.22                         |
 *
 * Note: 1st trimester gain is typically 0.5–2 kg total (approximately 1.25 kg midpoint)
 * For weeks 1–13: apply 1st trimester gain proportionally
 * For weeks 14–40: add 1st trimester base + weekly rate × (weeks - 13)
 *
 * Reference: IOM (2009). Weight Gain During Pregnancy: Reexamining the Guidelines.
 *   https://www.ncbi.nlm.nih.gov/books/NBK32813/
 */

import { z } from "zod";

export const inputSchema = z.object({
  prePregnancyWeight: z.number().positive().min(30).max(300),
  height: z.number().positive().min(48).max(220),
  currentWeight: z.number().positive().min(30).max(350),
  gestationalWeek: z.number().int().min(1).max(42),
  unit: z.enum(["metric", "imperial"]),
});

export type PregWeightInputs = z.infer<typeof inputSchema>;

export type OnTrackStatus = "under" | "on_track" | "over";

export interface PregWeightResult extends Record<string, unknown> {
  readonly preBmi: number;
  readonly bmiCategory: string;
  readonly recommendedTotalGainMin: number;
  readonly recommendedTotalGainMax: number;
  readonly currentGain: number;
  readonly expectedGainAtWeek: number;
  readonly onTrack: OnTrackStatus;
  readonly weeklyRateKg: number;
}

const LB_TO_KG = 0.453592;
const IN_TO_CM = 2.54;

interface WeightGainRange {
  readonly minKg: number;
  readonly maxKg: number;
  readonly weeklyRateKg: number;
  readonly firstTrimesterGainKg: number;
}

function getWeightGainRange(bmi: number): WeightGainRange & { category: string } {
  if (bmi < 18.5) {
    return { category: "underweight", minKg: 12.5, maxKg: 18, weeklyRateKg: 0.5, firstTrimesterGainKg: 1.5 };
  }
  if (bmi < 25) {
    return { category: "normal", minKg: 11.5, maxKg: 16, weeklyRateKg: 0.42, firstTrimesterGainKg: 1.5 };
  }
  if (bmi < 30) {
    return { category: "overweight", minKg: 7, maxKg: 11.5, weeklyRateKg: 0.28, firstTrimesterGainKg: 1.0 };
  }
  return { category: "obese", minKg: 5, maxKg: 9, weeklyRateKg: 0.22, firstTrimesterGainKg: 0.75 };
}

function calcExpectedGain(week: number, range: WeightGainRange): number {
  if (week <= 13) {
    // 1st trimester: linear proportion of 1st trimester gain
    return (week / 13) * range.firstTrimesterGainKg;
  }
  // 2nd/3rd trimester: add weekly rate × weeks since 13
  return range.firstTrimesterGainKg + (week - 13) * range.weeklyRateKg;
}

function classifyOnTrack(
  currentGain: number,
  week: number,
  range: WeightGainRange,
): OnTrackStatus {
  // Expected at this week from midpoint-based projection
  const expectedMid = calcExpectedGain(week, range);
  const tolerance = range.weeklyRateKg * 2; // ±2 weeks of gain as tolerance
  if (currentGain < expectedMid - tolerance) return "under";
  if (currentGain > expectedMid + tolerance) return "over";
  return "on_track";
}

export function compute(inputs: PregWeightInputs): PregWeightResult {
  const { prePregnancyWeight, height, currentWeight, gestationalWeek, unit } = inputs;

  // Convert to metric if needed
  const preWeightKg = unit === "imperial" ? prePregnancyWeight * LB_TO_KG : prePregnancyWeight;
  const heightCm = unit === "imperial" ? height * IN_TO_CM : height;
  const currentWeightKg = unit === "imperial" ? currentWeight * LB_TO_KG : currentWeight;

  const heightM = heightCm / 100;
  const preBmiRaw = preWeightKg / (heightM * heightM);
  const preBmi = Math.round(preBmiRaw * 10) / 10;

  const rangeAndCategory = getWeightGainRange(preBmiRaw);
  const { category, minKg, maxKg, weeklyRateKg } = rangeAndCategory;

  const currentGainRaw = currentWeightKg - preWeightKg;
  const currentGain = Math.round(currentGainRaw * 10) / 10;

  const expectedGainRaw = calcExpectedGain(gestationalWeek, rangeAndCategory);
  const expectedGainAtWeek = Math.round(expectedGainRaw * 10) / 10;

  const onTrack = classifyOnTrack(currentGainRaw, gestationalWeek, rangeAndCategory);

  return {
    preBmi,
    bmiCategory: category,
    recommendedTotalGainMin: minKg,
    recommendedTotalGainMax: maxKg,
    currentGain,
    expectedGainAtWeek,
    onTrack,
    weeklyRateKg,
  };
}
