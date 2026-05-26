import { describe, it } from "vitest";
import definition from "../definition";
import { runNumericTests } from "@/test-utils";

describe("calorie-deficit compute", () => {
  it("runs numeric tests successfully", () => {
    runNumericTests(definition, [
      {
        description: "standard metric — 10 kg to lose at 500 kcal/day",
        inputs: { currentWeight: 80, targetWeight: 70, unit: "metric", dailyCalorieDeficit: 500 },
        // weightToLoseKg: 10
        // weeklyDeficit: 3500
        // totalCalorieDeficit: 77000
        // weeksToGoal: ceil(77000/3500) = ceil(22) = 22
        // monthsToGoal: round(22/4.33 * 10)/10 = round(50.8.../10)/10 = 5.1
        // weeklyLossKg: round(3500/7700 * 1000)/1000 = round(454.54...)/1000 = 0.455
        expected: {
          weightToLoseKg: 10,
          weeklyDeficit: 3500,
          weeksToGoal: 22,
          monthsToGoal: 5.1,
          weeklyLossKg: 0.455,
          totalCalorieDeficit: 77000,
        },
      },
      {
        description: "imperial — 20 lbs to lose at 300 kcal/day",
        inputs: { currentWeight: 170, targetWeight: 150, unit: "imperial", dailyCalorieDeficit: 300 },
        // weightToLoseKg: round((20 * 0.453592) * 100)/100 = round(9.0718)*100/100 = 9.07
        // weeklyDeficit: 2100
        // totalCalorieDeficit: round(9.07 * 7700) = round(69839) = 69839
        // weeksToGoal: ceil(69839/2100) = ceil(33.26...) = 34
        expected: {
          weightToLoseKg: 9.07,
          weeklyDeficit: 2100,
          weeksToGoal: 34,
          totalCalorieDeficit: 69839,
        },
      },
      {
        description: "large deficit 1000 kcal/day — 5 kg",
        inputs: { currentWeight: 75, targetWeight: 70, unit: "metric", dailyCalorieDeficit: 1000 },
        expected: {
          weightToLoseKg: 5,
          weeklyDeficit: 7000,
          weeksToGoal: 6,
          totalCalorieDeficit: 38500,
        },
      },
    ]);
  });
});
