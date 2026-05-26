import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("LBM definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("lean-body-mass");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("health");
  });

  it("has exactly 4 inputs", () => {
    expect(calculator.inputs).toHaveLength(4);
  });

  it("has input ids: gender, weight, height, formula", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("gender");
    expect(ids).toContain("weight");
    expect(ids).toContain("height");
    expect(ids).toContain("formula");
  });

  it("has exactly 4 outputs", () => {
    expect(calculator.outputs).toHaveLength(4);
  });

  it("lbm output is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "lbm");
    expect(out?.highlight).toBe(true);
  });

  it("has at least 2 meta references", () => {
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(2);
  });

  it("compute returns expected outputs for Boer male", () => {
    const inputs = calculator.inputSchema.parse({
      gender: "male", weight: 70, height: 175, formula: "boer",
    });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("lbm");
    expect(result).toHaveProperty("bodyFatMass");
    expect(result).toHaveProperty("bodyFatPct");
    expect(result).toHaveProperty("lbmLb");
    expect((result.lbm as number)).toBeGreaterThan(0);
    expect((result.bodyFatPct as number)).toBeGreaterThanOrEqual(0);
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
