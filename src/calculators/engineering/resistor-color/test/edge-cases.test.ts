import { describe, it, expect } from "vitest";
import { assertComputeIsPure, assertSchemaValidates } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Resistor Color Code edge cases — schema", () => {
  it("rejects band1 out of range (>9)", () => {
    expect(() =>
      calculator.inputSchema.parse({ bandCount: "4", band1: 10, band2: 0, band3: 0, multiplierBand: 2, toleranceBand: 10 }),
    ).toThrow();
  });

  it("rejects band1 negative", () => {
    expect(() =>
      calculator.inputSchema.parse({ bandCount: "4", band1: -1, band2: 0, band3: 0, multiplierBand: 2, toleranceBand: 10 }),
    ).toThrow();
  });

  it("rejects invalid bandCount", () => {
    expect(() =>
      calculator.inputSchema.parse({ bandCount: "6", band1: 1, band2: 0, band3: 0, multiplierBand: 2, toleranceBand: 10 }),
    ).toThrow();
  });

  it("assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { bandCount: "4", band1: 1, band2: 0, band3: 0, multiplierBand: 2, toleranceBand: 10 },
      { bandCount: "4", band1: -1, band2: 0, band3: 0, multiplierBand: 2, toleranceBand: 10 },
    );
  });
});

describe("Resistor Color Code edge cases — compute purity", () => {
  it("produces identical results on multiple calls", () => {
    const inputs = calculator.inputSchema.parse({ bandCount: "4", band1: 1, band2: 0, band3: 0, multiplierBand: 2, toleranceBand: 10 });
    assertComputeIsPure(calculator, inputs);
  });
});

describe("Resistor Color Code edge cases — output checks", () => {
  it("minValue < resistance < maxValue (for nonzero tolerance)", () => {
    const inputs = calculator.inputSchema.parse({ bandCount: "4", band1: 4, band2: 7, band3: 0, multiplierBand: 3, toleranceBand: 10 });
    const result = calculator.compute(inputs);
    expect(result.minValue).toBeLessThan(result.resistance);
    expect(result.maxValue).toBeGreaterThan(result.resistance);
  });

  it("5-band decoder uses 3 significant digits correctly", () => {
    // Brown-Green-Black-Brown-Brown = 150 × 10 = 1500Ω
    const inputs = calculator.inputSchema.parse({ bandCount: "5", band1: 1, band2: 5, band3: 0, multiplierBand: 1, toleranceBand: 1 });
    const result = calculator.compute(inputs);
    expect(result.resistance).toBe(1500);
  });

  it("colorName1 is a valid color string", () => {
    const inputs = calculator.inputSchema.parse({ bandCount: "4", band1: 3, band2: 3, band3: 0, multiplierBand: 1, toleranceBand: 11 });
    const result = calculator.compute(inputs);
    expect(typeof result.colorName1).toBe("string");
    expect(result.colorName1.length).toBeGreaterThan(0);
  });
});
