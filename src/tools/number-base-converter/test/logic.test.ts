import { describe, it, expect } from "vitest";
import { convertBase } from "../logic";

describe("convertBase", () => {
  it("converts decimal to all bases", () => {
    expect(convertBase("255", 10)).toEqual({ binary: "11111111", octal: "377", decimal: "255", hex: "FF" });
  });
  it("converts from hex", () => {
    expect(convertBase("ff", 16).decimal).toBe("255");
    expect(convertBase("0xFF", 16).decimal).toBe("255");
  });
  it("converts from binary", () => {
    expect(convertBase("1010", 2).decimal).toBe("10");
  });
  it("throws on invalid digits for the base", () => {
    expect(() => convertBase("2", 2)).toThrow();
    expect(() => convertBase("xyz", 16)).toThrow();
    expect(() => convertBase("", 10)).toThrow();
  });
});
