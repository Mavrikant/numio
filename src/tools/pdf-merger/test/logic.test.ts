import { describe, it, expect } from "vitest";
import { parsePageRanges } from "../logic";

describe("parsePageRanges (used by PDF tools)", () => {
  it("parses singletons and ranges", () => {
    expect(parsePageRanges("1,3-5,7", 10)).toEqual([0, 2, 3, 4, 6]);
  });
  it("clamps out-of-range numbers", () => {
    expect(parsePageRanges("1,99,2-200", 5)).toEqual([0, 1, 2, 3, 4]);
  });
  it("returns empty for blank input", () => {
    expect(parsePageRanges("", 10)).toEqual([]);
  });
  it("deduplicates overlapping ranges", () => {
    expect(parsePageRanges("1-3,2-4", 10)).toEqual([0, 1, 2, 3]);
  });
});
