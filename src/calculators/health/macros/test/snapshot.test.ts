import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Macros definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("macros");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("health");
  });

  it("has the correct priority", () => {
    expect(calculator.priority).toBe("P1");
  });

  it("has exactly 4 inputs", () => {
    expect(calculator.inputs).toHaveLength(4);
  });

  it("has correct input ids", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("tdee");
    expect(ids).toContain("goal");
    expect(ids).toContain("proteinPct");
    expect(ids).toContain("fatPct");
  });

  it("has exactly 7 outputs", () => {
    expect(calculator.outputs).toHaveLength(7);
  });

  it("proteinG output is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "proteinG");
    expect(out?.highlight).toBe(true);
  });

  it("has meta references", () => {
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(1);
  });

  it("compute returns correct values for maintenance 2000kcal 30/30/40", () => {
    // protein 30%×2000/4=150g; fat 30%×2000/9≈66.7g; carbs 40%×2000/4=200g
    const inputs = calculator.inputSchema.parse({ tdee: 2000, goal: "maintenance", proteinPct: 30, fatPct: 30 });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("proteinG");
    expect(result.proteinG).toBeCloseTo(150, 0);
    expect(result.carbsG).toBeCloseTo(200, 0);
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
