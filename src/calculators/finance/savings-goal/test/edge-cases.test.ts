import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("savings-goal edge cases — schema validation", () => {
  it("rejects zero targetAmount", () => {
    expect(() =>
      calculator.inputSchema.parse({
        targetAmount: 0,
        currentSavings: 0,
        monthlyContribution: 200,
        annualReturn: 5,
      }),
    ).toThrow();
  });

  it("rejects negative targetAmount", () => {
    expect(() =>
      calculator.inputSchema.parse({
        targetAmount: -1000,
        currentSavings: 0,
        monthlyContribution: 200,
        annualReturn: 5,
      }),
    ).toThrow();
  });

  it("rejects zero monthlyContribution", () => {
    expect(() =>
      calculator.inputSchema.parse({
        targetAmount: 10000,
        currentSavings: 0,
        monthlyContribution: 0,
        annualReturn: 5,
      }),
    ).toThrow();
  });

  it("rejects negative currentSavings", () => {
    expect(() =>
      calculator.inputSchema.parse({
        targetAmount: 10000,
        currentSavings: -100,
        monthlyContribution: 200,
        annualReturn: 5,
      }),
    ).toThrow();
  });

  it("accepts zero currentSavings", () => {
    expect(() =>
      calculator.inputSchema.parse({
        targetAmount: 10000,
        currentSavings: 0,
        monthlyContribution: 200,
        annualReturn: 5,
      }),
    ).not.toThrow();
  });

  it("rejects annualReturn > 100", () => {
    expect(() =>
      calculator.inputSchema.parse({
        targetAmount: 10000,
        currentSavings: 0,
        monthlyContribution: 200,
        annualReturn: 101,
      }),
    ).toThrow();
  });

  it("uses default annualReturn of 5 if not provided", () => {
    const parsed = calculator.inputSchema.parse({
      targetAmount: 10000,
      currentSavings: 0,
      monthlyContribution: 200,
    });
    expect(parsed.annualReturn).toBe(5);
  });

  it("schema validates — assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { targetAmount: 10000, currentSavings: 0, monthlyContribution: 200, annualReturn: 5 },
      { targetAmount: 0, currentSavings: 0, monthlyContribution: 200, annualReturn: 5 },
    );
  });
});

describe("savings-goal edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      targetAmount: 10000,
      currentSavings: 500,
      monthlyContribution: 200,
      annualReturn: 5,
    });
    assertComputeIsPure(calculator, inputs);
  });
});

describe("savings-goal edge cases — boundary behaviour", () => {
  it("currentSavings exceeds target → 0 months immediately", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        targetAmount: 100,
        currentSavings: 1000,
        monthlyContribution: 50,
        annualReturn: 5,
      }),
    );
    expect(result.monthsToGoal).toBe(0);
  });

  it("very high return reduces months significantly", () => {
    const lowReturn = calculator.compute(
      calculator.inputSchema.parse({
        targetAmount: 10000,
        currentSavings: 0,
        monthlyContribution: 200,
        annualReturn: 1,
      }),
    );
    const highReturn = calculator.compute(
      calculator.inputSchema.parse({
        targetAmount: 10000,
        currentSavings: 0,
        monthlyContribution: 200,
        annualReturn: 20,
      }),
    );
    expect(highReturn.monthsToGoal).toBeLessThan(lowReturn.monthsToGoal);
  });
});
