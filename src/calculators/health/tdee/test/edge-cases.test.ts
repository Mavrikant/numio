import { describe, it, expect } from "vitest";
import { assertComputeIsPure } from "@/test-utils";
import calculator from "../definition";

describe("TDEE edge cases — schema validation", () => {
  it("rejects weight below 20 kg", () => {
    expect(() =>
      calculator.inputSchema.parse({
        gender: "male", weight: 15, height: 175, age: 30, activityLevel: "sedentary",
      }),
    ).toThrow();
  });

  it("rejects weight above 300 kg", () => {
    expect(() =>
      calculator.inputSchema.parse({
        gender: "male", weight: 310, height: 175, age: 30, activityLevel: "sedentary",
      }),
    ).toThrow();
  });

  it("rejects height below 100 cm", () => {
    expect(() =>
      calculator.inputSchema.parse({
        gender: "male", weight: 70, height: 99, age: 30, activityLevel: "sedentary",
      }),
    ).toThrow();
  });

  it("rejects height above 250 cm", () => {
    expect(() =>
      calculator.inputSchema.parse({
        gender: "male", weight: 70, height: 260, age: 30, activityLevel: "sedentary",
      }),
    ).toThrow();
  });

  it("rejects age below 15", () => {
    expect(() =>
      calculator.inputSchema.parse({
        gender: "male", weight: 70, height: 175, age: 14, activityLevel: "sedentary",
      }),
    ).toThrow();
  });

  it("rejects age above 100", () => {
    expect(() =>
      calculator.inputSchema.parse({
        gender: "male", weight: 70, height: 175, age: 101, activityLevel: "sedentary",
      }),
    ).toThrow();
  });

  it("rejects invalid gender", () => {
    expect(() =>
      calculator.inputSchema.parse({
        gender: "other", weight: 70, height: 175, age: 30, activityLevel: "sedentary",
      }),
    ).toThrow();
  });

  it("rejects invalid activity level", () => {
    expect(() =>
      calculator.inputSchema.parse({
        gender: "male", weight: 70, height: 175, age: 30, activityLevel: "superActive",
      }),
    ).toThrow();
  });

  it("accepts all valid activity levels", () => {
    const levels = ["sedentary", "lightlyActive", "moderatelyActive", "veryActive", "extraActive", "athlete"] as const;
    for (const activityLevel of levels) {
      expect(() =>
        calculator.inputSchema.parse({
          gender: "male", weight: 70, height: 175, age: 30, activityLevel,
        }),
      ).not.toThrow();
    }
  });
});

describe("TDEE edge cases — compute purity", () => {
  it("produces identical results for same inputs (male sedentary)", () => {
    const inputs = calculator.inputSchema.parse({
      gender: "male", weight: 70, height: 175, age: 30, activityLevel: "sedentary",
    });
    assertComputeIsPure(calculator, inputs);
  });

  it("produces identical results for same inputs (female athlete)", () => {
    const inputs = calculator.inputSchema.parse({
      gender: "female", weight: 60, height: 165, age: 25, activityLevel: "athlete",
    });
    assertComputeIsPure(calculator, inputs);
  });
});

describe("TDEE edge cases — output validity", () => {
  it("BMR is always positive", () => {
    const parsed = calculator.inputSchema.parse({
      gender: "male", weight: 20, height: 100, age: 100, activityLevel: "sedentary",
    });
    const result = calculator.compute(parsed);
    expect((result.bmr as number)).toBeGreaterThan(0);
  });

  it("TDEE is always greater than BMR", () => {
    const parsed = calculator.inputSchema.parse({
      gender: "female", weight: 50, height: 155, age: 50, activityLevel: "sedentary",
    });
    const result = calculator.compute(parsed);
    expect((result.tdee as number)).toBeGreaterThan((result.bmr as number));
  });

  it("female BMR is lower than male BMR with same stats", () => {
    const maleParsed = calculator.inputSchema.parse({
      gender: "male", weight: 70, height: 175, age: 30, activityLevel: "sedentary",
    });
    const femaleParsed = calculator.inputSchema.parse({
      gender: "female", weight: 70, height: 175, age: 30, activityLevel: "sedentary",
    });
    const maleResult = calculator.compute(maleParsed);
    const femaleResult = calculator.compute(femaleParsed);
    // Male constant +5 vs female -161 = 166 kcal difference
    expect((maleResult.bmr as number)).toBeGreaterThan((femaleResult.bmr as number));
    expect((maleResult.bmr as number) - (femaleResult.bmr as number)).toBeCloseTo(166, 0);
  });

  it("protein target is non-negative", () => {
    const parsed = calculator.inputSchema.parse({
      gender: "male", weight: 20, height: 100, age: 100, activityLevel: "sedentary",
    });
    const result = calculator.compute(parsed);
    expect((result.proteinTarget as number)).toBeGreaterThan(0);
  });
});
