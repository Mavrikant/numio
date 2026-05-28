import { describe, it, expect } from "vitest";
import { syllablesInWord, countSyllables } from "../logic";

describe("syllable-counter", () => {
  it("counts short words as one syllable", () => {
    expect(syllablesInWord("the")).toBe(1);
    expect(syllablesInWord("cat")).toBe(1);
  });
  it("counts simple two-syllable words", () => {
    expect(syllablesInWord("apple")).toBe(2);
    expect(syllablesInWord("table")).toBe(2);
  });
  it("handles silent trailing e", () => {
    expect(syllablesInWord("make")).toBe(1);
    expect(syllablesInWord("line")).toBe(1);
  });
  it("counts a longer word", () => {
    expect(syllablesInWord("syllable")).toBe(3);
  });
  it("totals across a sentence", () => {
    expect(countSyllables("an old silent pond a frog jumps in splash silence again")).toEqual({ words: 11, syllables: 14 });
  });
  it("returns zeros for empty input", () => {
    expect(countSyllables("")).toEqual({ words: 0, syllables: 0 });
  });
});
