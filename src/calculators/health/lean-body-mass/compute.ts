/**
 * Lean Body Mass (LBM) Calculator
 *
 * Supports three validated formulas:
 *
 * Boer (1984): Crit Care Med 12(3):190-194
 *   Male:   LBM = 0.407 × weight + 0.267 × height − 19.2
 *   Female: LBM = 0.252 × weight + 0.473 × height − 48.3
 *   Weight in kg, height in cm
 *
 * James (1976): J Clin Pathol 29(5):366-372
 *   Male:   LBM = 1.1 × weight − 128 × (weight/height)²
 *   Female: LBM = 1.07 × weight − 148 × (weight/height)²
 *   Weight in kg, height in cm
 *
 * Hume (1966): J Clin Pathol 19(4):389-391
 *   Male:   LBM = 0.3281 × weight + 0.33929 × height − 29.5336
 *   Female: LBM = 0.29569 × weight + 0.41813 × height − 43.2933
 *   Weight in kg, height in cm
 */

import { z } from "zod";

export const inputSchema = z.object({
  gender: z.enum(["male", "female"]),
  weight: z.number().positive().min(1).max(300),
  height: z.number().positive().min(50).max(250),
  formula: z.enum(["boer", "james", "hume"]).default("boer"),
});

export type LbmInputs = z.infer<typeof inputSchema>;

export interface LbmResult extends Record<string, unknown> {
  readonly lbm: number;
  readonly bodyFatMass: number;
  readonly bodyFatPct: number;
  readonly lbmLb: number;
}

const KG_TO_LB = 2.20462;

function boer(weight: number, height: number, gender: "male" | "female"): number {
  if (gender === "male") {
    return 0.407 * weight + 0.267 * height - 19.2;
  }
  return 0.252 * weight + 0.473 * height - 48.3;
}

function james(weight: number, height: number, gender: "male" | "female"): number {
  if (gender === "male") {
    return 1.1 * weight - 128 * Math.pow(weight / height, 2);
  }
  return 1.07 * weight - 148 * Math.pow(weight / height, 2);
}

function hume(weight: number, height: number, gender: "male" | "female"): number {
  if (gender === "male") {
    return 0.3281 * weight + 0.33929 * height - 29.5336;
  }
  return 0.29569 * weight + 0.41813 * height - 43.2933;
}

export function compute(inputs: LbmInputs): LbmResult {
  const { gender, weight, height, formula } = inputs;

  let lbmRaw: number;
  if (formula === "boer") {
    lbmRaw = boer(weight, height, gender);
  } else if (formula === "james") {
    lbmRaw = james(weight, height, gender);
  } else {
    lbmRaw = hume(weight, height, gender);
  }

  // Clamp LBM to prevent nonsensical results for extreme edge-case inputs
  const lbm = Math.round(Math.max(0.1, lbmRaw) * 100) / 100;
  const bodyFatMass = Math.round(Math.max(0, weight - lbm) * 100) / 100;
  const bodyFatPct = Math.round((bodyFatMass / weight) * 10000) / 100;
  const lbmLb = Math.round(lbm * KG_TO_LB * 100) / 100;

  return { lbm, bodyFatMass, bodyFatPct, lbmLb };
}
