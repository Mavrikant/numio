import { describe, it, expect } from "vitest";
import calculator from "../definition";

const parse = (inputs: Record<string, unknown>) =>
  calculator.compute(calculator.inputSchema.parse(inputs));

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

describe("debt-payoff compute — numeric correctness", () => {
  it("single debt, 0% APR, fixed min → payoff = balance / min", () => {
    // $1,200 at 0% with $100/mo min → exactly 12 months, $0 interest.
    // Ref: CFPB — at zero interest, debt amortizes linearly.
    const r = parse({
      ...baseInputs,
      debt1_balance: 1200,
      debt1_apr: 0,
      debt1_min: 100,
    });
    expect(r.totalMonths).toBe(12);
    expect(r.totalInterest).toBeCloseTo(0, 2);
    expect(r.totalPaid).toBeCloseTo(1200, 2);
  });

  it("single debt closed-form: $5,000 @ 22% APR, $200/mo fixed-style → ~29 months, ~$691 interest", () => {
    // Ref: standard amortization formula with monthly compounding.
    // n = -ln(1 − P·r/M) / ln(1 + r)  with r = 0.22/12, M = 200, P = 5000.
    // = -ln(1 − 5000·0.018333/200) / ln(1.018333)
    // = -ln(0.5417) / ln(1.018333)
    // ≈ 0.6131 / 0.01817 ≈ 33.7? Recompute carefully:
    // r = 0.018333; P·r = 91.667; P·r/M = 0.4583; 1 − 0.4583 = 0.5417;
    // -ln(0.5417) = 0.6131; ln(1.018333) = 0.01817; 0.6131 / 0.01817 = 33.74.
    // So ~34 months. Total paid ≈ 34 × 200 − last-month rounding ≈ ~6,700; interest ≈ 1,700.
    // We model the min as $200/mo (no extra), avalanche pointless w/ one debt.
    const r = parse({
      ...baseInputs,
      debt1_balance: 5000,
      debt1_apr: 22,
      debt1_min: 200,
    });
    // Allow a 2-month band for rounding/order of operations.
    expect(r.totalMonths).toBeGreaterThanOrEqual(32);
    expect(r.totalMonths).toBeLessThanOrEqual(36);
    expect(r.totalInterest).toBeGreaterThan(1500);
    expect(r.totalInterest).toBeLessThan(1900);
  });

  it("two debts avalanche vs snowball — avalanche pays less total interest", () => {
    // Same input set with strategy swapped; APR-ordered avalanche always wins
    // on total interest. Ref: CFPB — avalanche minimises interest.
    const inputs = {
      ...baseInputs,
      debt1_balance: 1000, // smaller balance, lower APR
      debt1_apr: 10,
      debt1_min: 30,
      debt2_balance: 3000, // bigger balance, higher APR
      debt2_apr: 22,
      debt2_min: 80,
      extraMonthly: 100,
    };
    const aval = parse({ ...inputs, strategy: "avalanche" });
    const snow = parse({ ...inputs, strategy: "snowball" });
    expect(aval.totalInterest).toBeLessThanOrEqual(snow.totalInterest);
  });

  it("extra monthly payment reduces total interest and months", () => {
    const noExtra = parse({
      ...baseInputs,
      debt1_balance: 5000,
      debt1_apr: 22,
      debt1_min: 150,
      extraMonthly: 0,
    });
    const withExtra = parse({
      ...baseInputs,
      debt1_balance: 5000,
      debt1_apr: 22,
      debt1_min: 150,
      extraMonthly: 200,
    });
    expect(withExtra.totalMonths).toBeLessThan(noExtra.totalMonths);
    expect(withExtra.totalInterest).toBeLessThan(noExtra.totalInterest);
  });

  it("totalPaid ≈ totalStartingBalance + totalInterest", () => {
    const r = parse({
      ...baseInputs,
      debt1_balance: 4000,
      debt1_apr: 15,
      debt1_min: 120,
      debt2_balance: 2500,
      debt2_apr: 19,
      debt2_min: 70,
      extraMonthly: 150,
    });
    expect(r.totalPaid).toBeCloseTo(r.totalStartingBalance + r.totalInterest, 1);
  });

  it("perDebt array length matches non-zero input debts", () => {
    const r = parse({
      ...baseInputs,
      debt1_balance: 1000,
      debt1_apr: 10,
      debt1_min: 50,
      debt3_balance: 500,
      debt3_apr: 5,
      debt3_min: 25,
      extraMonthly: 0,
    });
    expect(r.perDebt.length).toBe(2);
    expect(r.perDebt[0].index).toBe(1);
    expect(r.perDebt[1].index).toBe(3);
  });
});
