import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("inflation — definition snapshot", () => {
  it("has correct slug and category", () => {
    expect(calculator.slug).toBe("inflation");
    expect(calculator.category).toBe("finance");
    expect(calculator.priority).toBe("P1");
  });

  it("has required inputs defined", () => {
    const inputIds = calculator.inputs.map((i) => i.id);
    expect(inputIds).toContain("amount");
    expect(inputIds).toContain("inflationRate");
    expect(inputIds).toContain("years");
    expect(inputIds).toContain("mode");
  });

  it("has required outputs defined", () => {
    const outputIds = calculator.outputs.map((o) => o.id);
    expect(outputIds).toContain("result");
    expect(outputIds).toContain("purchasingPowerLoss");
    expect(outputIds).toContain("cumulativeInflation");
    expect(outputIds).toContain("realValueToday");
  });

  it("has at least one reference", () => {
    expect(calculator.meta.references.length).toBeGreaterThan(0);
  });

  it("compute produces correct output shape", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        amount: 1000,
        inflationRate: 3,
        years: 10,
        mode: "future_cost",
      }),
    );
    expect(typeof result.result).toBe("number");
    expect(typeof result.purchasingPowerLoss).toBe("number");
    expect(typeof result.cumulativeInflation).toBe("number");
    expect(typeof result.realValueToday).toBe("number");
    // $1000 at 3% for 10yr ≈ $1343.92
    expect(result.result).toBeCloseTo(1343.92, 0);
  });
});
