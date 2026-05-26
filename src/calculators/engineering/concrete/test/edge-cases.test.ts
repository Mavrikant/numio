import { describe, it, expect } from "vitest";
import { assertComputeIsPure, assertSchemaValidates } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Concrete edge cases — schema", () => {
  it("rejects invalid shape", () => {
    expect(() =>
      calculator.inputSchema.parse({ shape: "sphere", unit: "metric", length: 5, width: 3, thickness: 0.15, diameter: 0.3, height: 3 }),
    ).toThrow();
  });

  it("rejects negative length", () => {
    expect(() =>
      calculator.inputSchema.parse({ shape: "slab", unit: "metric", length: -1, width: 3, thickness: 0.15, diameter: 0.3, height: 3 }),
    ).toThrow();
  });

  it("assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { shape: "slab", unit: "metric", length: 5, width: 3, thickness: 0.15, diameter: 0.3, height: 3 },
      { shape: "slab", unit: "metric", length: -1, width: 3, thickness: 0.15, diameter: 0.3, height: 3 },
    );
  });
});

describe("Concrete edge cases — compute purity", () => {
  it("produces identical results on multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      shape: "slab", unit: "metric", length: 5, width: 3, thickness: 0.15, diameter: 0.3, height: 3,
    });
    assertComputeIsPure(calculator, inputs);
  });
});

describe("Concrete edge cases — output checks", () => {
  it("volumeYd3 ≈ volumeM3 / 0.764555", () => {
    const inputs = calculator.inputSchema.parse({
      shape: "slab", unit: "metric", length: 5, width: 3, thickness: 0.15, diameter: 0.3, height: 3,
    });
    const result = calculator.compute(inputs);
    expect(result.volumeYd3).toBeCloseTo(result.volumeM3 / 0.764555, 3);
  });

  it("bags40kg is always a positive integer", () => {
    const inputs = calculator.inputSchema.parse({
      shape: "cylinder", unit: "metric", diameter: 0.3, height: 2, length: 1, width: 1, thickness: 0.1,
    });
    const result = calculator.compute(inputs);
    expect(result.bags40kg).toBeGreaterThan(0);
    expect(Number.isInteger(result.bags40kg)).toBe(true);
  });
});
