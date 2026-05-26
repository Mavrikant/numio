import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Voltage Drop definition — shape snapshot", () => {
  it("has the correct slug", () => expect(calculator.slug).toBe("voltage-drop"));
  it("has the correct category", () => expect(calculator.category).toBe("engineering"));
  it("has output ids: voltageDrop, voltageDropPct, receivingVoltage, recommendation, areaMm2", () => {
    const ids = calculator.outputs.map((o) => o.id);
    expect(ids).toContain("voltageDrop");
    expect(ids).toContain("voltageDropPct");
    expect(ids).toContain("receivingVoltage");
    expect(ids).toContain("recommendation");
    expect(ids).toContain("areaMm2");
  });
  it("voltageDrop is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "voltageDrop");
    expect(out?.highlight).toBe(true);
  });
  it("compute returns expected keys", () => {
    const inputs = calculator.inputSchema.parse({
      conductorMaterial: "copper", wireGaugeUnit: "awg", wireGauge: 12, lengthM: 30, currentA: 15, voltage: 120,
    });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("voltageDrop");
    expect(result).toHaveProperty("voltageDropPct");
    expect(result).toHaveProperty("receivingVoltage");
    expect(result).toHaveProperty("recommendation");
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
