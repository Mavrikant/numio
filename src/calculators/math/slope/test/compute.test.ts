import { describe, it, expect } from "vitest";
import calc from "../definition";
import { compute } from "../compute";
import {
  runNumericTests,
  assertI18nComplete,
  assertDefinitionShape,
  assertComputeIsPure,
} from "@/test-utils";

describe("slope compute", () => {
  // (1,2)→(4,8): m=2, b=0, d=√(9+36)=6.7082, angle=63.435°, mid=(2.5,5).
  runNumericTests(calc, [
    {
      inputs: { x1: 1, y1: 2, x2: 4, y2: 8 },
      expected: {
        slope: 2,
        yIntercept: 0,
        distance: 6.7082,
        angleDeg: 63.435,
        deltaX: 3,
        deltaY: 6,
        midpointX: 2.5,
        midpointY: 5,
      },
      tolerance: {
        slope: 0.0001,
        yIntercept: 0.0001,
        distance: 0.001,
        angleDeg: 0.01,
        deltaX: 0.0001,
        deltaY: 0.0001,
        midpointX: 0.0001,
        midpointY: 0.0001,
      },
    },
    // (0,0)→(3,4): classic 3-4-5, d=5, m=4/3.
    {
      inputs: { x1: 0, y1: 0, x2: 3, y2: 4 },
      expected: { slope: 1.3333, distance: 5, yIntercept: 0 },
      tolerance: { slope: 0.001, distance: 0.0001, yIntercept: 0.0001 },
    },
  ]);

  it("returns infinite slope for a vertical line", () => {
    const r = compute({ x1: 2, y1: 1, x2: 2, y2: 9 });
    expect(Number.isFinite(r.slope)).toBe(false);
    expect(r.distance).toBeCloseTo(8, 6);
  });

  it("is pure", () => {
    assertComputeIsPure(calc, { x1: -3, y1: 5, x2: 7, y2: -2 });
  });
});

describe("slope i18n", () => {
  it("is complete across all locales", () => {
    assertI18nComplete(calc);
  });
});

describe("slope definition", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calc, { slug: "slope", category: "math" });
  });
});
