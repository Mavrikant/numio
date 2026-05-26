import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Resistor Color Code definition — shape snapshot", () => {
  it("has the correct slug", () => expect(calculator.slug).toBe("resistor-color"));
  it("has the correct category", () => expect(calculator.category).toBe("engineering"));
  it("has output ids: resistance, tolerancePct, minValue, maxValue", () => {
    const ids = calculator.outputs.map((o) => o.id);
    expect(ids).toContain("resistance");
    expect(ids).toContain("tolerancePct");
    expect(ids).toContain("minValue");
    expect(ids).toContain("maxValue");
  });
  it("resistance is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "resistance");
    expect(out?.highlight).toBe(true);
  });
  it("compute returns expected keys", () => {
    const inputs = calculator.inputSchema.parse({ bandCount: "4", band1: 1, band2: 0, band3: 0, multiplierBand: 2, toleranceBand: 10 });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("resistance");
    expect(result).toHaveProperty("tolerancePct");
    expect(result).toHaveProperty("minValue");
    expect(result).toHaveProperty("maxValue");
    expect(result).toHaveProperty("colorName1");
  });
  it("snapshot matches", () => {
    expect(calculator).toMatchSnapshot({
      slug: expect.any(String),
      category: expect.any(String),
      priority: expect.any(String),
      icon: expect.any(String),
    });
  });
});
