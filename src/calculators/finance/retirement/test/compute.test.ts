import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Retirement compute — numeric correctness", () => {
  it("no growth, no contributions → totalAtRetirement equals currentSavings", () => {
    runNumericTests(calculator, [
      {
        inputs: {
          currentAge: 30,
          retirementAge: 65,
          currentSavings: 100000,
          monthlyContribution: 0,
          annualReturn: 0,
          withdrawalRate: 4,
        },
        expected: { totalAtRetirement: 100000, totalContributions: 100000, totalInterest: 0 },
        tolerance: 1,
      },
    ]);
  });

  it("zero return with contributions → totalAtRetirement = savings + PMT×months", () => {
    // 30→65 = 35 years = 420 months; 1000×420 = 420000 contributions; total = 420000
    runNumericTests(calculator, [
      {
        inputs: {
          currentAge: 30,
          retirementAge: 65,
          currentSavings: 0,
          monthlyContribution: 1000,
          annualReturn: 0,
          withdrawalRate: 4,
        },
        expected: { totalAtRetirement: 420000, totalContributions: 420000, totalInterest: 0 },
        tolerance: 1,
      },
    ]);
  });

  it("7% annual return, 35 year horizon, $50k savings + $500/mo → totalAtRetirement > $1M", () => {
    const parsed = calculator.inputSchema.parse({
      currentAge: 30,
      retirementAge: 65,
      currentSavings: 50000,
      monthlyContribution: 500,
      annualReturn: 7,
      withdrawalRate: 4,
    });
    const result = calculator.compute(parsed);
    expect((result.totalAtRetirement as number)).toBeGreaterThan(1_000_000);
    expect((result.monthlyIncome as number)).toBeGreaterThan(3000);
  });

  it("totalContributions = currentSavings + monthlyContribution * months", () => {
    const parsed = calculator.inputSchema.parse({
      currentAge: 40,
      retirementAge: 65,
      currentSavings: 80000,
      monthlyContribution: 1200,
      annualReturn: 6,
      withdrawalRate: 4,
    });
    const result = calculator.compute(parsed);
    const expectedContributions = 80000 + 1200 * 300; // 25 years = 300 months
    expect((result.totalContributions as number)).toBeCloseTo(expectedContributions, 0);
  });

  it("totalInterest = totalAtRetirement - totalContributions", () => {
    const parsed = calculator.inputSchema.parse({
      currentAge: 25,
      retirementAge: 65,
      currentSavings: 10000,
      monthlyContribution: 400,
      annualReturn: 7,
      withdrawalRate: 4,
    });
    const result = calculator.compute(parsed);
    const expectedInterest = (result.totalAtRetirement as number) - (result.totalContributions as number);
    expect((result.totalInterest as number)).toBeCloseTo(expectedInterest, 0);
  });

  it("monthlyIncome = totalAtRetirement × withdrawalRate / 100 / 12", () => {
    const parsed = calculator.inputSchema.parse({
      currentAge: 30,
      retirementAge: 65,
      currentSavings: 50000,
      monthlyContribution: 500,
      annualReturn: 7,
      withdrawalRate: 4,
    });
    const result = calculator.compute(parsed);
    const expectedMonthlyIncome = (result.totalAtRetirement as number) * 0.04 / 12;
    expect((result.monthlyIncome as number)).toBeCloseTo(expectedMonthlyIncome, 0);
  });

  it("high withdrawal rate depletes portfolio faster (fewer yearsOfIncome)", () => {
    const baseInputs = {
      currentAge: 50,
      retirementAge: 65,
      currentSavings: 200000,
      monthlyContribution: 500,
      annualReturn: 5,
    };
    const parsedLow = calculator.inputSchema.parse({ ...baseInputs, withdrawalRate: 3 });
    const parsedHigh = calculator.inputSchema.parse({ ...baseInputs, withdrawalRate: 8 });
    const resultLow = calculator.compute(parsedLow);
    const resultHigh = calculator.compute(parsedHigh);
    expect((resultHigh.yearsOfIncome as number)).toBeLessThan((resultLow.yearsOfIncome as number));
  });

  it("portfolio that earns more than it withdraws → yearsOfIncome = 999", () => {
    // Very large savings, very low withdrawal rate → portfolio never depletes
    const parsed = calculator.inputSchema.parse({
      currentAge: 30,
      retirementAge: 65,
      currentSavings: 50000,
      monthlyContribution: 500,
      annualReturn: 10,
      withdrawalRate: 1,
    });
    const result = calculator.compute(parsed);
    expect((result.yearsOfIncome as number)).toBe(999);
  });
});
