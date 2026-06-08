import { describe, it } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

// Reference: Temperature conversion formulas (celsius.org, wikipedia.org/wiki/Conversion_of_units_of_temperature)

describe("Temperature compute — numeric correctness", () => {
  it("Celsius source: 0°C = 32°F = 273.15K = 0°Ré = 491.67°R (freezing point)", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 0, fromUnit: "celsius" },
        expected: { celsius: 0, fahrenheit: 32, kelvin: 273.15, reaumur: 0, rankine: 491.67 },
        tolerance: 0.01,
        description: "freezing point of water across all scales",
      },
    ]);
  });

  it("Celsius source: 100°C = 212°F = 373.15K = 80°Ré (boiling point)", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 100, fromUnit: "celsius" },
        expected: { celsius: 100, fahrenheit: 212, kelvin: 373.15, reaumur: 80 },
        tolerance: 0.01,
        description: "boiling point of water across all scales",
      },
    ]);
  });

  it("Fahrenheit source: 32°F = 0°C", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 32, fromUnit: "fahrenheit" },
        expected: { celsius: 0, fahrenheit: 32 },
        tolerance: 0.01,
        description: "32°F equals 0°C",
      },
    ]);
  });

  it("Kelvin source: 273.15K = 0°C", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 273.15, fromUnit: "kelvin" },
        expected: { celsius: 0, kelvin: 273.15 },
        tolerance: 0.01,
        description: "Kelvin and Celsius equivalence",
      },
    ]);
  });
});
