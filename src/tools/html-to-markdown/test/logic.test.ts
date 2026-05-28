import { describe, it, expect } from "vitest";
import { htmlToMarkdown } from "../logic";

describe("html-to-markdown", () => {
  it("converts headings", () => {
    expect(htmlToMarkdown("<h1>Hi</h1><h2>Sub</h2>")).toBe("# Hi\n\n## Sub");
  });
  it("converts paragraphs", () => {
    expect(htmlToMarkdown("<p>Hello world</p>")).toBe("Hello world");
  });
  it("converts unordered lists", () => {
    expect(htmlToMarkdown("<ul><li>one</li><li>two</li></ul>")).toContain("- one");
  });
  it("converts strong and em", () => {
    expect(htmlToMarkdown("<p>This is <strong>bold</strong> and <em>italic</em>.</p>")).toBe("This is **bold** and *italic*.");
  });
  it("converts code blocks and inline code", () => {
    expect(htmlToMarkdown("<p>Use <code>npm</code></p>")).toContain("`npm`");
    expect(htmlToMarkdown("<pre><code>const a = 1;</code></pre>")).toContain("```");
  });
  it("converts links and images", () => {
    expect(htmlToMarkdown('<a href="https://x.com">X</a>')).toBe("[X](https://x.com)");
    expect(htmlToMarkdown('<img src="i.png" alt="alt">')).toBe("![alt](i.png)");
  });
  it("strips script and style", () => {
    expect(htmlToMarkdown("<script>alert(1)</script><p>Hi</p>")).toBe("Hi");
  });
  it("decodes common entities", () => {
    expect(htmlToMarkdown("<p>1 &lt; 2 &amp; 3</p>")).toBe("1 < 2 & 3");
  });
});
