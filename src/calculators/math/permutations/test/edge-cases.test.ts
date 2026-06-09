import { describe, it, expect } from "vitest";
import { compute, inputSchema } from "../compute";

describe("permutations edge cases", () => {
  it("returns 0 when r > n without repetition", () => {
    expect(compute({ n: 3, r: 5, allowRepetition: false }).permutations).toBe(0);
  });

  it("treats 0P0 as the single empty arrangement", () => {
    expect(compute({ n: 0, r: 0, allowRepetition: false }).permutations).toBe(1);
  });

  it("nPr with r = 0 is 1", () => {
    expect(compute({ n: 8, r: 0, allowRepetition: false }).permutations).toBe(1);
  });

  it("allows r > n when repetition is enabled", () => {
    // 2^4 = 16 — e.g. four coin flips.
    expect(compute({ n: 2, r: 4, allowRepetition: true }).permutations).toBe(16);
  });

  it("rejects non-integer and negative inputs", () => {
    expect(inputSchema.safeParse({ n: 5.5, r: 2, allowRepetition: false }).success).toBe(false);
    expect(inputSchema.safeParse({ n: -1, r: 2, allowRepetition: false }).success).toBe(false);
  });
});
