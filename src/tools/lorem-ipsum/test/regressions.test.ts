import { describe, it, expect } from "vitest";
import { generateLorem } from "../logic";

describe("lorem-ipsum regressions", () => {
  const rng = () => 0.5;
  it("returns exactly n words when starting with Lorem", () => {
    expect(generateLorem("words", 5, true, rng).split(/\s+/)).toHaveLength(5);
    expect(generateLorem("words", 2, true, rng)).toBe("Lorem ipsum");
    expect(generateLorem("words", 1, true, rng)).toBe("Lorem");
  });
  it("returns exactly n words without the Lorem prefix", () => {
    expect(generateLorem("words", 5, false, rng).split(/\s+/)).toHaveLength(5);
  });
});
