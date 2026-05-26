import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Loan Amortization compute — numeric correctness", () => {
  it("$10k at 5% for 60 months → ~$188.71/month", () => {
    // r = 0.05/12 = 0.004167, n=60
    // factor = (1.004167)^60 ≈ 1.2834
    // M = 10000 × (0.004167 × 1.2834) / (1.2834 - 1) ≈ 188.71
    runNumericTests(calculator, [
      {
        inputs: { principal: 10000, annualRate: 5, termMonths: 60 },
        expected: { monthlyPayment: 188.71 },
        tolerance: 0.05,
      },
    ]);
  });

  it("$20k at 8% for 48 months → ~$488.26/month", () => {
    runNumericTests(calculator, [
      {
        inputs: { principal: 20000, annualRate: 8, termMonths: 48 },
        expected: { monthlyPayment: 488.26 },
        tolerance: 0.05,
      },
    ]);
  });

  it("0% interest — monthly payment = principal / termMonths", () => {
    const parsed = calculator.inputSchema.parse({
      principal: 12000,
      annualRate: 0,
      termMonths: 12,
    });
    const result = calculator.compute(parsed);
    expect(result.monthlyPayment).toBeCloseTo(1000, 1);
    expect(result.totalInterest).toBeCloseTo(0, 1);
  });

  it("total interest = totalPayment - principal", () => {
    const parsed = calculator.inputSchema.parse({
      principal: 10000,
      annualRate: 5,
      termMonths: 60,
    });
    const result = calculator.compute(parsed);
    const principalAmt = result.totalPayment - result.totalInterest;
    expect(principalAmt).toBeCloseTo(10000, 0);
  });

  it("amortization schedule has correct length", () => {
    const parsed = calculator.inputSchema.parse({
      principal: 10000,
      annualRate: 5,
      termMonths: 60,
    });
    const result = calculator.compute(parsed);
    expect(result.amortizationSchedule.length).toBe(60);
  });

  it("last amortization row has near-zero balance", () => {
    const parsed = calculator.inputSchema.parse({
      principal: 10000,
      annualRate: 5,
      termMonths: 60,
    });
    const result = calculator.compute(parsed);
    const last = result.amortizationSchedule[result.amortizationSchedule.length - 1];
    expect(last.balance).toBeCloseTo(0, 0);
  });

  it("schedule without startDate has no date field", () => {
    const parsed = calculator.inputSchema.parse({
      principal: 10000,
      annualRate: 5,
      termMonths: 12,
    });
    const result = calculator.compute(parsed);
    expect(result.amortizationSchedule[0].date).toBeUndefined();
  });

  it("schedule with startDate has date field", () => {
    const parsed = calculator.inputSchema.parse({
      principal: 10000,
      annualRate: 5,
      termMonths: 12,
      startDate: "2025-01-01",
    });
    const result = calculator.compute(parsed);
    expect(result.amortizationSchedule[0].date).toBe("2025-01-01");
    expect(result.amortizationSchedule[1].date).toBe("2025-02-01");
  });
});
