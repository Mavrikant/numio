import { describe, it, expect } from "vitest";
import { compute, inputSchema } from "../compute";

describe("Power Factor — edge cases", () => {
  it("returns PF=0 when real power is zero and reactive power is present", () => {
    const inputs = inputSchema.parse({
      mode: "pf_from_power",
      realPowerKw: 0,
      reactivePowerKvar: 50,
    });
    const result = compute(inputs);
    expect(result.powerFactorPf).toBe(0);
    expect(result.realPowerKw).toBe(0);
    expect(result.apparentPowerKva).toBe(50);
  });

  it("returns PF=0 and S=0 when both P and Q are zero", () => {
    const inputs = inputSchema.parse({
      mode: "pf_from_power",
      realPowerKw: 0,
      reactivePowerKvar: 0,
    });
    const result = compute(inputs);
    expect(result.powerFactorPf).toBe(0);
    expect(result.apparentPowerKva).toBe(0);
  });

  it("returns zero reactive power when kVA equals zero in power_from_pf mode", () => {
    const inputs = inputSchema.parse({
      mode: "power_from_pf",
      kva: 0,
      pf: 0.9,
    });
    const result = compute(inputs);
    expect(result.realPowerKw).toBe(0);
    expect(result.reactivePowerKvar).toBe(0);
  });

  it("rejects mode=pf_from_power without realPowerKw", () => {
    expect(() =>
      inputSchema.parse({
        mode: "pf_from_power",
        reactivePowerKvar: 50,
      })
    ).toThrow();
  });

  it("rejects mode=pf_from_power without reactivePowerKvar", () => {
    expect(() =>
      inputSchema.parse({
        mode: "pf_from_power",
        realPowerKw: 75,
      })
    ).toThrow();
  });

  it("rejects mode=power_from_pf without kva", () => {
    expect(() =>
      inputSchema.parse({
        mode: "power_from_pf",
        pf: 0.9,
      })
    ).toThrow();
  });

  it("rejects mode=power_from_pf without pf", () => {
    expect(() =>
      inputSchema.parse({
        mode: "power_from_pf",
        kva: 100,
      })
    ).toThrow();
  });

  it("rejects correction mode without realPowerKw", () => {
    expect(() =>
      inputSchema.parse({
        mode: "correction",
        currentPf: 0.7,
        targetPf: 0.95,
      })
    ).toThrow();
  });

  it("rejects correction mode where targetPf <= currentPf", () => {
    expect(() =>
      inputSchema.parse({
        mode: "correction",
        realPowerKw: 100,
        currentPf: 0.9,
        targetPf: 0.8,
      })
    ).toThrow();
  });

  it("rejects correction mode where targetPf equals currentPf", () => {
    expect(() =>
      inputSchema.parse({
        mode: "correction",
        realPowerKw: 100,
        currentPf: 0.85,
        targetPf: 0.85,
      })
    ).toThrow();
  });

  it("rejects PF > 1", () => {
    expect(() =>
      inputSchema.parse({
        mode: "power_from_pf",
        kva: 100,
        pf: 1.01,
      })
    ).toThrow();
  });

  it("rejects PF <= 0", () => {
    expect(() =>
      inputSchema.parse({
        mode: "power_from_pf",
        kva: 100,
        pf: 0,
      })
    ).toThrow();
  });

  it("handles very small real power in correction mode", () => {
    const inputs = inputSchema.parse({
      mode: "correction",
      realPowerKw: 1,
      currentPf: 0.6,
      targetPf: 0.99,
      voltageV: 230,
      frequencyHz: "50",
    });
    const result = compute(inputs);
    expect(result.kvarRequired).toBeGreaterThan(0);
    expect(result.correctionCapacitorMicrofarad).toBeGreaterThan(0);
    expect(isFinite(result.correctionCapacitorMicrofarad as number)).toBe(true);
  });

  it("phase angle is 0 for PF=1", () => {
    const inputs = inputSchema.parse({
      mode: "power_from_pf",
      kva: 100,
      pf: 1,
    });
    const result = compute(inputs);
    expect(result.phaseAngleDeg).toBeCloseTo(0, 4);
  });

  it("phase angle is 90° for PF=0 (pure reactive)", () => {
    const inputs = inputSchema.parse({
      mode: "pf_from_power",
      realPowerKw: 0,
      reactivePowerKvar: 100,
    });
    const result = compute(inputs);
    expect(result.phaseAngleDeg).toBeCloseTo(90, 1);
  });
});
