import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("roi compute — numeric correctness", () => {
  // Reference: https://www.investopedia.com/terms/r/returnoninvestment.asp

  it("basic ROI: $10,000 → $15,000 in 1 year = 50%", () => {
    runNumericTests(calculator, [
      {
        inputs: { initialInvestment: 10000, finalValue: 15000, years: 1 },
        expected: {
          roi: 50,
          netProfit: 5000,
          moic: 1.5,
        },
        tolerance: 0.001,
        description: "10000 → 15000 in 1yr: ROI = 50%, netProfit = 5000, MOIC = 1.5x",
      },
    ]);
  });

  it("CAGR: $10,000 → $20,000 in 10 years = 7.177% annualized", () => {
    // CAGR = (20000/10000)^(1/10) - 1 = 2^0.1 - 1 = 0.07177 = 7.177%
    runNumericTests(calculator, [
      {
        inputs: { initialInvestment: 10000, finalValue: 20000, years: 10 },
        expected: {
          roi: 100,
          annualizedRoi: 7.177,
          moic: 2.0,
        },
        tolerance: 0.01,
        description: "10000 → 20000 in 10yr: ROI=100%, CAGR≈7.177%, MOIC=2.0x",
      },
    ]);
  });

  it("negative ROI (loss): $10,000 → $8,000 in 2 years = -20%", () => {
    // ROI = (8000 - 10000) / 10000 * 100 = -20%
    // CAGR = (8000/10000)^(1/2) - 1 = 0.8^0.5 - 1 = 0.8944 - 1 = -10.557%
    runNumericTests(calculator, [
      {
        inputs: { initialInvestment: 10000, finalValue: 8000, years: 2 },
        expected: {
          roi: -20,
          netProfit: -2000,
          moic: 0.8,
        },
        tolerance: 0.01,
        description: "Loss scenario: 10000 → 8000 in 2yr: ROI=-20%, netProfit=-2000",
      },
    ]);
  });

  it("Rule of 72: at 9% CAGR, years to double ≈ 8 years", () => {
    // 10000 → 17958.56 in 8 years at 9% = (1.09)^8 * 10000 ≈ 19925.6 — use exact double case
    // For 9% exact: ruleOf72Years = 72/9 = 8
    // Use 10000 → 23674 in 10 years (CAGR ≈ 9% approx)
    // Simpler: invest 10000, final 19.72... Actually let's test it directly
    // At exactly 9% CAGR: finalValue = 10000 * (1.09)^10 = 23673.64
    const result = calculator.compute(
      calculator.inputSchema.parse({
        initialInvestment: 10000,
        finalValue: 23673.64,
        years: 10,
      }),
    );
    // annualizedRoi ≈ 9%, ruleOf72Years ≈ 72/9 = 8
    expect(result.annualizedRoi).toBeCloseTo(9, 1);
    expect(result.ruleOf72Years).toBeCloseTo(8, 0);
  });

  it("MOIC of 3x: $5,000 → $15,000", () => {
    // MOIC = 15000 / 5000 = 3.0
    // ROI = (15000 - 5000) / 5000 * 100 = 200%
    runNumericTests(calculator, [
      {
        inputs: { initialInvestment: 5000, finalValue: 15000, years: 5 },
        expected: {
          roi: 200,
          moic: 3.0,
          netProfit: 10000,
        },
        tolerance: 0.001,
        description: "5000 → 15000: ROI=200%, MOIC=3.0x, netProfit=10000",
      },
    ]);
  });

  it("breakeven: finalValue === initialInvestment → ROI=0, MOIC=1", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        initialInvestment: 10000,
        finalValue: 10000,
        years: 5,
      }),
    );
    expect(result.roi).toBeCloseTo(0, 4);
    expect(result.moic).toBeCloseTo(1, 4);
    expect(result.netProfit).toBeCloseTo(0, 4);
    expect(result.annualizedRoi).toBeCloseTo(0, 4);
  });
});
