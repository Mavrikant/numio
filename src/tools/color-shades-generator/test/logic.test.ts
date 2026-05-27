import { describe, it, expect } from "vitest";
import { generateShades } from "../logic";

const hex = /^#[0-9a-f]{6}$/;

describe("color-shades-generator", () => {
  it("generates the requested number of shades", () => {
    expect(generateShades("#3b82f6", 8)).toHaveLength(8);
  });
  it("clamps step count into range", () => {
    expect(generateShades("#3b82f6", 1)).toHaveLength(2);
    expect(generateShades("#3b82f6", 99)).toHaveLength(20);
  });
  it("goes from light to dark", () => {
    const s = generateShades("#3b82f6", 10);
    expect(s[0]).not.toBe(s[s.length - 1]);
    expect(s.every((c) => hex.test(c))).toBe(true);
  });
  it("returns empty for invalid input", () => {
    expect(generateShades("zzz", 5)).toEqual([]);
  });
});
