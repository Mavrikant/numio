import { describe, it, expect } from "vitest";
import { wordFrequencies } from "../logic";

describe("wordFrequencies", () => {
  it("counts and ranks words", () => {
    const r = wordFrequencies("the cat the dog the", true);
    expect(r.entries[0]).toEqual({ word: "the", count: 3 });
    expect(r.totalWords).toBe(5);
    expect(r.uniqueWords).toBe(3);
  });
  it("respects case sensitivity", () => {
    expect(wordFrequencies("The the", false).uniqueWords).toBe(2);
    expect(wordFrequencies("The the", true).uniqueWords).toBe(1);
  });
  it("breaks ties alphabetically", () => {
    const r = wordFrequencies("b a", true);
    expect(r.entries.map((e) => e.word)).toEqual(["a", "b"]);
  });
});
