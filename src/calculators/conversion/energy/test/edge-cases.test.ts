import { describe, it, expect } from "vitest";
import { compute, inputSchema } from "../compute";

describe("Energy — edge cases", () => {
  it("same unit roundtrip: 500 J → J returns 500", () => {
    const result = compute({ value: 500, fromUnit: "J", toUnit: "J" });
    expect(result.result).toBe(500);
  });

  it("rejects negative input via schema (energy here is magnitude, positive)", () => {
    expect(() => inputSchema.parse({ value: -10, fromUnit: "J", toUnit: "kJ" })).toThrow();
  });

  it("rejects zero input via schema", () => {
    expect(() => inputSchema.parse({ value: 0, fromUnit: "J", toUnit: "kJ" })).toThrow();
  });

  it("very small value: 1 eV → J = 1.602176634e-19 (CODATA exact)", () => {
    const result = compute({ value: 1, fromUnit: "eV", toUnit: "J" });
    expect(result.result).toBeCloseTo(1.602176634e-19, 25);
  });

  it("very large value: 1 MJ → eV ≈ 6.241509e+24", () => {
    const result = compute({ value: 1, fromUnit: "MJ", toUnit: "eV" });
    // 1e6 / 1.602176634e-19 ≈ 6.241509074e+24
    expect(result).toBeDefined();
    expect(result.result).toBeGreaterThan(6.24e24);
    expect(result.result).toBeLessThan(6.25e24);
  });

  it("symmetric roundtrip: kWh → BTU → kWh preserves value", () => {
    const toBtu = compute({ value: 5, fromUnit: "kWh", toUnit: "BTU" });
    const back = compute({ value: toBtu.result, fromUnit: "BTU", toUnit: "kWh" });
    expect(back.result).toBeCloseTo(5, 4);
  });
});
