import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Percentage Calculator - Edge Cases", () => {
  describe("zero inputs", () => {
    it("should handle zero percentage (0% of 100)", () => {
      const result = compute({
        mode: "what_is_x_pct_of_y",
        x: 0,
        y: 100,
      });
      expect(result.result).toBeCloseTo(0, 2);
    });

    it("should handle zero base (25% of 0)", () => {
      const result = compute({
        mode: "what_is_x_pct_of_y",
        x: 25,
        y: 0,
      });
      expect(result.result).toBeCloseTo(0, 2);
    });

    it("should handle 0 is what % of 100", () => {
      const result = compute({
        mode: "x_is_what_pct_of_y",
        x: 0,
        y: 100,
      });
      expect(result.result).toBeCloseTo(0, 2);
    });
  });

  describe("negative inputs", () => {
    it("should handle negative percentage (-25% of 200)", () => {
      const result = compute({
        mode: "what_is_x_pct_of_y",
        x: -25,
        y: 200,
      });
      expect(result.result).toBeCloseTo(-50, 2);
    });

    it("should handle negative base (25% of -200)", () => {
      const result = compute({
        mode: "what_is_x_pct_of_y",
        x: 25,
        y: -200,
      });
      expect(result.result).toBeCloseTo(-50, 2);
    });

    it("should handle negative change", () => {
      const result = compute({
        mode: "pct_change",
        x: 100,
        y: -100,
      });
      expect(result.result).toBeCloseTo(-200, 2);
    });
  });

  describe("large numbers", () => {
    it("should handle large percentages", () => {
      // 1000% of 1,000,000 = 10,000,000
      const result = compute({
        mode: "what_is_x_pct_of_y",
        x: 1000,
        y: 1000000,
      });
      expect(result.result).toBeCloseTo(10000000, 2);
    });

    it("should handle large base values", () => {
      // 1,000,000 is what % of 10,000,000 → 10
      const result = compute({
        mode: "x_is_what_pct_of_y",
        x: 1000000,
        y: 10000000,
      });
      expect(result.result).toBeCloseTo(10, 2);
    });
  });

  describe("very small numbers", () => {
    it("should handle small decimal percentages", () => {
      // 0.01% of 100 = 0.01
      const result = compute({
        mode: "what_is_x_pct_of_y",
        x: 0.01,
        y: 100,
      });
      expect(result.result).toBeCloseTo(0.01, 4);
    });

    it("should handle small decimal bases", () => {
      // 50% of 0.1 = 0.05
      const result = compute({
        mode: "what_is_x_pct_of_y",
        x: 50,
        y: 0.1,
      });
      expect(result.result).toBeCloseTo(0.05, 4);
    });
  });

  describe("floating point precision", () => {
    it("should handle 0.1 + 0.2 like cases", () => {
      // 33.33% of 100 = 33.33
      const result = compute({
        mode: "what_is_x_pct_of_y",
        x: 33.33,
        y: 100,
      });
      expect(result.result).toBeCloseTo(33.33, 2);
    });
  });

  describe("no change scenarios", () => {
    it("should return 0% for no change", () => {
      const result = compute({
        mode: "pct_change",
        x: 100,
        y: 100,
      });
      expect(result.result).toBe(0);
    });
  });
});
