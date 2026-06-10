import { describe, it, expect } from "vitest";
import { formatCss } from "../logic";

describe("css-formatter regressions", () => {
  it("does not add a space after pseudo-class colons inside at-rules", () => {
    const out = formatCss("@media screen{a:hover{color:red}}");
    expect(out).toContain("a:hover {");
    expect(out).not.toContain("a: hover");
    expect(out).toContain("color: red");
  });
  it("leaves colons inside unquoted url() untouched", () => {
    const out = formatCss("a{background:url(http://example.com/i.png)}");
    expect(out).toContain("background: url(http://example.com/i.png)");
  });
});
