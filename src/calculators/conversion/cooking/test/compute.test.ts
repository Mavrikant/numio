import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Cooking Unit Converter - compute", () => {
  describe("Volume conversions", () => {
    it("should convert 1 cup to milliliters", () => {
      const result = compute({ value: 1, fromUnit: "cup", toUnit: "ml" });
      expect(result.toValue).toBeCloseTo(236.588, 1);
    });

    it("should convert 1 cup to tablespoons", () => {
      const result = compute({ value: 1, fromUnit: "cup", toUnit: "tbsp" });
      expect(result.toValue).toBeCloseTo(16, 1);
    });

    it("should convert 1 tbsp to teaspoons", () => {
      const result = compute({ value: 1, fromUnit: "tbsp", toUnit: "tsp" });
      expect(result.toValue).toBeCloseTo(3, 1);
    });
  });

  describe("Weight conversions with ingredient density", () => {
    it("should convert 1 cup flour to grams", () => {
      const result = compute({ value: 1, fromUnit: "cup", toUnit: "g", ingredient: "flour" });
      expect(result.toValue).toBeCloseTo(125, 0);
    });

    it("should convert 1 cup butter to grams", () => {
      const result = compute({ value: 1, fromUnit: "cup", toUnit: "g", ingredient: "butter" });
      expect(result.toValue).toBeCloseTo(215, 0);
    });

    it("should convert 1 cup sugar to grams", () => {
      const result = compute({ value: 1, fromUnit: "cup", toUnit: "g", ingredient: "sugar" });
      expect(result.toValue).toBeCloseTo(200, 0);
    });
  });

  describe("Default density behavior", () => {
    it("should use water density for volume-weight conversion", () => {
      const result = compute({ value: 1, fromUnit: "cup", toUnit: "g" });
      expect(result.toValue).toBeCloseTo(236.588, 0);
    });
  });
});
