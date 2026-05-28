import { describe, it, expect } from "vitest";
import { crc32, crc32Hex } from "../logic";

describe("crc32-checksum", () => {
  it("matches the canonical check value", () => {
    expect(crc32Hex("123456789")).toBe("cbf43926");
    expect(crc32("123456789")).toBe(0xcbf43926);
  });
  it("hashes the quick brown fox", () => {
    expect(crc32Hex("The quick brown fox jumps over the lazy dog")).toBe("414fa339");
  });
  it("returns 0 for empty input", () => {
    expect(crc32("")).toBe(0);
    expect(crc32Hex("")).toBe("00000000");
  });
  it("always returns 8 hex digits", () => {
    expect(crc32Hex("a")).toHaveLength(8);
  });
});
