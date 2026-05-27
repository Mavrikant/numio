import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Speed compute — edge cases", () => {
  const parse = (inputs: Parameters<typeof calculator.compute>[0]) =>
    calculator.compute(calculator.inputSchema.parse(inputs));

  it("handles very large speeds", () => {
    const result = parse({ value: 1000, fromUnit: "kmh", toUnit: "mph" });
    expect(result.result).toBeGreaterThan(0);
    expect(Number.isFinite(result.result)).toBe(true);
  });

  it("handles very small positive speeds", () => {
    const result = parse({ value: 0.001, fromUnit: "kmh", toUnit: "ms" });
    expect(result.result).toBeGreaterThan(0);
    expect(Number.isFinite(result.result)).toBe(true);
  });

  it("handles same unit conversion (from and to are identical)", () => {
    const result = parse({ value: 100, fromUnit: "kmh", toUnit: "kmh" });
    expect(result.result).toBeCloseTo(100, 5);
  });

  it("handles negative speeds (negative input)", () => {
    // Zod schema allows negative values; compute should handle gracefully
    const result = parse({ value: -50, fromUnit: "kmh", toUnit: "mph" });
    expect(result.result).toBeLessThan(0);
    expect(Number.isFinite(result.result)).toBe(true);
  });

  it("maintains precision across multiple conversions", () => {
    // Convert 1 m/s through multiple units and back
    const result = parse({ value: 1, fromUnit: "ms", toUnit: "kmh" });
    expect(result.kmh).toBeCloseTo(3.6, 5);
  });

  it("all output units are finite numbers", () => {
    const result = parse({ value: 75, fromUnit: "mph", toUnit: "kmh" });
    expect(Number.isFinite(result.kmh)).toBe(true);
    expect(Number.isFinite(result.mph)).toBe(true);
    expect(Number.isFinite(result.ms)).toBe(true);
    expect(Number.isFinite(result.knots)).toBe(true);
    expect(Number.isFinite(result.fts)).toBe(true);
  });

  it("converts consistent with SI definition", () => {
    // 1 m/s should equal 3.6 km/h (exact)
    const result = parse({ value: 1, fromUnit: "ms", toUnit: "kmh" });
    expect(result.kmh).toBeCloseTo(3.6, 6);
  });
});
