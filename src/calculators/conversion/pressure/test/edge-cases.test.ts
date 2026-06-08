import { describe, it, expect } from "vitest";
import { compute, inputSchema } from "../compute";

describe("Pressure — edge cases", () => {
  it("same unit roundtrip: 30 psi → psi returns 30", () => {
    const result = compute({ value: 30, fromUnit: "psi", toUnit: "psi" });
    expect(result.result).toBe(30);
  });

  it("rejects negative input via schema (pressure is positive)", () => {
    expect(() =>
      inputSchema.parse({ value: -1, fromUnit: "bar", toUnit: "psi" }),
    ).toThrow();
  });

  it("rejects zero input via schema", () => {
    expect(() =>
      inputSchema.parse({ value: 0, fromUnit: "bar", toUnit: "psi" }),
    ).toThrow();
  });

  it("very small value: 1 Pa → MPa = 1e-6", () => {
    const result = compute({ value: 1, fromUnit: "Pa", toUnit: "MPa" });
    expect(result.result).toBeCloseTo(1e-6, 10);
  });

  it("very large value: 100 MPa → bar = 1000", () => {
    const result = compute({ value: 100, fromUnit: "MPa", toUnit: "bar" });
    expect(result.result).toBeCloseTo(1000, 3);
  });

  it("torr and mmHg are nearly identical: 760 torr ≈ 760 mmHg (within 1e-5)", () => {
    const result = compute({ value: 760, fromUnit: "torr", toUnit: "mmHg" });
    // 760 * 133.32236842 / 133.322387415 ≈ 759.999892...
    expect(result.result).toBeCloseTo(760, 3);
  });
});
