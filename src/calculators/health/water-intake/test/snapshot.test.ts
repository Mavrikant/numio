import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Water Intake definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("water-intake");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("health");
  });

  it("has the correct priority", () => {
    expect(calculator.priority).toBe("P1");
  });

  it("has exactly 5 inputs", () => {
    expect(calculator.inputs).toHaveLength(5);
  });

  it("has correct input ids", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("weight");
    expect(ids).toContain("activityLevel");
    expect(ids).toContain("climate");
    expect(ids).toContain("isPregnant");
    expect(ids).toContain("isBreastfeeding");
  });

  it("has exactly 5 outputs", () => {
    expect(calculator.outputs).toHaveLength(5);
  });

  it("dailyWaterMl output is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "dailyWaterMl");
    expect(out?.highlight).toBe(true);
  });

  it("has meta references", () => {
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(1);
  });

  it("compute returns correct values for 70kg moderate temperate", () => {
    // 70×35=2450; moderate+700; temperate+0 = 3150ml
    const inputs = calculator.inputSchema.parse({
      weight: 70, activityLevel: "moderate", climate: "temperate", isPregnant: false, isBreastfeeding: false,
    });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("dailyWaterMl");
    expect(result.dailyWaterMl).toBeCloseTo(3150, 0);
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
