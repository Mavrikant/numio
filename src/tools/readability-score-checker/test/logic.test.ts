import { describe, it, expect } from "vitest";
import { readabilityScores } from "../logic";

describe("readability-score-checker", () => {
  it("returns all zeros for empty input", () => {
    expect(readabilityScores("")).toMatchObject({ words: 0, sentences: 0, fleschReadingEase: 0 });
  });
  it("counts sentences", () => {
    expect(readabilityScores("One two. Three four! Five?").sentences).toBe(3);
  });
  it("counts words and characters", () => {
    const r = readabilityScores("Hello world today.");
    expect(r.words).toBe(3);
    expect(r.characters).toBe("Helloworldtoday.".length);
  });
  it("returns Flesch Reading Ease in a plausible range for plain text", () => {
    const r = readabilityScores("The cat sat on the mat. The cat was happy.");
    expect(r.fleschReadingEase).toBeGreaterThan(80);
    expect(r.fleschReadingEase).toBeLessThanOrEqual(120);
  });
  it("flags complex words (3+ syllables)", () => {
    expect(readabilityScores("Hello beautiful complicated environment.").complexWords).toBeGreaterThanOrEqual(2);
  });
});
