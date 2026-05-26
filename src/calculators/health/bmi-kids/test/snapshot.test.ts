import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("BMI Kids definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("bmi-kids");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("health");
  });

  it("has exactly 5 inputs", () => {
    expect(calculator.inputs).toHaveLength(5);
  });

  it("has input ids: gender, age, unit, weight, height", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("gender");
    expect(ids).toContain("age");
    expect(ids).toContain("unit");
    expect(ids).toContain("weight");
    expect(ids).toContain("height");
  });

  it("has exactly 3 outputs", () => {
    expect(calculator.outputs).toHaveLength(3);
  });

  it("bmi output is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "bmi");
    expect(out?.highlight).toBe(true);
  });

  it("has at least 1 meta reference", () => {
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(1);
  });

  it("compute returns expected output shape", () => {
    const inputs = calculator.inputSchema.parse({
      age: 10, gender: "male", weight: 35, height: 140, unit: "metric",
    });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("bmi");
    expect(result).toHaveProperty("weightStatus");
    expect(result).toHaveProperty("percentileEstimate");
    expect((result.bmi as number)).toBeCloseTo(17.9, 0);
    expect(result.weightStatus).toBe("healthy");
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
