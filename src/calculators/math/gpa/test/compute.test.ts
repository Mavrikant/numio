import { describe, it, expect } from "vitest";
import calc from "../definition";
import { compute } from "../compute";
import {
  runNumericTests,
  assertI18nComplete,
  assertDefinitionShape,
} from "@/test-utils";

describe("gpa compute", () => {
  // grades 4,3,4 with credits 3,4,3 → (12+12+12)/10 = 3.6.
  runNumericTests(calc, [
    {
      inputs: { gradePoints: "4, 3, 4", creditHours: "3, 4, 3" },
      expected: { gpa: 3.6, totalCredits: 10, totalQualityPoints: 36, courseCount: 3 },
      tolerance: { gpa: 0.001, totalCredits: 0.01, totalQualityPoints: 0.01, courseCount: 0.5 },
    },
  ]);

  it("weights courses equally when credits are blank", () => {
    const r = compute({ gradePoints: "4, 3, 2", creditHours: "" });
    expect(r.gpa).toBeCloseTo(3, 6);
    expect(r.totalCredits).toBe(3);
    expect(r.courseCount).toBe(3);
  });

  it("handles newline and space separators", () => {
    const r = compute({ gradePoints: "4\n3.7\n3.3", creditHours: "3 3 3" });
    expect(r.gpa).toBeCloseTo((4 + 3.7 + 3.3) / 3, 6);
  });

  it("pairs by the shorter list length", () => {
    const r = compute({ gradePoints: "4, 3, 4, 2", creditHours: "3, 3" });
    expect(r.courseCount).toBe(2);
  });
});

describe("gpa i18n", () => {
  it("is complete across all locales", () => {
    assertI18nComplete(calc);
  });
});

describe("gpa definition", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calc, { slug: "gpa", category: "math" });
  });
});
