import { z } from "zod";

export const inputSchema = z
  .object({
    systolic: z.number().int().min(60).max(250),
    diastolic: z.number().int().min(40).max(150),
  });

export type BloodPressureInputs = z.infer<typeof inputSchema>;

export type BPCategory = "normal" | "elevated" | "stage1" | "stage2" | "crisis";

export interface BloodPressureResult extends Record<string, unknown> {
  readonly category: BPCategory;
  readonly systolicCategory: BPCategory;
  readonly diastolicCategory: BPCategory;
  readonly recommendation: string;
}

function classifySystolic(s: number): BPCategory {
  if (s > 180) return "crisis";
  if (s >= 140) return "stage2";
  if (s >= 130) return "stage1";
  if (s >= 120) return "elevated";
  return "normal";
}

function classifyDiastolic(d: number): BPCategory {
  if (d > 120) return "crisis";
  if (d >= 90) return "stage2";
  if (d >= 80) return "stage1";
  return "normal";
}

const CATEGORY_ORDER: Record<BPCategory, number> = {
  normal: 0,
  elevated: 1,
  stage1: 2,
  stage2: 3,
  crisis: 4,
};

const RECOMMENDATIONS: Record<BPCategory, string> = {
  normal: "healthy_lifestyle",
  elevated: "lifestyle_changes",
  stage1: "consult_doctor",
  stage2: "see_doctor_soon",
  crisis: "emergency_care",
};

export function compute(inputs: BloodPressureInputs): BloodPressureResult {
  const { systolic, diastolic } = inputs;

  const systolicCategory = classifySystolic(systolic);
  const diastolicCategory = classifyDiastolic(diastolic);

  // Overall category is the higher of the two
  const category: BPCategory =
    CATEGORY_ORDER[systolicCategory] >= CATEGORY_ORDER[diastolicCategory]
      ? systolicCategory
      : diastolicCategory;

  // Special AHA rule: Elevated only if systolic 120–129 AND diastolic < 80
  // If diastolic >= 80 it bumps to stage1 at minimum
  const finalCategory: BPCategory =
    systolicCategory === "elevated" && diastolicCategory !== "normal"
      ? diastolicCategory
      : category;

  const recommendation = RECOMMENDATIONS[finalCategory];

  return {
    category: finalCategory,
    systolicCategory,
    diastolicCategory,
    recommendation,
  };
}
