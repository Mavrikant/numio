import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Descriptive Statistics — definition snapshot", () => {
  it("has correct metadata", () => {
    expect(calculator.slug).toBe("statistics-basic");
    expect(calculator.category).toBe("math");
    expect(calculator.priority).toBe("P2");
  });

  it("has 1 input field", () => {
    expect(calculator.inputs).toHaveLength(1);
    expect(calculator.inputs[0].id).toBe("values");
  });

  it("has 12 output fields", () => {
    expect(calculator.outputs).toHaveLength(12);
    const outputIds = calculator.outputs.map((o) => o.id);
    expect(outputIds).toContain("count");
    expect(outputIds).toContain("mean");
    expect(outputIds).toContain("median");
    expect(outputIds).toContain("stdDev");
    expect(outputIds).toContain("iqr");
  });

  it("has i18n bundle with English", () => {
    expect(calculator.i18n.en).toBeDefined();
    expect(calculator.i18n.en.title).toBeTruthy();
  });

  it("has references", () => {
    expect(calculator.meta.references.length).toBeGreaterThan(0);
  });
});
