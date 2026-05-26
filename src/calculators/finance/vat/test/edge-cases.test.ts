import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("vat — edge cases", () => {
  it("schema rejects amount <= 0", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { amount: 0.01, vatRate: 20, mode: "exclusive" },
      { amount: 0, vatRate: 20, mode: "exclusive" },
    );
  });

  it("schema rejects vatRate > 50", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { amount: 100, vatRate: 50, mode: "exclusive" },
      { amount: 100, vatRate: 51, mode: "exclusive" },
    );
  });

  it("schema rejects negative vatRate", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { amount: 100, vatRate: 0, mode: "exclusive" },
      { amount: 100, vatRate: -1, mode: "exclusive" },
    );
  });

  it("schema rejects invalid mode", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { amount: 100, vatRate: 20, mode: "exclusive" },
      { amount: 100, vatRate: 20, mode: "additive" },
    );
  });

  it("compute is pure", () => {
    const inputs = calculator.inputSchema.parse({
      amount: 100,
      vatRate: 20,
      mode: "exclusive",
    });
    assertComputeIsPure(calculator, inputs);
  });

  it("maximum VAT rate (50%): exclusive mode", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({ amount: 100, vatRate: 50, mode: "exclusive" }),
    );
    expect(result.vatAmount).toBeCloseTo(50, 2);
    expect(result.totalPrice).toBeCloseTo(150, 2);
    expect(result.effectiveRate).toBeCloseTo(50, 4);
  });

  it("inclusive with 50% VAT: base = 2/3 of total", () => {
    // base = 150 / 1.5 = 100, tax = 50
    const result = calculator.compute(
      calculator.inputSchema.parse({ amount: 150, vatRate: 50, mode: "inclusive" }),
    );
    expect(result.basePrice).toBeCloseTo(100, 4);
    expect(result.vatAmount).toBeCloseTo(50, 4);
  });

  it("small fractional amount: precision maintained", () => {
    // $0.01 + 20% = $0.012 total
    const result = calculator.compute(
      calculator.inputSchema.parse({ amount: 0.01, vatRate: 20, mode: "exclusive" }),
    );
    expect(result.vatAmount).toBeCloseTo(0.002, 4);
    expect(result.totalPrice).toBeCloseTo(0.012, 4);
  });

  it("large amount: $1 billion + 20% VAT", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({ amount: 1_000_000_000, vatRate: 20, mode: "exclusive" }),
    );
    expect(result.vatAmount).toBeCloseTo(200_000_000, 0);
    expect(result.totalPrice).toBeCloseTo(1_200_000_000, 0);
  });
});
