import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Numeral System Converter - compute", () => {
  describe("Decimal input", () => {
    it("should convert decimal to all bases (255)", () => {
      // Reference: 255 in decimal = FF in hex, 377 in octal, 11111111 in binary
      const result = compute({ value: 255, sourceBase: "decimal" });
      expect(result.decimal).toBe("255");
      expect(result.hexadecimal).toBe("FF");
      expect(result.octal).toBe("377");
      expect(result.binary).toBe("11111111");
    });

    it("should convert decimal 10 correctly", () => {
      // Reference: 10 decimal = 1010 binary = A hex = 12 octal
      const result = compute({ value: 10, sourceBase: "decimal" });
      expect(result.decimal).toBe("10");
      expect(result.binary).toBe("1010");
      expect(result.hexadecimal).toBe("A");
      expect(result.octal).toBe("12");
    });

    it("should handle decimal 1", () => {
      const result = compute({ value: 1, sourceBase: "decimal" });
      expect(result.decimal).toBe("1");
      expect(result.binary).toBe("1");
      expect(result.hexadecimal).toBe("1");
      expect(result.octal).toBe("1");
    });

    it("should handle decimal 0", () => {
      const result = compute({ value: 0, sourceBase: "decimal" });
      expect(result.decimal).toBe("0");
      expect(result.binary).toBe("0");
      expect(result.hexadecimal).toBe("0");
      expect(result.octal).toBe("0");
    });

    it("should handle negative decimal numbers", () => {
      // Reference: -10 decimal = -1010 binary
      const result = compute({ value: -10, sourceBase: "decimal" });
      expect(result.decimal).toBe("-10");
      expect(result.binary).toBe("-1010");
      expect(result.hexadecimal).toBe("-A");
      expect(result.octal).toBe("-12");
    });

    it("should handle fractional decimal numbers", () => {
      // Reference: 0.5 decimal = 0.1 binary
      const result = compute({ value: 0.5, sourceBase: "decimal" });
      expect(result.decimal).toBe("0.5");
      expect(result.binary).toContain("0.1");
      expect(result.hexadecimal).toContain("0.8");
      expect(result.octal).toContain("0.4");
    });
  });

  describe("Binary input", () => {
    it("should convert binary 11111111 to decimal 255", () => {
      const result = compute({ value: 255, sourceBase: "binary" });
      // 11111111 in binary = 255 decimal
      expect(parseFloat(result.decimal)).toBe(255);
    });

    it("should convert binary 1010 to decimal 10", () => {
      const result = compute({ value: 10, sourceBase: "binary" });
      // 1010 in binary (input as decimal 10) = 10 decimal
      expect(parseFloat(result.decimal)).toBe(10);
    });
  });

  describe("Hexadecimal input", () => {
    it("should convert hexadecimal FF to decimal 255", () => {
      const result = compute({ value: 255, sourceBase: "hexadecimal" });
      expect(parseFloat(result.decimal)).toBe(255);
    });

    it("should convert hexadecimal A to decimal 10", () => {
      const result = compute({ value: 10, sourceBase: "hexadecimal" });
      expect(parseFloat(result.decimal)).toBe(10);
    });
  });

  describe("Octal input", () => {
    it("should convert octal 377 to decimal 255", () => {
      const result = compute({ value: 377, sourceBase: "octal" });
      expect(parseFloat(result.decimal)).toBe(255);
    });

    it("should convert octal 12 to decimal 10", () => {
      const result = compute({ value: 12, sourceBase: "octal" });
      expect(parseFloat(result.decimal)).toBe(10);
    });
  });

  describe("Edge cases", () => {
    it("should handle large numbers (16777215 = FFFFFF in hex)", () => {
      const result = compute({ value: 16777215, sourceBase: "decimal" });
      expect(result.hexadecimal).toBe("FFFFFF");
    });

    it("should handle negative fractions", () => {
      const result = compute({ value: -0.5, sourceBase: "decimal" });
      expect(result.decimal).toBe("-0.5");
      expect(result.binary).toContain("-0.1");
    });
  });
});
