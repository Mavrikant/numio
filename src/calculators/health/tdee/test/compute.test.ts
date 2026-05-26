import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("TDEE compute — Mifflin-St Jeor BMR correctness", () => {
  it("male 70kg 175cm 30yo sedentary → correct BMR and TDEE", () => {
    // Mifflin-St Jeor male: BMR = 10×70 + 6.25×175 - 5×30 + 5
    //                            = 700 + 1093.75 - 150 + 5 = 1648.75 → rounded = 1649
    // Sedentary TDEE = 1649 × 1.2 = 1978.8 → rounded = 1979
    runNumericTests(calculator, [
      {
        inputs: { gender: "male", weight: 70, height: 175, age: 30, activityLevel: "sedentary" },
        expected: { bmr: 1649, tdee: 1979 },
        tolerance: 5,
      },
    ]);
  });

  it("female 60kg 165cm 25yo moderately active → correct BMR and TDEE", () => {
    // Mifflin-St Jeor female: BMR = 10×60 + 6.25×165 - 5×25 - 161
    //                             = 600 + 1031.25 - 125 - 161 = 1345.25 → rounded = 1345
    // Moderately active TDEE = 1345 × 1.55 = 2084.75 → rounded = 2085
    runNumericTests(calculator, [
      {
        inputs: { gender: "female", weight: 60, height: 165, age: 25, activityLevel: "moderatelyActive" },
        expected: { bmr: 1345, tdee: 2085 },
        tolerance: 5,
      },
    ]);
  });

  it("male very active → TDEE significantly higher than BMR", () => {
    const parsed = calculator.inputSchema.parse({
      gender: "male", weight: 80, height: 180, age: 28, activityLevel: "veryActive",
    });
    const result = calculator.compute(parsed);
    // Very active multiplier = 1.725
    expect((result.tdee as number)).toBeGreaterThan((result.bmr as number) * 1.6);
    expect((result.tdee as number)).toBeLessThan((result.bmr as number) * 1.9);
  });

  it("athlete has highest TDEE multiplier = 2.0", () => {
    const parsedAthlete = calculator.inputSchema.parse({
      gender: "male", weight: 80, height: 180, age: 25, activityLevel: "athlete",
    });
    const parsedSedentary = calculator.inputSchema.parse({
      gender: "male", weight: 80, height: 180, age: 25, activityLevel: "sedentary",
    });
    const athleteResult = calculator.compute(parsedAthlete);
    const sedentaryResult = calculator.compute(parsedSedentary);
    // athlete / sedentary ≈ 2.0 / 1.2 ≈ 1.667
    const ratio = (athleteResult.tdee as number) / (sedentaryResult.tdee as number);
    expect(ratio).toBeGreaterThan(1.5);
    expect(ratio).toBeLessThan(1.8);
  });
});

describe("TDEE compute — macronutrient targets", () => {
  it("sedentary: protein target = 0.8 × weight", () => {
    const parsed = calculator.inputSchema.parse({
      gender: "male", weight: 80, height: 175, age: 30, activityLevel: "sedentary",
    });
    const result = calculator.compute(parsed);
    expect(result.proteinTarget).toBe(Math.round(80 * 0.8));
  });

  it("active: protein target = 1.6 × weight", () => {
    const parsed = calculator.inputSchema.parse({
      gender: "male", weight: 80, height: 175, age: 30, activityLevel: "moderatelyActive",
    });
    const result = calculator.compute(parsed);
    expect(result.proteinTarget).toBe(Math.round(80 * 1.6));
  });

  it("fat target is approximately 30% of TDEE / 9 kcal per gram", () => {
    const parsed = calculator.inputSchema.parse({
      gender: "female", weight: 60, height: 165, age: 30, activityLevel: "lightlyActive",
    });
    const result = calculator.compute(parsed);
    const expectedFat = Math.round(((result.tdee as number) * 0.3) / 9);
    expect(Math.abs((result.fatTarget as number) - expectedFat)).toBeLessThanOrEqual(2);
  });

  it("carb target is non-negative", () => {
    const parsed = calculator.inputSchema.parse({
      gender: "male", weight: 100, height: 190, age: 25, activityLevel: "extraActive",
    });
    const result = calculator.compute(parsed);
    expect((result.carbTarget as number)).toBeGreaterThanOrEqual(0);
  });
});
