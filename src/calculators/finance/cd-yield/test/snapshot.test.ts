import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("cd-yield snapshot", () => {
  it("has correct slug and category", () => {
    expect(calculator.slug).toBe("cd-yield");
    expect(calculator.category).toBe("finance");
    expect(calculator.priority).toBe("P1");
  });

  it("has 5 inputs", () => {
    expect(calculator.inputs).toHaveLength(5);
  });

  it("has 6 outputs", () => {
    expect(calculator.outputs).toHaveLength(6);
  });

  it("futureValue is highlighted", () => {
    const highlighted = calculator.outputs.find((o) => o.id === "futureValue");
    expect(highlighted?.highlight).toBe(true);
  });

  it("computes expected APY for default inputs", () => {
    // $10,000 at 5% APR, 12 months, monthly compound
    const result = calculator.compute(
      calculator.inputSchema.parse({
        principal: 10_000,
        apr: 5.0,
        termMonths: 12,
        compoundFreq: 12,
        earlyWithdrawalMonths: 0,
      }),
    );
    // APY should be slightly above 5% due to monthly compounding
    expect(result.apy).toBeGreaterThan(5.0);
    expect(result.futureValue).toBeGreaterThan(10_000);
    expect(result.interestEarned).toBeGreaterThan(0);
    expect(result.earlyWithdrawalPenalty).toBe(0);
  });
});
