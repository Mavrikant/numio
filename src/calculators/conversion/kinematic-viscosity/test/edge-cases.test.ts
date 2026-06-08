import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Kinematic viscosity — edge cases", () => {
  it("same unit: 5 m²/s = 5 m²/s", () => {
    const result = compute({ value: 5, fromUnit: "m2_s", toUnit: "m2_s" });
    expect(result.result).toBe(5);
  });

  it("stokes to m²/s: 1 St = 0.0001 m²/s", () => {
    const result = compute({ value: 1, fromUnit: "St", toUnit: "m2_s" });
    expect(result.result).toBeCloseTo(0.0001, 6);
  });

  it("m²/s to ft²/s: 1 m²/s ≈ 10.76391 ft²/s", () => {
    const result = compute({ value: 1, fromUnit: "m2_s", toUnit: "ft2_s" });
    expect(result.result).toBeCloseTo(10.76391, 4);
  });
});
