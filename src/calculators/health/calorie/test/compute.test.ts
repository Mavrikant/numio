import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Calorie/TDEE compute — numeric correctness", () => {
  it("male 70kg 175cm 30y sedentary → TDEE ~1978", () => {
    // BMR = 10×70 + 6.25×175 - 5×30 + 5 = 1648.75; TDEE = 1648.75 × 1.2 = 1978.5 → 1979
    runNumericTests(calculator, [
      {
        inputs: { gender: "male", weight: 70, height: 175, age: 30, activity: "sedentary", goal: "maintain" },
        expected: { tdee: 1979, target: 1979, deficit: 0 },
        tolerance: 2,
      },
    ]);
  });

  it("male 70kg 175cm 30y moderate → TDEE ~2556", () => {
    // BMR = 1648.75; TDEE = 1648.75 × 1.55 ≈ 2555.56 → 2556
    runNumericTests(calculator, [
      {
        inputs: { gender: "male", weight: 70, height: 175, age: 30, activity: "moderate", goal: "maintain" },
        expected: { tdee: 2556, target: 2556 },
        tolerance: 2,
      },
    ]);
  });

  it("goal lose: target = TDEE - 500", () => {
    const parsed = calculator.inputSchema.parse({
      gender: "male", weight: 70, height: 175, age: 30, activity: "moderate", goal: "lose",
    });
    const result = calculator.compute(parsed);
    expect((result.target as number)).toBe((result.tdee as number) - 500);
    expect((result.deficit as number)).toBe(-500);
  });

  it("goal gain: target = TDEE + 500", () => {
    const parsed = calculator.inputSchema.parse({
      gender: "male", weight: 70, height: 175, age: 30, activity: "moderate", goal: "gain",
    });
    const result = calculator.compute(parsed);
    expect((result.target as number)).toBe((result.tdee as number) + 500);
    expect((result.deficit as number)).toBe(500);
  });

  it("female lose-fast: minimum intake floor applied (1200 kcal)", () => {
    // Tiny woman: very low BMR, lose-fast would go below 1200
    const parsed = calculator.inputSchema.parse({
      gender: "female", weight: 45, height: 152, age: 65, activity: "sedentary", goal: "lose-fast",
    });
    const result = calculator.compute(parsed);
    // Target must be at least 1200
    expect((result.target as number)).toBeGreaterThanOrEqual(1200);
  });

  it("male lose-fast: minimum intake floor applied (1500 kcal)", () => {
    const parsed = calculator.inputSchema.parse({
      gender: "male", weight: 50, height: 155, age: 70, activity: "sedentary", goal: "lose-fast",
    });
    const result = calculator.compute(parsed);
    expect((result.target as number)).toBeGreaterThanOrEqual(1500);
  });

  it("very active male → highest TDEE", () => {
    const parsedSed = calculator.inputSchema.parse({
      gender: "male", weight: 80, height: 180, age: 25, activity: "sedentary", goal: "maintain",
    });
    const parsedActive = calculator.inputSchema.parse({
      gender: "male", weight: 80, height: 180, age: 25, activity: "veryActive", goal: "maintain",
    });
    const sedResult = calculator.compute(parsedSed);
    const activeResult = calculator.compute(parsedActive);
    expect((activeResult.tdee as number)).toBeGreaterThan((sedResult.tdee as number));
  });
});
