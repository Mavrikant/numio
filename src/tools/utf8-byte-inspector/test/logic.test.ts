import { describe, it, expect } from "vitest";
import { hexByte, hexCodePoint, inspectUtf8 } from "../logic";

describe("utf8-byte-inspector", () => {
  it("counts ASCII as 1 byte per code point", () => {
    const r = inspectUtf8("Hi");
    expect(r.codePoints).toBe(2);
    expect(r.utf8Bytes).toBe(2);
    expect(r.utf16CodeUnits).toBe(2);
  });
  it("counts a 2-byte UTF-8 character", () => {
    expect(inspectUtf8("é").utf8Bytes).toBe(2);
  });
  it("counts a 4-byte emoji as 1 code point but 4 UTF-8 bytes and 2 UTF-16 units", () => {
    const r = inspectUtf8("👋");
    expect(r.codePoints).toBe(1);
    expect(r.utf8Bytes).toBe(4);
    expect(r.utf16CodeUnits).toBe(2);
  });
  it("formats bytes and code points as uppercase hex", () => {
    expect(hexByte(15)).toBe("0F");
    expect(hexCodePoint(0x1f44b)).toBe("U+1F44B");
  });
  it("returns no entries for empty input", () => {
    expect(inspectUtf8("").entries).toEqual([]);
  });
});
