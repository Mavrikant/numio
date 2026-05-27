import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Weight — edge cases", () => {
  it("milligram to gram: 1000mg = 1g", () => {
    const result = compute({ value: 1000, fromUnit: "mg", toUnit: "g" });
    expect(result.result).toBeCloseTo(1, 4);
  });

  it("metric ton to kilogram: 1 ton = 1000kg", () => {
    const result = compute({ value: 1, fromUnit: "ton", toUnit: "kg" });
    expect(result.result).toBe(1000);
  });

  it("stone to kilogram: 1 stone ≈ 6.35kg", () => {
    const result = compute({ value: 1, fromUnit: "stone", toUnit: "kg" });
    expect(result.result).toBeCloseTo(6.35029318, 4);
  });

  it("same unit: 100kg = 100kg", () => {
    const result = compute({ value: 100, fromUnit: "kg", toUnit: "kg" });
    expect(result.result).toBe(100);
  });
});
