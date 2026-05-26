import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Wire Gauge definition — shape snapshot", () => {
  it("has the correct slug", () => expect(calculator.slug).toBe("wire-gauge"));
  it("has the correct category", () => expect(calculator.category).toBe("engineering"));
  it("has an icon", () => {
    expect(typeof calculator.icon).toBe("string");
    expect(calculator.icon.length).toBeGreaterThan(0);
  });
  it("has exactly 4 inputs", () => expect(calculator.inputs).toHaveLength(4));
  it("has input ids: awg, current, lengthM, loadCurrent", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("awg");
    expect(ids).toContain("current");
    expect(ids).toContain("lengthM");
    expect(ids).toContain("loadCurrent");
  });
  it("has exactly 7 outputs", () => expect(calculator.outputs).toHaveLength(7));
  it("has output ids including ampacity, voltageDrop, isSuitable", () => {
    const ids = calculator.outputs.map((o) => o.id);
    expect(ids).toContain("ampacity");
    expect(ids).toContain("diameterMm");
    expect(ids).toContain("areaMm2");
    expect(ids).toContain("resistancePerMeterOhm");
    expect(ids).toContain("voltageDrop");
    expect(ids).toContain("voltageDropPct");
    expect(ids).toContain("isSuitable");
  });
  it("has meta.references with at least 1 entry", () => {
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(1);
  });
  it("has an inputSchema (Zod)", () => {
    expect(typeof calculator.inputSchema.parse).toBe("function");
  });
  it("has a compute function", () => {
    expect(typeof calculator.compute).toBe("function");
  });
  it("compute returns object with expected keys", () => {
    const inputs = calculator.inputSchema.parse({ awg: "12", current: 20, lengthM: 30 });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("ampacity");
    expect(result).toHaveProperty("diameterMm");
    expect(result).toHaveProperty("voltageDrop");
    expect(result).toHaveProperty("isSuitable");
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
