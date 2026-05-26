import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Mortgage definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("mortgage");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("finance");
  });

  it("has priority P0", () => {
    expect(calculator.priority).toBe("P0");
  });

  it("has an icon", () => {
    expect(typeof calculator.icon).toBe("string");
    expect(calculator.icon.length).toBeGreaterThan(0);
  });

  it("has exactly 4 inputs", () => {
    expect(calculator.inputs).toHaveLength(4);
  });

  it("has input ids: loanAmount, downPayment, annualRate, termYears", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("loanAmount");
    expect(ids).toContain("downPayment");
    expect(ids).toContain("annualRate");
    expect(ids).toContain("termYears");
  });

  it("has exactly 5 outputs", () => {
    expect(calculator.outputs).toHaveLength(5);
  });

  it("has output ids: monthlyPayment, totalPayment, totalInterest, principalAmount, amortizationSchedule", () => {
    const ids = calculator.outputs.map((o) => o.id);
    expect(ids).toContain("monthlyPayment");
    expect(ids).toContain("totalPayment");
    expect(ids).toContain("totalInterest");
    expect(ids).toContain("principalAmount");
    expect(ids).toContain("amortizationSchedule");
  });

  it("monthlyPayment output is highlighted", () => {
    const output = calculator.outputs.find((o) => o.id === "monthlyPayment");
    expect(output?.highlight).toBe(true);
  });

  it("amortizationSchedule has format 'list'", () => {
    const output = calculator.outputs.find((o) => o.id === "amortizationSchedule");
    expect(output?.format).toBe("list");
  });

  it("has meta.references with at least 2 entries", () => {
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(2);
  });

  it("has a formulaLatex string", () => {
    expect(typeof calculator.meta.formulaLatex).toBe("string");
    expect((calculator.meta.formulaLatex?.length ?? 0)).toBeGreaterThan(0);
  });

  it("compute returns expected keys", () => {
    const inputs = calculator.inputSchema.parse({
      loanAmount: 200000,
      annualRate: 6,
      termYears: 30,
      downPayment: 0,
    });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("monthlyPayment");
    expect(result).toHaveProperty("totalPayment");
    expect(result).toHaveProperty("totalInterest");
    expect(result).toHaveProperty("principalAmount");
    expect(result).toHaveProperty("amortizationSchedule");
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
