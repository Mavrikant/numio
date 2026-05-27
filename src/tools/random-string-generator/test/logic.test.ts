import { describe, it, expect } from "vitest";
import { buildCharset, randomString } from "../logic";

function seeded(seed = 1): (max: number) => number {
  let s = seed >>> 0;
  return (max: number) => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s % max;
  };
}

describe("random-string-generator", () => {
  it("builds the charset from options", () => {
    expect(buildCharset({ lowercase: true, uppercase: false, numbers: false, symbols: false })).toBe("abcdefghijklmnopqrstuvwxyz");
    expect(buildCharset({ lowercase: false, uppercase: false, numbers: true, symbols: false })).toBe("0123456789");
    expect(buildCharset({ lowercase: false, uppercase: false, numbers: false, symbols: false })).toBe("");
  });
  it("produces a string of the requested length from the charset", () => {
    const s = randomString(20, "abc", seeded(7));
    expect(s).toHaveLength(20);
    expect([...s].every((c) => "abc".includes(c))).toBe(true);
  });
  it("is deterministic with a seeded RNG", () => {
    expect(randomString(30, "abcdef0123", seeded(99))).toBe(randomString(30, "abcdef0123", seeded(99)));
  });
  it("returns empty for empty charset or zero length", () => {
    expect(randomString(10, "", seeded())).toBe("");
    expect(randomString(0, "abc", seeded())).toBe("");
  });
});
