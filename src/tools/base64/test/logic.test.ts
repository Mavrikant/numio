import { describe, it, expect } from "vitest";
import { encodeBase64, decodeBase64 } from "../logic";

describe("base64", () => {
  it("encodes ASCII", () => {
    expect(encodeBase64("Hello, World!")).toBe("SGVsbG8sIFdvcmxkIQ==");
  });
  it("round-trips UTF-8 and emoji", () => {
    for (const s of ["", "a", "ab", "abc", "Türkçe çğş", "日本語", "👍🏽 emoji"]) {
      expect(decodeBase64(encodeBase64(s))).toBe(s);
    }
  });
  it("decodes known value", () => {
    expect(decodeBase64("SGVsbG8=")).toBe("Hello");
  });
  it("throws on invalid input", () => {
    expect(() => decodeBase64("not valid!!@@")).toThrow();
  });
});
