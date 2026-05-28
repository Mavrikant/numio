import { describe, it, expect } from "vitest";
import { formatCss } from "../logic";

describe("css-formatter", () => {
  it("indents a single rule", () => {
    expect(formatCss("a{color:red;}")).toBe("a {\n  color: red;\n}");
  });
  it("handles multiple rules", () => {
    const out = formatCss("a{color:red;}b{color:blue;}");
    expect(out.split("\n")).toEqual(["a {", "  color: red;", "}", "b {", "  color: blue;", "}"]);
  });
  it("preserves strings", () => {
    expect(formatCss('a{content:"hello {world}";}')).toContain('"hello {world}"');
  });
  it("preserves comments", () => {
    expect(formatCss("/* keep */a{color:red;}")).toContain("/* keep */");
  });
  it("returns empty for empty input", () => {
    expect(formatCss("")).toBe("");
  });
});
