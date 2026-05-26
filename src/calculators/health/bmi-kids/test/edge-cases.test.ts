import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("BMI Kids edge cases — schema validation", () => {
  it("rejects age below 2", () => {
    expect(() =>
      calculator.inputSchema.parse({ age: 1, gender: "male", weight: 12, height: 85, unit: "metric" }),
    ).toThrow();
  });

  it("rejects age above 20", () => {
    expect(() =>
      calculator.inputSchema.parse({ age: 21, gender: "male", weight: 60, height: 170, unit: "metric" }),
    ).toThrow();
  });

  it("rejects fractional age", () => {
    expect(() =>
      calculator.inputSchema.parse({ age: 5.5, gender: "male", weight: 20, height: 110, unit: "metric" }),
    ).toThrow();
  });

  it("rejects zero weight", () => {
    expect(() =>
      calculator.inputSchema.parse({ age: 10, gender: "male", weight: 0, height: 140, unit: "metric" }),
    ).toThrow();
  });

  it("rejects negative height", () => {
    expect(() =>
      calculator.inputSchema.parse({ age: 10, gender: "male", weight: 35, height: -140, unit: "metric" }),
    ).toThrow();
  });

  it("rejects invalid gender", () => {
    expect(() =>
      calculator.inputSchema.parse({ age: 10, gender: "other", weight: 35, height: 140, unit: "metric" }),
    ).toThrow();
  });

  it("rejects invalid unit", () => {
    expect(() =>
      calculator.inputSchema.parse({ age: 10, gender: "male", weight: 35, height: 140, unit: "pounds" }),
    ).toThrow();
  });

  it("accepts minimum age (2)", () => {
    expect(() =>
      calculator.inputSchema.parse({ age: 2, gender: "male", weight: 12, height: 85, unit: "metric" }),
    ).not.toThrow();
  });

  it("accepts maximum age (20)", () => {
    expect(() =>
      calculator.inputSchema.parse({ age: 20, gender: "female", weight: 55, height: 165, unit: "metric" }),
    ).not.toThrow();
  });

  it("uses assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { age: 10, gender: "male", weight: 35, height: 140, unit: "metric" },
      { age: 0, gender: "male", weight: 35, height: 140, unit: "metric" },
    );
  });
});

describe("BMI Kids edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      age: 10, gender: "male", weight: 35, height: 140, unit: "metric",
    });
    assertComputeIsPure(calculator, inputs);
  });

  it("produces identical results for female imperial inputs", () => {
    const inputs = calculator.inputSchema.parse({
      age: 14, gender: "female", weight: 110, height: 62, unit: "imperial",
    });
    assertComputeIsPure(calculator, inputs);
  });
});
