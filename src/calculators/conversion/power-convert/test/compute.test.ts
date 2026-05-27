import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("power-convert — compute", () => {
  it("converts 1000 W to 1 kW", () => {
    // 1000 watts = 1 kilowatt
    const result = compute({ value: 1000, fromUnit: "w", toUnit: "kw" });
    expect(result.result).toBe(1);
  });

  it("converts 1 hp to ~745.7 W", () => {
    // 1 mechanical horsepower ≈ 745.699872 watts
    const result = compute({ value: 1, fromUnit: "hp", toUnit: "w" });
    expect(result.result).toBeCloseTo(745.699872, 2);
  });

  it("converts 1000 W to ~1.34 hp", () => {
    // 1000 watts ≈ 1.34 horsepower
    const result = compute({ value: 1000, fromUnit: "w", toUnit: "hp" });
    expect(result.result).toBeCloseTo(1.341, 2);
  });

  it("handles zero input", () => {
    const result = compute({ value: 0, fromUnit: "w", toUnit: "kw" });
    expect(result.result).toBe(0);
  });
});
