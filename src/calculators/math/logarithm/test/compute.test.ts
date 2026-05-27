import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Logarithm Calculator", () => {
  it("calculates log base 10 of 100 = 2", () => {
    // Reference: log₁₀(100) = 2 (10^2 = 100)
    const result = compute({ value: 100, base: 10 });
    expect(result.result).toBe(2);
    expect(result.log10).toBeCloseTo(2, 4);
  });

  it("calculates log base 2 of 8 = 3", () => {
    // Reference: log₂(8) = 3 (2^3 = 8)
    const result = compute({ value: 8, base: 2 });
    expect(result.result).toBe(3);
    expect(result.log2).toBeCloseTo(3, 4);
  });

  it("calculates natural log of e ≈ 1", () => {
    // Reference: ln(e) = 1
    const result = compute({ value: Math.E, base: Math.E });
    expect(result.natural_log).toBeCloseTo(1, 4);
  });
});
