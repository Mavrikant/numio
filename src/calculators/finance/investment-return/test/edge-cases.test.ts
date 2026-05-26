import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("investment-return edge cases — schema validation", () => {
  it("rejects zero initialInvestment", () => {
    expect(() =>
      calculator.inputSchema.parse({
        initialInvestment: 0,
        finalValue: 20000,
        years: 10,
      }),
    ).toThrow();
  });

  it("rejects years < 0.5", () => {
    expect(() =>
      calculator.inputSchema.parse({
        initialInvestment: 10000,
        finalValue: 15000,
        years: 0.1,
      }),
    ).toThrow();
  });

  it("rejects years > 100", () => {
    expect(() =>
      calculator.inputSchema.parse({
        initialInvestment: 10000,
        finalValue: 15000,
        years: 101,
      }),
    ).toThrow();
  });

  it("rejects when neither finalValue nor annualReturn provided", () => {
    expect(() =>
      calculator.inputSchema.parse({
        initialInvestment: 10000,
        years: 10,
      }),
    ).toThrow();
  });

  it("accepts finalValue only (no annualReturn)", () => {
    expect(() =>
      calculator.inputSchema.parse({
        initialInvestment: 10000,
        finalValue: 20000,
        years: 10,
      }),
    ).not.toThrow();
  });

  it("accepts annualReturn only (no finalValue)", () => {
    expect(() =>
      calculator.inputSchema.parse({
        initialInvestment: 10000,
        annualReturn: 8,
        years: 10,
      }),
    ).not.toThrow();
  });

  it("accepts negative annualReturn (down to -100)", () => {
    expect(() =>
      calculator.inputSchema.parse({
        initialInvestment: 10000,
        annualReturn: -50,
        years: 3,
      }),
    ).not.toThrow();
  });

  it("schema validates", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { initialInvestment: 10000, finalValue: 20000, years: 10 },
      { initialInvestment: 0, finalValue: 20000, years: 10 },
    );
  });
});

describe("investment-return edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      initialInvestment: 10000,
      finalValue: 20000,
      years: 10,
    });
    assertComputeIsPure(calculator, inputs);
  });
});

describe("investment-return edge cases — boundary behaviour", () => {
  it("very high annual return produces proportionally high finalValue", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        initialInvestment: 10000,
        annualReturn: 100,
        years: 1,
      }),
    );
    expect(result.finalValue).toBeCloseTo(20000, 0);
    expect(result.roi).toBeCloseTo(100, 0);
  });

  it("0.5 year period works correctly", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        initialInvestment: 10000,
        annualReturn: 10,
        years: 0.5,
      }),
    );
    // finalValue = 10000 * (1.10)^0.5 ≈ 10488
    expect(result.finalValue).toBeCloseTo(10488, 0);
  });
});
