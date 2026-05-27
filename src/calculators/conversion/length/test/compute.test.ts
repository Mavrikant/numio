import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Length convert — numeric correctness", () => {
  it("Meter to Centimeter: 1m = 100cm", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "m", toUnit: "cm" },
        expected: { result: 100 },
        tolerance: 0.01,
        description: "1 m = 100 cm",
      },
    ]);
  });

  it("Kilometer to Meter: 1km = 1000m", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "km", toUnit: "m" },
        expected: { result: 1000 },
        tolerance: 0.01,
        description: "1 km = 1000 m",
      },
    ]);
  });

  it("Foot to Meter: 1ft = 0.3048m", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "ft", toUnit: "m" },
        expected: { result: 0.3048 },
        tolerance: 0.0001,
        description: "1 ft = 0.3048 m",
      },
    ]);
  });
});
