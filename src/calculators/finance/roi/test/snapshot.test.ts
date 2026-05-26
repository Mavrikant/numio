import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("roi — definition snapshot", () => {
  it("has correct slug and category", () => {
    expect(calculator.slug).toBe("roi");
    expect(calculator.category).toBe("finance");
    expect(calculator.priority).toBe("P1");
  });

  it("has required inputs defined", () => {
    const inputIds = calculator.inputs.map((i) => i.id);
    expect(inputIds).toContain("initialInvestment");
    expect(inputIds).toContain("finalValue");
    expect(inputIds).toContain("years");
  });

  it("has required outputs defined", () => {
    const outputIds = calculator.outputs.map((o) => o.id);
    expect(outputIds).toContain("roi");
    expect(outputIds).toContain("annualizedRoi");
    expect(outputIds).toContain("netProfit");
    expect(outputIds).toContain("moic");
    expect(outputIds).toContain("ruleOf72Years");
  });

  it("has at least one reference", () => {
    expect(calculator.meta.references.length).toBeGreaterThan(0);
  });

  it("compute produces expected result shape", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        initialInvestment: 10000,
        finalValue: 15000,
        years: 1,
      }),
    );
    expect(typeof result.roi).toBe("number");
    expect(typeof result.annualizedRoi).toBe("number");
    expect(typeof result.netProfit).toBe("number");
    expect(typeof result.moic).toBe("number");
    expect(typeof result.ruleOf72Years).toBe("number");
    // ROI = 50%
    expect(result.roi).toBeCloseTo(50, 2);
  });
});
