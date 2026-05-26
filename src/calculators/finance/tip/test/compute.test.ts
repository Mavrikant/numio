import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("tip compute — numeric correctness", () => {
  // Reference: Emily Post Institute / standard tipping guidelines

  it("18% tip on $50 bill for 1 person", () => {
    // tip = 50 * 0.18 = 9.00, total = 59.00, per person = 59.00
    runNumericTests(calculator, [
      {
        inputs: { billAmount: 50, tipPct: 18, numberOfPeople: 1, roundUp: false },
        expected: {
          tipAmount: 9.0,
          totalAmount: 59.0,
          perPersonTotal: 59.0,
          perPersonTip: 9.0,
        },
        tolerance: 0.01,
        description: "50 * 18% = $9 tip, $59 total",
      },
    ]);
  });

  it("20% tip on $100 bill for 4 people", () => {
    // tip = 20, total = 120, per person = 30, per person tip = 5
    runNumericTests(calculator, [
      {
        inputs: { billAmount: 100, tipPct: 20, numberOfPeople: 4, roundUp: false },
        expected: {
          tipAmount: 20.0,
          totalAmount: 120.0,
          perPersonTotal: 30.0,
          perPersonTip: 5.0,
        },
        tolerance: 0.01,
        description: "$100 * 20% = $20 tip, $120 total ÷ 4 = $30/person",
      },
    ]);
  });

  it("round-up: $33.50 bill, 18% tip, 3 people", () => {
    // tip = 33.50 * 0.18 = 6.03, total = 39.53, per person = 13.1767
    // rounded up per person = ceil(13.1767) = 14, totalRounded = 14 * 3 = 42
    const result = calculator.compute(
      calculator.inputSchema.parse({
        billAmount: 33.5,
        tipPct: 18,
        numberOfPeople: 3,
        roundUp: true,
      }),
    );
    expect(result.tipAmount).toBeCloseTo(6.03, 2);
    expect(result.totalAmount).toBeCloseTo(39.53, 2);
    expect(result.perPersonTotal).toBeCloseTo(13.177, 2);
    expect(result.totalRounded).toBe(42); // ceil(13.177) = 14 * 3
  });

  it("0% tip: no tip, total = bill", () => {
    runNumericTests(calculator, [
      {
        inputs: { billAmount: 75, tipPct: 0, numberOfPeople: 1, roundUp: false },
        expected: {
          tipAmount: 0,
          totalAmount: 75,
          perPersonTotal: 75,
          perPersonTip: 0,
        },
        tolerance: 0.001,
        description: "0% tip: no gratuity added",
      },
    ]);
  });

  it("15% tip on $80 for 2 people splits evenly", () => {
    // tip = 12, total = 92, per person = 46, per person tip = 6
    runNumericTests(calculator, [
      {
        inputs: { billAmount: 80, tipPct: 15, numberOfPeople: 2, roundUp: false },
        expected: {
          tipAmount: 12.0,
          totalAmount: 92.0,
          perPersonTotal: 46.0,
          perPersonTip: 6.0,
        },
        tolerance: 0.01,
        description: "$80 * 15% = $12 tip, $92 total ÷ 2 = $46/person",
      },
    ]);
  });

  it("when roundUp=false, totalRounded equals totalAmount", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        billAmount: 63.0,
        tipPct: 20,
        numberOfPeople: 3,
        roundUp: false,
      }),
    );
    // total = 63 * 1.2 = 75.6
    expect(result.totalRounded).toBeCloseTo(result.totalAmount, 4);
  });
});
