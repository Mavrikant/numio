import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Ohm's Law definition — shape snapshot", () => {
  it("has the correct slug", () => expect(calculator.slug).toBe("ohms-law"));
  it("has the correct category", () => expect(calculator.category).toBe("engineering"));
  it("has an icon", () => { expect(typeof calculator.icon).toBe("string"); expect(calculator.icon.length).toBeGreaterThan(0); });
  it("has exactly 4 inputs", () => expect(calculator.inputs).toHaveLength(4));
  it("has input ids: knownQty1, value1, knownQty2, value2", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("knownQty1");
    expect(ids).toContain("value1");
    expect(ids).toContain("knownQty2");
    expect(ids).toContain("value2");
  });
  it("has exactly 4 outputs", () => expect(calculator.outputs).toHaveLength(4));
  it("has output ids: voltage, current, resistance, power", () => {
    const ids = calculator.outputs.map((o) => o.id);
    expect(ids).toContain("voltage");
    expect(ids).toContain("current");
    expect(ids).toContain("resistance");
    expect(ids).toContain("power");
  });
  it("voltage output is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "voltage");
    expect(out?.highlight).toBe(true);
  });
  it("has meta.references with at least 1 entry", () => expect(calculator.meta.references.length).toBeGreaterThanOrEqual(1));
  it("has a formulaLatex string", () => { expect(typeof calculator.meta.formulaLatex).toBe("string"); });
  it("has an inputSchema (Zod)", () => expect(typeof calculator.inputSchema.parse).toBe("function"));
  it("has a compute function", () => expect(typeof calculator.compute).toBe("function"));
  it("compute returns object with expected keys", () => {
    const inputs = calculator.inputSchema.parse({ knownQty1: "voltage", value1: 12, knownQty2: "current", value2: 2 });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("voltage");
    expect(result).toHaveProperty("current");
    expect(result).toHaveProperty("resistance");
    expect(result).toHaveProperty("power");
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
