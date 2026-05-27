import { describe, it, expect } from "vitest";
import { assertComputeIsPure } from "@/test-utils";
import calculator from "../definition";

const baseInputs = {
  annualIncome: 100000,
  monthlyDebts: 500,
  downPayment: 40000,
  annualRate: 7,
  termYears: 30,
  propertyTaxRate: 1.2,
  insuranceRate: 0.35,
};

describe("home-affordability edge cases", () => {
  it("rejects zero income", () => {
    expect(() =>
      calculator.inputSchema.parse({ ...baseInputs, annualIncome: 0 }),
    ).toThrow();
  });

  it("rejects negative income", () => {
    expect(() =>
      calculator.inputSchema.parse({ ...baseInputs, annualIncome: -50000 }),
    ).toThrow();
  });

  it("debts > back-end allowance → max PITI clamps to 0, maxHomePrice = downPayment", () => {
    // $50k income → monthlyIncome ≈ 4,167; back-end allows 0.36×4167 = 1,500.
    // monthlyDebts = 2,000 leaves a negative back-end budget → clamps at 0.
    // Front-end allows 0.28×4167 = 1,167 but the binding rule takes the min,
    // so maxPITI = 0. With $20k down, maxHomePrice should be exactly $20k.
    const r = calculator.compute(
      calculator.inputSchema.parse({
        ...baseInputs,
        annualIncome: 50000,
        monthlyDebts: 2000,
        downPayment: 20000,
      }),
    );
    expect(r.maxHomePrice).toBe(20000);
    expect(r.maxLoanAmount).toBe(0);
    expect(r.monthlyPi).toBe(0);
    expect(r.bindingRule).toBe("back");
    expect(r.affordabilityCategory).toBe("stretched");
  });

  it("very high income → very_comfortable category", () => {
    const r = calculator.compute(
      calculator.inputSchema.parse({
        ...baseInputs,
        annualIncome: 500000,
        monthlyDebts: 0,
      }),
    );
    // PITI / 41,666 will be ≤ 28% by construction of front-end bind.
    expect(r.affordabilityCategory).toBe("very_comfortable");
  });

  it("rejects mortgage rate > 30%", () => {
    expect(() =>
      calculator.inputSchema.parse({ ...baseInputs, annualRate: 35 }),
    ).toThrow();
  });

  it("rejects term > 40 years", () => {
    expect(() =>
      calculator.inputSchema.parse({ ...baseInputs, termYears: 50 }),
    ).toThrow();
  });

  it("compute is pure", () => {
    const parsed = calculator.inputSchema.parse(baseInputs);
    assertComputeIsPure(calculator, parsed);
  });
});
