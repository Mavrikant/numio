import { describe, it } from "vitest";
import definition from "../definition";
import { runNumericTests } from "@/test-utils";

describe("permutations compute", () => {
  it("matches reference values", () => {
    runNumericTests(definition, [
      // 10P3 = 10 × 9 × 8 = 720. Reference: MathWorld permutation formula.
      {
        inputs: { n: 10, r: 3, allowRepetition: false },
        expected: { permutations: 720 },
        tolerance: 1,
      },
      // 5P5 = 5! = 120 (a full permutation of the set).
      {
        inputs: { n: 5, r: 5, allowRepetition: false },
        expected: { permutations: 120 },
        tolerance: 1,
      },
      // With repetition: 10^3 = 1000 (e.g. number of 3-digit PINs).
      {
        inputs: { n: 10, r: 3, allowRepetition: true },
        expected: { permutations: 1000 },
        tolerance: 1,
      },
    ]);
  });
});
