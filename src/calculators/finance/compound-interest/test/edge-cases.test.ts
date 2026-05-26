import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Compound Interest edge cases — schema validation", () => {
  it("rejects principal above maximum", () => {
    expect(() =>
      calculator.inputSchema.parse({ principal: 10_000_001, annualRate: 5, years: 10, compoundFrequency: 12, monthlyContribution: 0 }),
    ).toThrow();
  });

  it("rejects annualRate above 50%", () => {
    expect(() =>
      calculator.inputSchema.parse({ principal: 10000, annualRate: 51, years: 10, compoundFrequency: 12, monthlyContribution: 0 }),
    ).toThrow();
  });

  it("rejects years above 50", () => {
    expect(() =>
      calculator.inputSchema.parse({ principal: 10000, annualRate: 5, years: 51, compoundFrequency: 12, monthlyContribution: 0 }),
    ).toThrow();
  });

  it("rejects invalid compoundFrequency (e.g. 6)", () => {
    expect(() =>
      calculator.inputSchema.parse({ principal: 10000, annualRate: 5, years: 10, compoundFrequency: 6, monthlyContribution: 0 }),
    ).toThrow();
  });

  it("accepts compoundFrequency 365 (daily)", () => {
    expect(() =>
      calculator.inputSchema.parse({ principal: 10000, annualRate: 5, years: 10, compoundFrequency: 365, monthlyContribution: 0 }),
    ).not.toThrow();
  });

  it("accepts principal = 0 (contributions only)", () => {
    expect(() =>
      calculator.inputSchema.parse({ principal: 0, annualRate: 5, years: 10, compoundFrequency: 12, monthlyContribution: 500 }),
    ).not.toThrow();
  });

  it("accepts 0% rate", () => {
    expect(() =>
      calculator.inputSchema.parse({ principal: 10000, annualRate: 0, years: 10, compoundFrequency: 12, monthlyContribution: 0 }),
    ).not.toThrow();
  });

  it("schema validates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { principal: 10000, annualRate: 7, years: 10, compoundFrequency: 12, monthlyContribution: 0 },
      { principal: 10000, annualRate: 51, years: 10, compoundFrequency: 12, monthlyContribution: 0 },
    );
  });
});

describe("Compound Interest edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      principal: 10000, annualRate: 7, years: 20, compoundFrequency: 12, monthlyContribution: 200,
    });
    assertComputeIsPure(calculator, inputs);
  });
});
