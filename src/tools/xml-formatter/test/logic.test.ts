import { describe, it, expect } from "vitest";
import { formatXml } from "../logic";

describe("xml-formatter", () => {
  it("indents nested elements", () => {
    expect(formatXml("<a><b>x</b></a>")).toEqual({ output: "<a>\n  <b>x</b>\n</a>", error: null });
  });
  it("handles declarations and self-closing tags", () => {
    expect(formatXml('<?xml version="1.0"?><root><item/></root>')).toEqual({
      output: '<?xml version="1.0"?>\n<root>\n  <item/>\n</root>',
      error: null,
    });
  });
  it("collapses whitespace between tags", () => {
    expect(formatXml("<a>\n   <b>1</b>\n</a>").output).toBe("<a>\n  <b>1</b>\n</a>");
  });
  it("returns empty for empty input", () => {
    expect(formatXml("   ")).toEqual({ output: "", error: null });
  });
  it("flags unbalanced tags", () => {
    expect(formatXml("<a><b></a>").error).toMatch(/unbalanced/i);
  });
});
