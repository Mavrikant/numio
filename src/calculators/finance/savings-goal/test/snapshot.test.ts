import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("savings-goal definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("savings-goal");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("finance");
  });

  it("has an icon", () => {
    expect(typeof calculator.icon).toBe("string");
    expect(calculator.icon.length).toBeGreaterThan(0);
  });

  it("has exactly 4 inputs", () => {
    expect(calculator.inputs).toHaveLength(4);
  });

  it("has input ids: targetAmount, currentSavings, monthlyContribution, annualReturn", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("targetAmount");
    expect(ids).toContain("currentSavings");
    expect(ids).toContain("monthlyContribution");
    expect(ids).toContain("annualReturn");
  });

  it("has exactly 4 outputs", () => {
    expect(calculator.outputs).toHaveLength(4);
  });

  it("monthsToGoal output is highlighted", () => {
    const output = calculator.outputs.find((o) => o.id === "monthsToGoal");
    expect(output?.highlight).toBe(true);
  });

  it("has meta.references", () => {
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(1);
  });

  it("has a compute function", () => {
    expect(typeof calculator.compute).toBe("function");
  });

  it("compute returns an object with expected keys", () => {
    const inputs = calculator.inputSchema.parse({
      targetAmount: 10000,
      currentSavings: 0,
      monthlyContribution: 200,
      annualReturn: 5,
    });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("monthsToGoal");
    expect(result).toHaveProperty("yearsToGoal");
    expect(result).toHaveProperty("totalContributions");
    expect(result).toHaveProperty("totalInterest");
  });

  it("snapshot: definition shape matches expectations", () => {
    expect(calculator).toMatchSnapshot({
      slug: expect.any(String),
      category: expect.any(String),
      priority: expect.any(String),
      icon: expect.any(String),
    });
  });
});
