import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Dynamic viscosity convert — numeric correctness", () => {
  it("pascal-second to poise: 1 Pa·s = 10 P", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "Pa_s", toUnit: "P" },
        expected: { result: 10 },
        tolerance: 1e-4,
        description: "1 Pa·s = 10 P",
      },
    ]);
  });

  it("centipoise to millipascal-second: 1 cP = 1 mPa·s", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "cP", toUnit: "mPa_s" },
        expected: { result: 1 },
        tolerance: 1e-6,
        description: "1 cP = 1 mPa·s",
      },
    ]);
  });

  it("poise to pascal-second: 1 P = 0.1 Pa·s", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "P", toUnit: "Pa_s" },
        expected: { result: 0.1 },
        tolerance: 1e-6,
        description: "1 P = 0.1 Pa·s",
      },
    ]);
  });
});
