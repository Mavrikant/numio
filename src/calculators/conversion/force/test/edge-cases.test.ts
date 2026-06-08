import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Force — edge cases", () => {
  it("same unit: 100 N = 100 N", () => {
    const result = compute({ value: 100, fromUnit: "N", toUnit: "N" });
    expect(result.result).toBe(100);
  });

  it("kilonewton to newton: 1 kN = 1000 N", () => {
    const result = compute({ value: 1, fromUnit: "kN", toUnit: "N" });
    expect(result.result).toBeCloseTo(1000, 6);
  });

  it("ounce-force to newton: 1 ozf ≈ 0.278014 N", () => {
    const result = compute({ value: 1, fromUnit: "ozf", toUnit: "N" });
    expect(result.result).toBeCloseTo(0.27801385095378125, 6);
  });
});
