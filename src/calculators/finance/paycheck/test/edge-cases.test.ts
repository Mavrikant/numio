import { describe, it, expect } from "vitest";
import { assertComputeIsPure } from "@/test-utils";
import calculator from "../definition";

const parse = (inputs: Record<string, unknown>) =>
  calculator.compute(calculator.inputSchema.parse(inputs));

describe("paycheck edge cases", () => {
  it("zero gross salary → all-zero output (no negatives)", () => {
    const r = parse({
      grossSalary: 0,
      payFrequency: "biweekly",
      filingStatus: "single",
      stateTaxRate: 5,
      pretax401k: 0,
      pretaxHsa: 0,
    });
    expect(r.annualFederalTax).toBe(0);
    expect(r.annualFica).toBe(0);
    expect(r.annualStateTax).toBe(0);
    expect(r.annualNet).toBe(0);
    expect(r.effectiveTaxRate).toBe(0);
  });

  it("salary below standard deduction → zero federal tax", () => {
    // Single, $10k gross. Standard deduction $14,600 → taxable = 0.
    const r = parse({
      grossSalary: 10000,
      payFrequency: "annual",
      filingStatus: "single",
      stateTaxRate: 0,
      pretax401k: 0,
      pretaxHsa: 0,
    });
    expect(r.annualFederalTax).toBe(0);
  });

  it("rejects pretax > gross", () => {
    expect(() =>
      calculator.inputSchema.parse({
        grossSalary: 50000,
        payFrequency: "biweekly",
        filingStatus: "single",
        stateTaxRate: 0,
        pretax401k: 30000,
        pretaxHsa: 25000,
      }),
    ).toThrow();
  });

  it("rejects negative gross salary", () => {
    expect(() =>
      calculator.inputSchema.parse({
        grossSalary: -1000,
        payFrequency: "biweekly",
        filingStatus: "single",
        stateTaxRate: 0,
        pretax401k: 0,
        pretaxHsa: 0,
      }),
    ).toThrow();
  });

  it("rejects state tax rate > 15%", () => {
    expect(() =>
      calculator.inputSchema.parse({
        grossSalary: 75000,
        payFrequency: "biweekly",
        filingStatus: "single",
        stateTaxRate: 20,
        pretax401k: 0,
        pretaxHsa: 0,
      }),
    ).toThrow();
  });

  it("ultra-high income (>$609,350 single) hits 37% top bracket", () => {
    const r = parse({
      grossSalary: 1_000_000,
      payFrequency: "annual",
      filingStatus: "single",
      stateTaxRate: 0,
      pretax401k: 0,
      pretaxHsa: 0,
    });
    // Effective rate should be in 30-37% range.
    expect(r.effectiveTaxRate).toBeGreaterThan(30);
    expect(r.effectiveTaxRate).toBeLessThan(40);
  });

  it("compute is pure", () => {
    const parsed = calculator.inputSchema.parse({
      grossSalary: 75000,
      payFrequency: "biweekly",
      filingStatus: "single",
      stateTaxRate: 0,
      pretax401k: 0,
      pretaxHsa: 0,
    });
    assertComputeIsPure(calculator, parsed);
  });
});
