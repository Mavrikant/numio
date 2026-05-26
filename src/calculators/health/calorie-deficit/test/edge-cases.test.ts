import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("calorie-deficit edge cases", () => {
  it("returns zero when current and target weight are equal", () => {
    const result = compute({ currentWeight: 70, targetWeight: 70, unit: "metric", dailyCalorieDeficit: 500 });
    expect(result.weightToLoseKg).toBe(0);
    expect(result.weeksToGoal).toBe(0);
    expect(result.totalCalorieDeficit).toBe(0);
  });

  it("handles fractional kg loss correctly", () => {
    const result = compute({ currentWeight: 70.5, targetWeight: 70, unit: "metric", dailyCalorieDeficit: 200 });
    expect(result.weightToLoseKg).toBe(0.5);
    expect(result.totalCalorieDeficit).toBe(3850);
  });

  it("converts imperial to metric correctly", () => {
    const metric = compute({ currentWeight: 10 / 0.453592, targetWeight: 0, unit: "imperial", dailyCalorieDeficit: 500 });
    const direct = compute({ currentWeight: 10, targetWeight: 0, unit: "metric", dailyCalorieDeficit: 500 });
    expect(metric.weightToLoseKg).toBeCloseTo(direct.weightToLoseKg, 1);
  });

  it("weeklyLossKg is consistent with weeklyDeficit", () => {
    const result = compute({ currentWeight: 80, targetWeight: 70, unit: "metric", dailyCalorieDeficit: 500 });
    // weeklyLossKg = weeklyDeficit / 7700
    expect(result.weeklyLossKg).toBeCloseTo(result.weeklyDeficit / 7700, 2);
  });

  it("ceil rounding: weeksToGoal rounds up not down", () => {
    // 1 kg to lose, 750 kcal/day deficit → weeklyDeficit=5250, total=7700, weeks = ceil(7700/5250)=ceil(1.466...)=2
    const result = compute({ currentWeight: 71, targetWeight: 70, unit: "metric", dailyCalorieDeficit: 750 });
    expect(result.weeksToGoal).toBe(2);
  });
});
