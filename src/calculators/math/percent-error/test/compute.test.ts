import { describe, it } from "vitest";
import calc from "../definition";
import { runNumericTests, assertI18nComplete, assertDefinitionShape, assertComputeIsPure } from "@/test-utils";

describe("percent-error compute", () => {
  // measured 9.8, actual 9.81: abs 0.01, rel 0.0010194, % 0.10194.
  runNumericTests(calc, [
    {
      inputs: { measured: 9.8, actual: 9.81 },
      expected: { percentError: 0.101937, absoluteError: 0.01, relativeError: 0.00102 },
      tolerance: { percentError: 0.0005, absoluteError: 0.0001, relativeError: 0.00001 },
    },
    // measured 110, actual 100: 10% error.
    { inputs: { measured: 110, actual: 100 }, expected: { percentError: 10, absoluteError: 10, relativeError: 0.1 }, tolerance: 0.001 },
  ]);
  it("is pure", () => assertComputeIsPure(calc, { measured: 48, actual: 50 }));
});

describe("percent-error i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("percent-error definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "percent-error", category: "math" }));
});
