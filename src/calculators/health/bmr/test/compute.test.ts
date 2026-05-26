import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("BMR compute — Mifflin-St Jeor numeric correctness", () => {
  it("Mifflin: male 70kg 175cm age 30 → 1648.75 kcal", () => {
    // 10×70 + 6.25×175 - 5×30 + 5 = 700 + 1093.75 - 150 + 5 = 1648.75
    runNumericTests(calculator, [
      {
        inputs: { formula: "mifflin", gender: "male", weight: 70, height: 175, age: 30 },
        expected: { bmr: 1648.75 },
        tolerance: 0.5,
      },
    ]);
  });

  it("Mifflin: female 60kg 162cm age 25 → 1348.5 kcal", () => {
    // 10×60 + 6.25×162 - 5×25 - 161 = 600 + 1012.5 - 125 - 161 = 1326.5
    runNumericTests(calculator, [
      {
        inputs: { formula: "mifflin", gender: "female", weight: 60, height: 162, age: 25 },
        expected: { bmr: 1326.5 },
        tolerance: 0.5,
      },
    ]);
  });

  it("Mifflin: male 90kg 180cm age 45 → 1985 kcal", () => {
    // 10×90 + 6.25×180 - 5×45 + 5 = 900 + 1125 - 225 + 5 = 1805
    runNumericTests(calculator, [
      {
        inputs: { formula: "mifflin", gender: "male", weight: 90, height: 180, age: 45 },
        expected: { bmr: 1805 },
        tolerance: 0.5,
      },
    ]);
  });

  it("Mifflin: female 55kg 155cm age 60 → 1074 kcal", () => {
    // 10×55 + 6.25×155 - 5×60 - 161 = 550 + 968.75 - 300 - 161 = 1057.75
    runNumericTests(calculator, [
      {
        inputs: { formula: "mifflin", gender: "female", weight: 55, height: 155, age: 60 },
        expected: { bmr: 1057.75 },
        tolerance: 0.5,
      },
    ]);
  });
});

describe("BMR compute — Harris-Benedict numeric correctness", () => {
  it("Harris-Benedict: male 70kg 175cm age 30", () => {
    // 88.362 + 13.397×70 + 4.799×175 - 5.677×30
    // = 88.362 + 937.79 + 839.825 - 170.31 = 1695.667
    runNumericTests(calculator, [
      {
        inputs: { formula: "harris", gender: "male", weight: 70, height: 175, age: 30 },
        expected: { bmr: 1695.667 },
        tolerance: 1,
      },
    ]);
  });

  it("Harris-Benedict: female 60kg 162cm age 25", () => {
    // 447.593 + 9.247×60 + 3.098×162 - 4.330×25
    // = 447.593 + 554.82 + 501.876 - 108.25 = 1396.039
    runNumericTests(calculator, [
      {
        inputs: { formula: "harris", gender: "female", weight: 60, height: 162, age: 25 },
        expected: { bmr: 1396.039 },
        tolerance: 1,
      },
    ]);
  });
});

describe("BMR compute — result shape", () => {
  it("returns a bmr key as a number", () => {
    const parsed = calculator.inputSchema.parse({
      formula: "mifflin", gender: "male", weight: 70, height: 175, age: 30,
    });
    const result = calculator.compute(parsed);
    expect(typeof result.bmr).toBe("number");
    expect(isFinite(result.bmr as number)).toBe(true);
    expect((result.bmr as number)).toBeGreaterThan(0);
  });
});
