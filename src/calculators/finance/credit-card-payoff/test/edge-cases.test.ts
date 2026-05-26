import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("credit-card-payoff edge cases — schema validation", () => {
  it("rejects balance < 1", () => {
    expect(() =>
      calculator.inputSchema.parse({
        balance: 0,
        apr: 20,
        paymentMode: "fixed",
        fixedPayment: 200,
      }),
    ).toThrow();
  });

  it("rejects balance > 500,000", () => {
    expect(() =>
      calculator.inputSchema.parse({
        balance: 600000,
        apr: 20,
        paymentMode: "fixed",
        fixedPayment: 200,
      }),
    ).toThrow();
  });

  it("rejects apr > 100", () => {
    expect(() =>
      calculator.inputSchema.parse({
        balance: 5000,
        apr: 101,
        paymentMode: "fixed",
        fixedPayment: 200,
      }),
    ).toThrow();
  });

  it("rejects fixed mode without fixedPayment", () => {
    expect(() =>
      calculator.inputSchema.parse({
        balance: 5000,
        apr: 20,
        paymentMode: "fixed",
      }),
    ).toThrow();
  });

  it("accepts minimum mode without fixedPayment", () => {
    expect(() =>
      calculator.inputSchema.parse({
        balance: 5000,
        apr: 20,
        paymentMode: "minimum",
      }),
    ).not.toThrow();
  });

  it("defaults minimumPaymentPct to 2", () => {
    const parsed = calculator.inputSchema.parse({
      balance: 5000,
      apr: 20,
      paymentMode: "minimum",
    });
    expect(parsed.minimumPaymentPct).toBe(2);
  });

  it("schema validates", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { balance: 5000, apr: 20, paymentMode: "fixed", fixedPayment: 200 },
      { balance: 0, apr: 20, paymentMode: "fixed", fixedPayment: 200 },
    );
  });
});

describe("credit-card-payoff edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      balance: 5000,
      apr: 20,
      paymentMode: "fixed",
      fixedPayment: 200,
    });
    assertComputeIsPure(calculator, inputs);
  });
});

describe("credit-card-payoff edge cases — boundary behaviour", () => {
  it("very high APR with low fixed payment → caps at MAX_MONTHS", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        balance: 5000,
        apr: 99,
        paymentMode: "fixed",
        fixedPayment: 10,
      }),
    );
    expect(result.monthsToPayoff).toBe(1200);
  });

  it("large fixed payment pays off quickly", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        balance: 5000,
        apr: 20,
        paymentMode: "fixed",
        fixedPayment: 5000,
      }),
    );
    expect(result.monthsToPayoff).toBe(1);
  });
});
