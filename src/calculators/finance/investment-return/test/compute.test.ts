import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("investment-return compute — numeric correctness", () => {
  const parse = (inputs: Record<string, unknown>) =>
    calculator.compute(calculator.inputSchema.parse(inputs));

  it("ROI: $10,000 → $15,000 over 5 years → ROI = 50%", () => {
    const result = parse({
      initialInvestment: 10000,
      finalValue: 15000,
      years: 5,
    });
    expect(result.roi).toBeCloseTo(50, 1);
  });

  it("CAGR: $10,000 → $20,000 over 10 years → CAGR ≈ 7.18%", () => {
    // CAGR = (20000/10000)^(1/10) - 1 = 2^0.1 - 1 ≈ 0.0718
    const result = parse({
      initialInvestment: 10000,
      finalValue: 20000,
      years: 10,
    });
    expect(result.cagr).toBeCloseTo(7.18, 1);
  });

  it("Forward mode: $10,000 at 8% for 10 years → correct finalValue", () => {
    // finalValue = 10000 * (1.08)^10 = $21,589.25
    const result = parse({
      initialInvestment: 10000,
      annualReturn: 8,
      years: 10,
    });
    expect(result.finalValue).toBeCloseTo(21589.25, 0);
  });

  it("totalGain = finalValue - initialInvestment", () => {
    const result = parse({
      initialInvestment: 10000,
      finalValue: 15000,
      years: 5,
    });
    expect(result.totalGain).toBeCloseTo(5000, 0);
  });

  it("ROI = 0 when finalValue equals initialInvestment", () => {
    const result = parse({
      initialInvestment: 10000,
      finalValue: 10000,
      years: 5,
    });
    expect(result.roi).toBeCloseTo(0, 1);
    expect(result.cagr).toBeCloseTo(0, 1);
  });

  it("negative return: $10,000 → $7,000 → negative ROI and CAGR", () => {
    const result = parse({
      initialInvestment: 10000,
      finalValue: 7000,
      years: 3,
    });
    expect(result.roi).toBeLessThan(0);
    expect(result.cagr).toBeLessThan(0);
    expect(result.totalGain).toBeLessThan(0);
  });

  it("annualizedReturn equals cagr", () => {
    const result = parse({
      initialInvestment: 10000,
      finalValue: 20000,
      years: 10,
    });
    expect(result.annualizedReturn).toBeCloseTo(result.cagr, 2);
  });
});
