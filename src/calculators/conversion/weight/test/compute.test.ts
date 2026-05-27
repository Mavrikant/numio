import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Weight convert — numeric correctness", () => {
  it("Kilogram to Gram: 1kg = 1000g", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "kg", toUnit: "g" },
        expected: { result: 1000 },
        tolerance: 0.01,
        description: "1 kg = 1000 g",
      },
    ]);
  });

  it("Kilogram to Pound: 1kg = 2.20462lb", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "kg", toUnit: "lb" },
        expected: { result: 2.20462 },
        tolerance: 0.01,
        description: "1 kg = 2.20462 lb",
      },
    ]);
  });

  it("Pound to Ounce: 1lb = 16oz", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "lb", toUnit: "oz" },
        expected: { result: 16 },
        tolerance: 0.01,
        description: "1 lb = 16 oz",
      },
    ]);
  });
});
