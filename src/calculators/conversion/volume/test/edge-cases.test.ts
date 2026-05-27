import { describe, it, expect } from "vitest";
import { compute, inputSchema } from "../compute";

describe("Volume — edge cases", () => {
  it("same unit roundtrip: 750 mL → mL returns 750", () => {
    const result = compute({ value: 750, fromUnit: "mL", toUnit: "mL" });
    expect(result.result).toBe(750);
  });

  it("rejects negative input via schema", () => {
    expect(() => inputSchema.parse({ value: -5, fromUnit: "L", toUnit: "gal_us" })).toThrow();
  });

  it("rejects zero input via schema (positive only)", () => {
    expect(() => inputSchema.parse({ value: 0, fromUnit: "L", toUnit: "gal_us" })).toThrow();
  });

  it("very small value: 1 mL → m³ = 1e-6", () => {
    const result = compute({ value: 1, fromUnit: "mL", toUnit: "m3" });
    expect(result.result).toBeCloseTo(1e-6, 10);
  });

  it("very large value: 1000 m³ → US gallons ≈ 264,172.05", () => {
    const result = compute({ value: 1000, fromUnit: "m3", toUnit: "gal_us" });
    expect(result.result).toBeCloseTo(264_172.052358, 1);
  });

  it("cm³ ≡ mL identity: 500 cm³ = 500 mL", () => {
    const result = compute({ value: 500, fromUnit: "cm3", toUnit: "mL" });
    expect(result.result).toBeCloseTo(500, 6);
  });
});
