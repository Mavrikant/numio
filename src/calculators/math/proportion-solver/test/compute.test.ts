import { describe, it } from "vitest";
import calc from "../definition";
import { runNumericTests, assertI18nComplete, assertDefinitionShape, assertComputeIsPure } from "@/test-utils";

describe("proportion-solver compute", () => {
  // 2/3 = 8/x → x = 3·8/2 = 12.
  runNumericTests(calc, [
    { inputs: { a: 2, b: 3, c: 8 }, expected: { x: 12, ratio: 0.6667, crossProduct: 24 }, tolerance: { x: 0.001, ratio: 0.001, crossProduct: 0.001 } },
    { inputs: { a: 5, b: 10, c: 5 }, expected: { x: 10 }, tolerance: 0.001 },
  ]);
  it("is pure", () => assertComputeIsPure(calc, { a: 4, b: 9, c: 12 }));
});

describe("proportion-solver i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("proportion-solver definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "proportion-solver", category: "math" }));
});
