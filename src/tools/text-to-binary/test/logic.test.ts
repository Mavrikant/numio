import { describe, it, expect } from "vitest";
import { textToBinary, binaryToText } from "../logic";

describe("text-to-binary", () => {
  it("converts ASCII to binary", () => {
    expect(textToBinary("A")).toBe("01000001");
    expect(textToBinary("Hi")).toBe("01001000 01101001");
  });
  it("round-trips UTF-8", () => {
    for (const s of ["", "Hello", "Türkçe", "日本語 👍"]) {
      expect(binaryToText(textToBinary(s))).toBe(s);
    }
  });
  it("throws on invalid binary", () => {
    expect(() => binaryToText("01000001 hello")).toThrow();
  });
});
