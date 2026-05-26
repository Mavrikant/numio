import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Blood Pressure definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("blood-pressure");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("health");
  });

  it("has exactly 2 inputs", () => {
    expect(calculator.inputs).toHaveLength(2);
  });

  it("has input ids: systolic, diastolic", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("systolic");
    expect(ids).toContain("diastolic");
  });

  it("has exactly 4 outputs", () => {
    expect(calculator.outputs).toHaveLength(4);
  });

  it("has output ids: category, systolicCategory, diastolicCategory, recommendation", () => {
    const ids = calculator.outputs.map((o) => o.id);
    expect(ids).toContain("category");
    expect(ids).toContain("systolicCategory");
    expect(ids).toContain("diastolicCategory");
    expect(ids).toContain("recommendation");
  });

  it("category output is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "category");
    expect(out?.highlight).toBe(true);
  });

  it("has meta.references with AHA/ACC reference", () => {
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(1);
    const urls = calculator.meta.references.map((r) => r.url ?? "");
    expect(urls.some((u) => u.includes("jacc.2017"))).toBe(true);
  });

  it("has a compute function", () => {
    expect(typeof calculator.compute).toBe("function");
  });

  it("compute returns all expected keys", () => {
    const inputs = calculator.inputSchema.parse({ systolic: 120, diastolic: 80 });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("category");
    expect(result).toHaveProperty("systolicCategory");
    expect(result).toHaveProperty("diastolicCategory");
    expect(result).toHaveProperty("recommendation");
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
