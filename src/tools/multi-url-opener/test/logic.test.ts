import { describe, it, expect } from "vitest";
import { parseUrls } from "../logic";

describe("parseUrls", () => {
  it("prepends https:// when no scheme is present", () => {
    expect(parseUrls("example.com")).toEqual(["https://example.com/"]);
  });
  it("keeps an existing scheme", () => {
    expect(parseUrls("http://example.com")).toEqual(["http://example.com/"]);
  });
  it("drops blank lines and trims whitespace", () => {
    expect(parseUrls("\n  example.com  \n\n example.org\n")).toEqual([
      "https://example.com/",
      "https://example.org/",
    ]);
  });
  it("drops invalid URLs", () => {
    const result = parseUrls("example.com\nhttp://\n   :::not a url");
    expect(result).toContain("https://example.com/");
    expect(result).not.toContain("http://");
  });
  it("preserves order", () => {
    expect(parseUrls("c.com\na.com\nb.com")).toEqual([
      "https://c.com/",
      "https://a.com/",
      "https://b.com/",
    ]);
  });
  it("returns empty array for empty input", () => {
    expect(parseUrls("")).toEqual([]);
    expect(parseUrls("   \n  \n")).toEqual([]);
  });
});
