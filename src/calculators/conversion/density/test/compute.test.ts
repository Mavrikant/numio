import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Density convert — numeric correctness", () => {
  it("Gram/cubic centimeter to Kilogram/cubic meter: 1 g/cm³ = 1000 kg/m³", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "g_cm3", toUnit: "kg_m3" },
        expected: { result: 1000 },
        tolerance: 0.01,
        description: "1 g/cm³ = 1000 kg/m³",
      },
    ]);
  });

  it("Gram/cubic centimeter to Gram/milliliter: 1 g/cm³ = 1 g/mL", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "g_cm3", toUnit: "g_mL" },
        expected: { result: 1 },
        tolerance: 1e-6,
        description: "1 g/cm³ = 1 g/mL",
      },
    ]);
  });

  it("Pound/cubic foot to Kilogram/cubic meter: 1 lb/ft³ ≈ 16.018463 kg/m³", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "lb_ft3", toUnit: "kg_m3" },
        expected: { result: 16.018463 },
        tolerance: 1e-4,
        description: "1 lb/ft³ ≈ 16.018463 kg/m³",
      },
    ]);
  });
});
