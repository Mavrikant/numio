import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Loan Amortization definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("loan-amortization");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("finance");
  });

  it("has priority P0", () => {
    expect(calculator.priority).toBe("P0");
  });

  it("has exactly 4 inputs", () => {
    expect(calculator.inputs).toHaveLength(4);
  });

  it("has exactly 4 outputs", () => {
    expect(calculator.outputs).toHaveLength(4);
  });

  it("monthlyPayment is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "monthlyPayment");
    expect(out?.highlight).toBe(true);
  });

  it("amortizationSchedule has format list", () => {
    const out = calculator.outputs.find((o) => o.id === "amortizationSchedule");
    expect(out?.format).toBe("list");
  });

  it("compute returns expected keys", () => {
    const inputs = calculator.inputSchema.parse({ principal: 10000, annualRate: 5, termMonths: 60 });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("monthlyPayment");
    expect(result).toHaveProperty("totalPayment");
    expect(result).toHaveProperty("totalInterest");
    expect(result).toHaveProperty("amortizationSchedule");
  });

  it("snapshot: definition shape", () => {
    expect(calculator).toMatchSnapshot({
      slug: expect.any(String),
      category: expect.any(String),
      priority: expect.any(String),
      icon: expect.any(String),
    });
  });
});
