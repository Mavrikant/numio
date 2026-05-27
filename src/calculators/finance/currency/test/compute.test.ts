import { describe, it } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

// Reference: static mid-market FX rate snapshot from January 2025.
// Cross-checked with ECB (ecb.europa.eu) and IMF SDR valuations.

describe("Currency compute — numeric correctness", () => {
  it("USD → USD is identity (100 USD → 100 USD, rate=1)", () => {
    // Sanity: same-currency conversion must round-trip exactly.
    runNumericTests(calculator, [
      {
        inputs: { amount: 100, fromCurrency: "USD", toCurrency: "USD" },
        expected: { convertedAmount: 100, rate: 1, reverseRate: 1 },
        tolerance: 0.0001,
        description: "USD self-conversion",
      },
    ]);
  });

  it("USD → EUR uses 0.96 rate (100 USD → 96 EUR)", () => {
    // Reference: snapshot rate EUR/USD = 0.96 → 100 × 0.96 = 96
    runNumericTests(calculator, [
      {
        inputs: { amount: 100, fromCurrency: "USD", toCurrency: "EUR" },
        expected: { convertedAmount: 96, rate: 0.96, reverseRate: 1 / 0.96 },
        tolerance: 0.0001,
        description: "USD to EUR direct",
      },
    ]);
  });

  it("EUR → USD reverses correctly (100 EUR → ~104.17 USD)", () => {
    // Reference: 1 EUR = 1/0.96 USD ≈ 1.04167 USD → 100 EUR ≈ 104.17 USD
    runNumericTests(calculator, [
      {
        inputs: { amount: 100, fromCurrency: "EUR", toCurrency: "USD" },
        expected: { convertedAmount: 104.1667 },
        tolerance: 0.01,
        description: "EUR to USD reverse",
      },
    ]);
  });

  it("GBP → JPY cross-rate via USD (100 GBP → ~19,296 JPY)", () => {
    // Reference: GBP=0.81/USD, JPY=156.3/USD → rate = 156.3 / 0.81 = 192.96
    // → 100 GBP × 192.96 ≈ 19,296.30 JPY
    runNumericTests(calculator, [
      {
        inputs: { amount: 100, fromCurrency: "GBP", toCurrency: "JPY" },
        expected: { convertedAmount: 19296.296 },
        tolerance: 0.1,
        description: "GBP to JPY cross-rate",
      },
    ]);
  });

  it("USD → TRY uses 35.5 rate (1000 USD → 35,500 TRY)", () => {
    // Reference: snapshot TRY/USD = 35.5 → 1000 × 35.5 = 35,500
    runNumericTests(calculator, [
      {
        inputs: { amount: 1000, fromCurrency: "USD", toCurrency: "TRY" },
        expected: { convertedAmount: 35500, rate: 35.5 },
        tolerance: 0.01,
        description: "USD to TRY thousand-unit",
      },
    ]);
  });

  it("INR → SGD cross-rate (10,000 INR → ~158.4 SGD)", () => {
    // Reference: INR=86.5, SGD=1.37 → rate = 1.37 / 86.5 ≈ 0.015838
    // → 10000 × 0.015838 ≈ 158.38 SGD
    runNumericTests(calculator, [
      {
        inputs: { amount: 10000, fromCurrency: "INR", toCurrency: "SGD" },
        expected: { convertedAmount: 158.3815 },
        tolerance: 0.05,
        description: "INR to SGD",
      },
    ]);
  });
});
