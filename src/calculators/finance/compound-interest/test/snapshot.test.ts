import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Compound Interest definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("compound-interest");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("finance");
  });

  it("has priority P0", () => {
    expect(calculator.priority).toBe("P0");
  });

  it("has exactly 5 inputs", () => {
    expect(calculator.inputs).toHaveLength(5);
  });

  it("has exactly 4 outputs", () => {
    expect(calculator.outputs).toHaveLength(4);
  });

  it("futureValue is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "futureValue");
    expect(out?.highlight).toBe(true);
  });

  it("yearlyBreakdown has format list", () => {
    const out = calculator.outputs.find((o) => o.id === "yearlyBreakdown");
    expect(out?.format).toBe("list");
  });

  it("compute returns expected keys", () => {
    const inputs = calculator.inputSchema.parse({
      principal: 10000, annualRate: 7, years: 10, compoundFrequency: 12, monthlyContribution: 0,
    });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("futureValue");
    expect(result).toHaveProperty("totalContributions");
    expect(result).toHaveProperty("totalInterest");
    expect(result).toHaveProperty("yearlyBreakdown");
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
