import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Depreciation compute — numeric correctness", () => {
  it("straight-line: $50k cost, $5k salvage, 5yr → $9000/year", () => {
    // Ref: IRS Pub 946 (concept). SL = (50000 - 5000) / 5 = 9000
    const parsed = calculator.inputSchema.parse({
      assetCost: 50000,
      salvageValue: 5000,
      usefulLife: 5,
      method: "straight-line",
    });
    const result = calculator.compute(parsed);
    expect(result.annualSchedule).toHaveLength(5);
    for (const row of result.annualSchedule) {
      expect(row.depreciation).toBeCloseTo(9000, 0);
    }
    expect(result.totalDepreciation).toBeCloseTo(45000, 0);
    expect(result.bookValueEndOfLife).toBeCloseTo(5000, 0);
  });

  it("straight-line ends exactly at salvage value", () => {
    const parsed = calculator.inputSchema.parse({
      assetCost: 10000,
      salvageValue: 1000,
      usefulLife: 3,
      method: "straight-line",
    });
    const result = calculator.compute(parsed);
    const last = result.annualSchedule[result.annualSchedule.length - 1];
    expect(last.closingValue).toBeCloseTo(1000, 1);
  });

  it("sum-of-years-digits: $50k cost, $5k salvage, 5yr — year 1 = 15000", () => {
    // SYD: sumOfYears = 5+4+3+2+1 = 15. Y1 = (5/15) × 45000 = 15000
    // Y2 = (4/15) × 45000 = 12000. Total = 45000.
    // Ref: Investopedia https://www.investopedia.com/terms/s/sum-of-the-years-digits.asp
    const parsed = calculator.inputSchema.parse({
      assetCost: 50000,
      salvageValue: 5000,
      usefulLife: 5,
      method: "sum-of-years-digits",
    });
    const result = calculator.compute(parsed);
    expect(result.annualSchedule[0].depreciation).toBeCloseTo(15000, 0);
    expect(result.annualSchedule[1].depreciation).toBeCloseTo(12000, 0);
    expect(result.annualSchedule[2].depreciation).toBeCloseTo(9000, 0);
    expect(result.annualSchedule[3].depreciation).toBeCloseTo(6000, 0);
    expect(result.annualSchedule[4].depreciation).toBeCloseTo(3000, 0);
    expect(result.totalDepreciation).toBeCloseTo(45000, 0);
  });

  it("double-declining: $10k, salvage $0, 5yr — year 1 = 4000 (rate 2/5 = 40%)", () => {
    // Ref: Investopedia DDB
    // Y1: 10000 × 0.4 = 4000; remaining 6000
    // Y2: 6000 × 0.4 = 2400; remaining 3600
    const parsed = calculator.inputSchema.parse({
      assetCost: 10000,
      salvageValue: 0,
      usefulLife: 5,
      method: "double-declining",
    });
    const result = calculator.compute(parsed);
    expect(result.annualSchedule[0].depreciation).toBeCloseTo(4000, 0);
    expect(result.annualSchedule[1].depreciation).toBeCloseTo(2400, 0);
    expect(result.annualSchedule[0].closingValue).toBeCloseTo(6000, 0);
  });

  it("declining-balance: $20k, 10% rate, salvage $1000, 5yr", () => {
    // Y1: 20000 × 0.10 = 2000; remaining 18000
    // Y2: 18000 × 0.10 = 1800; remaining 16200
    const parsed = calculator.inputSchema.parse({
      assetCost: 20000,
      salvageValue: 1000,
      usefulLife: 5,
      method: "declining-balance",
      decliningRate: 10,
    });
    const result = calculator.compute(parsed);
    expect(result.annualSchedule[0].depreciation).toBeCloseTo(2000, 0);
    expect(result.annualSchedule[1].depreciation).toBeCloseTo(1800, 0);
    expect(result.annualSchedule[0].closingValue).toBeCloseTo(18000, 0);
  });

  it("double-declining respects salvage floor — book value never drops below salvage", () => {
    const parsed = calculator.inputSchema.parse({
      assetCost: 10000,
      salvageValue: 2000,
      usefulLife: 10,
      method: "double-declining",
    });
    const result = calculator.compute(parsed);
    for (const row of result.annualSchedule) {
      expect(row.closingValue).toBeGreaterThanOrEqual(2000 - 0.5);
    }
  });

  it("schedule rows: closingValue[i] = openingValue[i+1]", () => {
    const parsed = calculator.inputSchema.parse({
      assetCost: 50000,
      salvageValue: 5000,
      usefulLife: 5,
      method: "straight-line",
    });
    const result = calculator.compute(parsed);
    for (let i = 0; i < result.annualSchedule.length - 1; i++) {
      expect(result.annualSchedule[i + 1].openingValue).toBeCloseTo(
        result.annualSchedule[i].closingValue,
        1,
      );
    }
  });
});
