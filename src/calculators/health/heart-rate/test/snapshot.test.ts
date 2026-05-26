import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Heart Rate definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("heart-rate");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("health");
  });

  it("has exactly 3 inputs", () => {
    expect(calculator.inputs).toHaveLength(3);
  });

  it("has input ids: age, restingHeartRate, formula", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("age");
    expect(ids).toContain("restingHeartRate");
    expect(ids).toContain("formula");
  });

  it("has 12 outputs", () => {
    expect(calculator.outputs).toHaveLength(12);
  });

  it("maxHR output is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "maxHR");
    expect(out?.highlight).toBe(true);
  });

  it("has meta.references with Karvonen reference", () => {
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(1);
    const titles = calculator.meta.references.map((r) => r.title);
    expect(titles.some((t) => t.toLowerCase().includes("karvonen"))).toBe(true);
  });

  it("compute returns all expected zone keys", () => {
    const inputs = calculator.inputSchema.parse({ age: 30, restingHeartRate: 60, formula: "karvonen" });
    const result = calculator.compute(inputs);
    for (const zone of ["zone1Min", "zone1Max", "zone2Min", "zone2Max", "zone3Min", "zone3Max", "zone4Min", "zone4Max", "zone5Min", "zone5Max"]) {
      expect(result).toHaveProperty(zone);
      expect(typeof (result as Record<string, unknown>)[zone]).toBe("number");
    }
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
