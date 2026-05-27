import { describe, it, expect } from "vitest";
import { getMatches } from "../logic";

describe("getMatches", () => {
  it("finds all matches with index", () => {
    const m = getMatches("\\d+", "", "a1 b22 c333");
    expect(m.map((x) => x.match)).toEqual(["1", "22", "333"]);
    expect(m[0].index).toBe(1);
  });
  it("returns capture groups", () => {
    const m = getMatches("(\\w)(\\d)", "g", "a1 b2");
    expect(m[0].groups).toEqual(["a", "1"]);
    expect(m[1].groups).toEqual(["b", "2"]);
  });
  it("respects case-insensitive flag", () => {
    expect(getMatches("abc", "i", "ABC abc").length).toBe(2);
  });
  it("throws on invalid pattern", () => {
    expect(() => getMatches("(", "", "x")).toThrow();
  });
  it("returns empty for empty pattern", () => {
    expect(getMatches("", "g", "anything")).toEqual([]);
  });
});
