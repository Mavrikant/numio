import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("credit-card-payoff definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("credit-card-payoff");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("finance");
  });

  it("has an icon", () => {
    expect(typeof calculator.icon).toBe("string");
  });

  it("has 5 inputs", () => {
    expect(calculator.inputs).toHaveLength(5);
  });

  it("monthsToPayoff output is highlighted", () => {
    const output = calculator.outputs.find((o) => o.id === "monthsToPayoff");
    expect(output?.highlight).toBe(true);
  });

  it("compute returns expected keys", () => {
    const inputs = calculator.inputSchema.parse({
      balance: 5000,
      apr: 20,
      paymentMode: "fixed",
      fixedPayment: 200,
    });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("monthsToPayoff");
    expect(result).toHaveProperty("totalPaid");
    expect(result).toHaveProperty("totalInterest");
    expect(result).toHaveProperty("interestSavings");
    expect(result).toHaveProperty("schedule");
    expect(Array.isArray(result.schedule)).toBe(true);
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
