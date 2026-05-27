import { describe, it, expect } from "vitest";
import { buildMarkdownTable, parseGrid } from "../logic";

describe("markdown-table-generator", () => {
  it("builds a left-aligned table with padding", () => {
    expect(buildMarkdownTable([["a", "bb"], ["c", "d"]], ["left", "left"])).toBe(
      "| a   | bb  |\n| :-- | :-- |\n| c   | d   |",
    );
  });
  it("emits alignment markers", () => {
    const out = buildMarkdownTable([["h1", "h2", "h3"], ["1", "2", "3"]], ["left", "center", "right"]);
    const divider = out.split("\n")[1]!;
    expect(divider).toContain(":-");
    expect(divider).toContain(":-:");
    expect(divider).toContain("-:");
  });
  it("pads ragged rows to a uniform column count", () => {
    const out = buildMarkdownTable([["a", "b"], ["c"]]);
    expect(out.split("\n")).toHaveLength(3);
    expect(out.split("\n").every((l) => (l.match(/\|/g) || []).length === 3)).toBe(true);
  });
  it("returns empty for no rows", () => {
    expect(buildMarkdownTable([])).toBe("");
  });
  it("parses CSV and tab-separated input", () => {
    expect(parseGrid("a,b\nc,d")).toEqual([["a", "b"], ["c", "d"]]);
    expect(parseGrid("a\tb\nc\td")).toEqual([["a", "b"], ["c", "d"]]);
  });
});
