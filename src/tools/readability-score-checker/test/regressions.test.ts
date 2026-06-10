import { describe, it, expect } from "vitest";
import { readabilityScores } from "../logic";

describe("readability-score-checker regressions", () => {
  it("excludes punctuation from the ARI character count", () => {
    const plain = readabilityScores("Hi Bob");
    const punct = readabilityScores('Hi, "Bob"!!!');
    expect(punct.automatedReadabilityIndex).toBe(plain.automatedReadabilityIndex);
  });
});
