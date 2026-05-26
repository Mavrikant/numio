import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("budget snapshot", () => {
  it("has correct slug and category", () => {
    expect(calculator.slug).toBe("budget");
    expect(calculator.category).toBe("finance");
    expect(calculator.priority).toBe("P1");
  });

  it("has 4 inputs", () => {
    expect(calculator.inputs).toHaveLength(4);
  });

  it("has 8 outputs", () => {
    expect(calculator.outputs).toHaveLength(8);
  });

  it("savingsAmount is highlighted", () => {
    const highlighted = calculator.outputs.find((o) => o.id === "savingsAmount");
    expect(highlighted?.highlight).toBe(true);
  });

  it("computes expected results for default inputs", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        monthlyIncome: 5000,
        needsPct: 50,
        wantsPct: 30,
        savingsPct: 20,
      }),
    );
    expect(result.needsAmount).toBeCloseTo(2500, 1);
    expect(result.wantsAmount).toBeCloseTo(1500, 1);
    expect(result.savingsAmount).toBeCloseTo(1000, 1);
    expect(result.annualIncome).toBeCloseTo(60000, 1);
    expect(result.annualSavings).toBeCloseTo(12000, 1);
    expect(result.savingsRate).toBeCloseTo(20, 1);
    expect(result.isBalanced).toBe(true);
    expect(result.monthlyEmergencyFund).toBeCloseTo(7500, 1);
  });

  it("references CFPB", () => {
    const cfpbRef = calculator.meta.references.find((r) => r.url?.includes("consumerfinance.gov"));
    expect(cfpbRef).toBeDefined();
  });
});
