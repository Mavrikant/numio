import { describe, it, expect } from "vitest";
import { vigenereEncrypt, vigenereDecrypt } from "../logic";

describe("vigenere-cipher", () => {
  it("encrypts the canonical ATTACKATDAWN/LEMON example", () => {
    expect(vigenereEncrypt("ATTACKATDAWN", "LEMON")).toBe("LXFOPVEFRNHR");
  });
  it("decrypts back to the original", () => {
    expect(vigenereDecrypt("LXFOPVEFRNHR", "LEMON")).toBe("ATTACKATDAWN");
  });
  it("preserves case", () => {
    expect(vigenereEncrypt("Hello", "key")).toBe("Rijvs");
  });
  it("leaves non-letters untouched and does not advance the key", () => {
    expect(vigenereEncrypt("Hi!", "AB")).toBe("Hj!");
  });
  it("returns the input unchanged for an empty or letterless key", () => {
    expect(vigenereEncrypt("hello", "")).toBe("hello");
    expect(vigenereEncrypt("hello", "123")).toBe("hello");
  });
});
