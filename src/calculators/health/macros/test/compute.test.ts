import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Macros compute — numeric correctness", () => {
  it("maintenance 2000kcal 30/30/40 split", () => {
    // protein: 0.30×2000/4 = 150g; fat: 0.30×2000/9 = 66.7g; carbs: 0.40×2000/4 = 200g
    runNumericTests(calculator, [
      {
        inputs: { tdee: 2000, goal: "maintenance", proteinPct: 30, fatPct: 30 },
        expected: { proteinG: 150, fatG: 66.7, carbsG: 200, proteinKcal: 600, fatKcal: 600, carbsKcal: 800 },
        tolerance: 1,
      },
    ]);
  });

  it("cutting 2500kcal 40/30/30 split", () => {
    // protein: 0.40×2500/4 = 250g; fat: 0.30×2500/9 ≈ 83.3g; carbs: 0.30×2500/4 = 187.5g
    runNumericTests(calculator, [
      {
        inputs: { tdee: 2500, goal: "cutting", proteinPct: 40, fatPct: 30 },
        expected: { proteinG: 250, fatG: 83.3, carbsG: 187.5, proteinKcal: 1000, fatKcal: 750, carbsKcal: 750 },
        tolerance: 2,
      },
    ]);
  });

  it("bulking 3000kcal 25/25/50 split", () => {
    // protein: 0.25×3000/4 = 187.5g; fat: 0.25×3000/9 ≈ 83.3g; carbs: 0.50×3000/4 = 375g
    runNumericTests(calculator, [
      {
        inputs: { tdee: 3000, goal: "bulking", proteinPct: 25, fatPct: 25 },
        expected: { proteinG: 187.5, fatG: 83.3, carbsG: 375, totalKcal: 3000 },
        tolerance: 2,
      },
    ]);
  });

  it("totalKcal equals tdee", () => {
    const inputs = calculator.inputSchema.parse({ tdee: 2200, goal: "maintenance", proteinPct: 30, fatPct: 30 });
    const result = calculator.compute(inputs);
    expect(result.totalKcal as number).toBeCloseTo(2200, 0);
  });

  it("minimum split: 10% protein, 10% fat → 80% carbs", () => {
    // protein: 0.10×2000/4 = 50g; fat: 0.10×2000/9 ≈ 22.2g; carbs: 0.80×2000/4 = 400g
    runNumericTests(calculator, [
      {
        inputs: { tdee: 2000, goal: "maintenance", proteinPct: 10, fatPct: 10 },
        expected: { proteinG: 50, carbsG: 400 },
        tolerance: 2,
      },
    ]);
  });
});
