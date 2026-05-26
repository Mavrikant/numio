import { describe, it, expect } from "vitest";
import calculator from "../definition";
import { runNumericTests } from "@/test-utils";

describe("bac compute — Widmark formula numeric correctness", () => {
  runNumericTests(calculator, [
    {
      description: "sober — 0 drinks, no elapsed time",
      inputs: { drinks: 0, weightKg: 70, sex: "male", hoursElapsed: 0 },
      expected: { bac: 0, hoursUntilSober: 0 },
      tolerance: 0.001,
    },
    {
      description: "male 2 drinks at t=0 — basic widmark (BAC = 28/47600*100 ≈ 0.059)",
      inputs: { drinks: 2, weightKg: 70, sex: "male", hoursElapsed: 0 },
      expected: { bac: 0.059 },
      tolerance: 0.002,
    },
    {
      description: "female higher BAC due to lower r (BAC = 28/38500*100 ≈ 0.073)",
      inputs: { drinks: 2, weightKg: 70, sex: "female", hoursElapsed: 0 },
      expected: { bac: 0.073 },
      tolerance: 0.002,
    },
    {
      description: "metabolized over time — should be 0",
      inputs: { drinks: 1, weightKg: 80, sex: "male", hoursElapsed: 5 },
      expected: { bac: 0, hoursUntilSober: 0 },
      tolerance: 0.001,
    },
  ]);

  it("female has higher BAC than male at same weight and drinks", () => {
    const female = calculator.compute(
      calculator.inputSchema.parse({ drinks: 3, weightKg: 70, sex: "female", hoursElapsed: 0 })
    );
    const male = calculator.compute(
      calculator.inputSchema.parse({ drinks: 3, weightKg: 70, sex: "male", hoursElapsed: 0 })
    );
    expect((female as { bac: number }).bac).toBeGreaterThan((male as { bac: number }).bac);
  });

  it("hoursUntilSober is proportional to bac", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({ drinks: 3, weightKg: 70, sex: "male", hoursElapsed: 0 })
    ) as { bac: number; hoursUntilSober: number };
    expect(result.hoursUntilSober).toBeCloseTo(result.bac / 0.015, 0);
  });
});
