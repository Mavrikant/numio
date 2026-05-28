import { describe, it, expect } from "vitest";
import { parsePageRanges } from "../logic";

describe("pdf-splitter parsePageRanges", () => {
  it("parses comma-separated singletons", () => {
    expect(parsePageRanges("1,2,5", 10)).toEqual([0, 1, 4]);
  });
  it("parses ranges with dashes", () => {
    expect(parsePageRanges("2-4", 10)).toEqual([1, 2, 3]);
  });
  it("handles whitespace", () => {
    expect(parsePageRanges(" 1 , 3 - 5 ", 10)).toEqual([0, 2, 3, 4]);
  });
});
