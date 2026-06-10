import { describe, it, expect } from "vitest";
import { buildMarkdownTable } from "../logic";

describe("markdown-table-generator regressions", () => {
  it("escapes pipes inside cells so the column count is preserved", () => {
    const out = buildMarkdownTable([
      ["name", "desc"],
      ["x", "a|b"],
    ]);
    expect(out).toContain("a\\|b");
  });
});
