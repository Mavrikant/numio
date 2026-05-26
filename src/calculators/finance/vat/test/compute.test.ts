import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("vat compute — numeric correctness", () => {
  it("exclusive: £100 base + 20% VAT = £120 total, £20 tax", () => {
    runNumericTests(calculator, [
      {
        inputs: { amount: 100, vatRate: 20, mode: "exclusive" },
        expected: {
          basePrice: 100,
          vatAmount: 20,
          totalPrice: 120,
          effectiveRate: 20,
        },
        tolerance: 0.001,
        description: "£100 + 20% VAT = £120 total",
      },
    ]);
  });

  it("inclusive: £120 gross with 20% VAT → £100 base, £20 tax", () => {
    runNumericTests(calculator, [
      {
        inputs: { amount: 120, vatRate: 20, mode: "inclusive" },
        expected: {
          totalPrice: 120,
          basePrice: 100,
          vatAmount: 20,
          effectiveRate: 20,
        },
        tolerance: 0.001,
        description: "£120 incl. 20% VAT → base=£100, tax=£20",
      },
    ]);
  });

  it("exclusive: €200 + 19% German VAT = €238 total", () => {
    // vatAmount = 200 * 0.19 = 38, total = 238
    runNumericTests(calculator, [
      {
        inputs: { amount: 200, vatRate: 19, mode: "exclusive" },
        expected: {
          basePrice: 200,
          vatAmount: 38,
          totalPrice: 238,
        },
        tolerance: 0.01,
        description: "€200 + 19% = €238",
      },
    ]);
  });

  it("inclusive: ₹1180 at 18% GST → base ₹1000, tax ₹180", () => {
    // base = 1180 / 1.18 = 1000, tax = 180
    runNumericTests(calculator, [
      {
        inputs: { amount: 1180, vatRate: 18, mode: "inclusive" },
        expected: {
          basePrice: 1000,
          vatAmount: 180,
          totalPrice: 1180,
        },
        tolerance: 0.01,
        description: "₹1180 incl. 18% GST → base=₹1000",
      },
    ]);
  });

  it("0% VAT: tax amount is zero, total equals base", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({ amount: 500, vatRate: 0, mode: "exclusive" }),
    );
    expect(result.vatAmount).toBeCloseTo(0, 4);
    expect(result.totalPrice).toBeCloseTo(500, 2);
    expect(result.basePrice).toBeCloseTo(500, 2);
    expect(result.effectiveRate).toBeCloseTo(0, 4);
  });

  it("exclusive and inclusive round-trip consistency", () => {
    // Start with base $250 at 15% → total = $287.50
    const excResult = calculator.compute(
      calculator.inputSchema.parse({ amount: 250, vatRate: 15, mode: "exclusive" }),
    );
    // Now use that total in inclusive mode → should recover base=$250
    const incResult = calculator.compute(
      calculator.inputSchema.parse({
        amount: excResult.totalPrice,
        vatRate: 15,
        mode: "inclusive",
      }),
    );
    expect(incResult.basePrice).toBeCloseTo(250, 4);
    expect(incResult.vatAmount).toBeCloseTo(excResult.vatAmount, 4);
  });
});
