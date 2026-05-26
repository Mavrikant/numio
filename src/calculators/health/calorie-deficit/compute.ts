export interface CalorieDeficitInputs {
  currentWeight: number;
  targetWeight: number;
  unit: "metric" | "imperial";
  dailyCalorieDeficit: number;
}

export interface CalorieDeficitResult extends Record<string, unknown> {
  weightToLoseKg: number;
  weeklyDeficit: number;
  weeksToGoal: number;
  monthsToGoal: number;
  weeklyLossKg: number;
  totalCalorieDeficit: number;
}

const KCAL_PER_KG_FAT = 7700;
const LBS_TO_KG = 0.453592;
const WEEKS_PER_MONTH = 4.33;

export function compute(inputs: CalorieDeficitInputs): CalorieDeficitResult {
  const { currentWeight, targetWeight, unit, dailyCalorieDeficit } = inputs;

  const currentKg = unit === "imperial" ? currentWeight * LBS_TO_KG : currentWeight;
  const targetKg = unit === "imperial" ? targetWeight * LBS_TO_KG : targetWeight;

  const weightToLoseKg = Math.max(0, Math.round((currentKg - targetKg) * 100) / 100);
  const weeklyDeficit = dailyCalorieDeficit * 7;
  const totalCalorieDeficit = Math.round(weightToLoseKg * KCAL_PER_KG_FAT);
  const weeksToGoal = weeklyDeficit > 0 ? Math.ceil((weightToLoseKg * KCAL_PER_KG_FAT) / weeklyDeficit) : 0;
  const monthsToGoal = Math.round((weeksToGoal / WEEKS_PER_MONTH) * 10) / 10;
  const weeklyLossKg = weeklyDeficit > 0 ? Math.round((weeklyDeficit / KCAL_PER_KG_FAT) * 1000) / 1000 : 0;

  return {
    weightToLoseKg,
    weeklyDeficit,
    weeksToGoal,
    monthsToGoal,
    weeklyLossKg,
    totalCalorieDeficit,
  };
}
