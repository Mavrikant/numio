/**
 * Waist-to-Hip Ratio (WHR) Calculator
 *
 * WHR = waist circumference / hip circumference (in same units)
 *
 * WHO health risk categories:
 *   Male:   <0.90 = low risk, 0.90–0.99 = moderate risk, ≥1.00 = high risk
 *   Female: <0.80 = low risk, 0.80–0.85 = moderate risk, ≥0.86 = high risk
 *
 * Central obesity thresholds (WHO):
 *   Male:   waist ≥102 cm (≥40 inches) = increased risk
 *   Female: waist ≥88 cm  (≥35 inches) = increased risk
 *
 * Reference: WHO Technical Report Series 894 (2000)
 *   https://www.who.int/europe/publications/i/item/9789289037501
 */

import { z } from "zod";

export const inputSchema = z.object({
  gender: z.enum(["male", "female"]),
  waist: z.number().positive(),
  hip: z.number().positive(),
  unit: z.enum(["metric", "imperial"]),
});

export type WhrInputs = z.infer<typeof inputSchema>;

export type RiskCategory = "low" | "moderate" | "high";

export interface WhrResult extends Record<string, unknown> {
  readonly whr: number;
  readonly riskCategory: RiskCategory;
  readonly waistCm: number;
  readonly centralObesityRisk: boolean;
}

const INCH_TO_CM = 2.54;

function toWaistCm(waist: number, unit: "metric" | "imperial"): number {
  return unit === "imperial" ? waist * INCH_TO_CM : waist;
}

function classifyRisk(whr: number, gender: "male" | "female"): RiskCategory {
  if (gender === "male") {
    if (whr < 0.9) return "low";
    if (whr < 1.0) return "moderate";
    return "high";
  }
  // female
  if (whr < 0.8) return "low";
  if (whr <= 0.85) return "moderate";
  return "high";
}

function hasCentralObesity(waistCm: number, gender: "male" | "female"): boolean {
  if (gender === "male") return waistCm >= 102;
  return waistCm >= 88;
}

export function compute(inputs: WhrInputs): WhrResult {
  const { gender, waist, hip, unit } = inputs;

  const whrRaw = waist / hip;
  const whr = Math.round(whrRaw * 100) / 100;
  const riskCategory = classifyRisk(whrRaw, gender);
  const waistCm = Math.round(toWaistCm(waist, unit) * 10) / 10;
  const centralObesityRisk = hasCentralObesity(waistCm, gender);

  return { whr, riskCategory, waistCm, centralObesityRisk };
}
