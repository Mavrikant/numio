import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Kinematic viscosity convert — numeric correctness", () => {
  it("stokes to m²/s: 1 St = 0.0001 m²/s", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "St", toUnit: "m2_s" },
        expected: { result: 0.0001 },
        tolerance: 1e-6,
        description: "1 St = 0.0001 m²/s",
      },
    ]);
  });

  it("centistokes to mm²/s: 1 cSt = 1 mm²/s", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "cSt", toUnit: "mm2_s" },
        expected: { result: 1 },
        tolerance: 1e-4,
        description: "1 cSt = 1 mm²/s",
      },
    ]);
  });

  it("m²/s to ft²/s: 1 m²/s ≈ 10.76391 ft²/s", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "m2_s", toUnit: "ft2_s" },
        expected: { result: 10.76391 },
        tolerance: 1e-4,
        description: "1 m²/s ≈ 10.76391 ft²/s",
      },
    ]);
  });
});
