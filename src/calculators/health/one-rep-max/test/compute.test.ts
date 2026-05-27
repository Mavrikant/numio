import { describe, it } from "vitest";
import calc from "../definition";
import { runNumericTests, assertI18nComplete, assertDefinitionShape, assertComputeIsPure } from "@/test-utils";

describe("one-rep-max compute", () => {
  // 100 kg × 5: Epley 100·(1+5/30)=116.67; Brzycki 100·36/32=112.5; avg 114.58.
  runNumericTests(calc, [
    {
      inputs: { weight: 100, reps: 5 },
      expected: { epley: 116.667, brzycki: 112.5, average: 114.583, weightAt90: 103.125, weightAt80: 91.667 },
      tolerance: { epley: 0.01, brzycki: 0.01, average: 0.01, weightAt90: 0.01, weightAt80: 0.01 },
    },
    // 1 rep → both formulas equal the weight (Epley special-cased, Brzycki 36/36).
    { inputs: { weight: 80, reps: 1 }, expected: { epley: 80, brzycki: 80, average: 80 }, tolerance: 0.01 },
  ]);
  it("is pure", () => assertComputeIsPure(calc, { weight: 60, reps: 8 }));
});

describe("one-rep-max i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("one-rep-max definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "one-rep-max", category: "health" }));
});
