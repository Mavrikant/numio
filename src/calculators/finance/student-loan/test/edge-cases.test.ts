import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("student-loan edge cases", () => {
  const validInput = {
    balance: 30000,
    apr: 5.5,
    loanTerm: 10,
    graceMonths: 6,
    extraMonthlyPayment: 0,
  };

  it("schema accepts valid input", () => {
    assertSchemaValidates(calculator as unknown as AnyCalculatorDefinition, validInput, { balance: -100, apr: 5.5, loanTerm: 10 });
  });

  it("compute is pure — identical inputs produce identical outputs", () => {
    const parsed = calculator.inputSchema.parse(validInput) as Parameters<typeof calculator.compute>[0];
    assertComputeIsPure(calculator, parsed);
  });

  it("minimum balance $100 is accepted", () => {
    expect(() => calculator.inputSchema.parse({ ...validInput, balance: 100 })).not.toThrow();
  });

  it("maximum balance $500,000 is accepted", () => {
    expect(() => calculator.inputSchema.parse({ ...validInput, balance: 500_000 })).not.toThrow();
  });

  it("balance below minimum is rejected", () => {
    expect(() => calculator.inputSchema.parse({ ...validInput, balance: 50 })).toThrow();
  });

  it("balance above maximum is rejected", () => {
    expect(() => calculator.inputSchema.parse({ ...validInput, balance: 600_000 })).toThrow();
  });

  it("APR 0% produces no interest", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({ ...validInput, apr: 0, graceMonths: 0 }),
    );
    expect(result.totalInterest).toBe(0);
    expect(result.balanceAfterGrace).toBe(validInput.balance);
  });

  it("APR 30% (max) is accepted", () => {
    expect(() => calculator.inputSchema.parse({ ...validInput, apr: 30 })).not.toThrow();
  });

  it("APR above 30% is rejected", () => {
    expect(() => calculator.inputSchema.parse({ ...validInput, apr: 31 })).toThrow();
  });

  it("grace period 0 gives same balance", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({ ...validInput, graceMonths: 0 }),
    );
    expect(result.balanceAfterGrace).toBe(validInput.balance);
  });

  it("grace period 12 (max) gives higher balance", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({ ...validInput, graceMonths: 12, apr: 5.5 }),
    );
    expect(result.balanceAfterGrace).toBeGreaterThan(validInput.balance);
  });

  it("extra payment 0 gives 0 interest saved", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({ ...validInput, extraMonthlyPayment: 0 }),
    );
    expect(result.interestSavedByExtra).toBe(0);
  });

  it("extra payment reduces total interest", () => {
    const base = calculator.compute(
      calculator.inputSchema.parse({ ...validInput, extraMonthlyPayment: 0 }),
    );
    const extra = calculator.compute(
      calculator.inputSchema.parse({ ...validInput, extraMonthlyPayment: 200 }),
    );
    expect(extra.monthsToPayoff).toBeLessThan(base.monthsToPayoff);
    expect(extra.interestSavedByExtra).toBeGreaterThan(0);
  });

  it("loanTerm 1 (minimum) is accepted", () => {
    expect(() => calculator.inputSchema.parse({ ...validInput, loanTerm: 1 })).not.toThrow();
  });

  it("loanTerm 30 (maximum) is accepted", () => {
    expect(() => calculator.inputSchema.parse({ ...validInput, loanTerm: 30 })).not.toThrow();
  });
});
