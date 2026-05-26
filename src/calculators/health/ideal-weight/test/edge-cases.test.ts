import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Ideal Weight edge cases — schema validation", () => {
  it("rejects height below 50 cm (metric)", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "male", height: 49, unit: "metric" }),
    ).toThrow();
  });

  it("rejects height above 250 cm (metric)", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "male", height: 251, unit: "metric" }),
    ).toThrow();
  });

  it("rejects height below 20 inches (imperial)", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "male", height: 19, unit: "imperial" }),
    ).toThrow();
  });

  it("rejects height above 100 inches (imperial)", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "male", height: 101, unit: "imperial" }),
    ).toThrow();
  });

  it("rejects negative height", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "male", height: -10, unit: "metric" }),
    ).toThrow();
  });

  it("rejects invalid gender", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "unknown", height: 170, unit: "metric" }),
    ).toThrow();
  });

  it("assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { gender: "male", height: 170, unit: "metric" },
      { gender: "male", height: 0, unit: "metric" },
    );
  });
});

describe("Ideal Weight edge cases — compute purity", () => {
  it("produces identical results for same inputs", () => {
    const inputs = calculator.inputSchema.parse({ gender: "female", height: 163, unit: "metric" });
    assertComputeIsPure(calculator, inputs);
  });
});

describe("Ideal Weight edge cases — result sanity", () => {
  it("all 4 formulas return positive weights", () => {
    const parsed = calculator.inputSchema.parse({ gender: "male", height: 175, unit: "metric" });
    const result = calculator.compute(parsed);
    expect(result.devine as number).toBeGreaterThan(0);
    expect(result.robinson as number).toBeGreaterThan(0);
    expect(result.miller as number).toBeGreaterThan(0);
    expect(result.hamwi as number).toBeGreaterThan(0);
  });

  it("male results are higher than female at same height", () => {
    const male = calculator.compute(calculator.inputSchema.parse({ gender: "male", height: 170, unit: "metric" }));
    const female = calculator.compute(calculator.inputSchema.parse({ gender: "female", height: 170, unit: "metric" }));
    expect(male.devine as number).toBeGreaterThan(female.devine as number);
  });
});
