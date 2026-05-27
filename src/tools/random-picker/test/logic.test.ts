import { describe, it, expect } from "vitest";
import { parseItems, pickItems } from "../logic";

function seeded(seed = 1): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}

describe("random-picker", () => {
  it("parses non-blank lines", () => {
    expect(parseItems("a\n\n b \nc")).toEqual(["a", "b", "c"]);
  });
  it("picks unique items without repeats", () => {
    const out = pickItems(["a", "b", "c", "d"], 3, true, seeded());
    expect(new Set(out).size).toBe(out.length);
    expect(out.every((x) => ["a", "b", "c", "d"].includes(x))).toBe(true);
  });
  it("caps unique picks at list size", () => {
    expect(pickItems(["a", "b"], 5, true, seeded())).toHaveLength(2);
  });
  it("allows repeats when not unique", () => {
    expect(pickItems(["x"], 4, false, seeded())).toEqual(["x", "x", "x", "x"]);
  });
});
