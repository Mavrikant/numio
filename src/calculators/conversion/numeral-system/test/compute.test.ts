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
      // Input is the digit pattern as a number: 11111111 stringified is
      // "11111111" which is a valid binary representation of 255.
      const result = compute({ value: 11111111, sourceBase: "binary" });
      expect(parseFloat(result.decimal)).toBe(255);
    });

    it("should convert binary 1010 to decimal 10", () => {
      // 1010 stringified is "1010" → binary 1010 = decimal 10
      const result = compute({ value: 1010, sourceBase: "binary" });
      expect(parseFloat(result.decimal)).toBe(10);
    });
  });

  describe("Hexadecimal input", () => {
    it("should convert hexadecimal 100 to decimal 256", () => {
      // The API accepts numeric input, so all-digit hex strings only.
      // 100 stringified = "100" → hex 0x100 = 256 decimal.
      const result = compute({ value: 100, sourceBase: "hexadecimal" });
      expect(parseFloat(result.decimal)).toBe(256);
    });

    it("should convert hexadecimal 10 to decimal 16", () => {
      // 10 stringified = "10" → hex 0x10 = 16 decimal
      const result = compute({ value: 10, sourceBase: "hexadecimal" });
      expect(parseFloat(result.decimal)).toBe(16);
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
