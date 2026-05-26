import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("income-tax definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("income-tax");
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

  it("has estimatedTax output highlighted", () => {
    const output = calculator.outputs.find((o) => o.id === "estimatedTax");
    expect(output?.highlight).toBe(true);
  });

  it("has meta.references with IRS and TR references", () => {
    const urls = calculator.meta.references.map((r) => r.url ?? "");
    expect(urls.some((u) => u.includes("irs.gov"))).toBe(true);
    expect(urls.some((u) => u.includes("mevzuat.gov.tr"))).toBe(true);
  });

  it("compute returns expected keys", () => {
    const inputs = calculator.inputSchema.parse({
      country: "us",
      grossIncome: 50000,
      filingStatus: "single",
      deductions: 0,
    });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("estimatedTax");
    expect(result).toHaveProperty("effectiveRate");
    expect(result).toHaveProperty("taxableIncome");
    expect(result).toHaveProperty("afterTaxIncome");
    expect(result).toHaveProperty("bracketBreakdown");
    expect(Array.isArray(result.bracketBreakdown)).toBe(true);
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
