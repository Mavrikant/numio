import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Resistor Color Code compute — 4-band", () => {
  it("Brown-Black-Red-Gold = 1kΩ ±5%", () => {
    // band1=1 Brown, band2=0 Black, multiplier=2 Red(×100), tolerance=10 Gold(±5%)
    runNumericTests(calculator, [
      {
        inputs: { bandCount: "4", band1: 1, band2: 0, band3: 0, multiplierBand: 2, toleranceBand: 10 },
        expected: { resistance: 1000, tolerancePct: 5 },
        tolerance: 0.01,
        description: "Brown-Black-Red-Gold = 1kΩ ±5%",
      },
    ]);
  });

  it("Red-Red-Orange-Gold = 22kΩ ±5%", () => {
    runNumericTests(calculator, [
      {
        inputs: { bandCount: "4", band1: 2, band2: 2, band3: 0, multiplierBand: 3, toleranceBand: 10 },
        expected: { resistance: 22000, tolerancePct: 5 },
        tolerance: 0.01,
      },
    ]);
  });

  it("Orange-Orange-Brown-Silver = 330Ω ±10%", () => {
    runNumericTests(calculator, [
      {
        inputs: { bandCount: "4", band1: 3, band2: 3, band3: 0, multiplierBand: 1, toleranceBand: 11 },
        expected: { resistance: 330, tolerancePct: 10 },
        tolerance: 0.01,
      },
    ]);
  });
});

describe("Resistor Color Code compute — 5-band", () => {
  it("Brown-Black-Black-Brown-Brown = 1kΩ ±1% (5-band)", () => {
    // band1=1 Brown, band2=0 Black, band3=0 Black, multiplier=1 Brown(×10), tolerance=1 Brown(±1%)
    runNumericTests(calculator, [
      {
        inputs: { bandCount: "5", band1: 1, band2: 0, band3: 0, multiplierBand: 1, toleranceBand: 1 },
        expected: { resistance: 1000, tolerancePct: 1 },
        tolerance: 0.01,
        description: "5-band 1kΩ ±1%",
      },
    ]);
  });
});

describe("Resistor Color Code compute — min/max values", () => {
  it("1kΩ ±5%: min=950Ω, max=1050Ω", () => {
    runNumericTests(calculator, [
      {
        inputs: { bandCount: "4", band1: 1, band2: 0, band3: 0, multiplierBand: 2, toleranceBand: 10 },
        expected: { minValue: 950, maxValue: 1050 },
        tolerance: 0.1,
      },
    ]);
  });
});
