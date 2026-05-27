import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Standard Deviation — definition snapshot", () => {
  it("definition has correct structure", () => {
    expect(calculator).toBeDefined();
    expect(calculator.slug).toBe("standard-deviation");
    expect(calculator.category).toBe("math");
    expect(calculator.priority).toBe("P1");
    expect(calculator.inputs).toHaveLength(2);
    expect(calculator.outputs).toHaveLength(4);
  });

  it("inputs are correctly configured", () => {
    const valuesInput = calculator.inputs.find((i) => i.id === "values");
    const typeInput = calculator.inputs.find((i) => i.id === "type");

    expect(valuesInput).toBeDefined();
    expect(valuesInput?.type.kind).toBe("text");
    expect(typeInput).toBeDefined();
    expect(typeInput?.type.kind).toBe("select");
  });

  it("outputs are correctly configured", () => {
    const stdDevOutput = calculator.outputs.find((o) => o.id === "standardDeviation");
    expect(stdDevOutput).toBeDefined();
    expect(stdDevOutput?.format).toBe("number");
    expect(stdDevOutput?.highlight).toBe(true);
    expect(stdDevOutput?.precision).toBe(4);
  });

  it("has references", () => {
    expect(calculator.meta.references).toBeDefined();
    expect(calculator.meta.references.length).toBeGreaterThan(0);
  });

  it("has i18n bundle", () => {
    expect(calculator.i18n).toBeDefined();
    expect(calculator.i18n.en).toBeDefined();
    expect(calculator.i18n.en.title).toBeTruthy();
  });

  it("related calculators are referenced", () => {
    expect(calculator.related).toBeDefined();
    expect(calculator.related?.length).toBeGreaterThan(0);
  });
});
