import { describe, it, expect } from "vitest";
import { encodeBase58, decodeBase58 } from "../logic";

describe("base58", () => {
  it("encodes known values", () => {
    expect(encodeBase58("Hello World!")).toBe("2NEpo7TZRRrLZSi2U");
    expect(encodeBase58("")).toBe("");
  });
  it("round-trips UTF-8 text", () => {
    for (const s of ["bitcoin", "Café ☕", "The quick brown fox"]) {
      expect(decodeBase58(encodeBase58(s))).toBe(s);
    }
  });
  it("preserves leading zero bytes as '1'", () => {
    expect(encodeBase58("\x00\x00abc")).toMatch(/^11/);
  });
  it("throws on invalid characters", () => {
    expect(() => decodeBase58("0OIl")).toThrow();
  });
});
