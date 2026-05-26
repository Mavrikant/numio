import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import calculator from "../definition";

describe("budget edge cases", () => {
  const validInput = {
    monthlyIncome: 5000,
    needsPct: 50,
    wantsPct: 30,
    savingsPct: 20,
  };

  it("schema accepts valid input", () => {
    assertSchemaValidates(calculator, validInput, { monthlyIncome: -1, needsPct: 50, wantsPct: 30, savingsPct: 20 });
  });

  it("compute is pure", () => {
    const parsed = calculator.inputSchema.parse(validInput) as Parameters<typeof calculator.compute>[0];
    assertComputeIsPure(calculator, parsed);
  });

  it("rejects percentages that don't sum to 100", () => {
    expect(() =>
      calculator.inputSchema.parse({ monthlyIncome: 5000, needsPct: 50, wantsPct: 30, savingsPct: 30 }),
    ).toThrow();
  });

  it("rejects percentages summing to less than 100", () => {
    expect(() =>
      calculator.inputSchema.parse({ monthlyIncome: 5000, needsPct: 40, wantsPct: 30, savingsPct: 20 }),
    ).toThrow();
  });

  it("accepts 100/0/0 split", () => {
    expect(() =>
      calculator.inputSchema.parse({ monthlyIncome: 5000, needsPct: 100, wantsPct: 0, savingsPct: 0 }),
    ).not.toThrow();
  });

  it("accepts 0/0/100 split (all savings)", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({ monthlyIncome: 5000, needsPct: 0, wantsPct: 0, savingsPct: 100 }),
    );
    expect(result.savingsAmount).toBeCloseTo(5000, 0);
    expect(result.needsAmount).toBe(0);
    expect(result.monthlyEmergencyFund).toBe(0);
  });

  it("isBalanced is true when savingsPct >= 10", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({ monthlyIncome: 5000, needsPct: 60, wantsPct: 30, savingsPct: 10 }),
    );
    expect(result.isBalanced).toBe(true);
  });

  it("isBalanced is false when savingsPct < 10", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({ monthlyIncome: 5000, needsPct: 91, wantsPct: 5, savingsPct: 4 }),
    );
    expect(result.isBalanced).toBe(false);
  });

  it("monthlyEmergencyFund is 3x needsAmount", () => {
    const result = calculator.compute(calculator.inputSchema.parse(validInput));
    expect(result.monthlyEmergencyFund).toBeCloseTo(result.needsAmount * 3, 5);
  });

  it("annualSavings equals savingsAmount × 12", () => {
    const result = calculator.compute(calculator.inputSchema.parse(validInput));
    expect(result.annualSavings).toBeCloseTo(result.savingsAmount * 12, 5);
  });

  it("accepts zero income", () => {
    expect(() =>
      calculator.inputSchema.parse({ monthlyIncome: 0, needsPct: 50, wantsPct: 30, savingsPct: 20 }),
    ).not.toThrow();
  });

  it("accepts maximum income of 1,000,000", () => {
    expect(() =>
      calculator.inputSchema.parse({ monthlyIncome: 1_000_000, needsPct: 50, wantsPct: 30, savingsPct: 20 }),
    ).not.toThrow();
  });
});
