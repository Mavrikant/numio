import { describe, it, expect } from "vitest";
import { compute, inputSchema } from "../compute";

describe("arithmetic-sequence edge cases", () => {
  it("with a single term, nth term and sum both equal the first term", () => {
    const r = compute({ firstTerm: 7, commonDifference: 5, numberOfTerms: 1 });
    expect(r.nthTerm).toBe(7);
    expect(r.sum).toBe(7);
  });

  it("a zero common difference repeats the first term", () => {
    const r = compute({ firstTerm: 4, commonDifference: 0, numberOfTerms: 6 });
    expect(r.nthTerm).toBe(4);
    expect(r.sum).toBe(24);
  });

  it("handles fractional terms and differences", () => {
    const r = compute({ firstTerm: 0.5, commonDifference: 0.25, numberOfTerms: 4 });
    expect(r.nthTerm).toBeCloseTo(1.25, 10);
    expect(r.sum).toBeCloseTo(3.5, 10);
  });

  it("rejects a non-integer or zero number of terms", () => {
    expect(inputSchema.safeParse({ firstTerm: 1, commonDifference: 1, numberOfTerms: 2.5 }).success).toBe(false);
    expect(inputSchema.safeParse({ firstTerm: 1, commonDifference: 1, numberOfTerms: 0 }).success).toBe(false);
  });
});
