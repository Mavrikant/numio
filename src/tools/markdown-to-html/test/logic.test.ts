import { describe, it, expect } from "vitest";
import { markdownToHtml } from "../logic";

describe("markdown-to-html", () => {
  it("renders ATX headings", () => {
    expect(markdownToHtml("# Hi\n## There")).toBe("<h1>Hi</h1>\n<h2>There</h2>");
  });
  it("renders unordered lists", () => {
    expect(markdownToHtml("- one\n- two")).toBe("<ul>\n<li>one</li>\n<li>two</li>\n</ul>");
  });
  it("renders ordered lists", () => {
    expect(markdownToHtml("1. one\n2. two")).toBe("<ol>\n<li>one</li>\n<li>two</li>\n</ol>");
  });
  it("renders fenced code blocks", () => {
    expect(markdownToHtml("```js\nconst a = 1;\n```")).toBe('<pre><code class="language-js">const a = 1;</code></pre>');
  });
  it("renders bold, italic and inline code", () => {
    expect(markdownToHtml("**hi** *there* `code`")).toBe("<p><strong>hi</strong> <em>there</em> <code>code</code></p>");
  });
  it("renders links and images", () => {
    expect(markdownToHtml("[Numio](https://numio.app/)")).toBe('<p><a href="https://numio.app/">Numio</a></p>');
    expect(markdownToHtml("![alt](https://example.com/i.png)")).toBe('<p><img src="https://example.com/i.png" alt="alt"></p>');
  });
  it("escapes HTML in plain text", () => {
    expect(markdownToHtml("<script>alert(1)</script>")).toBe("<p>&lt;script&gt;alert(1)&lt;/script&gt;</p>");
  });
  it("renders blockquotes", () => {
    expect(markdownToHtml("> hi")).toBe("<blockquote>\n<p>hi</p>\n</blockquote>");
  });
  it("renders horizontal rules", () => {
    expect(markdownToHtml("---")).toBe("<hr>");
  });
});
