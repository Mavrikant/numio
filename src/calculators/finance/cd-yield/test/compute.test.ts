import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

// Reference: FDIC CD calculator and standard compound interest formula
// APY = (1 + APR/n)^n - 1
// FV = P × (1 + APR/n)^(n × years)

describe("cd-yield compute — numeric correctness", () => {
  it("$10,000 at 5% APR, 12 months, monthly compounding", () => {
    // APY = (1 + 0.05/12)^12 - 1 = (1.004167)^12 - 1 ≈ 0.05116 → 5.116%
    // FV = 10000 × (1 + 0.05/12)^12 = 10000 × 1.05116 ≈ 10511.62
    // Interest = 511.62
    runNumericTests(calculator, [
      {
        inputs: {
          principal: 10000,
          apr: 5,
          termMonths: 12,
          compoundFreq: 12,
          earlyWithdrawalMonths: 0,
        },
        expected: {
          futureValue: 10511.62,
          interestEarned: 511.62,
          apy: 5.12,
        },
        tolerance: 0.5,
        description: "Reference: standard monthly compound formula",
      },
    ]);
  });

  it("$10,000 at 5% APR, 12 months, annual compounding", () => {
    // APY = (1 + 0.05/1)^1 - 1 = 0.05 = 5%
    // FV = 10000 × 1.05^1 = 10500
    const result = calculator.compute(
      calculator.inputSchema.parse({
        principal: 10000,
        apr: 5,
        termMonths: 12,
        compoundFreq: 1,
        earlyWithdrawalMonths: 0,
      }),
    );
    expect(result.futureValue).toBeCloseTo(10500, 0);
    expect(result.apy).toBeCloseTo(5.0, 1);
  });

  it("zero APR: no interest earned", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        principal: 5000,
        apr: 0,
        termMonths: 24,
        compoundFreq: 12,
        earlyWithdrawalMonths: 0,
      }),
    );
    expect(result.futureValue).toBe(5000);
    expect(result.interestEarned).toBe(0);
    expect(result.apy).toBe(0);
  });

  it("early withdrawal penalty reduces net return", () => {
    // $10,000, 5% APR, 12 months, monthly compound, 3-month penalty
    const result = calculator.compute(
      calculator.inputSchema.parse({
        principal: 10000,
        apr: 5,
        termMonths: 12,
        compoundFreq: 12,
        earlyWithdrawalMonths: 3,
      }),
    );
    // Penalty = interest for 3 months: 10000 × (1 + 0.05/12)^3 - 10000 ≈ 125.52
    expect(result.earlyWithdrawalPenalty).toBeGreaterThan(0);
    expect(result.netReturnAfterPenalty).toBeLessThan(result.interestEarned);
  });

  it("$50,000 at 4.5% APR, 24 months, daily compounding", () => {
    // APY = (1 + 0.045/365)^365 - 1 ≈ 4.603%
    // FV = 50000 × (1 + 0.045/365)^(365 × 2) ≈ 54,715
    runNumericTests(calculator, [
      {
        inputs: {
          principal: 50000,
          apr: 4.5,
          termMonths: 24,
          compoundFreq: 365,
          earlyWithdrawalMonths: 0,
        },
        expected: {
          apy: 4.60,
          interestEarned: 4708.41,
        },
        tolerance: 20,
        description: "24-month daily compounding CD",
      },
    ]);
  });
});
