import { describe, it } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

/**
 * Reference values cross-checked against Engineering Toolbox pump power formula
 * P_hyd = ρ·g·Q·H / 1000 with g = 9.81 m/s² (Hydraulic Institute convention).
 */
describe("Pump Power compute — numeric correctness", () => {
  it("Q=100 m³/h, H=20 m, water, η_p=75%, η_m=90% → P_hyd≈5.45 kW, P_shaft≈7.27 kW, P_elec≈8.08 kW", () => {
    // 1000 × 9.81 × (100/3600) × 20 / 1000 = 5.45 kW
    runNumericTests(calculator, [
      {
        inputs: {
          flowRate: 100,
          flowUnit: "m3h",
          head: 20,
          density: 1000,
          pumpEfficiency: 75,
          motorEfficiency: 90,
          energyCost: 0.12,
          operatingHours: 8000,
        },
        expected: {
          hydraulicPowerKw: 5.45,
          shaftPowerKw: 7.2667,
          electricalPowerKw: 8.0741,
          overallEfficiency: 67.5,
        },
        tolerance: 0.01,
        description: "ANSI/HI 9.6.7 baseline operating point",
      },
    ]);
  });

  it("L/s input: 50 L/s, H=10 m, water, 80%/95% → P_hyd≈4.905 kW", () => {
    // 1000 × 9.81 × 0.050 × 10 / 1000 = 4.905 kW
    runNumericTests(calculator, [
      {
        inputs: {
          flowRate: 50,
          flowUnit: "ls",
          head: 10,
          density: 1000,
          pumpEfficiency: 80,
          motorEfficiency: 95,
          energyCost: 0.15,
          operatingHours: 4000,
        },
        expected: {
          hydraulicPowerKw: 4.905,
          shaftPowerKw: 6.1313,
          electricalPowerKw: 6.4540,
          overallEfficiency: 76,
        },
        tolerance: 0.01,
      },
    ]);
  });

  it("Annual energy + cost: 8.0741 kW × 8000 h × $0.12 → ~$7752/yr", () => {
    // Same as test 1: annualEnergyKwh ≈ 64593; annualCost ≈ 7751.
    runNumericTests(calculator, [
      {
        inputs: {
          flowRate: 100,
          flowUnit: "m3h",
          head: 20,
          density: 1000,
          pumpEfficiency: 75,
          motorEfficiency: 90,
          energyCost: 0.12,
          operatingHours: 8000,
        },
        expected: {
          annualEnergyKwh: 64592.59,
          annualCost: 7751.11,
        },
        tolerance: 1.0,
      },
    ]);
  });

  it("Seawater density (ρ=1025): 200 m³/h, H=30 m, 70%/92% → P_hyd≈16.76 kW", () => {
    // 1025 × 9.81 × (200/3600) × 30 / 1000 = 16.76 kW
    runNumericTests(calculator, [
      {
        inputs: {
          flowRate: 200,
          flowUnit: "m3h",
          head: 30,
          density: 1025,
          pumpEfficiency: 70,
          motorEfficiency: 92,
          energyCost: 0.10,
          operatingHours: 6000,
        },
        expected: {
          hydraulicPowerKw: 16.759,
          shaftPowerKw: 23.9416,
          electricalPowerKw: 26.0235,
          overallEfficiency: 64.4,
        },
        tolerance: 0.05,
      },
    ]);
  });

  it("Small irrigation pump: 5 L/s, H=15 m, 60%/85% → P_hyd≈0.736 kW", () => {
    // 1000 × 9.81 × 0.005 × 15 / 1000 = 0.7358 kW
    runNumericTests(calculator, [
      {
        inputs: {
          flowRate: 5,
          flowUnit: "ls",
          head: 15,
          density: 1000,
          pumpEfficiency: 60,
          motorEfficiency: 85,
          energyCost: 0.20,
          operatingHours: 2000,
        },
        expected: {
          hydraulicPowerKw: 0.7358,
          shaftPowerKw: 1.2263,
          electricalPowerKw: 1.4427,
          overallEfficiency: 51,
        },
        tolerance: 0.01,
      },
    ]);
  });
});
