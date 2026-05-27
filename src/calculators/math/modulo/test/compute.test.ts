import { describe, it } from "vitest";
import calc from "../definition";
import { runNumericTests, assertI18nComplete, assertDefinitionShape, assertComputeIsPure } from "@/test-utils";

describe("modulo compute", () => {
  runNumericTests(calc, [
    { inputs: { dividend: 17, divisor: 5 }, expected: { remainder: 2, moduloFloored: 2, quotient: 3, flooredQuotient: 3 }, tolerance: 0.0001 },
    // negative dividend: JS % keeps sign of dividend (−2), floored modulo follows divisor (+3).
    { inputs: { dividend: -17, divisor: 5 }, expected: { remainder: -2, moduloFloored: 3, quotient: -3, flooredQuotient: -4 }, tolerance: 0.0001 },
    { inputs: { dividend: 10.5, divisor: 3 }, expected: { remainder: 1.5, moduloFloored: 1.5, quotient: 3, flooredQuotient: 3 }, tolerance: 0.0001 },
  ]);
  it("is pure", () => assertComputeIsPure(calc, { dividend: 100, divisor: 7 }));
});

describe("modulo i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("modulo definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "modulo", category: "math" }));
});
