import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Dynamic viscosity — edge cases", () => {
  it("same unit: 5 Pa·s = 5 Pa·s", () => {
    const result = compute({ value: 5, fromUnit: "Pa_s", toUnit: "Pa_s" });
    expect(result.result).toBe(5);
  });

  it("pascal-second to poise: 1 Pa·s = 10 P", () => {
    const result = compute({ value: 1, fromUnit: "Pa_s", toUnit: "P" });
    expect(result.result).toBeCloseTo(10, 4);
  });

  it("centipoise to millipascal-second: 1 cP = 1 mPa·s", () => {
    const result = compute({ value: 1, fromUnit: "cP", toUnit: "mPa_s" });
    expect(result.result).toBeCloseTo(1, 6);
  });
});
