import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Cooking Unit Converter - edge cases", () => {
  it("should handle very small amounts", () => {
    const result = compute({ value: 0.25, fromUnit: "tsp", toUnit: "ml" });
    expect(result.toValue).toBeCloseTo(1.232, 2);
  });

  it("should handle large amounts", () => {
    const result = compute({ value: 2, fromUnit: "l", toUnit: "cup" });
    expect(result.toValue).toBeCloseTo(8.454, 1);
  });

  it("should be case-insensitive for ingredient lookup", () => {
    const resultLower = compute({ value: 1, fromUnit: "cup", toUnit: "g", ingredient: "flour" });
    const resultUpper = compute({ value: 1, fromUnit: "cup", toUnit: "g", ingredient: "FLOUR" });
    expect(resultLower.toValue).toBeCloseTo(resultUpper.toValue, 1);
  });

  it("should verify roundtrip conversion", () => {
    const startGrams = 125;
    const toVolume = compute({ value: startGrams, fromUnit: "g", toUnit: "cup", ingredient: "flour" });
    const backToWeight = compute({ value: toVolume.toValue, fromUnit: "cup", toUnit: "g", ingredient: "flour" });
    expect(backToWeight.toValue).toBeCloseTo(startGrams, 0);
  });
});
