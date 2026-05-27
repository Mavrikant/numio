import { describe, it, expect } from "vitest";
import calc from "../definition";
import { compute } from "../compute";
import { runNumericTests, assertI18nComplete, assertDefinitionShape } from "@/test-utils";

describe("fibonacci compute", () => {
  // F1..F10 = 1,1,2,3,5,8,13,21,34,55; sum = 143; ratio 55/34 = 1.6176.
  runNumericTests(calc, [
    { inputs: { n: 10 }, expected: { nthTerm: 55, sumFirstN: 143, ratio: 1.617647 }, tolerance: { nthTerm: 0.5, sumFirstN: 0.5, ratio: 0.0001 } },
    { inputs: { n: 1 }, expected: { nthTerm: 1, sumFirstN: 1 }, tolerance: 0.5 },
  ]);
  it("converges toward the golden ratio", () => {
    expect(compute({ n: 40 }).ratio).toBeCloseTo(1.6180339, 5);
  });
  it("is pure", () => {
    const a = compute({ n: 20 });
    expect(compute({ n: 20 })).toEqual(a);
  });
});

describe("fibonacci i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("fibonacci definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "fibonacci", category: "math" }));
});
