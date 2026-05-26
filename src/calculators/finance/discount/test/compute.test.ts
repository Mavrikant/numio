import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("discount compute — numeric correctness", () => {
  it("20% off $100 → sale price $80, savings $20", () => {
    runNumericTests(calculator, [
      {
        inputs: { originalPrice: 100, discountPct: 20, taxRate: 0, mode: "discount_pct" },
        expected: {
          salePrice: 80,
          savings: 20,
          discountPct: 20,
          finalPriceWithTax: 80,
          savingsPct: 20,
        },
        tolerance: 0.001,
        description: "20% off $100: salePrice=80, savings=20",
      },
    ]);
  });

  it("0% discount: sale price equals original price", () => {
    runNumericTests(calculator, [
      {
        inputs: { originalPrice: 200, discountPct: 0, taxRate: 0, mode: "discount_pct" },
        expected: {
          salePrice: 200,
          savings: 0,
          discountPct: 0,
          savingsPct: 0,
        },
        tolerance: 0.001,
        description: "0% discount: no change",
      },
    ]);
  });

  it("100% discount: sale price is $0", () => {
    runNumericTests(calculator, [
      {
        inputs: { originalPrice: 150, discountPct: 100, taxRate: 0, mode: "discount_pct" },
        expected: {
          salePrice: 0,
          savings: 150,
          discountPct: 100,
          savingsPct: 100,
        },
        tolerance: 0.001,
        description: "100% discount: salePrice=0, savings=150",
      },
    ]);
  });

  it("discount_pct mode with 10% tax: after-tax price applied on sale price", () => {
    // 25% off $200 = $150, then 10% tax → $150 * 1.10 = $165
    runNumericTests(calculator, [
      {
        inputs: { originalPrice: 200, discountPct: 25, taxRate: 10, mode: "discount_pct" },
        expected: {
          salePrice: 150,
          savings: 50,
          finalPriceWithTax: 165,
        },
        tolerance: 0.01,
        description: "25% off $200 + 10% tax = $165 final",
      },
    ]);
  });

  it("final_price mode: $80 sale from $100 original → 20% discount", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        originalPrice: 100,
        discountPct: 0,
        taxRate: 0,
        mode: "final_price",
        salePrice: 80,
      }),
    );
    expect(result.salePrice).toBeCloseTo(80, 2);
    expect(result.discountPct).toBeCloseTo(20, 4);
    expect(result.savings).toBeCloseTo(20, 2);
    expect(result.savingsPct).toBeCloseTo(20, 4);
  });

  it("final_price mode: $0 sale from $200 original → 100% discount", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        originalPrice: 200,
        discountPct: 0,
        taxRate: 0,
        mode: "final_price",
        salePrice: 0,
      }),
    );
    expect(result.discountPct).toBeCloseTo(100, 4);
    expect(result.salePrice).toBeCloseTo(0, 2);
    expect(result.savings).toBeCloseTo(200, 2);
  });

  it("large retail: $999.99 with 15% off + 8.5% tax", () => {
    // salePrice = 999.99 * 0.85 = 849.9915
    // finalPriceWithTax = 849.9915 * 1.085 ≈ 922.24
    const result = calculator.compute(
      calculator.inputSchema.parse({
        originalPrice: 999.99,
        discountPct: 15,
        taxRate: 8.5,
        mode: "discount_pct",
      }),
    );
    expect(result.salePrice).toBeCloseTo(849.99, 1);
    expect(result.finalPriceWithTax).toBeCloseTo(922.24, 0);
  });
});
