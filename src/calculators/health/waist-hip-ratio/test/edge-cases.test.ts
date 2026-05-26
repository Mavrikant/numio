import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("WHR edge cases — schema validation", () => {
  it("rejects zero waist", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "male", waist: 0, hip: 96, unit: "metric" }),
    ).toThrow();
  });

  it("rejects negative waist", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "male", waist: -10, hip: 96, unit: "metric" }),
    ).toThrow();
  });

  it("rejects zero hip", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "male", waist: 80, hip: 0, unit: "metric" }),
    ).toThrow();
  });

  it("rejects invalid gender", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "other", waist: 80, hip: 96, unit: "metric" }),
    ).toThrow();
  });

  it("rejects invalid unit", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "male", waist: 80, hip: 96, unit: "cm" }),
    ).toThrow();
  });

  it("rejects NaN waist", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "male", waist: NaN, hip: 96, unit: "metric" }),
    ).toThrow();
  });

  it("uses assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { gender: "male", waist: 80, hip: 96, unit: "metric" },
      { gender: "male", waist: 0, hip: 96, unit: "metric" },
    );
  });
});

describe("WHR edge cases — boundary values", () => {
  it("WHR exactly at male moderate/high boundary (1.00) → high risk", () => {
    const inputs = calculator.inputSchema.parse({ gender: "male", waist: 100, hip: 100, unit: "metric" });
    const result = calculator.compute(inputs);
    expect(result.riskCategory).toBe("high");
  });

  it("WHR exactly at female moderate boundary (0.85) → moderate risk", () => {
    // waist/hip = 0.85, e.g. 85/100
    const inputs = calculator.inputSchema.parse({ gender: "female", waist: 85, hip: 100, unit: "metric" });
    const result = calculator.compute(inputs);
    expect(result.riskCategory).toBe("moderate");
  });
});

describe("WHR edge cases — compute purity", () => {
  it("produces identical results across multiple calls (metric)", () => {
    const inputs = calculator.inputSchema.parse({ gender: "male", waist: 85, hip: 100, unit: "metric" });
    assertComputeIsPure(calculator, inputs);
  });

  it("produces identical results across multiple calls (imperial)", () => {
    const inputs = calculator.inputSchema.parse({ gender: "female", waist: 32, hip: 40, unit: "imperial" });
    assertComputeIsPure(calculator, inputs);
  });
});
