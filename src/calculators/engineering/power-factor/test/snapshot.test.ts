import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Power Factor definition — shape snapshot", () => {
  it("has the correct slug", () => expect(calculator.slug).toBe("power-factor"));
  it("has the correct category", () => expect(calculator.category).toBe("engineering"));
  it("has an icon", () => {
    expect(typeof calculator.icon).toBe("string");
    expect(calculator.icon.length).toBeGreaterThan(0);
  });
  it("has exactly 9 inputs", () => expect(calculator.inputs).toHaveLength(9));
  it("has input ids: mode, realPowerKw, reactivePowerKvar, kva, pf, currentPf, targetPf, voltageV, frequencyHz", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("mode");
    expect(ids).toContain("realPowerKw");
    expect(ids).toContain("reactivePowerKvar");
    expect(ids).toContain("kva");
    expect(ids).toContain("pf");
    expect(ids).toContain("currentPf");
    expect(ids).toContain("targetPf");
    expect(ids).toContain("voltageV");
    expect(ids).toContain("frequencyHz");
  });
  it("has exactly 7 outputs", () => expect(calculator.outputs).toHaveLength(7));
  it("has output ids including powerFactorPf, correctionCapacitorMicrofarad, kvarRequired", () => {
    const ids = calculator.outputs.map((o) => o.id);
    expect(ids).toContain("powerFactorPf");
    expect(ids).toContain("realPowerKw");
    expect(ids).toContain("apparentPowerKva");
    expect(ids).toContain("reactivePowerKvar");
    expect(ids).toContain("phaseAngleDeg");
    expect(ids).toContain("correctionCapacitorMicrofarad");
    expect(ids).toContain("kvarRequired");
  });
  it("powerFactorPf output is highlighted", () => {
    const pf = calculator.outputs.find((o) => o.id === "powerFactorPf");
    expect(pf?.highlight).toBe(true);
  });
  it("has meta.formulaLatex", () => {
    expect(typeof calculator.meta.formulaLatex).toBe("string");
    expect(calculator.meta.formulaLatex.length).toBeGreaterThan(0);
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
  it("compute returns object with expected keys (pf_from_power mode)", () => {
    const inputs = calculator.inputSchema.parse({
      mode: "pf_from_power",
      realPowerKw: 75,
      reactivePowerKvar: 50,
    });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("powerFactorPf");
    expect(result).toHaveProperty("realPowerKw");
    expect(result).toHaveProperty("apparentPowerKva");
    expect(result).toHaveProperty("reactivePowerKvar");
    expect(result).toHaveProperty("phaseAngleDeg");
    expect(result).toHaveProperty("correctionCapacitorMicrofarad");
    expect(result).toHaveProperty("kvarRequired");
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
