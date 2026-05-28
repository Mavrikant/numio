import { describe, it, expect } from "vitest";
import { formatHtml } from "../logic";

describe("html-formatter", () => {
  it("indents nested block tags", () => {
    expect(formatHtml("<div><p>Hi</p></div>")).toBe("<div>\n  <p>Hi</p>\n</div>");
  });
  it("keeps inline tags on the parent line", () => {
    expect(formatHtml("<p>Hello <strong>world</strong>!</p>")).toBe("<p>Hello <strong>world</strong>!</p>");
  });
  it("keeps void elements with inline siblings", () => {
    expect(formatHtml("<p>line1<br>line2</p>")).toBe("<p>line1<br>line2</p>");
  });
  it("breaks out void elements between block siblings", () => {
    const out = formatHtml("<div><p>a</p><br><p>b</p></div>");
    expect(out).toMatch(/<p>a<\/p>\n\s*<br>\n\s*<p>b<\/p>/);
  });
  it("preserves <pre> blocks", () => {
    expect(formatHtml("<div><pre>line1\nline2</pre></div>")).toContain("<pre>line1\nline2</pre>");
  });
  it("preserves comments and doctype", () => {
    const out = formatHtml("<!DOCTYPE html><!-- comment --><html></html>");
    expect(out).toContain("<!DOCTYPE html>");
    expect(out).toContain("<!-- comment -->");
  });
  it("returns empty for empty input", () => {
    expect(formatHtml("")).toBe("");
  });
});
