import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Break-even compute — numeric correctness", () => {
  it("classic Investopedia example: F=$10k, V=$5, P=$15 → 1000 units", () => {
    // Reference: https://www.investopedia.com/terms/b/breakevenanalysis.asp
    // CM = 15 - 5 = 10; Q_BE = 10000 / 10 = 1000 units; Revenue = 1000 × 15 = $15,000
    // CM% = 10/15 = 66.6667%
    runNumericTests(calculator, [
      {
        inputs: { fixedCosts: 10000, variableCostPerUnit: 5, pricePerUnit: 15 },
        expected: {
          breakEvenUnits: 1000,
          breakEvenRevenue: 15000,
          contributionMarginPerUnit: 10,
          contributionMarginPercent: 66.67,
        },
        tolerance: 0.01,
      },
    ]);
  });

  it("small bakery: F=$2,400/mo, V=$1.20 per loaf, P=$4 → 706 loaves (rounded)", () => {
    // CM = 4 - 1.20 = 2.80; Q_BE = 2400 / 2.80 = 857.1428...
    runNumericTests(calculator, [
      {
        inputs: { fixedCosts: 2400, variableCostPerUnit: 1.2, pricePerUnit: 4 },
        expected: {
          breakEvenUnits: 857.14,
          contributionMarginPerUnit: 2.8,
        },
        tolerance: 0.05,
      },
    ]);
  });

  it("SaaS-style: F=$120k, V=$2, P=$50 → 2500 units, $125k revenue", () => {
    runNumericTests(calculator, [
      {
        inputs: { fixedCosts: 120000, variableCostPerUnit: 2, pricePerUnit: 50 },
        expected: {
          breakEvenUnits: 2500,
          breakEvenRevenue: 125000,
          contributionMarginPerUnit: 48,
          contributionMarginPercent: 96,
        },
        tolerance: 0.05,
      },
    ]);
  });

  it("contribution margin % = (P-V)/P × 100", () => {
    const parsed = calculator.inputSchema.parse({
      fixedCosts: 50000,
      variableCostPerUnit: 30,
      pricePerUnit: 100,
    });
    const result = calculator.compute(parsed);
    // CM = 70, CM% = 70%
    expect(result.contributionMarginPerUnit).toBeCloseTo(70, 2);
    expect(result.contributionMarginPercent).toBeCloseTo(70, 2);
    // BE units = 50000 / 70 = 714.2857
    expect(result.breakEvenUnits).toBeCloseTo(714.29, 1);
  });

  it("break-even revenue equals breakEvenUnits × pricePerUnit", () => {
    const parsed = calculator.inputSchema.parse({
      fixedCosts: 25000,
      variableCostPerUnit: 12,
      pricePerUnit: 40,
    });
    const result = calculator.compute(parsed);
    expect(result.breakEvenRevenue).toBeCloseTo(
      result.breakEvenUnits * 40,
      1,
    );
  });

  it("zero fixed costs → break-even at 0 units", () => {
    const parsed = calculator.inputSchema.parse({
      fixedCosts: 0,
      variableCostPerUnit: 5,
      pricePerUnit: 15,
    });
    const result = calculator.compute(parsed);
    expect(result.breakEvenUnits).toBe(0);
    expect(result.breakEvenRevenue).toBe(0);
  });
});
