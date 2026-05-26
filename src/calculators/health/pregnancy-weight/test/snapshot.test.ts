import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("pregnancy-weight definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("pregnancy-weight");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("health");
  });

  it("has exactly 5 inputs", () => {
    expect(calculator.inputs).toHaveLength(5);
  });

  it("has input ids: unit, prePregnancyWeight, height, gestationalWeek, currentWeight", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("unit");
    expect(ids).toContain("prePregnancyWeight");
    expect(ids).toContain("height");
    expect(ids).toContain("gestationalWeek");
    expect(ids).toContain("currentWeight");
  });

  it("has exactly 8 outputs", () => {
    expect(calculator.outputs).toHaveLength(8);
  });

  it("currentGain output is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "currentGain");
    expect(out?.highlight).toBe(true);
  });

  it("has at least 1 meta reference", () => {
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(1);
  });

  it("compute returns expected output shape", () => {
    const inputs = calculator.inputSchema.parse({
      prePregnancyWeight: 65,
      height: 165,
      currentWeight: 70,
      gestationalWeek: 20,
      unit: "metric",
    });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("preBmi");
    expect(result).toHaveProperty("bmiCategory");
    expect(result).toHaveProperty("recommendedTotalGainMin");
    expect(result).toHaveProperty("recommendedTotalGainMax");
    expect(result).toHaveProperty("currentGain");
    expect(result).toHaveProperty("expectedGainAtWeek");
    expect(result).toHaveProperty("onTrack");
    expect(result).toHaveProperty("weeklyRateKg");
    expect(result.bmiCategory).toBe("normal");
    expect(result.currentGain as number).toBeCloseTo(5, 1);
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
