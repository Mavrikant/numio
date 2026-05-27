import { describe, it, expect } from "vitest";
import { encodeBase32, decodeBase32 } from "../logic";

describe("base32", () => {
  // RFC 4648 test vectors.
  it("matches RFC 4648 vectors", () => {
    expect(encodeBase32("")).toBe("");
    expect(encodeBase32("f")).toBe("MY======");
    expect(encodeBase32("fo")).toBe("MZXQ====");
    expect(encodeBase32("foo")).toBe("MZXW6===");
    expect(encodeBase32("foobar")).toBe("MZXW6YTBOI======");
  });
  it("round-trips UTF-8", () => {
    for (const s of ["", "Hello", "Türkçe", "日本 👍"]) {
      expect(decodeBase32(encodeBase32(s))).toBe(s);
    }
  });
  it("throws on invalid input", () => {
    expect(() => decodeBase32("0189!")).toThrow();
  });
});
