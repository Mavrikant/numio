import { describe, it, expect } from "vitest";
import { toBionicHtml, toBionicPlain } from "../logic";

describe("bionic-reading", () => {
  it("wraps leading characters of each word in <strong>", () => {
    expect(toBionicHtml("hello world", 0.5)).toBe("<strong>hel</strong>lo <strong>wor</strong>ld");
  });
  it("always bolds at least one character", () => {
    expect(toBionicHtml("a", 0.5)).toBe("<strong>a</strong>");
  });
  it("respects the bold fraction", () => {
    expect(toBionicHtml("abcdef", 0.25)).toBe("<strong>ab</strong>cdef");
    expect(toBionicHtml("abcdef", 1)).toBe("<strong>abcdef</strong>");
  });
  it("leaves non-letter characters untouched", () => {
    expect(toBionicHtml("hello, world!", 0.5)).toBe("<strong>hel</strong>lo, <strong>wor</strong>ld!");
  });
  it("provides a plain-text equivalent", () => {
    expect(toBionicPlain("hi there", 0.5)).toBe("*h*i *the*re");
  });
});
