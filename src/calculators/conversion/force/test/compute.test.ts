import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Force convert — numeric correctness", () => {
  it("Kilogram-force to Newton: 1 kgf = 9.80665 N", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "kgf", toUnit: "N" },
        expected: { result: 9.80665 },
        tolerance: 1e-5,
        description: "1 kgf = 9.80665 N",
      },
    ]);
  });

  it("Pound-force to Newton: 1 lbf ≈ 4.44822162 N", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "lbf", toUnit: "N" },
        expected: { result: 4.44822162 },
        tolerance: 1e-6,
        description: "1 lbf ≈ 4.44822162 N",
      },
    ]);
  });

  it("Newton to Dyne: 1 N = 100000 dyn", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "N", toUnit: "dyn" },
        expected: { result: 100000 },
        tolerance: 0.01,
        description: "1 N = 100000 dyn",
      },
    ]);
  });
});
