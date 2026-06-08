import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Flow rate — edge cases", () => {
  it("same unit: 100 m³/h = 100 m³/h", () => {
    const result = compute({ value: 100, fromUnit: "m3_h", toUnit: "m3_h" });
    expect(result.result).toBe(100);
  });

  it("cubic meter/hour to liter/second: 1 m³/h ≈ 0.277778 L/s", () => {
    const result = compute({ value: 1, fromUnit: "m3_h", toUnit: "L_s" });
    expect(result.result).toBeCloseTo(0.277778, 5);
  });

  it("US gallon/minute to liter/minute: 1 GPM ≈ 3.78541 L/min", () => {
    const result = compute({
      value: 1,
      fromUnit: "gal_min_us",
      toUnit: "L_min",
    });
    expect(result.result).toBeCloseTo(3.78541, 3);
  });
});
