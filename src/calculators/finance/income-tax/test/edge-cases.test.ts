import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("income-tax edge cases — schema validation", () => {
  it("rejects negative grossIncome", () => {
    expect(() =>
      calculator.inputSchema.parse({
        country: "us",
        grossIncome: -1,
        filingStatus: "single",
        deductions: 0,
      }),
    ).toThrow();
  });

  it("rejects negative deductions", () => {
    expect(() =>
      calculator.inputSchema.parse({
        country: "us",
        grossIncome: 50000,
        filingStatus: "single",
        deductions: -100,
      }),
    ).toThrow();
  });

  it("rejects invalid country", () => {
    expect(() =>
      calculator.inputSchema.parse({
        country: "de",
        grossIncome: 50000,
      }),
    ).toThrow();
  });

  it("accepts zero grossIncome", () => {
    expect(() =>
      calculator.inputSchema.parse({
        country: "us",
        grossIncome: 0,
        filingStatus: "single",
        deductions: 0,
      }),
    ).not.toThrow();
  });

  it("defaults filingStatus to single", () => {
    const parsed = calculator.inputSchema.parse({
      country: "us",
      grossIncome: 50000,
    });
    expect(parsed.filingStatus).toBe("single");
  });

  it("defaults deductions to 0", () => {
    const parsed = calculator.inputSchema.parse({
      country: "us",
      grossIncome: 50000,
    });
    expect(parsed.deductions).toBe(0);
  });

  it("schema validates — assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { country: "us", grossIncome: 50000, filingStatus: "single", deductions: 0 },
      { country: "us", grossIncome: -1, filingStatus: "single", deductions: 0 },
    );
  });
});

describe("income-tax edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      country: "us",
      grossIncome: 75000,
      filingStatus: "single",
      deductions: 0,
    });
    assertComputeIsPure(calculator, inputs);
  });
});

describe("income-tax edge cases — boundary behaviour", () => {
  it("deductions exceeding gross income → zero taxable income, zero tax", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        country: "tr",
        grossIncome: 50000,
        deductions: 100000,
      }),
    );
    expect(result.taxableIncome).toBe(0);
    expect(result.estimatedTax).toBe(0);
  });

  it("very high income uses top bracket", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        country: "tr",
        grossIncome: 5_000_000,
        deductions: 0,
      }),
    );
    // Should have bracket at 40%
    const topBracket = result.bracketBreakdown.find((b) => b.rate === 40);
    expect(topBracket).toBeDefined();
    expect(result.effectiveRate).toBeGreaterThan(30);
  });

  it("effective rate < marginal rate for progressive tax", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        country: "us",
        grossIncome: 200000,
        filingStatus: "single",
        deductions: 0,
      }),
    );
    // Marginal rate is 32% but effective should be lower
    expect(result.effectiveRate).toBeLessThan(32);
  });
});
