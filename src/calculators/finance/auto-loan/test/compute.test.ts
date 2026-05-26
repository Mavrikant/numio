import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Auto Loan compute — numeric correctness", () => {
  it("$25k at 6.5% for 60 months → ~$489.10/month", () => {
    // r = 0.065/12 = 0.00541667, n = 60
    // M = 25000 × [r×(1+r)^60] / [(1+r)^60 − 1]
    // (1+r)^60 ≈ 1.38295 → M ≈ 489.10
    runNumericTests(calculator, [
      {
        inputs: { vehiclePrice: 25000, downPayment: 0, tradeInValue: 0, annualRate: 6.5, termMonths: 60 },
        expected: { monthlyPayment: 489.10 },
        tolerance: 0.50,
      },
    ]);
  });

  it("down payment and trade-in reduce loan amount", () => {
    const parsed = calculator.inputSchema.parse({
      vehiclePrice: 30000, downPayment: 5000, tradeInValue: 3000, annualRate: 5, termMonths: 60,
    });
    const result = calculator.compute(parsed);
    expect(result.loanAmount).toBeCloseTo(22000, 0);
  });

  it("0% interest — monthly = loanAmount / termMonths", () => {
    const parsed = calculator.inputSchema.parse({
      vehiclePrice: 24000, downPayment: 0, tradeInValue: 0, annualRate: 0, termMonths: 48,
    });
    const result = calculator.compute(parsed);
    expect(result.monthlyPayment).toBeCloseTo(500, 1);
    expect(result.totalInterest).toBeCloseTo(0, 1);
  });

  it("total interest = totalPayment - loanAmount", () => {
    const parsed = calculator.inputSchema.parse({
      vehiclePrice: 30000, downPayment: 3000, tradeInValue: 0, annualRate: 7, termMonths: 72,
    });
    const result = calculator.compute(parsed);
    expect(result.totalInterest).toBeCloseTo(result.totalPayment - result.loanAmount, 0);
  });

  it("down payment = vehiclePrice gives loanAmount = 0 and monthlyPayment = 0", () => {
    const parsed = calculator.inputSchema.parse({
      vehiclePrice: 20000, downPayment: 20000, tradeInValue: 0, annualRate: 5, termMonths: 60,
    });
    const result = calculator.compute(parsed);
    expect(result.loanAmount).toBeCloseTo(0, 0);
    expect(result.monthlyPayment).toBeCloseTo(0, 0);
  });
});
