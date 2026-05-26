import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("tip — edge cases", () => {
  it("schema rejects billAmount <= 0", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { billAmount: 0.01, tipPct: 18, numberOfPeople: 1, roundUp: false },
      { billAmount: 0, tipPct: 18, numberOfPeople: 1, roundUp: false },
    );
  });

  it("schema rejects numberOfPeople < 1", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { billAmount: 50, tipPct: 18, numberOfPeople: 1, roundUp: false },
      { billAmount: 50, tipPct: 18, numberOfPeople: 0, roundUp: false },
    );
  });

  it("schema rejects tipPct > 100", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { billAmount: 50, tipPct: 100, numberOfPeople: 1, roundUp: false },
      { billAmount: 50, tipPct: 101, numberOfPeople: 1, roundUp: false },
    );
  });

  it("compute is pure", () => {
    const inputs = calculator.inputSchema.parse({
      billAmount: 75,
      tipPct: 20,
      numberOfPeople: 4,
      roundUp: true,
    });
    assertComputeIsPure(calculator, inputs);
  });

  it("100% tip: tip equals bill amount", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        billAmount: 50,
        tipPct: 100,
        numberOfPeople: 1,
        roundUp: false,
      }),
    );
    expect(result.tipAmount).toBeCloseTo(50, 2);
    expect(result.totalAmount).toBeCloseTo(100, 2);
  });

  it("large group: 100 people, even split", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        billAmount: 10000,
        tipPct: 20,
        numberOfPeople: 100,
        roundUp: false,
      }),
    );
    // tip = 2000, total = 12000, per person = 120
    expect(result.tipAmount).toBeCloseTo(2000, 2);
    expect(result.perPersonTotal).toBeCloseTo(120, 2);
  });

  it("round-up with already whole number per-person: no change", () => {
    // $120 bill, 20% tip = $144 total, 4 people = $36/person (whole number)
    const result = calculator.compute(
      calculator.inputSchema.parse({
        billAmount: 120,
        tipPct: 20,
        numberOfPeople: 4,
        roundUp: true,
      }),
    );
    expect(result.perPersonTotal).toBeCloseTo(36, 4);
    // ceil(36) = 36, so totalRounded = 36 * 4 = 144
    expect(result.totalRounded).toBeCloseTo(144, 2);
  });
});
