import { describe, it, expect } from "vitest";
import { compute, inputSchema } from "../compute";

describe("Area — edge cases", () => {
  it("same unit roundtrip: 250 m² → m² returns 250", () => {
    const result = compute({ value: 250, fromUnit: "m2", toUnit: "m2" });
    expect(result.result).toBe(250);
  });

  it("rejects negative input via schema", () => {
    expect(() => inputSchema.parse({ value: -1, fromUnit: "m2", toUnit: "ft2" })).toThrow();
  });

  it("rejects zero input via schema (positive only)", () => {
    expect(() => inputSchema.parse({ value: 0, fromUnit: "m2", toUnit: "ft2" })).toThrow();
  });

  it("very small value: 1 mm² to m² = 1e-6", () => {
    const result = compute({ value: 1, fromUnit: "mm2", toUnit: "m2" });
    expect(result.result).toBeCloseTo(1e-6, 10);
  });

  it("very large value: 100 mi² to km² ≈ 258.999", () => {
    const result = compute({ value: 100, fromUnit: "mi2", toUnit: "km2" });
    expect(result.result).toBeCloseTo(258.99881, 3);
  });

  it("symmetric roundtrip: m² → ha → m² preserves value", () => {
    const toHa = compute({ value: 25_000, fromUnit: "m2", toUnit: "ha" });
    const backToM2 = compute({ value: toHa.result, fromUnit: "ha", toUnit: "m2" });
    expect(backToM2.result).toBeCloseTo(25_000, 3);
  });
});
