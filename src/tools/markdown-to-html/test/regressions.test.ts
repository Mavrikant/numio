import { describe, it, expect } from "vitest";
import { markdownToHtml } from "../logic";

describe("markdown-to-html regressions", () => {
  it("escapes inline code exactly once", () => {
    expect(markdownToHtml("Use `a < b` here")).toBe("<p>Use <code>a &lt; b</code> here</p>");
  });
  it("leaves emphasis markers inside code spans literal", () => {
    expect(markdownToHtml("`**not bold**`")).toBe("<p><code>**not bold**</code></p>");
    expect(markdownToHtml("`*x*`")).toBe("<p><code>*x*</code></p>");
  });
  it("drops javascript: URLs in links and images", () => {
    expect(markdownToHtml("[x](javascript:alert(1))")).not.toContain("javascript:");
    expect(markdownToHtml("![x](javascript:alert(1))")).not.toContain("javascript:");
  });
  it("keeps http, mailto and relative URLs", () => {
    expect(markdownToHtml("[x](https://example.com)")).toContain('href="https://example.com"');
    expect(markdownToHtml("[x](mailto:a@b.c)")).toContain('href="mailto:a@b.c"');
    expect(markdownToHtml("[x](/docs)")).toContain('href="/docs"');
  });
});
