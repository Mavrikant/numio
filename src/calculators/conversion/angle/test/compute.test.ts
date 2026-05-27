import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("angle — compute", () => {
  it("converts 180 degrees to π radians", () => {
    // 180° = π radians
    const result = compute({ value: 180, fromUnit: "degree", toUnit: "radian" });
    expect(result.result).toBeCloseTo(Math.PI, 5);
  });

  it("converts 90 degrees to π/2 radians", () => {
    // 90° = π/2 radians
    const result = compute({ value: 90, fromUnit: "degree", toUnit: "radian" });
    expect(result.result).toBeCloseTo(Math.PI / 2, 5);
  });

  it("converts 360 degrees to 400 gradians", () => {
    // 360° = 400 gradians
    const result = compute({ value: 360, fromUnit: "degree", toUnit: "gradian" });
    expect(result.result).toBe(400);
  });

  it("converts 3600 arcseconds to 1 degree", () => {
    // 3600 arcseconds = 1 degree
    const result = compute({ value: 3600, fromUnit: "arcsecond", toUnit: "degree" });
    expect(result.result).toBe(1);
  });

  it("handles minimum positive input", () => {
    // Schema allows positive values
    const result = compute({ value: 0.001, fromUnit: "degree", toUnit: "radian" });
    expect(Number.isFinite(result.result)).toBe(true);
  });
});
