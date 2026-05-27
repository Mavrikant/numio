import { describe, it, expect } from "vitest";
import calculator from "../definition";

const parse = (inputs: Record<string, unknown>) =>
  calculator.compute(calculator.inputSchema.parse(inputs));

describe("paycheck compute — numeric correctness", () => {
  it("Single $75k biweekly, no extras → matches IRS 2024 brackets", () => {
    // Reference: IRS Rev. Proc. 2023-34 (2024 brackets) + SSA 2024 wage base.
    // Taxable = 75,000 − 14,600 = 60,400
    // Federal tax = 10% × 11,600 + 12% × (47,150 − 11,600) + 22% × (60,400 − 47,150)
    //             = 1,160 + 4,266 + 2,915 = 8,341
    // SS = 75,000 × 0.062 = 4,650
    // Medicare = 75,000 × 0.0145 = 1,087.50
    // FICA = 4,650 + 1,087.50 = 5,737.50
    // Net = 75,000 − 8,341 − 5,737.50 = 60,921.50
    // Biweekly net = 60,921.50 / 26 ≈ 2,343.13
    const r = parse({
      grossSalary: 75000,
      payFrequency: "biweekly",
      filingStatus: "single",
      stateTaxRate: 0,
      pretax401k: 0,
      pretaxHsa: 0,
    });
    expect(r.annualFederalTax).toBeCloseTo(8341, 0);
    expect(r.annualFica).toBeCloseTo(5737.5, 1);
    expect(r.annualNet).toBeCloseTo(60921.5, 0);
    expect(r.perPeriodNet).toBeCloseTo(2343.13, 1);
  });

  it("Married filing jointly $150k monthly → uses doubled brackets + 29,200 SD", () => {
    // Ref: IRS Rev. Proc. 2023-34.
    // Taxable = 150,000 − 29,200 = 120,800
    // Federal = 10% × 23,200 + 12% × (94,300 − 23,200) + 22% × (120,800 − 94,300)
    //         = 2,320 + 8,532 + 5,830 = 16,682
    // FICA: SS 150,000 × 0.062 = 9,300 (under 168,600 cap); Medicare = 2,175.
    //       Below MFJ 250k additional-Medicare threshold so no surtax.
    // FICA total = 11,475
    const r = parse({
      grossSalary: 150000,
      payFrequency: "monthly",
      filingStatus: "married",
      stateTaxRate: 0,
      pretax401k: 0,
      pretaxHsa: 0,
    });
    expect(r.annualFederalTax).toBeCloseTo(16682, 0);
    expect(r.annualFica).toBeCloseTo(11475, 0);
    expect(r.perPeriodGross).toBeCloseTo(12500, 0);
  });

  it("Single $250k → SS capped at $168,600 wage base + 0.9% additional Medicare over $200k", () => {
    // Ref: SSA Contribution and Benefit Base 2024 = $168,600.
    //      IRS Topic 751 + Additional Medicare Tax (single threshold $200,000).
    // SS = 168,600 × 0.062 = 10,453.20
    // Medicare = 250,000 × 0.0145 = 3,625
    // Addl Medicare = (250,000 − 200,000) × 0.009 = 450
    // FICA = 10,453.20 + 3,625 + 450 = 14,528.20
    const r = parse({
      grossSalary: 250000,
      payFrequency: "annual",
      filingStatus: "single",
      stateTaxRate: 0,
      pretax401k: 0,
      pretaxHsa: 0,
    });
    expect(r.annualFica).toBeCloseTo(14528.2, 1);
  });

  it("401(k) reduces federal taxable income but not FICA", () => {
    // 75k gross with 10k 401(k): federal taxable = 75,000 − 10,000 − 14,600 = 50,400.
    // FICA still based on 75,000 (401k is FICA-taxable per IRS).
    const r = parse({
      grossSalary: 75000,
      payFrequency: "annual",
      filingStatus: "single",
      stateTaxRate: 0,
      pretax401k: 10000,
      pretaxHsa: 0,
    });
    // Fed = 10% × 11,600 + 12% × (47,150 − 11,600) + 22% × (50,400 − 47,150)
    //     = 1,160 + 4,266 + 715 = 6,141
    expect(r.annualFederalTax).toBeCloseTo(6141, 0);
    // FICA unchanged at $5,737.50
    expect(r.annualFica).toBeCloseTo(5737.5, 1);
  });

  it("HSA reduces both federal taxable income AND FICA wages", () => {
    // 75k gross with 4k HSA: federal taxable = 75,000 − 4,000 − 14,600 = 56,400.
    // FICA based on 75,000 − 4,000 = 71,000 (HSA via cafeteria plan is pre-FICA).
    const r = parse({
      grossSalary: 75000,
      payFrequency: "annual",
      filingStatus: "single",
      stateTaxRate: 0,
      pretax401k: 0,
      pretaxHsa: 4000,
    });
    // FICA: SS 71,000 × 0.062 = 4,402; Medicare 71,000 × 0.0145 = 1,029.50; total = 5,431.50
    expect(r.annualFica).toBeCloseTo(5431.5, 1);
  });

  it("State tax applied flat to wages after pretax", () => {
    // 75k gross, 5% state, no other pretax: state = 75,000 × 0.05 = 3,750.
    const r = parse({
      grossSalary: 75000,
      payFrequency: "annual",
      filingStatus: "single",
      stateTaxRate: 5,
      pretax401k: 0,
      pretaxHsa: 0,
    });
    expect(r.annualStateTax).toBeCloseTo(3750, 0);
  });

  it("perPeriodNet × periods ≈ annualNet for each frequency", () => {
    for (const freq of ["weekly", "biweekly", "semimonthly", "monthly", "annual"] as const) {
      const r = parse({
        grossSalary: 80000,
        payFrequency: freq,
        filingStatus: "single",
        stateTaxRate: 0,
        pretax401k: 0,
        pretaxHsa: 0,
      });
      const periods = { weekly: 52, biweekly: 26, semimonthly: 24, monthly: 12, annual: 1 }[freq];
      expect(r.perPeriodNet * periods).toBeCloseTo(r.annualNet, -1);
    }
  });
});
