import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Retirement definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("retirement");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("finance");
  });

  it("has priority P0", () => {
    expect(calculator.priority).toBe("P0");
  });

  it("has exactly 6 inputs", () => {
    expect(calculator.inputs).toHaveLength(6);
  });

  it("has input ids: currentAge, retirementAge, currentSavings, monthlyContribution, annualReturn, withdrawalRate", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("currentAge");
    expect(ids).toContain("retirementAge");
    expect(ids).toContain("currentSavings");
    expect(ids).toContain("monthlyContribution");
    expect(ids).toContain("annualReturn");
    expect(ids).toContain("withdrawalRate");
  });

  it("has exactly 5 outputs", () => {
    expect(calculator.outputs).toHaveLength(5);
  });

  it("totalAtRetirement output is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "totalAtRetirement");
    expect(out?.highlight).toBe(true);
  });

  it("has meta references (at least 2)", () => {
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(2);
  });

  it("has related calculators", () => {
    expect(calculator.related).toContain("salary");
    expect(calculator.related).toContain("compound-interest");
  });

  it("default annualReturn is 7", () => {
    const input = calculator.inputs.find((i) => i.id === "annualReturn");
    expect(input?.defaultValue).toBe(7);
  });

  it("default withdrawalRate is 4", () => {
    const input = calculator.inputs.find((i) => i.id === "withdrawalRate");
    expect(input?.defaultValue).toBe(4);
  });

  it("compute returns all 5 output fields for default inputs", () => {
    const parsed = calculator.inputSchema.parse({
      currentAge: 30,
      retirementAge: 65,
      currentSavings: 50000,
      monthlyContribution: 500,
      annualReturn: 7,
      withdrawalRate: 4,
    });
    const result = calculator.compute(parsed);
    expect(result).toHaveProperty("totalAtRetirement");
    expect(result).toHaveProperty("monthlyIncome");
    expect(result).toHaveProperty("yearsOfIncome");
    expect(result).toHaveProperty("totalContributions");
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
