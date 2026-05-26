import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("BMI definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("bmi");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("health");
  });

  it("has priority P0", () => {
    expect(calculator.priority).toBe("P0");
  });

  it("has an icon", () => {
    expect(typeof calculator.icon).toBe("string");
    expect(calculator.icon.length).toBeGreaterThan(0);
  });

  it("has exactly 3 inputs", () => {
    expect(calculator.inputs).toHaveLength(3);
  });

  it("has input ids: unit, weight, height", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("unit");
    expect(ids).toContain("weight");
    expect(ids).toContain("height");
  });

  it("has exactly 4 outputs", () => {
    expect(calculator.outputs).toHaveLength(4);
  });

  it("has output ids: bmi, category, healthyMinWeight, healthyMaxWeight", () => {
    const ids = calculator.outputs.map((o) => o.id);
    expect(ids).toContain("bmi");
    expect(ids).toContain("category");
    expect(ids).toContain("healthyMinWeight");
    expect(ids).toContain("healthyMaxWeight");
  });

  it("bmi output is highlighted", () => {
    const bmiOutput = calculator.outputs.find((o) => o.id === "bmi");
    expect(bmiOutput?.highlight).toBe(true);
  });

  it("bmi output has precision 1", () => {
    const bmiOutput = calculator.outputs.find((o) => o.id === "bmi");
    expect(bmiOutput?.precision).toBe(1);
  });

  it("category output has format 'text'", () => {
    const categoryOutput = calculator.outputs.find((o) => o.id === "category");
    expect(categoryOutput?.format).toBe("text");
  });

  it("has meta.references with at least 2 entries", () => {
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(2);
  });

  it("references include WHO URL", () => {
    const urls = calculator.meta.references.map((r) => r.url ?? "");
    expect(urls.some((u) => u.includes("who.int"))).toBe(true);
  });

  it("references include CDC URL", () => {
    const urls = calculator.meta.references.map((r) => r.url ?? "");
    expect(urls.some((u) => u.includes("cdc.gov"))).toBe(true);
  });

  it("has a formulaLatex string", () => {
    expect(typeof calculator.meta.formulaLatex).toBe("string");
    expect((calculator.meta.formulaLatex?.length ?? 0)).toBeGreaterThan(0);
  });

  it("has an inputSchema that is a Zod schema", () => {
    expect(typeof calculator.inputSchema.parse).toBe("function");
  });

  it("has a compute function", () => {
    expect(typeof calculator.compute).toBe("function");
  });

  it("compute returns an object with expected keys", () => {
    const inputs = calculator.inputSchema.parse({
      unit: "metric",
      weight: 70,
      height: 175,
    });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("bmi");
    expect(result).toHaveProperty("category");
    expect(result).toHaveProperty("healthyMinWeight");
    expect(result).toHaveProperty("healthyMaxWeight");
  });

  it("snapshot: definition shape matches expectations", () => {
    expect(calculator).toMatchSnapshot({
      // We exclude compute and inputSchema as they are functions/objects not serialisable nicely
      slug: expect.any(String),
      category: expect.any(String),
      priority: expect.any(String),
      icon: expect.any(String),
    });
  });
});
