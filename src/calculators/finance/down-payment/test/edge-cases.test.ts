import { describe, it, expect } from "vitest";
import { assertComputeIsPure } from "@/test-utils";
import calculator from "../definition";

describe("Down Payment — edge cases", () => {
  it("rejects input where neither percent nor amount is given", () => {
    expect(() =>
      calculator.inputSchema.parse({
        homePrice: 300000,
        annualRate: 6,
        termYears: 30,
      }),
    ).toThrow();
  });

  it("rejects amount-only input where amount exceeds home price", () => {
    expect(() =>
      calculator.inputSchema.parse({
        homePrice: 200000,
        downPaymentAmount: 250000,
        annualRate: 6,
        termYears: 30,
      }),
    ).toThrow();
  });

  it("accepts percent above 20% boundary — no PMI", () => {
    const parsed = calculator.inputSchema.parse({
      homePrice: 300000,
      downPaymentPercent: 20,
      annualRate: 6,
      termYears: 30,
    });
    const r = calculator.compute(parsed);
    expect(r.pmiRequired).toBe(0);
    expect(r.monthlyPmi).toBe(0);
  });

  it("19.99% down payment still triggers PMI (just under 20%)", () => {
    const parsed = calculator.inputSchema.parse({
      homePrice: 300000,
      downPaymentPercent: 19.99,
      annualRate: 6,
      termYears: 30,
      pmiRate: 0.6,
    });
    const r = calculator.compute(parsed);
    expect(r.pmiRequired).toBe(1);
    expect(r.monthlyPmi).toBeGreaterThan(0);
  });

  it("compute is pure — same input twice gives equal output", () => {
    const inputs = calculator.inputSchema.parse({
      homePrice: 350000,
      downPaymentPercent: 15,
      annualRate: 6.25,
      termYears: 30,
      propertyTaxRate: 1,
      insuranceRate: 0.4,
      pmiRate: 0.7,
    });
    assertComputeIsPure(calculator, inputs);
  });
});
