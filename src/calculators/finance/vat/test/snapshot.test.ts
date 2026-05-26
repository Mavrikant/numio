import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("vat — definition snapshot", () => {
  it("has correct slug and category", () => {
    expect(calculator.slug).toBe("vat");
    expect(calculator.category).toBe("finance");
    expect(calculator.priority).toBe("P1");
  });

  it("has required inputs defined", () => {
    const inputIds = calculator.inputs.map((i) => i.id);
    expect(inputIds).toContain("amount");
    expect(inputIds).toContain("vatRate");
    expect(inputIds).toContain("mode");
  });

  it("has required outputs defined", () => {
    const outputIds = calculator.outputs.map((o) => o.id);
    expect(outputIds).toContain("totalPrice");
    expect(outputIds).toContain("basePrice");
    expect(outputIds).toContain("vatAmount");
    expect(outputIds).toContain("effectiveRate");
  });

  it("has at least one reference", () => {
    expect(calculator.meta.references.length).toBeGreaterThan(0);
  });

  it("compute produces expected result shape", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({ amount: 100, vatRate: 20, mode: "exclusive" }),
    );
    expect(typeof result.basePrice).toBe("number");
    expect(typeof result.vatAmount).toBe("number");
    expect(typeof result.totalPrice).toBe("number");
    expect(typeof result.effectiveRate).toBe("number");
    // 20% of 100 = 20 VAT, 120 total
    expect(result.vatAmount).toBeCloseTo(20, 2);
    expect(result.totalPrice).toBeCloseTo(120, 2);
  });
});
