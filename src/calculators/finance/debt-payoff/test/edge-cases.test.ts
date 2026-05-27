import { describe, it, expect } from "vitest";
import { assertComputeIsPure } from "@/test-utils";
import calculator from "../definition";

const baseInputs = {
  debt1_balance: 0,
  debt1_apr: 0,
  debt1_min: 0,
  debt2_balance: 0,
  debt2_apr: 0,
  debt2_min: 0,
  debt3_balance: 0,
  debt3_apr: 0,
  debt3_min: 0,
  debt4_balance: 0,
  debt4_apr: 0,
  debt4_min: 0,
  debt5_balance: 0,
  debt5_apr: 0,
  debt5_min: 0,
  strategy: "avalanche",
  extraMonthly: 0,
};

describe("debt-payoff edge cases", () => {
  it("rejects when ALL debts are zero balance", () => {
    expect(() => calculator.inputSchema.parse({ ...baseInputs })).toThrow();
  });

  it("min payment too small to cover interest → hits MAX_MONTHS sentinel (1200)", () => {
    // $5,000 at 30% APR with only $1/mo min and no extra: monthly interest is
    // ~$125; with $1 payment the balance grows forever. The simulator should
    // cap at 1200 months rather than infinite-loop.
    const r = calculator.compute(
      calculator.inputSchema.parse({
        ...baseInputs,
        debt1_balance: 5000,
        debt1_apr: 30,
        debt1_min: 1,
        extraMonthly: 0,
      }),
    );
    expect(r.totalMonths).toBe(1200);
  });

  it("all-debts-paid-quickly scenario — large extra wipes everything in 1 month", () => {
    // Two small debts with a huge extra payment: should clear in 1 month.
    const r = calculator.compute(
      calculator.inputSchema.parse({
        ...baseInputs,
        debt1_balance: 500,
        debt1_apr: 15,
        debt1_min: 25,
        debt2_balance: 300,
        debt2_apr: 22,
        debt2_min: 15,
        extraMonthly: 5000,
      }),
    );
    expect(r.totalMonths).toBe(1);
    expect(r.perDebt.every((d) => d.monthsToPayoff === 1)).toBe(true);
  });

  it("rejects negative balance", () => {
    expect(() =>
      calculator.inputSchema.parse({
        ...baseInputs,
        debt1_balance: -100,
        debt1_apr: 10,
        debt1_min: 50,
      }),
    ).toThrow();
  });

  it("rejects APR over 100%", () => {
    expect(() =>
      calculator.inputSchema.parse({
        ...baseInputs,
        debt1_balance: 1000,
        debt1_apr: 150,
        debt1_min: 50,
      }),
    ).toThrow();
  });

  it("compute is pure", () => {
    const parsed = calculator.inputSchema.parse({
      ...baseInputs,
      debt1_balance: 5000,
      debt1_apr: 22,
      debt1_min: 150,
      debt2_balance: 3000,
      debt2_apr: 18,
      debt2_min: 100,
      extraMonthly: 200,
    });
    assertComputeIsPure(calculator, parsed);
  });
});
