import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

// Reference: Temperature conversion formulas (celsius.org, wikipedia.org/wiki/Conversion_of_units_of_temperature)

describe("Temperature compute — numeric correctness", () => {
  it("Celsius to Fahrenheit: 0°C = 32°F (freezing point)", () => {
    runNumericTests(calculator, [
      {
        inputs: { celsius: 0, fahrenheit: 32, kelvin: 273.15 },
        expected: { celsius: 0, fahrenheit: 32, kelvin: 273.15 },
        tolerance: 0.01,
        description: "0°C = 32°F = 273.15K",
      },
    ]);
  });

  it("Celsius to Fahrenheit: 100°C = 212°F (boiling point)", () => {
    // C = 100, F = 100 * (9/5) + 32 = 212
    runNumericTests(calculator, [
      {
        inputs: { celsius: 100, fahrenheit: 212, kelvin: 373.15 },
        expected: { celsius: 100, fahrenheit: 212, kelvin: 373.15 },
        tolerance: 0.01,
        description: "100°C = 212°F = 373.15K (boiling point)",
      },
    ]);
  });

  it("Celsius to Fahrenheit: 32°F = 0°C", () => {
    // F = 32, C = (32 - 32) * (5/9) = 0
    runNumericTests(calculator, [
      {
        inputs: { celsius: 0, fahrenheit: 32, kelvin: 273.15 },
        expected: { celsius: 0, fahrenheit: 32 },
        tolerance: 0.01,
        description: "32°F equals 0°C",
      },
    ]);
  });

  it("Kelvin to Celsius: 273.15K = 0°C", () => {
    runNumericTests(calculator, [
      {
        inputs: { celsius: 0, fahrenheit: 32, kelvin: 273.15 },
        expected: { kelvin: 273.15 },
        tolerance: 0.01,
        description: "Kelvin and Celsius equivalence",
      },
    ]);
  });

  it("Celsius to Rankine: 0°C = 491.67°R (freezing point)", () => {
    runNumericTests(calculator, [
      {
        inputs: { celsius: 0 },
        expected: { rankine: 491.67 },
        tolerance: 0.01,
        description: "0°C = 491.67°R",
      },
    ]);
  });

  it("Celsius to Rankine: 100°C = 671.67°R (boiling point)", () => {
    runNumericTests(calculator, [
      {
        inputs: { celsius: 100 },
        expected: { rankine: 671.67 },
        tolerance: 0.01,
        description: "100°C = 671.67°R",
      },
    ]);
  });
});
