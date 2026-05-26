import { z } from "zod";

export const inputSchema = z.object({
  weight: z.number().positive().min(20).max(300), // kg
  height: z.number().positive().min(100).max(250), // cm
  age: z.number().int().min(15).max(100),
  gender: z.enum(["male", "female"]),
  activityLevel: z.enum([
    "sedentary",
    "lightlyActive",
    "moderatelyActive",
    "veryActive",
    "extraActive",
    "athlete",
  ]),
});

export type TdeeInputs = z.infer<typeof inputSchema>;

export interface TdeeResult extends Record<string, unknown> {
  readonly bmr: number;
  readonly tdee: number;
  readonly proteinTarget: number;
  readonly carbTarget: number;
  readonly fatTarget: number;
}

const ACTIVITY_MULTIPLIERS: Record<string, number> = {
  sedentary: 1.2,
  lightlyActive: 1.375,
  moderatelyActive: 1.55,
  veryActive: 1.725,
  extraActive: 1.9,
  athlete: 2.0,
};

const ACTIVE_LEVELS = new Set(["moderatelyActive", "veryActive", "extraActive", "athlete"]);

export function compute(inputs: TdeeInputs): TdeeResult {
  const { weight, height, age, gender, activityLevel } = inputs;

  // Mifflin-St Jeor BMR
  let bmr: number;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const multiplier = ACTIVITY_MULTIPLIERS[activityLevel];
  const tdee = bmr * multiplier;

  // Protein: 1.6g/kg for active, 0.8g/kg for sedentary
  const proteinGPerKg = ACTIVE_LEVELS.has(activityLevel) ? 1.6 : 0.8;
  const proteinTarget = Math.round(weight * proteinGPerKg);

  // Fat: 30% of TDEE calories / 9 kcal per gram
  const fatTarget = Math.round((tdee * 0.30) / 9);

  // Carbs: remaining calories / 4 kcal per gram
  const proteinKcal = proteinTarget * 4;
  const fatKcal = fatTarget * 9;
  const carbKcal = Math.max(0, tdee - proteinKcal - fatKcal);
  const carbTarget = Math.round(carbKcal / 4);

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    proteinTarget,
    carbTarget,
    fatTarget,
  };
}
