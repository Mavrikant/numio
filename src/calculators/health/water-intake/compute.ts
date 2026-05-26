// Reference: National Academies of Sciences, Engineering, and Medicine (2004)
// Dietary Reference Intakes for Water, Potassium, Sodium, Chloride, and Sulfate
// https://www.ncbi.nlm.nih.gov/books/NBK541077/
//
// Base: weight_kg × 35 ml/day
// Activity bonuses (ml/day): sedentary=0, light=350, moderate=700, active=1050, very_active=1400
// Climate bonuses (ml/day): temperate=0, hot=350, very_hot=700
// Pregnancy: +300 ml/day; Breastfeeding: +700 ml/day

import { z } from "zod";

export const inputSchema = z.object({
  weight: z.number().min(1).max(300),
  activityLevel: z.enum(["sedentary", "light", "moderate", "active", "very_active"]),
  climate: z.enum(["temperate", "hot", "very_hot"]),
  isPregnant: z.boolean(),
  isBreastfeeding: z.boolean(),
});

export type WaterIntakeInputs = z.infer<typeof inputSchema>;

export interface WaterIntakeResult extends Record<string, unknown> {
  readonly dailyWaterMl: number;
  readonly dailyWaterL: number;
  readonly dailyWaterOz: number;
  readonly dailyWaterCups: number;
  readonly glassesOf250ml: number;
}

const ACTIVITY_BONUS_ML: Record<string, number> = {
  sedentary: 0,
  light: 350,
  moderate: 700,
  active: 1050,
  very_active: 1400,
};

const CLIMATE_BONUS_ML: Record<string, number> = {
  temperate: 0,
  hot: 350,
  very_hot: 700,
};

const ML_PER_OZ = 29.5735;
const ML_PER_CUP = 240; // 1 cup = 240 ml

export function compute(inputs: WaterIntakeInputs): WaterIntakeResult {
  const { weight, activityLevel, climate, isPregnant, isBreastfeeding } = inputs;

  const baseMl = weight * 35;
  const activityMl = ACTIVITY_BONUS_ML[activityLevel] ?? 0;
  const climateMl = CLIMATE_BONUS_ML[climate] ?? 0;
  const pregnancyMl = isPregnant ? 300 : 0;
  const breastfeedingMl = isBreastfeeding ? 700 : 0;

  const dailyWaterMl = baseMl + activityMl + climateMl + pregnancyMl + breastfeedingMl;
  const dailyWaterL = Math.round((dailyWaterMl / 1000) * 100) / 100;
  const dailyWaterOz = Math.round((dailyWaterMl / ML_PER_OZ) * 10) / 10;
  const dailyWaterCups = Math.round((dailyWaterMl / ML_PER_CUP) * 10) / 10;
  const glassesOf250ml = Math.ceil(dailyWaterMl / 250);

  return {
    dailyWaterMl: Math.round(dailyWaterMl),
    dailyWaterL,
    dailyWaterOz,
    dailyWaterCups,
    glassesOf250ml,
  };
}
