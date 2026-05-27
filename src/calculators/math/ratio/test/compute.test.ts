import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

// Reference: Euclidean GCD algorithm (en.wikipedia.org/wiki/Greatest_common_divisor)

describe("Ratio compute — numeric correctness", () => {
  it("simplification: 12:18 → 2:3", () => {
    // Reference: GCD(12,18)=6, so 12/6=2, 18/6=3
    runNumericTests(calculator, [
      {
        inputs: { numerator: 12, denominator: 18 },
        expected: {
          simplifiedNumerator: 2,
          simplifiedDenominator: 3,
          decimal: 0.6667,
        },
        tolerance: 0.001,
        description: "12:18 simplified to 2:3",
      },
    ]);
  });

  it("simplification: 15:25 → 3:5", () => {
    // Reference: GCD(15,25)=5, so 15/5=3, 25/5=5
    runNumericTests(calculator, [
      {
        inputs: { numerator: 15, denominator: 25 },
        expected: {
          simplifiedNumerator: 3,
          simplifiedDenominator: 5,
          decimal: 0.6,
        },
        tolerance: 0.001,
        description: "15:25 simplified to 3:5",
      },
    ]);
  });

  it("already simplified: 7:11 → 7:11", () => {
    // Reference: GCD(7,11)=1 (coprime), so no reduction
    runNumericTests(calculator, [
      {
        inputs: { numerator: 7, denominator: 11 },
        expected: {
          simplifiedNumerator: 7,
          simplifiedDenominator: 11,
          percentValue: 63.64,
        },
        tolerance: 0.1,
        description: "7:11 already in simplest form",
      },
    ]);
  });

  it("percent conversion: 3:4 → 75%", () => {
    // Reference: 3/4 = 0.75 = 75%
    runNumericTests(calculator, [
      {
        inputs: { numerator: 3, denominator: 4 },
        expected: {
          simplifiedNumerator: 3,
          simplifiedDenominator: 4,
          percentValue: 75,
        },
        tolerance: 0.01,
        description: "3:4 equals 75%",
      },
    ]);
  });
});
