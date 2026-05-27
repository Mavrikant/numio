import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("fuel-economy — compute", () => {
  it("converts 10 L/100km to 10 km/L", () => {
    // L/100km and km/L are inversely related: 10 L/100km = 10 km/L
    const result = compute({ value: 10, fromUnit: "l100km", toUnit: "kml" });
    expect(result.result).toBeCloseTo(10, 1);
  });

  it("converts 25 mpg US to ~9.4 L/100km", () => {
    // 25 US miles per gallon ≈ 9.4 liters per 100km
    const result = compute({ value: 25, fromUnit: "mpg_us", toUnit: "l100km" });
    expect(result.result).toBeCloseTo(9.404, 1);
  });

  it("converts 5 L/100km to 20 km/L", () => {
    // 5 L/100km (efficient) = 20 km/L
    const result = compute({ value: 5, fromUnit: "l100km", toUnit: "kml" });
    expect(result.result).toBeCloseTo(20, 1);
  });

  it("handles zero input", () => {
    const result = compute({ value: 0, fromUnit: "l100km", toUnit: "kml" });
    expect(result.result).toBe(0);
  });
});
