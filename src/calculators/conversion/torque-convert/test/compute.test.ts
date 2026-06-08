import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Torque convert — numeric correctness", () => {
  it("Pound-force-foot to Newton-meter: 1 lbf·ft ≈ 1.3558 N·m", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "lbf_ft", toUnit: "Nm" },
        expected: { result: 1.35581795 },
        tolerance: 1e-6,
        description: "1 lbf·ft = 1.35581795 N·m",
      },
    ]);
  });

  it("Kilogram-force-meter to Newton-meter: 1 kgf·m = 9.80665 N·m", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "kgf_m", toUnit: "Nm" },
        expected: { result: 9.80665 },
        tolerance: 1e-5,
        description: "1 kgf·m = 9.80665 N·m",
      },
    ]);
  });

  it("Newton-meter to Pound-force-inch: 1 N·m ≈ 8.8507 lbf·in", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "Nm", toUnit: "lbf_in" },
        expected: { result: 8.8507458 },
        tolerance: 1e-4,
        description: "1 N·m = 8.8507458 lbf·in",
      },
    ]);
  });
});
