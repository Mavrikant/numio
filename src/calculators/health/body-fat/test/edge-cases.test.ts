import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Body Fat edge cases — schema validation", () => {
  it("rejects waist smaller than neck", () => {
    expect(() =>
      calculator.inputSchema.parse({
        gender: "male", height: 175, weight: 75, waist: 35, neck: 40,
      }),
    ).toThrow();
  });

  it("rejects female without hip measurement", () => {
    expect(() =>
      calculator.inputSchema.parse({
        gender: "female", height: 165, weight: 60, waist: 75, neck: 33,
        // hip omitted
      }),
    ).toThrow();
  });

  it("accepts male without hip measurement", () => {
    expect(() =>
      calculator.inputSchema.parse({
        gender: "male", height: 175, weight: 75, waist: 85, neck: 37,
      }),
    ).not.toThrow();
  });

  it("rejects height below 50 cm", () => {
    expect(() =>
      calculator.inputSchema.parse({
        gender: "male", height: 49, weight: 75, waist: 85, neck: 37,
      }),
    ).toThrow();
  });

  it("rejects negative weight", () => {
    expect(() =>
      calculator.inputSchema.parse({
        gender: "male", height: 175, weight: -5, waist: 85, neck: 37,
      }),
    ).toThrow();
  });

  it("assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { gender: "male", height: 175, weight: 75, waist: 85, neck: 37 },
      { gender: "male", height: 0, weight: 75, waist: 85, neck: 37 },
    );
  });
});

describe("Body Fat edge cases — compute purity", () => {
  it("produces identical results for same inputs", () => {
    const inputs = calculator.inputSchema.parse({
      gender: "male", height: 175, weight: 80, waist: 85, neck: 37,
    });
    assertComputeIsPure(calculator, inputs);
  });
});

describe("Body Fat edge cases — output validity", () => {
  it("body fat percentage is within [1, 70]", () => {
    const parsed = calculator.inputSchema.parse({
      gender: "male", height: 175, weight: 80, waist: 85, neck: 37,
    });
    const result = calculator.compute(parsed);
    expect((result.bodyFatPct as number)).toBeGreaterThanOrEqual(1);
    expect((result.bodyFatPct as number)).toBeLessThanOrEqual(70);
  });

  it("lean mass is always positive", () => {
    const parsed = calculator.inputSchema.parse({
      gender: "male", height: 175, weight: 80, waist: 85, neck: 37,
    });
    const result = calculator.compute(parsed);
    expect((result.leanMass as number)).toBeGreaterThan(0);
  });
});
