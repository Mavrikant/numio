import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("BMR definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("bmr");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("health");
  });

  it("has exactly 5 inputs", () => {
    expect(calculator.inputs).toHaveLength(5);
  });

  it("has input ids: formula, gender, weight, height, age", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("formula");
    expect(ids).toContain("gender");
    expect(ids).toContain("weight");
    expect(ids).toContain("height");
    expect(ids).toContain("age");
  });

  it("has exactly 1 output", () => {
    expect(calculator.outputs).toHaveLength(1);
  });

  it("bmr output is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "bmr");
    expect(out?.highlight).toBe(true);
  });

  it("has meta references", () => {
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(2);
  });

  it("compute returns bmr for mifflin male", () => {
    const inputs = calculator.inputSchema.parse({
      formula: "mifflin", gender: "male", weight: 70, height: 175, age: 30,
    });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("bmr");
    expect(result.bmr).toBeCloseTo(1648.75, 0);
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
