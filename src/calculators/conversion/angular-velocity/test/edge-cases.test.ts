import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Angular velocity — edge cases", () => {
  it("same unit: 5 rad/s = 5 rad/s", () => {
    const result = compute({ value: 5, fromUnit: "rad_s", toUnit: "rad_s" });
    expect(result.result).toBe(5);
  });

  it("rpm to rad/s: 1 rpm ≈ 0.10472 rad/s", () => {
    const result = compute({ value: 1, fromUnit: "rpm", toUnit: "rad_s" });
    expect(result.result).toBeCloseTo(0.10471976, 6);
  });

  it("hertz to rad/s: 1 Hz ≈ 6.2832 rad/s", () => {
    const result = compute({ value: 1, fromUnit: "hz", toUnit: "rad_s" });
    expect(result.result).toBeCloseTo(6.2831853, 5);
  });
});
