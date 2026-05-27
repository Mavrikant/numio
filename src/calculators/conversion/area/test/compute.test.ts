import { describe, it } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Area convert — numeric correctness", () => {
  it("Square meter to square foot: 1 m² ≈ 10.7639 ft²", () => {
    // NIST SP 811 conversion: 1 ft² = 0.09290304 m² (exact)
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "m2", toUnit: "ft2" },
        expected: { result: 10.7639104 },
        tolerance: 0.0001,
        description: "1 m² = 10.7639104 ft²",
      },
    ]);
  });

  it("Hectare to acre: 1 ha ≈ 2.47105 acre", () => {
    // 1 ha = 10,000 m²; 1 acre = 4046.8564224 m² (NIST)
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "ha", toUnit: "acre" },
        expected: { result: 2.4710538147 },
        tolerance: 0.0001,
        description: "1 ha ≈ 2.4710538 acres",
      },
    ]);
  });

  it("Square kilometer to square mile: 1 km² ≈ 0.3861 mi²", () => {
    // 1 mi² = 2,589,988.110336 m² (NIST)
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "km2", toUnit: "mi2" },
        expected: { result: 0.3861021585 },
        tolerance: 0.0001,
        description: "1 km² ≈ 0.3861 mi²",
      },
    ]);
  });

  it("Acre to square meter: 1 acre = 4046.8564224 m²", () => {
    // International acre — NIST exact value
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "acre", toUnit: "m2" },
        expected: { result: 4046.8564224 },
        tolerance: 0.001,
        description: "1 acre = 4046.8564224 m²",
      },
    ]);
  });

  it("Square inch to square centimeter: 1 in² = 6.4516 cm²", () => {
    // 1 in² = 6.4516 cm² (exact, by definition of inch)
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "in2", toUnit: "cm2" },
        expected: { result: 6.4516 },
        tolerance: 0.00001,
        description: "1 in² = 6.4516 cm² (exact)",
      },
    ]);
  });
});
