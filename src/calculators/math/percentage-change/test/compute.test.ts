import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";
import { compute } from "../compute";

describe("Percentage Change — numeric correctness", () => {
  it("100 → 125 = +25% increase", () => {
    // Reference: ((125 - 100) / |100|) * 100 = 25
    runNumericTests(calculator, [
      {
        inputs: { originalValue: 100, newValue: 125 },
        expected: { percentChange: 25, absoluteChange: 25, relativeChange: 0.25 },
        tolerance: 0.0001,
      },
    ]);
  });

  it("200 → 150 = -25% decrease", () => {
    // Reference: ((150 - 200) / |200|) * 100 = -25
    runNumericTests(calculator, [
      {
        inputs: { originalValue: 200, newValue: 150 },
        expected: { percentChange: -25, absoluteChange: -50, relativeChange: -0.25 },
        tolerance: 0.0001,
      },
    ]);
  });

  it("50 → 200 = +300% (can exceed 100%)", () => {
    runNumericTests(calculator, [
      {
        inputs: { originalValue: 50, newValue: 200 },
        expected: { percentChange: 300, absoluteChange: 150 },
        tolerance: 0.0001,
      },
    ]);
  });

  it("-100 → -50 = +50% (negative base, |original| denominator)", () => {
    // ((-50 - (-100)) / |-100|) * 100 = (50 / 100) * 100 = +50
    // Reference: convention used by financial reporting; matches Wikipedia
    // relative-change formulation using |x_reference|.
    runNumericTests(calculator, [
      {
        inputs: { originalValue: -100, newValue: -50 },
        expected: { percentChange: 50, absoluteChange: 50, relativeChange: 0.5 },
        tolerance: 0.0001,
      },
    ]);
  });

  it("same values → 0% no-change", () => {
    runNumericTests(calculator, [
      {
        inputs: { originalValue: 42, newValue: 42 },
        expected: { percentChange: 0, absoluteChange: 0, relativeChange: 0 },
        tolerance: 0.0001,
      },
    ]);
  });

  it("BLS factsheet example: CPI 100 → 103 = +3.0%", () => {
    // U.S. BLS percent-change worksheet uses ((new-old)/old)*100.
    runNumericTests(calculator, [
      {
        inputs: { originalValue: 100, newValue: 103 },
        expected: { percentChange: 3 },
        tolerance: 0.0001,
      },
    ]);
  });
});

describe("Percentage Change — direction & explanation", () => {
  it("increase direction set correctly", () => {
    const r = compute({ originalValue: 10, newValue: 12 });
    expect(r.direction).toBe("increase");
  });

  it("decrease direction set correctly", () => {
    const r = compute({ originalValue: 12, newValue: 10 });
    expect(r.direction).toBe("decrease");
  });

  it("no-change direction set correctly", () => {
    const r = compute({ originalValue: 5, newValue: 5 });
    expect(r.direction).toBe("no-change");
  });
});
