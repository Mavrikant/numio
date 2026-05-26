import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("cd-yield edge cases", () => {
  const validInput = {
    principal: 10000,
    apr: 5,
    termMonths: 12,
    compoundFreq: 12 as const,
    earlyWithdrawalMonths: 0,
  };

  it("schema accepts valid input", () => {
    assertSchemaValidates(calculator as unknown as AnyCalculatorDefinition, validInput, { principal: 0, apr: 5, termMonths: 12 });
  });

  it("compute is pure", () => {
    const parsed = calculator.inputSchema.parse(validInput) as Parameters<typeof calculator.compute>[0];
    assertComputeIsPure(calculator, parsed);
  });

  it("minimum principal $1 is accepted", () => {
    expect(() => calculator.inputSchema.parse({ ...validInput, principal: 1 })).not.toThrow();
  });

  it("maximum principal $10,000,000 is accepted", () => {
    expect(() => calculator.inputSchema.parse({ ...validInput, principal: 10_000_000 })).not.toThrow();
  });

  it("principal below minimum is rejected", () => {
    expect(() => calculator.inputSchema.parse({ ...validInput, principal: 0 })).toThrow();
  });

  it("APR 20% (max) is accepted", () => {
    expect(() => calculator.inputSchema.parse({ ...validInput, apr: 20 })).not.toThrow();
  });

  it("APR above 20% is rejected", () => {
    expect(() => calculator.inputSchema.parse({ ...validInput, apr: 21 })).toThrow();
  });

  it("termMonths 1 (minimum) is accepted", () => {
    expect(() => calculator.inputSchema.parse({ ...validInput, termMonths: 1 })).not.toThrow();
  });

  it("termMonths 120 (maximum) is accepted", () => {
    expect(() => calculator.inputSchema.parse({ ...validInput, termMonths: 120 })).not.toThrow();
  });

  it("FV is always >= principal", () => {
    const result = calculator.compute(calculator.inputSchema.parse(validInput));
    expect(result.futureValue).toBeGreaterThanOrEqual(validInput.principal);
  });

  it("APY >= 0 always", () => {
    const result = calculator.compute(calculator.inputSchema.parse({ ...validInput, apr: 0 }));
    expect(result.apy).toBeGreaterThanOrEqual(0);
  });

  it("no early withdrawal gives 0 penalty", () => {
    const result = calculator.compute(calculator.inputSchema.parse({ ...validInput, earlyWithdrawalMonths: 0 }));
    expect(result.earlyWithdrawalPenalty).toBe(0);
    expect(result.netReturnAfterPenalty).toBe(result.interestEarned);
  });

  it("daily compounding gives higher APY than annual for same APR", () => {
    const annual = calculator.compute(
      calculator.inputSchema.parse({ ...validInput, compoundFreq: 1 }),
    );
    const daily = calculator.compute(
      calculator.inputSchema.parse({ ...validInput, compoundFreq: 365 }),
    );
    expect(daily.apy).toBeGreaterThan(annual.apy);
  });
});
