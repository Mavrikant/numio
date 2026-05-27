import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Percentage Calculator - compute()", () => {
  describe("what_is_x_pct_of_y: X% of Y", () => {
    it("should calculate 25% of 200", () => {
      // Reference: basic percentage calculation
      const result = compute({
        mode: "what_is_x_pct_of_y",
        x: 25,
        y: 200,
      });
      expect(result.result).toBeCloseTo(50, 2);
    });

    it("should calculate 10% of 1000", () => {
      // Reference: basic percentage
      const result = compute({
        mode: "what_is_x_pct_of_y",
        x: 10,
        y: 1000,
      });
      expect(result.result).toBeCloseTo(100, 2);
    });

    it("should handle decimal percentages", () => {
      // Reference: 12.5% of 80 = 10
      const result = compute({
        mode: "what_is_x_pct_of_y",
        x: 12.5,
        y: 80,
      });
      expect(result.result).toBeCloseTo(10, 2);
    });
  });

  describe("x_is_what_pct_of_y: X is what % of Y", () => {
    it("should calculate 25 is what % of 500", () => {
      // Reference: (25/500)*100 = 5%
      const result = compute({
        mode: "x_is_what_pct_of_y",
        x: 25,
        y: 500,
      });
      expect(result.result).toBeCloseTo(5, 2);
    });

    it("should calculate 50 is what % of 200", () => {
      // Reference: (50/200)*100 = 25%
      const result = compute({
        mode: "x_is_what_pct_of_y",
        x: 50,
        y: 200,
      });
      expect(result.result).toBeCloseTo(25, 2);
    });

    it("should handle zero denominator", () => {
      const result = compute({
        mode: "x_is_what_pct_of_y",
        x: 50,
        y: 0,
      });
      expect(result.result).toBe(0);
    });
  });

  describe("pct_change: (new - old) / old * 100", () => {
    it("should calculate % increase from 100 to 150", () => {
      // Reference: ((150-100)/100)*100 = 50%
      const result = compute({
        mode: "pct_change",
        x: 100,
        y: 150,
      });
      expect(result.result).toBeCloseTo(50, 2);
    });

    it("should calculate % decrease from 200 to 150", () => {
      // Reference: ((150-200)/200)*100 = -25%
      const result = compute({
        mode: "pct_change",
        x: 200,
        y: 150,
      });
      expect(result.result).toBeCloseTo(-25, 2);
    });

    it("should handle zero old value", () => {
      const result = compute({
        mode: "pct_change",
        x: 0,
        y: 100,
      });
      expect(result.result).toBe(Infinity);
    });
  });
});
