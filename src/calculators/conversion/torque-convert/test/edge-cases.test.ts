import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Torque — edge cases", () => {
  it("same unit: 100 N·m = 100 N·m", () => {
    const result = compute({ value: 100, fromUnit: "Nm", toUnit: "Nm" });
    expect(result.result).toBe(100);
  });

  it("kilonewton-meter to newton-meter: 1 kN·m = 1000 N·m", () => {
    const result = compute({ value: 1, fromUnit: "kNm", toUnit: "Nm" });
    expect(result.result).toBeCloseTo(1000, 6);
  });

  it("kilogram-force-centimeter to newton-meter: 1 kgf·cm ≈ 0.0980665 N·m", () => {
    const result = compute({ value: 1, fromUnit: "kgf_cm", toUnit: "Nm" });
    // compute() rounds to 6 decimals, so 0.0980665 → 0.098067; assert at 5-dp precision.
    expect(result.result).toBeCloseTo(0.0980665, 5);
  });
});
