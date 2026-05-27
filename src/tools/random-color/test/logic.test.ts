import { describe, it, expect } from "vitest";
import { randomHexColor, randomColors } from "../logic";

function seeded(seed = 1): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}

describe("random-color", () => {
  it("produces a valid 6-digit hex color", () => {
    expect(randomHexColor(seeded())).toMatch(/^#[0-9a-f]{6}$/);
  });
  it("pads short values to 6 digits", () => {
    expect(randomHexColor(() => 0)).toBe("#000000");
  });
  it("generates the requested count", () => {
    const c = randomColors(12, seeded(4));
    expect(c).toHaveLength(12);
    expect(c.every((x) => /^#[0-9a-f]{6}$/.test(x))).toBe(true);
  });
});
