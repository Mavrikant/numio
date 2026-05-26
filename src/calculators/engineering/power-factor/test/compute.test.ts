import { describe, it, expect } from "vitest";
import { compute, inputSchema } from "../compute";

describe("Power Factor — compute()", () => {
  describe("mode: pf_from_power", () => {
    it("calculates PF from real and reactive power", () => {
      const inputs = inputSchema.parse({
        mode: "pf_from_power",
        realPowerKw: 75,
        reactivePowerKvar: 50,
      });
      const result = compute(inputs);
      // S = √(75² + 50²) = √(5625 + 2500) = √8125 ≈ 90.14
      // PF = 75 / 90.14 ≈ 0.832
      expect(result.powerFactorPf).toBeCloseTo(0.832, 2);
      expect(result.realPowerKw).toBe(75);
      expect(result.apparentPowerKva).toBeCloseTo(90.14, 1);
      expect(result.reactivePowerKvar).toBe(50);
      expect(result.correctionCapacitorMicrofarad).toBeNull();
      expect(result.kvarRequired).toBeNull();
    });

    it("returns PF=1 when reactive power is zero", () => {
      const inputs = inputSchema.parse({
        mode: "pf_from_power",
        realPowerKw: 100,
        reactivePowerKvar: 0,
      });
      const result = compute(inputs);
      expect(result.powerFactorPf).toBe(1);
      expect(result.apparentPowerKva).toBe(100);
      expect(result.phaseAngleDeg).toBeCloseTo(0, 1);
    });

    it("handles negative reactive power (capacitive load)", () => {
      const inputs = inputSchema.parse({
        mode: "pf_from_power",
        realPowerKw: 50,
        reactivePowerKvar: -30,
      });
      const result = compute(inputs);
      // S = √(50² + 30²) = √3400 ≈ 58.31
      // PF = 50/58.31 ≈ 0.857
      expect(result.powerFactorPf).toBeCloseTo(0.857, 2);
      expect(result.apparentPowerKva).toBeCloseTo(58.31, 1);
    });
  });

  describe("mode: power_from_pf", () => {
    it("calculates power components from kVA and PF", () => {
      const inputs = inputSchema.parse({
        mode: "power_from_pf",
        kva: 100,
        pf: 0.8,
      });
      const result = compute(inputs);
      expect(result.realPowerKw).toBeCloseTo(80, 4);
      expect(result.apparentPowerKva).toBe(100);
      // Q = √(100² - 80²) = √(10000 - 6400) = √3600 = 60
      expect(result.reactivePowerKvar).toBeCloseTo(60, 4);
      expect(result.powerFactorPf).toBeCloseTo(0.8, 4);
    });

    it("returns zero reactive power when PF=1", () => {
      const inputs = inputSchema.parse({
        mode: "power_from_pf",
        kva: 50,
        pf: 1,
      });
      const result = compute(inputs);
      expect(result.realPowerKw).toBeCloseTo(50, 4);
      expect(result.reactivePowerKvar).toBeCloseTo(0, 4);
    });

    it("calculates phase angle correctly", () => {
      const inputs = inputSchema.parse({
        mode: "power_from_pf",
        kva: 100,
        pf: 0.707,
      });
      const result = compute(inputs);
      // cos(45°) ≈ 0.707, so angle ≈ 45°
      expect(result.phaseAngleDeg).toBeCloseTo(45, 0);
    });
  });

  describe("mode: correction", () => {
    it("calculates kvar required and capacitor for typical motor", () => {
      const inputs = inputSchema.parse({
        mode: "correction",
        realPowerKw: 75,
        currentPf: 0.7,
        targetPf: 0.95,
        voltageV: 400,
        frequencyHz: "50",
      });
      const result = compute(inputs);
      // Q_cap = 75 × (tan(acos(0.7)) - tan(acos(0.95)))
      // tan(acos(0.7)) ≈ 1.0202, tan(acos(0.95)) ≈ 0.3287
      // Q_cap ≈ 75 × 0.6915 ≈ 51.86 kVAR
      expect(result.kvarRequired).toBeCloseTo(51.86, 1);
      // C = 51860 / (2π × 50 × 160000) ≈ 1030 µF
      expect(result.correctionCapacitorMicrofarad).toBeCloseTo(1030, -1);
    });

    it("calculates at 60 Hz", () => {
      const inputs = inputSchema.parse({
        mode: "correction",
        realPowerKw: 50,
        currentPf: 0.75,
        targetPf: 0.95,
        voltageV: 480,
        frequencyHz: "60",
      });
      const result = compute(inputs);
      expect(result.kvarRequired).toBeGreaterThan(0);
      expect(result.correctionCapacitorMicrofarad).toBeGreaterThan(0);
    });

    it("reports current PF in correction mode", () => {
      const inputs = inputSchema.parse({
        mode: "correction",
        realPowerKw: 100,
        currentPf: 0.8,
        targetPf: 0.95,
        voltageV: 230,
        frequencyHz: "50",
      });
      const result = compute(inputs);
      // powerFactorPf should be the current PF (0.8)
      expect(result.powerFactorPf).toBeCloseTo(0.8, 3);
    });
  });
});
