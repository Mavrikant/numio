import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Flow rate convert — numeric correctness", () => {
  it("Cubic meter/second to Cubic meter/hour: 1 m³/s = 3600 m³/h", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "m3_s", toUnit: "m3_h" },
        expected: { result: 3600 },
        tolerance: 0.01,
        description: "1 m³/s = 3600 m³/h",
      },
    ]);
  });

  it("Liter/second to Liter/minute: 1 L/s = 60 L/min", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "L_s", toUnit: "L_min" },
        expected: { result: 60 },
        tolerance: 0.01,
        description: "1 L/s = 60 L/min",
      },
    ]);
  });

  it("Cubic foot/second to Cubic meter/second: 1 CFS ≈ 0.0283168 m³/s", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "ft3_s", toUnit: "m3_s" },
        expected: { result: 0.028316846592 },
        tolerance: 1e-6,
        description: "1 ft³/s = 0.028316846592 m³/s",
      },
    ]);
  });
});
