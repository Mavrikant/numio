import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Ovulation definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("ovulation");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("health");
  });

  it("has an icon", () => {
    expect(typeof calculator.icon).toBe("string");
    expect(calculator.icon.length).toBeGreaterThan(0);
  });

  it("has exactly 2 inputs", () => {
    expect(calculator.inputs).toHaveLength(2);
  });

  it("has input ids: lmpDate, cycleLength", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("lmpDate");
    expect(ids).toContain("cycleLength");
  });

  it("has exactly 5 outputs", () => {
    expect(calculator.outputs).toHaveLength(5);
  });

  it("has output ids: ovulationDate, fertileStart, fertileEnd, nextPeriod, lhSurgeDate", () => {
    const ids = calculator.outputs.map((o) => o.id);
    expect(ids).toContain("ovulationDate");
    expect(ids).toContain("fertileStart");
    expect(ids).toContain("fertileEnd");
    expect(ids).toContain("nextPeriod");
    expect(ids).toContain("lhSurgeDate");
  });

  it("ovulationDate output is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "ovulationDate");
    expect(out?.highlight).toBe(true);
  });

  it("has meta.references", () => {
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(1);
  });

  it("has a compute function", () => {
    expect(typeof calculator.compute).toBe("function");
  });

  it("compute returns all expected keys", () => {
    const inputs = calculator.inputSchema.parse({ lmpDate: "2025-01-01", cycleLength: 28 });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("ovulationDate");
    expect(result).toHaveProperty("fertileStart");
    expect(result).toHaveProperty("fertileEnd");
    expect(result).toHaveProperty("nextPeriod");
    expect(result).toHaveProperty("lhSurgeDate");
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
