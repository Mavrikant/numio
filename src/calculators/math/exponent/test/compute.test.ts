import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Exponent Calculator", () => {
  it("calculates 2^8 = 256", () => {
    const result = compute({ base: 2, exponent: 8 });
    expect(result.result).toBe(256);
  });

  it("handles negative exponents: 2^-2 = 0.25", () => {
    const result = compute({ base: 2, exponent: -2 });
    expect(result.result).toBeCloseTo(0.25, 4);
  });

  it("handles 0^0 as undefined", () => {
    const result = compute({ base: 0, exponent: 0 });
    expect(result.result).toContain("undefined");
  });
});
