import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("steel-weight — compute", () => {
  it("should calculate rebar weight (16mm × 6m, steel)", () => {
    // 16mm rebar: area ≈ 201.06 mm², density 7850 kg/m³
    // Weight/m = 201.06 × 1e-6 × 7850 ≈ 1.578 kg/m
    const result = compute({
      type: "rebar",
      material: "steel",
      rebarDiameter: 16,
      lengthM: 6,
      quantity: 1,
    });
    expect(result.weightKgPerMeter).toBeCloseTo(1.578, 1);
    expect(result.totalWeightKg).toBeCloseTo(9.47, 0);
  });

  it("should calculate pipe weight (50mm OD × 3mm WT, 6m)", () => {
    // Steel pipe 50×3: area ≈ 453 mm², density 7850 kg/m³
    const result = compute({
      type: "pipe",
      material: "steel",
      pipeOuterDia: 50,
      pipeWallThickness: 3,
      lengthM: 6,
      quantity: 1,
    });
    expect(result.totalWeightKg).toBeGreaterThan(20);
  });

  it("should calculate plate weight (100×200×10mm, 1m, steel)", () => {
    // Plate: area = 100 × 10 = 1000 mm²
    const result = compute({
      type: "plate",
      material: "steel",
      plateWidth: 100,
      plateThickness: 10,
      lengthM: 1,
      quantity: 1,
    });
    expect(result.totalWeightKg).toBeGreaterThan(0);
  });

  it("should handle quantity multiplier", () => {
    const single = compute({
      type: "rebar",
      material: "steel",
      rebarDiameter: 16,
      lengthM: 6,
      quantity: 1,
    });
    const batch = compute({
      type: "rebar",
      material: "steel",
      rebarDiameter: 16,
      lengthM: 6,
      quantity: 10,
    });
    expect(batch.totalWeightKg).toBeCloseTo(single.totalWeightKg * 10, 0);
  });

  it("should convert kg to lb correctly (1 kg ≈ 2.20462 lb)", () => {
    const result = compute({
      type: "rebar",
      material: "steel",
      rebarDiameter: 16,
      lengthM: 6,
      quantity: 1,
    });
    expect(result.totalWeightLb).toBeCloseTo(result.totalWeightKg * 2.20462, 1);
  });

  it("should handle aluminum (lower density than steel)", () => {
    const steel = compute({
      type: "rebar",
      material: "steel",
      rebarDiameter: 16,
      lengthM: 1,
      quantity: 1,
    });
    const aluminum = compute({
      type: "rebar",
      material: "aluminum",
      rebarDiameter: 16,
      lengthM: 1,
      quantity: 1,
    });
    expect(aluminum.totalWeightKg).toBeLessThan(steel.totalWeightKg);
  });
});
