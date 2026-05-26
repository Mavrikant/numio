import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("credit-card-payoff compute — numeric correctness", () => {
  const parse = (inputs: Record<string, unknown>) =>
    calculator.compute(calculator.inputSchema.parse(inputs));

  it("$5,000 at 20% APR, fixed $200/month → payoff in ~33 months", () => {
    // r=20/1200=0.01667, formula: n = -log(1-r×P/PMT)/log(1+r)
    // = -log(1 - 0.01667×5000/200) / log(1.01667)
    // = -log(0.5833) / 0.007247 = 0.2341/0.007247 ≈ 32.3 → 33 months
    const result = parse({
      balance: 5000,
      apr: 20,
      paymentMode: "fixed",
      fixedPayment: 200,
      minimumPaymentPct: 2,
    });
    expect(result.monthsToPayoff).toBeCloseTo(33, 0);
  });

  it("schedule has at most 12 entries", () => {
    const result = parse({
      balance: 5000,
      apr: 20,
      paymentMode: "fixed",
      fixedPayment: 200,
      minimumPaymentPct: 2,
    });
    expect(result.schedule.length).toBeLessThanOrEqual(12);
  });

  it("first month schedule has correct interest calculation", () => {
    // Monthly rate = 20/100/12 = 1.667%
    // Interest month 1 = 5000 * 0.01667 = $83.33
    const result = parse({
      balance: 5000,
      apr: 20,
      paymentMode: "fixed",
      fixedPayment: 200,
      minimumPaymentPct: 2,
    });
    expect(result.schedule[0]?.interest).toBeCloseTo(83.33, 0);
  });

  it("totalPaid = sum of principal + total interest", () => {
    const result = parse({
      balance: 5000,
      apr: 20,
      paymentMode: "fixed",
      fixedPayment: 200,
      minimumPaymentPct: 2,
    });
    expect(result.totalPaid).toBeCloseTo(
      5000 + result.totalInterest,
      0,
    );
  });

  it("minimum payment mode takes longer than fixed $200", () => {
    const fixed = parse({
      balance: 5000,
      apr: 20,
      paymentMode: "fixed",
      fixedPayment: 200,
      minimumPaymentPct: 2,
    });
    const minimum = parse({
      balance: 5000,
      apr: 20,
      paymentMode: "minimum",
      minimumPaymentPct: 2,
    });
    expect(minimum.monthsToPayoff).toBeGreaterThan(fixed.monthsToPayoff);
  });

  it("fixed payment has positive interestSavings vs minimum", () => {
    const result = parse({
      balance: 5000,
      apr: 20,
      paymentMode: "fixed",
      fixedPayment: 200,
      minimumPaymentPct: 2,
    });
    expect(result.interestSavings).toBeGreaterThan(0);
  });

  it("minimum mode interestSavings is 0", () => {
    const result = parse({
      balance: 5000,
      apr: 20,
      paymentMode: "minimum",
      minimumPaymentPct: 2,
    });
    expect(result.interestSavings).toBe(0);
  });

  it("0% APR: no interest charged", () => {
    const result = parse({
      balance: 1000,
      apr: 0,
      paymentMode: "fixed",
      fixedPayment: 100,
    });
    expect(result.totalInterest).toBe(0);
    expect(result.monthsToPayoff).toBe(10);
  });

  it("balance is paid off (schedule last entry has near-zero balance)", () => {
    const result = parse({
      balance: 1000,
      apr: 12,
      paymentMode: "fixed",
      fixedPayment: 200,
    });
    const lastEntry = result.schedule[result.schedule.length - 1];
    if (result.monthsToPayoff <= 12) {
      expect(lastEntry?.balance).toBeCloseTo(0, 1);
    }
  });
});
