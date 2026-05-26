import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("LED Resistor definition — shape snapshot", () => {
  it("has the correct slug", () => expect(calculator.slug).toBe("led-resistor"));
  it("has the correct category", () => expect(calculator.category).toBe("engineering"));
  it("has an icon", () => {
    expect(typeof calculator.icon).toBe("string");
    expect(calculator.icon.length).toBeGreaterThan(0);
  });
  it("has exactly 4 inputs", () => expect(calculator.inputs).toHaveLength(4));
  it("has input ids: supplyVoltage, forwardVoltage, forwardCurrentMa, ledCount", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("supplyVoltage");
    expect(ids).toContain("forwardVoltage");
    expect(ids).toContain("forwardCurrentMa");
    expect(ids).toContain("ledCount");
  });
  it("has exactly 5 outputs", () => expect(calculator.outputs).toHaveLength(5));
  it("has output ids including exactResistanceOhm and standardResistanceOhm", () => {
    const ids = calculator.outputs.map((o) => o.id);
    expect(ids).toContain("exactResistanceOhm");
    expect(ids).toContain("standardResistanceOhm");
    expect(ids).toContain("powerDissipatedW");
    expect(ids).toContain("actualCurrentMa");
    expect(ids).toContain("resistorColorCode");
  });
  it("exactResistanceOhm output is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "exactResistanceOhm");
    expect(out?.highlight).toBe(true);
  });
  it("has meta.references with at least 1 entry", () => {
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(1);
  });
  it("has a formulaLatex string", () => {
    expect(typeof calculator.meta.formulaLatex).toBe("string");
  });
  it("has an inputSchema (Zod)", () => {
    expect(typeof calculator.inputSchema.parse).toBe("function");
  });
  it("has a compute function", () => {
    expect(typeof calculator.compute).toBe("function");
  });
  it("compute returns object with expected keys", () => {
    const inputs = calculator.inputSchema.parse({
      supplyVoltage: 5, forwardVoltage: 2.0, forwardCurrentMa: 20, ledCount: 1,
    });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("exactResistanceOhm");
    expect(result).toHaveProperty("standardResistanceOhm");
    expect(result).toHaveProperty("powerDissipatedW");
    expect(result).toHaveProperty("actualCurrentMa");
    expect(result).toHaveProperty("resistorColorCode");
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
