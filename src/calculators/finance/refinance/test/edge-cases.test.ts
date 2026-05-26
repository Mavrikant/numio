import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("refinance edge cases", () => {
  const validInput = {
    currentBalance: 300_000,
    currentAPR: 7.5,
    currentRemainingYears: 25,
    newAPR: 6.0,
    newTermYears: 30,
    closingCosts: 3000,
  };

  it("schema accepts valid input", () => {
    assertSchemaValidates(calculator as unknown as AnyCalculatorDefinition, validInput, { currentBalance: -1, currentAPR: 7.5, currentRemainingYears: 25, newAPR: 6, newTermYears: 30, closingCosts: 3000 });
  });

  it("compute is pure", () => {
    const parsed = calculator.inputSchema.parse(validInput) as Parameters<typeof calculator.compute>[0];
    assertComputeIsPure(calculator, parsed);
  });

  it("minimum balance $1 is accepted", () => {
    expect(() => calculator.inputSchema.parse({ ...validInput, currentBalance: 1 })).not.toThrow();
  });

  it("APR 0% is accepted", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({ ...validInput, currentAPR: 0, newAPR: 0 }),
    );
    expect(typeof result.monthlySavings).toBe('number');  // monthlySavings can be negative when refinancing from 0% APR
  });

  it("new term 5 years (minimum) is accepted", () => {
    expect(() => calculator.inputSchema.parse({ ...validInput, newTermYears: 5 })).not.toThrow();
  });

  it("new term 30 years (maximum) is accepted", () => {
    expect(() => calculator.inputSchema.parse({ ...validInput, newTermYears: 30 })).not.toThrow();
  });

  it("zero closing costs means break-even is 0", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({ ...validInput, closingCosts: 0 }),
    );
    expect(result.breakEvenMonths).toBe(0);
  });

  it("new monthly payment is lower when new APR is lower", () => {
    const result = calculator.compute(calculator.inputSchema.parse(validInput));
    expect(result.newMonthlyPayment).toBeLessThan(result.currentMonthlyPayment);
    expect(result.monthlySavings).toBeGreaterThan(0);
  });

  it("isWorthRefinancing is boolean", () => {
    const result = calculator.compute(calculator.inputSchema.parse(validInput));
    expect(typeof result.isWorthRefinancing).toBe("boolean");
  });

  it("lifetimeInterestSaved reflects closing costs impact", () => {
    const withCosts = calculator.compute(calculator.inputSchema.parse({ ...validInput, closingCosts: 5000 }));
    const noCosts = calculator.compute(calculator.inputSchema.parse({ ...validInput, closingCosts: 0 }));
    expect(noCosts.lifetimeInterestSaved).toBeGreaterThan(withCosts.lifetimeInterestSaved);
  });
});
