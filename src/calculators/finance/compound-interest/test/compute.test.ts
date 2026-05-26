import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Compound Interest compute — numeric correctness", () => {
  it("$10k at 5% annually for 10yr = $16,288.95", () => {
    // FV = 10000 × (1 + 0.05/1)^(1×10) = 10000 × 1.05^10 = 10000 × 1.62889 ≈ 16288.95
    runNumericTests(calculator, [
      {
        inputs: { principal: 10000, annualRate: 5, years: 10, compoundFrequency: 1, monthlyContribution: 0 },
        expected: { futureValue: 16288.95 },
        tolerance: 1.00,
      },
    ]);
  });

  it("$10k at 5% monthly for 10yr > annually (more compounding)", () => {
    const annualParsed = calculator.inputSchema.parse({
      principal: 10000, annualRate: 5, years: 10, compoundFrequency: 1, monthlyContribution: 0,
    });
    const monthlyParsed = calculator.inputSchema.parse({
      principal: 10000, annualRate: 5, years: 10, compoundFrequency: 12, monthlyContribution: 0,
    });
    const annualResult = calculator.compute(annualParsed);
    const monthlyResult = calculator.compute(monthlyParsed);
    expect(monthlyResult.futureValue).toBeGreaterThan(annualResult.futureValue);
  });

  it("0% rate — futureValue = principal + contributions", () => {
    const parsed = calculator.inputSchema.parse({
      principal: 10000, annualRate: 0, years: 5, compoundFrequency: 12, monthlyContribution: 100,
    });
    const result = calculator.compute(parsed);
    // FV = 10000 + 100 × 12 × 5 = 10000 + 6000 = 16000
    expect(result.futureValue).toBeCloseTo(16000, 0);
    expect(result.totalInterest).toBeCloseTo(0, 0);
  });

  it("totalContributions = principal + monthlyContribution × 12 × years", () => {
    const parsed = calculator.inputSchema.parse({
      principal: 5000, annualRate: 7, years: 10, compoundFrequency: 12, monthlyContribution: 200,
    });
    const result = calculator.compute(parsed);
    const expectedContrib = 5000 + 200 * 12 * 10;
    expect(result.totalContributions).toBeCloseTo(expectedContrib, 0);
  });

  it("totalInterest = futureValue - totalContributions", () => {
    const parsed = calculator.inputSchema.parse({
      principal: 10000, annualRate: 7, years: 20, compoundFrequency: 12, monthlyContribution: 500,
    });
    const result = calculator.compute(parsed);
    expect(result.totalInterest).toBeCloseTo(result.futureValue - result.totalContributions, 0);
  });

  it("yearlyBreakdown has correct length", () => {
    const parsed = calculator.inputSchema.parse({
      principal: 10000, annualRate: 7, years: 10, compoundFrequency: 12, monthlyContribution: 0,
    });
    const result = calculator.compute(parsed);
    expect(result.yearlyBreakdown.length).toBe(10);
  });

  it("yearlyBreakdown year 10 balance matches futureValue", () => {
    const parsed = calculator.inputSchema.parse({
      principal: 10000, annualRate: 7, years: 10, compoundFrequency: 12, monthlyContribution: 0,
    });
    const result = calculator.compute(parsed);
    const lastYear = result.yearlyBreakdown[9];
    expect(lastYear.balance).toBeCloseTo(result.futureValue, 0);
  });

  it("balance grows monotonically over years at positive rate", () => {
    const parsed = calculator.inputSchema.parse({
      principal: 10000, annualRate: 5, years: 10, compoundFrequency: 12, monthlyContribution: 0,
    });
    const result = calculator.compute(parsed);
    for (let i = 1; i < result.yearlyBreakdown.length; i++) {
      expect(result.yearlyBreakdown[i].balance).toBeGreaterThan(result.yearlyBreakdown[i - 1].balance);
    }
  });
});
