import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("square-footage — compute", () => {
  it("should calculate rectangle area (10m × 5m)", () => {
    // Reference: 10 m × 5 m = 50 m²; 50 m² × 10.764 ≈ 538 ft²
    const result = compute({
      shape: "rectangle",
      length: 10,
      width: 5,
    });
    expect(result.areaM2).toBeCloseTo(50, 1);
    expect(result.areaFt2).toBeCloseTo(538, 0);
    expect(result.perimeterM).toBeCloseTo(30, 1);
  });

  it("should calculate circle area (radius 3m)", () => {
    // Reference: π × 3² ≈ 28.274 m²
    const result = compute({
      shape: "circle",
      radius: 3,
    });
    expect(result.areaM2).toBeCloseTo(28.274, 1);
    expect(result.perimeterM).toBeCloseTo(18.85, 0);
  });

  it("should calculate circle area from diameter (6m)", () => {
    // Reference: diameter 6m → radius 3m → π × 3² ≈ 28.274 m²
    const result = compute({
      shape: "circle",
      diameter: 6,
    });
    expect(result.areaM2).toBeCloseTo(28.274, 1);
  });

  it("should calculate triangle area (base 5m, height 4m)", () => {
    // Reference: (5 × 4) / 2 = 10 m²
    const result = compute({
      shape: "triangle",
      base: 5,
      height: 4,
    });
    expect(result.areaM2).toBeCloseTo(10, 1);
  });

  it("should convert metric to imperial (50 m² ≈ 538 ft²)", () => {
    const result = compute({
      shape: "rectangle",
      length: 10,
      width: 5,
    });
    // 1 m² = 10.764 ft²
    expect(result.areaFt2).toBeCloseTo(50 * 10.764, 0);
  });

  it("should handle small areas (0.5m × 0.5m rectangle)", () => {
    const result = compute({
      shape: "rectangle",
      length: 0.5,
      width: 0.5,
    });
    expect(result.areaM2).toBeCloseTo(0.25, 3);
  });

  it("should calculate large areas (100m × 100m rectangle)", () => {
    const result = compute({
      shape: "rectangle",
      length: 100,
      width: 100,
    });
    expect(result.areaM2).toBeCloseTo(10000, 0);
  });
});
