import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Auto Loan definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("auto-loan");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("finance");
  });

  it("has exactly 5 inputs", () => {
    expect(calculator.inputs).toHaveLength(5);
  });

  it("has exactly 4 outputs", () => {
    expect(calculator.outputs).toHaveLength(4);
  });

  it("monthlyPayment is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "monthlyPayment");
    expect(out?.highlight).toBe(true);
  });

  it("compute returns expected keys", () => {
    const inputs = calculator.inputSchema.parse({
      vehiclePrice: 25000, downPayment: 3000, tradeInValue: 0, annualRate: 6.5, termMonths: 60,
    });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("loanAmount");
    expect(result).toHaveProperty("monthlyPayment");
    expect(result).toHaveProperty("totalPayment");
    expect(result).toHaveProperty("totalInterest");
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
