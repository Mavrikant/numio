import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Density — edge cases", () => {
  it("same unit: 100 kg/m³ = 100 kg/m³", () => {
    const result = compute({ value: 100, fromUnit: "kg_m3", toUnit: "kg_m3" });
    expect(result.result).toBe(100);
  });

  it("ounce/cubic inch to kilogram/cubic meter: 1 oz/in³ ≈ 1729.994 kg/m³", () => {
    const result = compute({ value: 1, fromUnit: "oz_in3", toUnit: "kg_m3" });
    expect(result.result).toBeCloseTo(1729.9940439319434, 3);
  });

  it("pound/US gallon to kilogram/cubic meter: 1 lb/gal ≈ 119.826 kg/m³", () => {
    const result = compute({
      value: 1,
      fromUnit: "lb_gal_us",
      toUnit: "kg_m3",
    });
    expect(result.result).toBeCloseTo(119.82642731689663, 3);
  });
});
