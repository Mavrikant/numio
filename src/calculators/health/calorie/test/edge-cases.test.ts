import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Calorie edge cases — schema validation", () => {
  it("rejects weight of 0", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "male", weight: 0, height: 170, age: 30, activity: "moderate", goal: "maintain" }),
    ).toThrow();
  });

  it("rejects invalid activity value", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "male", weight: 70, height: 170, age: 30, activity: "ultraMarathon", goal: "maintain" }),
    ).toThrow();
  });

  it("rejects invalid goal value", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "male", weight: 70, height: 170, age: 30, activity: "moderate", goal: "superGain" }),
    ).toThrow();
  });

  it("rejects age above 120", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "male", weight: 70, height: 170, age: 121, activity: "moderate", goal: "maintain" }),
    ).toThrow();
  });

  it("rejects height above 250", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "male", weight: 70, height: 251, age: 30, activity: "moderate", goal: "maintain" }),
    ).toThrow();
  });

  it("assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { gender: "male", weight: 70, height: 170, age: 30, activity: "moderate", goal: "maintain" },
      { gender: "male", weight: -1, height: 170, age: 30, activity: "moderate", goal: "maintain" },
    );
  });
});

describe("Calorie edge cases — compute purity", () => {
  it("produces identical results for same inputs", () => {
    const inputs = calculator.inputSchema.parse({
      gender: "female", weight: 65, height: 165, age: 28, activity: "light", goal: "lose",
    });
    assertComputeIsPure(calculator, inputs);
  });
});

describe("Calorie edge cases — output validity", () => {
  it("all outputs are finite numbers", () => {
    const parsed = calculator.inputSchema.parse({
      gender: "male", weight: 70, height: 175, age: 30, activity: "moderate", goal: "maintain",
    });
    const result = calculator.compute(parsed);
    expect(isFinite(result.tdee as number)).toBe(true);
    expect(isFinite(result.target as number)).toBe(true);
    expect(isFinite(result.deficit as number)).toBe(true);
  });

  it("maintain goal produces zero deficit", () => {
    const parsed = calculator.inputSchema.parse({
      gender: "male", weight: 70, height: 175, age: 30, activity: "moderate", goal: "maintain",
    });
    const result = calculator.compute(parsed);
    expect(result.deficit).toBe(0);
    expect(result.target).toBe(result.tdee);
  });
});
