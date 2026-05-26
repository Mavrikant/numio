import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("discount — definition snapshot", () => {
  it("has correct slug and category", () => {
    expect(calculator.slug).toBe("discount");
    expect(calculator.category).toBe("finance");
    expect(calculator.priority).toBe("P1");
  });

  it("has required inputs defined", () => {
    const inputIds = calculator.inputs.map((i) => i.id);
    expect(inputIds).toContain("originalPrice");
    expect(inputIds).toContain("discountPct");
    expect(inputIds).toContain("taxRate");
    expect(inputIds).toContain("mode");
  });

  it("has required outputs defined", () => {
    const outputIds = calculator.outputs.map((o) => o.id);
    expect(outputIds).toContain("salePrice");
    expect(outputIds).toContain("savings");
    expect(outputIds).toContain("discountPct");
    expect(outputIds).toContain("finalPriceWithTax");
    expect(outputIds).toContain("savingsPct");
  });

  it("has at least one reference", () => {
    expect(calculator.meta.references.length).toBeGreaterThan(0);
  });

  it("compute produces expected result shape", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        originalPrice: 100,
        discountPct: 25,
        taxRate: 0,
        mode: "discount_pct",
      }),
    );
    expect(typeof result.salePrice).toBe("number");
    expect(typeof result.savings).toBe("number");
    expect(typeof result.discountPct).toBe("number");
    expect(typeof result.finalPriceWithTax).toBe("number");
    expect(typeof result.savingsPct).toBe("number");
    // 25% off $100 = $75
    expect(result.salePrice).toBeCloseTo(75, 2);
    expect(result.savings).toBeCloseTo(25, 2);
  });
});
