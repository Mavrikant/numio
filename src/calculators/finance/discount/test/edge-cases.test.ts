import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("discount — edge cases", () => {
  it("schema rejects originalPrice <= 0", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { originalPrice: 0.01, discountPct: 20, taxRate: 0, mode: "discount_pct" },
      { originalPrice: 0, discountPct: 20, taxRate: 0, mode: "discount_pct" },
    );
  });

  it("schema rejects discountPct > 100", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { originalPrice: 100, discountPct: 100, taxRate: 0, mode: "discount_pct" },
      { originalPrice: 100, discountPct: 101, taxRate: 0, mode: "discount_pct" },
    );
  });

  it("schema rejects taxRate > 50", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { originalPrice: 100, discountPct: 20, taxRate: 50, mode: "discount_pct" },
      { originalPrice: 100, discountPct: 20, taxRate: 51, mode: "discount_pct" },
    );
  });

  it("schema rejects invalid mode", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { originalPrice: 100, discountPct: 20, taxRate: 0, mode: "discount_pct" },
      { originalPrice: 100, discountPct: 20, taxRate: 0, mode: "invalid_mode" },
    );
  });

  it("compute is pure", () => {
    const inputs = calculator.inputSchema.parse({
      originalPrice: 100,
      discountPct: 20,
      taxRate: 10,
      mode: "discount_pct",
    });
    assertComputeIsPure(calculator, inputs);
  });

  it("final_price mode: salePrice clamped to originalPrice when higher", () => {
    // If salePrice > originalPrice, clamp to originalPrice → 0% discount
    const result = calculator.compute(
      calculator.inputSchema.parse({
        originalPrice: 100,
        discountPct: 0,
        taxRate: 0,
        mode: "final_price",
        salePrice: 150,
      }),
    );
    expect(result.salePrice).toBeCloseTo(100, 2);
    expect(result.discountPct).toBeCloseTo(0, 4);
    expect(result.savings).toBeCloseTo(0, 4);
  });

  it("very small discount (0.1%): precision maintained", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        originalPrice: 1000,
        discountPct: 0.1,
        taxRate: 0,
        mode: "discount_pct",
      }),
    );
    // salePrice = 1000 * 0.999 = 999
    expect(result.salePrice).toBeCloseTo(999, 2);
    expect(result.savings).toBeCloseTo(1, 2);
    expect(result.savingsPct).toBeCloseTo(0.1, 4);
  });

  it("tax on zero-discount item: same as original * (1 + tax)", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        originalPrice: 100,
        discountPct: 0,
        taxRate: 20,
        mode: "discount_pct",
      }),
    );
    expect(result.finalPriceWithTax).toBeCloseTo(120, 2);
    expect(result.salePrice).toBeCloseTo(100, 2);
  });
});
