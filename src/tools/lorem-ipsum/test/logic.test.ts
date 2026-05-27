import { describe, it, expect } from "vitest";
import { generateLorem } from "../logic";

function seeded(seed = 1): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}

describe("generateLorem", () => {
  it("returns the requested number of paragraphs", () => {
    const out = generateLorem("paragraphs", 3, false, seeded());
    expect(out.split(/\n\n/)).toHaveLength(3);
  });
  it("returns the requested number of words", () => {
    const out = generateLorem("words", 10, false, seeded());
    expect(out.split(/\s+/)).toHaveLength(10);
  });
  it("can start with the classic lead", () => {
    expect(generateLorem("sentences", 2, true, seeded()).startsWith("Lorem ipsum dolor sit amet")).toBe(true);
  });
  it("is deterministic given the same rng", () => {
    expect(generateLorem("paragraphs", 2, false, seeded(42))).toBe(generateLorem("paragraphs", 2, false, seeded(42)));
  });
});
