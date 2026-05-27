import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Percentage Calculator - Edge Cases", () => {
  describe("zero inputs", () => {
    it("should handle zero percentage (0% of 100)", () => {
      const result = compute({
        problemType: "percentage-of",
        value1: 0,
        value2: 100,
      });
      expect(result.result).toBeCloseTo(0, 2);
    });

    it("should handle zero base (25% of 0)", () => {
      const result = compute({
        problemType: "percentage-of",
        value1: 25,
        value2: 0,
      });
      expect(result.result).toBeCloseTo(0, 2);
    });

    it("should handle 0 is what % of 100", () => {
      const result = compute({
        problemType: "what-percentage",
        value1: 0,
        value2: 100,
      });
      expect(result.result).toBeCloseTo(0, 2);
    });
  });

  describe("negative inputs", () => {
    it("should handle negative percentage (-25% of 200)", () => {
      const result = compute({
        problemType: "percentage-of",
        value1: -25,
        value2: 200,
      });
      expect(result.result).toBeCloseTo(-50, 2);
    });

    it("should handle negative base (25% of -200)", () => {
      const result = compute({
        problemType: "percentage-of",
        value1: 25,
        value2: -200,
      });
      expect(result.result).toBeCloseTo(-50, 2);
    });

    it("should handle negative change", () => {
      const result = compute({
        problemType: "percentage-change",
        value1: 100,
        value2: -100,
      });
      expect(result.result).toBeCloseTo(-200, 2);
    });
  });

  describe("large numbers", () => {
    it("should handle large percentages", () => {
      const result = compute({
        problemType: "percentage-of",
        value1: 1000,
        value2: 1000000,
      });
      expect(result.result).toBeCloseTo(10000000, 2);
    });

    it("should handle large base values", () => {
      const result = compute({
        problemType: "what-percentage",
        value1: 1000000,
        value2: 10000000,
      });
      expect(result.result).toBeCloseTo(10, 2);
    });
  });

  describe("very small numbers", () => {
    it("should handle small decimal percentages", () => {
      const result = compute({
        problemType: "percentage-of",
        value1: 0.01,
        value2: 100,
      });
      expect(result.result).toBeCloseTo(0.01, 4);
    });

    it("should handle small decimal bases", () => {
      const result = compute({
        problemType: "percentage-of",
        value1: 50,
        value2: 0.1,
      });
      expect(result.result).toBeCloseTo(0.05, 4);
    });
  });

  describe("floating point precision", () => {
    it("should handle 0.1 + 0.2 like cases", () => {
      const result = compute({
        problemType: "percentage-of",
        value1: 33.33,
        value2: 100,
      });
      expect(result.result).toBeCloseTo(33.33, 2);
    });
  });

  describe("no change scenarios", () => {
    it("should return 0% for no change", () => {
      const result = compute({
        problemType: "percentage-change",
        value1: 100,
        value2: 100,
      });
      expect(result.result).toBe(0);
    });
  });
});
