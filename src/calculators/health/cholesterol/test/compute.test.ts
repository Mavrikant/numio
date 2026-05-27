import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

// References:
//  - Friedewald WT, Levy RI, Fredrickson DS (1972). Clin Chem 18:499–502.
//    LDL = TC − HDL − TG/5 (mg/dL, TG < 400).
//  - NCEP ATP III LDL classification (NHLBI).
//  - 2018 AHA/ACC Cholesterol Clinical Practice Guideline.

describe("cholesterol compute — Friedewald and ratios", () => {
  it("Friedewald estimation matches example (TC=200, HDL=50, TG=150 → LDL=120)", () => {
    // LDL = 200 − 50 − 150/5 = 120
    runNumericTests(calculator, [
      {
        inputs: { totalCholesterol: 200, hdl: 50, triglycerides: 150 },
        expected: {
          ldlComputed: 120,
          totalHdlRatio: 4.0,
          ldlHdlRatio: 2.4,
          nonHdlCholesterol: 150,
        },
        tolerance: 0.05,
        description: "Standard adult lipid panel, Friedewald estimation",
      },
    ]);
  });

  it("direct LDL overrides Friedewald (LDL=135 provided)", () => {
    runNumericTests(calculator, [
      {
        inputs: { totalCholesterol: 220, hdl: 55, triglycerides: 200, ldl: 135 },
        expected: {
          ldlComputed: 135,
          totalHdlRatio: 4.0,
          ldlHdlRatio: 2.45,
          nonHdlCholesterol: 165,
        },
        tolerance: 0.05,
        description: "User-supplied direct LDL is used as-is",
      },
    ]);
  });

  it("ldl=0 sentinel triggers Friedewald even when LDL field present", () => {
    runNumericTests(calculator, [
      {
        inputs: { totalCholesterol: 240, hdl: 40, triglycerides: 200, ldl: 0 },
        expected: { ldlComputed: 160 },
        tolerance: 0.05,
        description: "Zero LDL → Friedewald: 240 − 40 − 40 = 160",
      },
    ]);
  });

  it("low HDL elevates ratios (TC=240, HDL=30, TG=200)", () => {
    // LDL = 240 − 30 − 40 = 170; TC/HDL = 8.0; LDL/HDL ≈ 5.67
    runNumericTests(calculator, [
      {
        inputs: { totalCholesterol: 240, hdl: 30, triglycerides: 200 },
        expected: {
          ldlComputed: 170,
          totalHdlRatio: 8.0,
          ldlHdlRatio: 5.67,
          nonHdlCholesterol: 210,
        },
        tolerance: 0.05,
        description: "Low HDL profile — elevated risk ratios",
      },
    ]);
  });

  it("optimal profile (TC=170, HDL=70, TG=80 → LDL=84)", () => {
    // LDL = 170 − 70 − 16 = 84
    runNumericTests(calculator, [
      {
        inputs: { totalCholesterol: 170, hdl: 70, triglycerides: 80 },
        expected: {
          ldlComputed: 84,
          totalHdlRatio: 2.43,
          nonHdlCholesterol: 100,
        },
        tolerance: 0.05,
        description: "Optimal lipid profile — high HDL, low TG",
      },
    ]);
  });
});

describe("cholesterol compute — LDL category classification", () => {
  const parse = (inputs: {
    totalCholesterol: number;
    hdl: number;
    triglycerides: number;
    ldl?: number;
  }) => calculator.compute(calculator.inputSchema.parse(inputs));

  it("classifies LDL <100 as optimal", () => {
    const r = parse({ totalCholesterol: 170, hdl: 70, triglycerides: 80 });
    expect(r.category).toBe("optimal");
  });

  it("classifies 100 ≤ LDL <130 as near-optimal", () => {
    const r = parse({ totalCholesterol: 200, hdl: 50, triglycerides: 150 });
    expect(r.category).toBe("near-optimal");
  });

  it("classifies 130 ≤ LDL <160 as borderline", () => {
    const r = parse({ totalCholesterol: 220, hdl: 40, triglycerides: 100, ldl: 145 });
    expect(r.category).toBe("borderline");
  });

  it("classifies 160 ≤ LDL <190 as high", () => {
    const r = parse({ totalCholesterol: 240, hdl: 30, triglycerides: 200 });
    expect(r.category).toBe("high");
  });

  it("classifies LDL ≥190 as very-high", () => {
    const r = parse({ totalCholesterol: 290, hdl: 40, triglycerides: 200 });
    expect(r.category).toBe("very-high");
  });
});
