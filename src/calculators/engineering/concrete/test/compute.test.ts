import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Concrete compute — numeric correctness", () => {
  it("slab 5m × 3m × 0.15m → 2.25 m³", () => {
    runNumericTests(calculator, [
      {
        inputs: { shape: "slab", unit: "metric", length: 5, width: 3, thickness: 0.15, diameter: 0.3, height: 3 },
        expected: { volumeM3: 2.25 },
        tolerance: 0.001,
        description: "Slab 5×3×0.15",
      },
    ]);
  });

  it("cylinder diameter=0.4m, height=3m → π×0.04×3 ≈ 0.3770 m³", () => {
    runNumericTests(calculator, [
      {
        inputs: { shape: "cylinder", unit: "metric", diameter: 0.4, height: 3, length: 5, width: 3, thickness: 0.15 },
        expected: { volumeM3: Math.PI * 0.04 * 3 },
        tolerance: 0.0001,
      },
    ]);
  });

  it("column 0.3m × 0.3m × 3m → 0.27 m³", () => {
    runNumericTests(calculator, [
      {
        inputs: { shape: "column", unit: "metric", length: 0.3, width: 0.3, height: 3, diameter: 0.3, thickness: 0.15 },
        expected: { volumeM3: 0.27 },
        tolerance: 0.001,
      },
    ]);
  });

  it("bags40kg is ceil(volumeM3 × 8)", () => {
    const inputs = calculator.inputSchema.parse({
      shape: "slab", unit: "metric", length: 1, width: 1, thickness: 1, diameter: 0.3, height: 3,
    });
    const result = calculator.compute(inputs);
    expect(result.bags40kg).toBe(8); // 1 m³ × 8 = 8 bags
  });

  it("imperial slab 16ft × 10ft × 0.5ft → correct m³ conversion", () => {
    // 16*0.3048=4.8768m, 10*0.3048=3.048m, 0.5*0.3048=0.1524m
    // volume = 4.8768 × 3.048 × 0.1524 ≈ 2.267 m³
    runNumericTests(calculator, [
      {
        inputs: { shape: "slab", unit: "imperial", length: 16, width: 10, thickness: 0.5, diameter: 1, height: 10 },
        expected: { volumeM3: 16 * 0.3048 * 10 * 0.3048 * 0.5 * 0.3048 },
        tolerance: 0.001,
      },
    ]);
  });
});
