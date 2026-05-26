import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Salary definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("salary");
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

  it("has input ids: annualSalary, filingStatus, stateIncomeTaxRate, preTaxDeductions", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("annualSalary");
    expect(ids).toContain("filingStatus");
    expect(ids).toContain("stateIncomeTaxRate");
    expect(ids).toContain("preTaxDeductions");
  });

  it("has exactly 8 outputs", () => {
    expect(calculator.outputs).toHaveLength(8);
  });

  it("netAnnual output is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "netAnnual");
    expect(out?.highlight).toBe(true);
  });

  it("has meta references (at least 2)", () => {
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(2);
  });

  it("has related calculators", () => {
    expect(calculator.related).toContain("retirement");
  });

  it("default annualSalary is 75000", () => {
    const input = calculator.inputs.find((i) => i.id === "annualSalary");
    expect(input?.defaultValue).toBe(75000);
  });

  it("default filingStatus is 'single'", () => {
    const input = calculator.inputs.find((i) => i.id === "filingStatus");
    expect(input?.defaultValue).toBe("single");
  });

  it("filingStatus input has 3 options", () => {
    const input = calculator.inputs.find((i) => i.id === "filingStatus");
    const type = input?.type as unknown as { options: unknown[] };
    expect(type.options).toHaveLength(3);
  });

  it("compute returns all 8 output fields for default inputs", () => {
    const parsed = calculator.inputSchema.parse({
      annualSalary: 75000,
      filingStatus: "single",
      stateIncomeTaxRate: 5,
      preTaxDeductions: 0,
    });
    const result = calculator.compute(parsed);
    expect(result).toHaveProperty("grossAnnual");
    expect(result).toHaveProperty("federalIncomeTax");
    expect(result).toHaveProperty("socialSecurityTax");
    expect(result).toHaveProperty("medicareTax");
    expect(result).toHaveProperty("stateIncomeTax");
    expect(result).toHaveProperty("totalTax");
    expect(result).toHaveProperty("netAnnual");
    expect(result).toHaveProperty("netMonthly");
    expect(result).toHaveProperty("effectiveTaxRate");
  });

  it("grossAnnual equals annualSalary input", () => {
    const parsed = calculator.inputSchema.parse({
      annualSalary: 75000,
      filingStatus: "single",
      stateIncomeTaxRate: 5,
      preTaxDeductions: 0,
    });
    const result = calculator.compute(parsed);
    expect(result.grossAnnual).toBe(75000);
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
