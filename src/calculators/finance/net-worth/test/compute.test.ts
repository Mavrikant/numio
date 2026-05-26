import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

// Reference: Net Worth = Total Assets - Total Liabilities
// Liquid Assets = cashAndSavings + investmentAccounts
// Illiquid Assets = retirementAccounts + homeValue + otherRealEstate + vehicleValue + otherAssets
// Debt-to-Asset Ratio = totalLiabilities / totalAssets (0 if totalAssets = 0)

describe("net-worth compute — numeric correctness", () => {
  it("basic scenario — positive net worth", () => {
    // Assets: 20000 + 50000 + 80000 + 350000 + 0 + 15000 + 5000 = 520000
    // Liabilities: 200000 + 8000 + 30000 + 5000 + 0 = 243000
    // Net worth: 520000 - 243000 = 277000
    // Liquid: 20000 + 50000 = 70000
    // Illiquid: 80000 + 350000 + 0 + 15000 + 5000 = 450000
    // D/A ratio: 243000 / 520000 ≈ 0.4673 (46.73%)
    runNumericTests(calculator, [
      {
        inputs: {
          cashAndSavings: 20000,
          investmentAccounts: 50000,
          retirementAccounts: 80000,
          homeValue: 350000,
          otherRealEstate: 0,
          vehicleValue: 15000,
          otherAssets: 5000,
          mortgage: 200000,
          carLoans: 8000,
          studentLoans: 30000,
          creditCardDebt: 5000,
          otherDebts: 0,
        },
        expected: {
          totalAssets: 520000,
          totalLiabilities: 243000,
          netWorth: 277000,
          liquidAssets: 70000,
          illiquidAssets: 450000,
        },
        tolerance: 1,
        description: "Typical homeowner scenario with positive net worth",
      },
    ]);
  });

  it("negative net worth scenario — debts exceed assets", () => {
    // Assets: 5000 + 0 + 0 + 0 + 0 + 10000 + 0 = 15000
    // Liabilities: 0 + 12000 + 40000 + 8000 + 0 = 60000
    // Net worth: 15000 - 60000 = -45000
    runNumericTests(calculator, [
      {
        inputs: {
          cashAndSavings: 5000,
          investmentAccounts: 0,
          retirementAccounts: 0,
          homeValue: 0,
          otherRealEstate: 0,
          vehicleValue: 10000,
          otherAssets: 0,
          mortgage: 0,
          carLoans: 12000,
          studentLoans: 40000,
          creditCardDebt: 8000,
          otherDebts: 0,
        },
        expected: {
          totalAssets: 15000,
          totalLiabilities: 60000,
          netWorth: -45000,
          liquidAssets: 5000,
          illiquidAssets: 10000,
        },
        tolerance: 1,
        description: "Recent graduate with student loans — negative net worth",
      },
    ]);
  });

  it("zero liabilities — net worth equals total assets", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        cashAndSavings: 100000,
        investmentAccounts: 200000,
        retirementAccounts: 500000,
        homeValue: 0,
        otherRealEstate: 0,
        vehicleValue: 0,
        otherAssets: 0,
        mortgage: 0,
        carLoans: 0,
        studentLoans: 0,
        creditCardDebt: 0,
        otherDebts: 0,
      }),
    );
    expect(result.netWorth).toBe(800000);
    expect(result.totalLiabilities).toBe(0);
    expect(result.debtToAssetRatio).toBe(0);
  });

  it("debt-to-asset ratio is zero when total assets is zero", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        cashAndSavings: 0,
        investmentAccounts: 0,
        retirementAccounts: 0,
        homeValue: 0,
        otherRealEstate: 0,
        vehicleValue: 0,
        otherAssets: 0,
        mortgage: 0,
        carLoans: 0,
        studentLoans: 0,
        creditCardDebt: 0,
        otherDebts: 0,
      }),
    );
    expect(result.debtToAssetRatio).toBe(0);
    expect(result.netWorth).toBe(0);
  });

  it("liquid and illiquid assets sum to total assets", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        cashAndSavings: 15000,
        investmentAccounts: 35000,
        retirementAccounts: 60000,
        homeValue: 280000,
        otherRealEstate: 100000,
        vehicleValue: 20000,
        otherAssets: 10000,
        mortgage: 180000,
        carLoans: 15000,
        studentLoans: 0,
        creditCardDebt: 2000,
        otherDebts: 5000,
      }),
    );
    expect(result.liquidAssets + result.illiquidAssets).toBeCloseTo(result.totalAssets, 5);
  });
});
