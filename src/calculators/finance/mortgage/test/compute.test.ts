import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Mortgage compute — numeric correctness", () => {
  it("$200k at 6% for 30yr → ~$1,199.10/month", () => {
    // P=200000, r=0.06/12=0.005, n=360
    // M = 200000 × [0.005 × (1.005)^360] / [(1.005)^360 - 1]
    // (1.005)^360 ≈ 6.0226
    // M ≈ 1199.10
    runNumericTests(calculator, [
      {
        inputs: { loanAmount: 200000, annualRate: 6, termYears: 30, downPayment: 0 },
        expected: { monthlyPayment: 1199.10 },
        tolerance: 0.05,
      },
    ]);
  });

  it("$300k at 7% for 30yr → ~$1,995.91/month", () => {
    runNumericTests(calculator, [
      {
        inputs: { loanAmount: 300000, annualRate: 7, termYears: 30, downPayment: 0 },
        expected: { monthlyPayment: 1995.91 },
        tolerance: 0.10,
      },
    ]);
  });

  it("$100k at 5% for 15yr → ~$790.79/month", () => {
    // n=180, r=0.05/12
    runNumericTests(calculator, [
      {
        inputs: { loanAmount: 100000, annualRate: 5, termYears: 15, downPayment: 0 },
        expected: { monthlyPayment: 790.79 },
        tolerance: 0.05,
      },
    ]);
  });

  it("$200k with $40k down at 6% for 30yr → principal=$160k", () => {
    runNumericTests(calculator, [
      {
        inputs: { loanAmount: 200000, annualRate: 6, termYears: 30, downPayment: 40000 },
        expected: { principalAmount: 160000, monthlyPayment: 959.28 },
        tolerance: 0.10,
      },
    ]);
  });

  it("0% interest rate — monthly payment = principal / n", () => {
    const parsed = calculator.inputSchema.parse({
      loanAmount: 120000,
      annualRate: 0,
      termYears: 10,
      downPayment: 0,
    });
    const result = calculator.compute(parsed);
    // 120000 / 120 = 1000
    expect(result.monthlyPayment).toBeCloseTo(1000, 1);
    expect(result.totalInterest).toBeCloseTo(0, 1);
  });

  it("total payment equals monthly payment × n", () => {
    const parsed = calculator.inputSchema.parse({
      loanAmount: 250000,
      annualRate: 5.5,
      termYears: 20,
      downPayment: 0,
    });
    const result = calculator.compute(parsed);
    const expectedTotal = result.monthlyPayment * 20 * 12;
    expect(result.totalPayment).toBeCloseTo(expectedTotal, 0);
  });

  it("total interest = totalPayment - principalAmount", () => {
    const parsed = calculator.inputSchema.parse({
      loanAmount: 200000,
      annualRate: 6,
      termYears: 30,
      downPayment: 0,
    });
    const result = calculator.compute(parsed);
    expect(result.totalInterest).toBeCloseTo(result.totalPayment - result.principalAmount, 0);
  });

  it("amortization schedule has correct number of entries (30yr = 360 rows)", () => {
    const parsed = calculator.inputSchema.parse({
      loanAmount: 200000,
      annualRate: 6,
      termYears: 30,
      downPayment: 0,
    });
    const result = calculator.compute(parsed);
    expect(result.amortizationSchedule.length).toBe(360);
  });

  it("amortization schedule first row has correct month=1", () => {
    const parsed = calculator.inputSchema.parse({
      loanAmount: 200000,
      annualRate: 6,
      termYears: 30,
      downPayment: 0,
    });
    const result = calculator.compute(parsed);
    expect(result.amortizationSchedule[0].month).toBe(1);
  });

  it("amortization schedule last row has near-zero balance", () => {
    const parsed = calculator.inputSchema.parse({
      loanAmount: 200000,
      annualRate: 6,
      termYears: 30,
      downPayment: 0,
    });
    const result = calculator.compute(parsed);
    const last = result.amortizationSchedule[result.amortizationSchedule.length - 1];
    expect(last.balance).toBeCloseTo(0, 0);
  });
});
