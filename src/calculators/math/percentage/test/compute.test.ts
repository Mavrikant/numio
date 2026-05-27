import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Percentage Calculator - compute()", () => {
  describe("percentage-of: X% of Y", () => {
    it("should calculate 25% of 200", () => {
      // Reference: basic percentage calculation
      const result = compute({
        problemType: "percentage-of",
        value1: 25,
        value2: 200,
      });
      expect(result.result).toBeCloseTo(50, 2);
    });

    it("should calculate 10% of 1000", () => {
      // Reference: basic percentage
      const result = compute({
        problemType: "percentage-of",
        value1: 10,
        value2: 1000,
      });
      expect(result.result).toBeCloseTo(100, 2);
    });

    it("should handle decimal percentages", () => {
      // Reference: 12.5% of 80 = 10
      const result = compute({
        problemType: "percentage-of",
        value1: 12.5,
        value2: 80,
      });
      expect(result.result).toBeCloseTo(10, 2);
    });
  });

  describe("what-percentage: X is what % of Y", () => {
    it("should calculate 25 is what % of 500", () => {
      // Reference: (25/500)*100 = 5%
      const result = compute({
        problemType: "what-percentage",
        value1: 25,
        value2: 500,
      });
      expect(result.result).toBeCloseTo(5, 2);
    });

    it("should calculate 50 is what % of 200", () => {
      // Reference: (50/200)*100 = 25%
      const result = compute({
        problemType: "what-percentage",
        value1: 50,
        value2: 200,
      });
      expect(result.result).toBeCloseTo(25, 2);
    });

    it("should handle zero denominator", () => {
      const result = compute({
        problemType: "what-percentage",
        value1: 50,
        value2: 0,
      });
      expect(result.result).toBe(0);
    });
  });

  describe("percentage-change: (new - old) / old * 100", () => {
    it("should calculate % increase from 100 to 150", () => {
      // Reference: ((150-100)/100)*100 = 50%
      const result = compute({
        problemType: "percentage-change",
        value1: 100,
        value2: 150,
      });
      expect(result.result).toBeCloseTo(50, 2);
    });

    it("should calculate % decrease from 200 to 150", () => {
      // Reference: ((150-200)/200)*100 = -25%
      const result = compute({
        problemType: "percentage-change",
        value1: 200,
        value2: 150,
      });
      expect(result.result).toBeCloseTo(-25, 2);
    });

    it("should handle zero old value", () => {
      const result = compute({
        problemType: "percentage-change",
        value1: 0,
        value2: 100,
      });
      expect(result.result).toBe(Infinity);
    });
  });
});
