import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("refinance snapshot", () => {
  it("has correct slug and category", () => {
    expect(calculator.slug).toBe("refinance");
    expect(calculator.category).toBe("finance");
    expect(calculator.priority).toBe("P1");
  });

  it("has 6 inputs", () => {
    expect(calculator.inputs).toHaveLength(6);
  });

  it("has 6 outputs", () => {
    expect(calculator.outputs).toHaveLength(6);
  });

  it("newMonthlyPayment is highlighted", () => {
    const highlighted = calculator.outputs.find((o) => o.id === "newMonthlyPayment");
    expect(highlighted?.highlight).toBe(true);
  });

  it("computes expected results for default inputs", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        currentBalance: 300_000,
        currentAPR: 7.5,
        currentRemainingYears: 25,
        newAPR: 6.0,
        newTermYears: 30,
        closingCosts: 3000,
      }),
    );
    expect(result.currentMonthlyPayment).toBeGreaterThan(2000);
    expect(result.newMonthlyPayment).toBeGreaterThan(1000);
    expect(result.monthlySavings).toBeGreaterThan(0);
    expect(result.breakEvenMonths).toBeGreaterThan(0);
    expect(typeof result.isWorthRefinancing).toBe("boolean");
  });

  it("references CFPB", () => {
    const cfpbRef = calculator.meta.references.find((r) => r.url?.includes("consumerfinance.gov"));
    expect(cfpbRef).toBeDefined();
  });
});
