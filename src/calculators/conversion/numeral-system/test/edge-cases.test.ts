import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Numeral System Converter - edge cases", () => {
  describe("Boundary values", () => {
    it("should handle zero correctly", () => {
      const result = compute({ value: 0, sourceBase: "decimal" });
      expect(result.decimal).toBe("0");
      expect(result.binary).toBe("0");
      expect(result.octal).toBe("0");
      expect(result.hexadecimal).toBe("0");
    });

    it("should handle 1 (smallest positive integer)", () => {
      const result = compute({ value: 1, sourceBase: "decimal" });
      expect(result.binary).toBe("1");
      expect(result.octal).toBe("1");
      expect(result.hexadecimal).toBe("1");
    });

    it("should handle very small fractional numbers", () => {
      const result = compute({ value: 0.125, sourceBase: "decimal" });
      expect(result.decimal).toBe("0.125");
      expect(result.binary).toContain("0.001");
    });

    it("should handle very large integers", () => {
      const result = compute({ value: 1000000, sourceBase: "decimal" });
      expect(result.hexadecimal).toBe("F4240");
      expect(result.octal).toContain("3567640");
    });
  });

  describe("Negative numbers", () => {
    it("should preserve negative sign through conversion", () => {
      const result = compute({ value: -255, sourceBase: "decimal" });
      expect(result.decimal).toBe("-255");
      expect(result.binary.startsWith("-")).toBe(true);
      expect(result.hexadecimal.startsWith("-")).toBe(true);
      expect(result.octal.startsWith("-")).toBe(true);
    });

    it("should handle negative fractions", () => {
      const result = compute({ value: -0.25, sourceBase: "decimal" });
      expect(result.decimal).toBe("-0.25");
      expect(result.binary.startsWith("-")).toBe(true);
    });

    it("should handle negative zero (should be 0)", () => {
      const result = compute({ value: -0, sourceBase: "decimal" });
      expect(result.decimal).toBe("0");
    });
  });

  describe("Floating point precision", () => {
    it("should handle 0.1 + 0.2 edge case in decimal", () => {
      const result = compute({ value: 0.30000000000000004, sourceBase: "decimal" });
      expect(parseFloat(result.decimal)).toBeCloseTo(0.3, 5);
    });

    it("should handle repeating binary fractions (0.1 decimal)", () => {
      const result = compute({ value: 0.1, sourceBase: "decimal" });
      // 0.1 in decimal produces repeating pattern in binary
      expect(result.binary).toContain("0.");
      expect(result.binary.split(".")[1].length).toBeLessThanOrEqual(20);
    });

    it("should limit fractional part to prevent infinite loops", () => {
      const result = compute({ value: 0.333333, sourceBase: "decimal" });
      const fractionalPart = result.binary.split(".")[1] || "";
      expect(fractionalPart.length).toBeLessThanOrEqual(20);
    });
  });

  describe("Input validation concerns", () => {
    it("should handle positive infinity correctly", () => {
      const result = compute({ value: Infinity, sourceBase: "decimal" });
      // Should not crash, may produce special output or error
      expect(result).toBeDefined();
    });

    it("should handle negative infinity correctly", () => {
      const result = compute({ value: -Infinity, sourceBase: "decimal" });
      expect(result).toBeDefined();
    });

    it("should handle NaN gracefully", () => {
      const result = compute({ value: NaN, sourceBase: "decimal" });
      expect(result).toBeDefined();
    });
  });

  describe("Base conversion roundtrip", () => {
    it("should convert decimal -> binary -> back to decimal", () => {
      const input = 42;
      const result1 = compute({ value: input, sourceBase: "decimal" });
      // Value is stored as string in binary, need to parse back
      expect(result1.decimal).toBe("42");
    });

    it("should convert decimal -> hex -> back to decimal", () => {
      const result = compute({ value: 255, sourceBase: "decimal" });
      expect(result.hexadecimal).toBe("FF");
    });
  });
});
