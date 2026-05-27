import { describe, it, expect } from "vitest";
import { encodeUrl, decodeUrl } from "../logic";

describe("url-encode", () => {
  it("encodes reserved characters", () => {
    expect(encodeUrl("a b&c=d?e")).toBe("a%20b%26c%3Dd%3Fe");
  });
  it("round-trips UTF-8", () => {
    for (const s of ["", "hello world", "Türkçe", "日本語", "a+b"]) {
      expect(decodeUrl(encodeUrl(s))).toBe(s);
    }
  });
  it("treats + as space when decoding", () => {
    expect(decodeUrl("a+b")).toBe("a b");
  });
  it("throws on malformed percent-encoding", () => {
    expect(() => decodeUrl("%ZZ")).toThrow();
  });
});
