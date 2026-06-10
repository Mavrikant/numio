import { describe, it, expect } from "vitest";
import { toBionicHtml, toBionicPlain } from "../logic";

describe("bionic-reading regressions", () => {
  it("escapes HTML special characters outside words", () => {
    expect(toBionicHtml("a < b")).toBe("<strong>a</strong> &lt; <strong>b</strong>");
    expect(toBionicHtml("<!--")).toBe("&lt;!--");
  });
  it("does not double-decode entities typed by the user", () => {
    expect(toBionicHtml("&#60;")).toContain("&amp;");
  });
  it("keeps plain output free of HTML entities", () => {
    expect(toBionicPlain("a & b")).toBe("*a* & *b*");
  });
});
