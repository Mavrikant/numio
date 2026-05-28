import { describe, it, expect } from "vitest";
import { CATEGORIES, searchEntries } from "../logic";

describe("regex-cheatsheet", () => {
  it("ships at least six categories", () => {
    expect(CATEGORIES.length).toBeGreaterThanOrEqual(6);
    const ids = CATEGORIES.map((c) => c.id);
    expect(ids).toContain("anchors");
    expect(ids).toContain("quantifiers");
    expect(ids).toContain("flags");
  });
  it("returns all categories for an empty query", () => {
    expect(searchEntries("")).toHaveLength(CATEGORIES.length);
  });
  it("filters by pattern", () => {
    const r = searchEntries("\\d");
    expect(r.some((g) => g.entries.some((e) => e.pattern === "\\d"))).toBe(true);
  });
  it("filters by meaning text", () => {
    expect(searchEntries("digit").length).toBeGreaterThan(0);
  });
  it("returns no groups when nothing matches", () => {
    expect(searchEntries("zzzzzzznothing")).toEqual([]);
  });
});
