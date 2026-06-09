import { describe, it } from "vitest";
import definition from "../definition";
import { runNumericTests } from "@/test-utils";

describe("resistor-combination compute", () => {
  it("matches reference values", () => {
    runNumericTests(definition, [
      // 100 Ω and 200 Ω: series = 300 Ω, parallel = 20000/300 ≈ 66.667 Ω.
      // Reference: Basic Electronics Tutorials, resistors in series/parallel.
      {
        inputs: { r1: 100, r2: 200 },
        expected: { series: 300, parallel: 66.6667 },
        tolerance: { series: 0.001, parallel: 0.001 },
      },
      // Two equal resistors: series doubles, parallel halves.
      {
        inputs: { r1: 1000, r2: 1000 },
        expected: { series: 2000, parallel: 500 },
      },
      // 10 Ω and 40 Ω: series = 50 Ω, parallel = 400/50 = 8 Ω.
      {
        inputs: { r1: 10, r2: 40 },
        expected: { series: 50, parallel: 8 },
      },
    ]);
  });
});
