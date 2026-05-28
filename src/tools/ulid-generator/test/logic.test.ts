import { describe, it, expect } from "vitest";
import { generateUlid } from "../logic";

const ENCODING_RE = /^[0-9A-HJKMNP-TV-Z]{26}$/;

describe("ulid-generator", () => {
  it("produces a 26-char Crockford Base32 id", () => {
    expect(generateUlid(1700000000000, new Uint8Array(16).fill(0))).toMatch(ENCODING_RE);
  });
  it("encodes the timestamp deterministically", () => {
    const a = generateUlid(1, new Uint8Array(16));
    const b = generateUlid(1, new Uint8Array(16));
    expect(a.slice(0, 10)).toBe(b.slice(0, 10));
  });
  it("sorts lexicographically by time", () => {
    const a = generateUlid(1_000_000, new Uint8Array(16));
    const b = generateUlid(2_000_000, new Uint8Array(16));
    expect(a < b).toBe(true);
  });
  it("varies with random bytes", () => {
    const t = Date.now();
    const a = generateUlid(t, new Uint8Array(16).fill(0));
    const b = generateUlid(t, new Uint8Array(16).fill(31));
    expect(a.slice(10)).not.toBe(b.slice(10));
  });
});
