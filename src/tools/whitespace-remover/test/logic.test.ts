import { describe, it, expect } from "vitest";
import { cleanWhitespace } from "../logic";

const base = { trimLines: false, collapseSpaces: false, removeBlankLines: false, removeAllSpaces: false };

describe("cleanWhitespace", () => {
  it("trims each line", () => {
    expect(cleanWhitespace("  a  \n  b", { ...base, trimLines: true })).toBe("a\nb");
  });
  it("collapses multiple spaces", () => {
    expect(cleanWhitespace("a    b\tc", { ...base, collapseSpaces: true })).toBe("a b c");
  });
  it("removes blank lines", () => {
    expect(cleanWhitespace("a\n\n\nb", { ...base, removeBlankLines: true })).toBe("a\nb");
  });
  it("removes all whitespace", () => {
    expect(cleanWhitespace("a b\nc\td", { ...base, removeAllSpaces: true })).toBe("abcd");
  });
});
