import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Bending Stress — compute function", () => {
  it("calculates bending stress correctly for steel (100 kN·m moment, 200 cm³ section)", () => {
    // Reference: σ = M / Z = (100 kN·m * 1000 N/kN) / (200 cm³ * 1e-6 m³)
    // = 100,000 N·m / (200e-6 m³) = 500e6 Pa = 500 MPa
    // Steel yield: 250 MPa, Safety = 250 / 500 = 0.5 (overstressed)
    const result = compute({
      moment: 100,
      sectionModulus: 200,
      materialType: "steel",
    });

    expect(result.stressMPa).toBeCloseTo(500.0, 0);
    expect(result.yieldStrengthMPa).toBe(250);
    expect(result.safetyFactor).toBeCloseTo(0.5, 1);
    expect(result.safe).toBe(false);
    expect(result.classification).toBe("critical");
  });

  it("calculates bending stress for aluminum with safe margin", () => {
    // σ = 50 kN·m / 250 cm³ = 50000 / (250e-6) = 200e6 Pa = 200 MPa
    // Aluminum yield: 240 MPa, Safety = 240 / 200 = 1.2 (safe)
    const result = compute({
      moment: 50,
      sectionModulus: 250,
      materialType: "aluminum",
    });

    expect(result.stressMPa).toBeCloseTo(200.0, 0);
    expect(result.yieldStrengthMPa).toBe(240);
    expect(result.safetyFactor).toBeCloseTo(1.2, 1);
    expect(result.safe).toBe(true);
    expect(result.classification).toBe("ok");
  });

  it("calculates bending stress for concrete (low moment)", () => {
    // σ = 10 kN·m / 150 cm³ = 10000 / (150e-6) = 66.67 MPa
    // Concrete strength: 30 MPa (overstressed)
    const result = compute({
      moment: 10,
      sectionModulus: 150,
      materialType: "concrete",
    });

    expect(result.stressMPa).toBeCloseTo(66.67, 1);
    expect(result.yieldStrengthMPa).toBe(30);
    expect(result.safe).toBe(false);
  });

  it("handles very small moments", () => {
    const result = compute({
      moment: 0.001,
      sectionModulus: 100,
      materialType: "timber",
    });

    expect(result.stressMPa).toBeGreaterThan(0);
    expect(result.safe).toBe(true);
  });
});
