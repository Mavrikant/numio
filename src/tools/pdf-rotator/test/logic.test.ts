import { describe, it, expect } from "vitest";
import { parsePageRanges } from "../logic";

describe("pdf-rotator page-range parser", () => {
  it("handles empty input", () => {
    expect(parsePageRanges("", 5)).toEqual([]);
  });
  it("parses ranges", () => {
    expect(parsePageRanges("2,4-5", 10)).toEqual([1, 3, 4]);
  });
});
