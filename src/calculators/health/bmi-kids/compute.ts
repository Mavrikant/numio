/**
 * BMI-for-Age Calculator for Children and Adolescents (Ages 2–20)
 *
 * BMI formula: weight(kg) / height(m)^2  (same as adults)
 * Interpretation uses CDC 2000 growth chart percentile cutoffs by age and sex.
 *
 * Weight status categories (CDC):
 *   <5th percentile:   Underweight
 *   5th–84th:          Healthy weight
 *   85th–94th:         Overweight
 *   ≥95th percentile:  Obese
 *
 * Embedded lookup tables: 85th and 95th percentile BMI cutoffs for each integer age 2–20
 * Source: CDC 2000 Growth Charts (tables derived from Kuczmarski et al., 2000).
 * Values are the BMI at the 85th and 95th percentile for each sex/age combination.
 * Ages 2–5 from WHO/CDC, Ages 5–20 from CDC Growth Charts.
 *
 * Reference:
 *   CDC BMI-for-age: https://www.cdc.gov/growthcharts/
 *   Kuczmarski RJ et al. (2002). Adv Data. 314:1–190.
 */

import { z } from "zod";

export const inputSchema = z.object({
  age: z.number().int().min(2).max(20),
  gender: z.enum(["male", "female"]),
  weight: z.number().positive(),
  height: z.number().positive(),
  unit: z.enum(["metric", "imperial"]),
});

export type BmiKidsInputs = z.infer<typeof inputSchema>;

export type WeightStatus = "underweight" | "healthy" | "overweight" | "obese";

export interface BmiKidsResult extends Record<string, unknown> {
  readonly bmi: number;
  readonly weightStatus: WeightStatus;
  readonly percentileEstimate: string;
}

// CDC 2000 Growth Chart approximate 85th and 95th percentile BMI cutoffs
// Index 0 = age 2, index 1 = age 3, ..., index 18 = age 20
// Values from CDC published growth chart data (Kuczmarski 2002)

const MALE_P85: readonly number[] = [
  17.1, // 2
  17.0, // 3
  16.9, // 4
  16.9, // 5
  17.0, // 6
  17.2, // 7
  17.6, // 8
  18.1, // 9
  18.9, // 10
  19.7, // 11
  20.6, // 12
  21.5, // 13
  22.3, // 14
  23.1, // 15
  23.9, // 16
  24.5, // 17
  25.0, // 18
  25.4, // 19
  25.6, // 20
];

const MALE_P95: readonly number[] = [
  18.5, // 2
  18.1, // 3
  17.9, // 4
  17.9, // 5
  18.0, // 6
  18.4, // 7
  19.1, // 8
  19.8, // 9
  20.8, // 10
  21.8, // 11
  23.0, // 12
  24.2, // 13
  25.2, // 14
  26.1, // 15
  27.0, // 16
  27.7, // 17
  28.3, // 18
  28.7, // 19
  29.0, // 20
];

const FEMALE_P85: readonly number[] = [
  17.2, // 2
  17.1, // 3
  17.0, // 4
  17.0, // 5
  17.1, // 6
  17.5, // 7
  18.0, // 8
  18.7, // 9
  19.5, // 10
  20.4, // 11
  21.3, // 12
  22.0, // 13
  22.6, // 14
  23.1, // 15
  23.6, // 16
  24.0, // 17
  24.4, // 18
  24.7, // 19
  25.0, // 20
];

const FEMALE_P95: readonly number[] = [
  18.6, // 2
  18.3, // 3
  18.0, // 4
  17.8, // 5
  18.0, // 6
  18.6, // 7
  19.4, // 8
  20.3, // 9
  21.3, // 10
  22.4, // 11
  23.4, // 12
  24.3, // 13
  25.0, // 14
  25.6, // 15
  26.2, // 16
  26.7, // 17
  27.2, // 18
  27.7, // 19
  28.1, // 20
];

// 5th percentile approximations (very low)
const MALE_P5: readonly number[] = [
  14.2, 13.9, 13.8, 13.7, 13.8, 13.9, 14.1, 14.4, 14.8, 15.3, 15.8, 16.4, 16.9, 17.5, 17.9, 18.3, 18.6, 18.9, 19.0, 19.1,
];
const FEMALE_P5: readonly number[] = [
  14.2, 13.9, 13.8, 13.7, 13.8, 14.0, 14.3, 14.6, 15.1, 15.7, 16.3, 16.8, 17.3, 17.7, 18.0, 18.3, 18.5, 18.7, 18.9, 19.0,
];

const INCH_TO_CM = 2.54;
const LB_TO_KG = 0.453592;

function toMetric(
  weight: number,
  height: number,
  unit: "metric" | "imperial",
): { weightKg: number; heightCm: number } {
  if (unit === "imperial") {
    return { weightKg: weight * LB_TO_KG, heightCm: height * INCH_TO_CM };
  }
  return { weightKg: weight, heightCm: height };
}

function calcBmi(weightKg: number, heightCm: number): number {
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
}

function classifyStatus(
  bmi: number,
  age: number,
  gender: "male" | "female",
): { status: WeightStatus; percentileEstimate: string } {
  const idx = age - 2; // array index 0 = age 2
  const p85 = gender === "male" ? MALE_P85[idx] : FEMALE_P85[idx];
  const p95 = gender === "male" ? MALE_P95[idx] : FEMALE_P95[idx];
  const p5 = gender === "male" ? MALE_P5[idx] : FEMALE_P5[idx];

  // Guard: if lookup tables have no entry for the index (shouldn't happen with valid schema)
  if (p85 === undefined || p95 === undefined || p5 === undefined) {
    return { status: "healthy", percentileEstimate: "~50th percentile" };
  }

  if (bmi < p5) {
    return { status: "underweight", percentileEstimate: "<5th percentile" };
  }
  if (bmi < p85) {
    // Estimate percentile roughly between 5th and 85th
    const fraction = (bmi - p5) / (p85 - p5);
    const pct = Math.round(5 + fraction * 80);
    return { status: "healthy", percentileEstimate: `~${pct}th percentile` };
  }
  if (bmi < p95) {
    return { status: "overweight", percentileEstimate: "85th–94th percentile" };
  }
  return { status: "obese", percentileEstimate: "≥95th percentile" };
}

export function compute(inputs: BmiKidsInputs): BmiKidsResult {
  const { age, gender, weight, height, unit } = inputs;
  const { weightKg, heightCm } = toMetric(weight, height, unit);
  const bmiRaw = calcBmi(weightKg, heightCm);
  const bmi = Math.round(bmiRaw * 10) / 10;
  const { status, percentileEstimate } = classifyStatus(bmiRaw, age, gender);
  return { bmi, weightStatus: status, percentileEstimate };
}
