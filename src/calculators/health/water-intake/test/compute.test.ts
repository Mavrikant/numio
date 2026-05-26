import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Water Intake compute — numeric correctness", () => {
  it("sedentary 70kg temperate → 2450ml base", () => {
    // 70 × 35 = 2450; sedentary+0; temperate+0; no preg/bf
    runNumericTests(calculator, [
      {
        inputs: { weight: 70, activityLevel: "sedentary", climate: "temperate", isPregnant: false, isBreastfeeding: false },
        expected: { dailyWaterMl: 2450, dailyWaterL: 2.45 },
        tolerance: 1,
      },
    ]);
  });

  it("moderate activity 70kg hot climate → 3500ml", () => {
    // 70 × 35 = 2450; moderate+700; hot+350 = 3500ml
    runNumericTests(calculator, [
      {
        inputs: { weight: 70, activityLevel: "moderate", climate: "hot", isPregnant: false, isBreastfeeding: false },
        expected: { dailyWaterMl: 3500 },
        tolerance: 1,
      },
    ]);
  });

  it("very_active 90kg very_hot → 90×35+1400+700 = 5250ml", () => {
    // 90 × 35 = 3150; very_active+1400; very_hot+700 = 5250ml
    runNumericTests(calculator, [
      {
        inputs: { weight: 90, activityLevel: "very_active", climate: "very_hot", isPregnant: false, isBreastfeeding: false },
        expected: { dailyWaterMl: 5250 },
        tolerance: 1,
      },
    ]);
  });

  it("pregnant breastfeeding 60kg sedentary temperate → 60×35+300+700=3100ml", () => {
    // 60 × 35 = 2100; preg+300; bf+700 = 3100ml
    runNumericTests(calculator, [
      {
        inputs: { weight: 60, activityLevel: "sedentary", climate: "temperate", isPregnant: true, isBreastfeeding: true },
        expected: { dailyWaterMl: 3100 },
        tolerance: 1,
      },
    ]);
  });

  it("glasses of 250ml rounds up correctly — 2450/250 = 9.8 → 10 glasses", () => {
    // Reference: spec says ceil(ml/250)
    const parsed = calculator.inputSchema.parse({
      weight: 70, activityLevel: "sedentary", climate: "temperate", isPregnant: false, isBreastfeeding: false,
    });
    const result = calculator.compute(parsed);
    expect(result.glassesOf250ml).toBe(10); // ceil(2450/250) = ceil(9.8) = 10
  });

  it("dailyWaterOz conversion from 2450ml → ~82.8 oz", () => {
    // 2450 / 29.5735 ≈ 82.8
    const parsed = calculator.inputSchema.parse({
      weight: 70, activityLevel: "sedentary", climate: "temperate", isPregnant: false, isBreastfeeding: false,
    });
    const result = calculator.compute(parsed);
    expect(result.dailyWaterOz as number).toBeCloseTo(82.8, 0);
  });

  it("light activity 50kg temperate → 50×35+350=2100ml", () => {
    // 50 × 35 = 1750; light+350 = 2100ml
    runNumericTests(calculator, [
      {
        inputs: { weight: 50, activityLevel: "light", climate: "temperate", isPregnant: false, isBreastfeeding: false },
        expected: { dailyWaterMl: 2100 },
        tolerance: 1,
      },
    ]);
  });
});
