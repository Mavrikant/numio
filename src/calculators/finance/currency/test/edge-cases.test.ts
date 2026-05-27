import { describe, it, expect } from "vitest";
import { assertComputeIsPure } from "@/test-utils";
import calculator from "../definition";
import type { CurrencyResult } from "../compute";

describe("Currency edge cases — schema validation", () => {
  it("rejects unknown source currency code", () => {
    expect(() =>
      calculator.inputSchema.parse({
        amount: 100,
        fromCurrency: "XYZ",
        toCurrency: "EUR",
      }),
    ).toThrow();
  });

  it("rejects unknown target currency code", () => {
    expect(() =>
      calculator.inputSchema.parse({
        amount: 100,
        fromCurrency: "USD",
        toCurrency: "ABC",
      }),
    ).toThrow();
  });

  it("rejects negative amount", () => {
    expect(() =>
      calculator.inputSchema.parse({
        amount: -10,
        fromCurrency: "USD",
        toCurrency: "EUR",
      }),
    ).toThrow();
  });

  it("rejects NaN amount", () => {
    expect(() =>
      calculator.inputSchema.parse({
        amount: NaN,
        fromCurrency: "USD",
        toCurrency: "EUR",
      }),
    ).toThrow();
  });

  it("accepts zero amount (yields zero)", () => {
    const parsed = calculator.inputSchema.parse({
      amount: 0,
      fromCurrency: "USD",
      toCurrency: "EUR",
    }) as { amount: number; fromCurrency: "USD"; toCurrency: "EUR" };
    const result = calculator.compute(parsed) as CurrencyResult;
    expect(result.convertedAmount).toBe(0);
  });
});

describe("Currency edge cases — purity & round-trip", () => {
  it("is pure across multiple invocations", () => {
    const parsed = calculator.inputSchema.parse({
      amount: 250.75,
      fromCurrency: "CHF",
      toCurrency: "CAD",
    }) as { amount: number; fromCurrency: "CHF"; toCurrency: "CAD" };
    assertComputeIsPure(calculator, parsed);
  });

  it("USD → EUR → USD round-trip recovers within rounding tolerance", () => {
    const parseA = calculator.inputSchema.parse({
      amount: 1000,
      fromCurrency: "USD",
      toCurrency: "EUR",
    }) as { amount: number; fromCurrency: "USD"; toCurrency: "EUR" };
    const a = calculator.compute(parseA) as CurrencyResult;

    const parseB = calculator.inputSchema.parse({
      amount: a.convertedAmount,
      fromCurrency: "EUR",
      toCurrency: "USD",
    }) as { amount: number; fromCurrency: "EUR"; toCurrency: "USD" };
    const b = calculator.compute(parseB) as CurrencyResult;

    expect(b.convertedAmount).toBeCloseTo(1000, 1);
  });

  it("emits a lastUpdated reference date string", () => {
    const parsed = calculator.inputSchema.parse({
      amount: 1,
      fromCurrency: "USD",
      toCurrency: "USD",
    }) as { amount: number; fromCurrency: "USD"; toCurrency: "USD" };
    const result = calculator.compute(parsed) as CurrencyResult;
    expect(typeof result.lastUpdated).toBe("string");
    // ISO YYYY-MM-DD format check
    expect(result.lastUpdated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});
