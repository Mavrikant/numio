import { describe, it, expect } from "vitest";
import { base64ToBytes, bytesToBase64, decodeText, encodeText } from "../logic";

const STD = { urlSafe: false, padding: true };

describe("encodeText", () => {
  it("matches known RFC 4648 vectors", () => {
    expect(encodeText("", STD)).toBe("");
    expect(encodeText("f", STD)).toBe("Zg==");
    expect(encodeText("fo", STD)).toBe("Zm8=");
    expect(encodeText("foo", STD)).toBe("Zm9v");
    expect(encodeText("foobar", STD)).toBe("Zm9vYmFy");
  });

  it("handles UTF-8 (non-ASCII) text", () => {
    expect(encodeText("é", STD)).toBe("w6k=");
    expect(decodeText(encodeText("café ☕", STD))).toBe("café ☕");
  });

  it("strips padding when disabled", () => {
    expect(encodeText("f", { urlSafe: false, padding: false })).toBe("Zg");
  });

  it("uses the URL-safe alphabet", () => {
    // bytes 0xff 0xff 0xff -> standard "////", url-safe "____"
    expect(bytesToBase64(new Uint8Array([0xff, 0xff, 0xff]), { urlSafe: true, padding: true })).toBe(
      "____",
    );
    expect(bytesToBase64(new Uint8Array([0xfb, 0xff, 0xbf]), { urlSafe: true, padding: true })).toBe(
      "-_-_",
    );
  });
});

describe("base64ToBytes / decodeText", () => {
  it("decodes standard Base64", () => {
    expect(decodeText("Zm9vYmFy")).toBe("foobar");
    expect(decodeText("Zg==")).toBe("f");
  });

  it("decodes without padding and with whitespace", () => {
    expect(decodeText("Zm9v\n YmFy")).toBe("foobar");
    expect(decodeText("Zg")).toBe("f");
  });

  it("decodes URL-safe input", () => {
    expect(bytesToBase64(base64ToBytes("____"), STD)).toBe("////");
  });

  it("throws on invalid characters", () => {
    expect(() => base64ToBytes("!!!!")).toThrow();
  });

  it("throws on invalid UTF-8 byte sequences", () => {
    // 0xff is not a valid standalone UTF-8 byte.
    expect(() => decodeText(bytesToBase64(new Uint8Array([0xff]), STD))).toThrow();
  });

  it("round-trips arbitrary text", () => {
    for (const s of ["hello world", "a", "", "🚀🔐", "line1\nline2\ttab"]) {
      expect(decodeText(encodeText(s, STD))).toBe(s);
    }
  });
});
