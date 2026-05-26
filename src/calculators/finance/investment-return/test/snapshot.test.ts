import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("investment-return definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("investment-return");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("finance");
  });

  it("roi output is highlighted", () => {
    const output = calculator.outputs.find((o) => o.id === "roi");
    expect(output?.highlight).toBe(true);
  });

  it("has references to Investopedia", () => {
    const urls = calculator.meta.references.map((r) => r.url ?? "");
    expect(urls.some((u) => u.includes("investopedia.com"))).toBe(true);
  });

  it("compute returns expected keys", () => {
    const inputs = calculator.inputSchema.parse({
      initialInvestment: 10000,
      finalValue: 20000,
      years: 10,
    });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("roi");
    expect(result).toHaveProperty("cagr");
    expect(result).toHaveProperty("totalGain");
    expect(result).toHaveProperty("finalValue");
    expect(result).toHaveProperty("annualizedReturn");
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
