import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Z-Score — definition snapshot", () => {
  it("definition has correct structure", () => {
    expect(calculator).toBeDefined();
    expect(calculator.slug).toBe("z-score");
    expect(calculator.category).toBe("math");
    expect(calculator.priority).toBe("P2");
    expect(calculator.inputs).toHaveLength(3);
    expect(calculator.outputs).toHaveLength(5);
  });

  it("inputs include value, mean, standardDeviation", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("value");
    expect(ids).toContain("mean");
    expect(ids).toContain("standardDeviation");
  });

  it("outputs include zScore (highlighted)", () => {
    const zScoreOutput = calculator.outputs.find((o) => o.id === "zScore");
    expect(zScoreOutput).toBeDefined();
    expect(zScoreOutput?.highlight).toBe(true);
    expect(zScoreOutput?.precision).toBe(4);
  });

  it("has references to authority sites", () => {
    expect(calculator.meta.references.length).toBeGreaterThan(0);
    expect(calculator.meta.references[0].authority).toBeTruthy();
  });

  it("has i18n with all key strings", () => {
    const en = calculator.i18n.en;
    expect(en.title).toBeTruthy();
    expect(en.inputs.value.label).toBeTruthy();
    expect(en.outputs.zScore.label).toBeTruthy();
  });
});
