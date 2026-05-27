import { describe, it, expect } from "vitest";
import { textToHex, hexToText } from "../logic";

describe("text-to-hex", () => {
  it("converts ASCII to hex", () => {
    expect(textToHex("Hi")).toBe("48 69");
  });
  it("round-trips UTF-8", () => {
    for (const s of ["", "Hello", "Türkçe", "日本 👍"]) {
      expect(hexToText(textToHex(s))).toBe(s);
    }
  });
  it("accepts hex without spaces and with 0x prefixes", () => {
    expect(hexToText("4869")).toBe("Hi");
    expect(hexToText("0x48 0x69")).toBe("Hi");
  });
  it("throws on malformed hex", () => {
    expect(() => hexToText("4")).toThrow();
    expect(() => hexToText("zz")).toThrow();
  });
});
