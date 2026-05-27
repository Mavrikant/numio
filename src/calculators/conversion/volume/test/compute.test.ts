import { describe, it } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Volume convert — numeric correctness", () => {
  it("Liter to US gallon: 1 L ≈ 0.264172 gal_us", () => {
    // 1 US gallon = 3.785411784 L (NIST SP 811 exact)
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "L", toUnit: "gal_us" },
        expected: { result: 0.264172 },
        tolerance: 0.00001,
        description: "1 L ≈ 0.264172 US gal",
      },
    ]);
  });

  it("Cubic meter to liter: 1 m³ = 1000 L", () => {
    // Exact by SI definition: 1 L = 1 dm³ = 0.001 m³
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "m3", toUnit: "L" },
        expected: { result: 1000 },
        tolerance: 0.001,
        description: "1 m³ = 1000 L exactly",
      },
    ]);
  });

  it("US gallon to UK gallon: 1 gal_us ≈ 0.83267 gal_uk", () => {
    // US 3.785411784 / UK 4.54609 (NIST + UK Weights & Measures Act 1985)
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "gal_us", toUnit: "gal_uk" },
        expected: { result: 0.832674 },
        tolerance: 0.0001,
        description: "1 US gal ≈ 0.832674 UK gal",
      },
    ]);
  });

  it("Cubic foot to liter: 1 ft³ ≈ 28.3168 L", () => {
    // 1 ft³ = (0.3048 m)³ = 0.028316846592 m³ (NIST)
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "ft3", toUnit: "L" },
        expected: { result: 28.316847 },
        tolerance: 0.001,
        description: "1 ft³ ≈ 28.3168 L",
      },
    ]);
  });

  it("US fluid ounce to milliliter: 1 fl_oz_us = 29.5735... mL", () => {
    // 1 US fl oz = 29.5735295625 mL exactly (NIST SP 811)
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "fl_oz_us", toUnit: "mL" },
        expected: { result: 29.57353 },
        tolerance: 0.0001,
        description: "1 US fl oz = 29.5735295625 mL (exact)",
      },
    ]);
  });
});
