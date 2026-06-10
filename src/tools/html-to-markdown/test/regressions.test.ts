import { describe, it, expect } from "vitest";
import { htmlToMarkdown } from "../logic";

describe("html-to-markdown regressions", () => {
  it("decodes entities in code blocks exactly once", () => {
    const out = htmlToMarkdown("<pre><code>a &amp;amp; b &amp;lt;tag&amp;gt;</code></pre>");
    expect(out).toContain("a &amp; b &lt;tag&gt;");
  });
  it("decodes entities in inline code exactly once", () => {
    expect(htmlToMarkdown("<p><code>&amp;amp;</code></p>")).toContain("`&amp;`");
  });
  it("still decodes simple entities in code", () => {
    expect(htmlToMarkdown("<code>a &lt; b</code>")).toContain("`a < b`");
  });
});
