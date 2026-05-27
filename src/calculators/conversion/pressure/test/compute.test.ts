import { describe, it } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Pressure convert — numeric correctness", () => {
  it("Bar to psi: 1 bar ≈ 14.5038 psi", () => {
    // 1 bar = 100,000 Pa; 1 psi = 6894.757293168 Pa (NIST SP 811)
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "bar", toUnit: "psi" },
        expected: { result: 14.503774 },
        tolerance: 0.0001,
        description: "1 bar ≈ 14.5038 psi",
      },
    ]);
  });

  it("Standard atmosphere to pascal: 1 atm = 101325 Pa (exact)", () => {
    // NIST: standard atmosphere exact = 101325 Pa
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "atm", toUnit: "Pa" },
        expected: { result: 101_325 },
        tolerance: 0.001,
        description: "1 atm = 101325 Pa exactly",
      },
    ]);
  });

  it("Atmosphere to mmHg: 1 atm ≈ 760 mmHg", () => {
    // 1 atm = 101325 Pa; mmHg factor = 133.322387415 Pa
    // 101325 / 133.322387415 ≈ 759.999892 (mmHg by NIST), very close to the
    // defined 760 torr per atmosphere.
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "atm", toUnit: "mmHg" },
        expected: { result: 759.999892 },
        tolerance: 0.001,
        description: "1 atm ≈ 759.999892 mmHg",
      },
    ]);
  });

  it("kPa to psi: 100 kPa ≈ 14.504 psi", () => {
    // 100 kPa = 100,000 Pa = 1 bar
    runNumericTests(calculator, [
      {
        inputs: { value: 100, fromUnit: "kPa", toUnit: "psi" },
        expected: { result: 14.503774 },
        tolerance: 0.0001,
        description: "100 kPa ≈ 14.5038 psi",
      },
    ]);
  });

  it("MPa to bar: 1 MPa = 10 bar", () => {
    // 1 MPa = 1,000,000 Pa = 10 bar (exact)
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "MPa", toUnit: "bar" },
        expected: { result: 10 },
        tolerance: 0.0001,
        description: "1 MPa = 10 bar exactly",
      },
    ]);
  });
});
