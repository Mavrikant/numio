import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("student-loan snapshot", () => {
  it("has correct slug and category", () => {
    expect(calculator.slug).toBe("student-loan");
    expect(calculator.category).toBe("finance");
    expect(calculator.priority).toBe("P0");
  });

  it("has 5 inputs", () => {
    expect(calculator.inputs).toHaveLength(5);
  });

  it("has 6 outputs", () => {
    expect(calculator.outputs).toHaveLength(6);
  });

  it("monthlyPayment output is highlighted", () => {
    const highlighted = calculator.outputs.find((o) => o.id === "monthlyPayment");
    expect(highlighted?.highlight).toBe(true);
  });

  it("computes expected monthly payment for default inputs", () => {
    // $30,000 at 5.5% APR, 10 years, 6-month grace, $0 extra
    const result = calculator.compute(
      calculator.inputSchema.parse({
        balance: 30_000,
        apr: 5.5,
        loanTerm: 10,
        graceMonths: 6,
        extraMonthlyPayment: 0,
      }),
    );
    // Monthly payment approximately $333-$340 after grace
    expect(result.monthlyPayment).toBeGreaterThan(300);
    expect(result.monthlyPayment).toBeLessThan(400);
    expect(result.totalInterest).toBeGreaterThan(0);
    expect(result.balanceAfterGrace).toBeGreaterThan(30_000);
  });

  it("references at least one authoritative source", () => {
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(1);
    expect(calculator.meta.references[0]?.url).toContain("studentaid.gov");
  });
});
