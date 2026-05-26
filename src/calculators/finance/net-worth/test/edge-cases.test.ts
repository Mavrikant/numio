import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("net-worth edge cases", () => {
  const validInput = {
    cashAndSavings: 10000,
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
  };

  it("schema accepts valid input", () => {
    assertSchemaValidates(calculator as unknown as AnyCalculatorDefinition, validInput, { ...validInput, cashAndSavings: -1 });
  });

  it("compute is pure", () => {
    const parsed = calculator.inputSchema.parse(validInput) as Parameters<typeof calculator.compute>[0];
    assertComputeIsPure(calculator, parsed);
  });

  it("rejects negative asset values", () => {
    expect(() => calculator.inputSchema.parse({ ...validInput, investmentAccounts: -1 })).toThrow();
    expect(() => calculator.inputSchema.parse({ ...validInput, homeValue: -100 })).toThrow();
  });

  it("rejects negative liability values", () => {
    expect(() => calculator.inputSchema.parse({ ...validInput, mortgage: -1 })).toThrow();
    expect(() => calculator.inputSchema.parse({ ...validInput, studentLoans: -500 })).toThrow();
  });

  it("all zeros yields zero net worth and zero ratio", () => {
    const allZeros = {
      cashAndSavings: 0, investmentAccounts: 0, retirementAccounts: 0,
      homeValue: 0, otherRealEstate: 0, vehicleValue: 0, otherAssets: 0,
      mortgage: 0, carLoans: 0, studentLoans: 0, creditCardDebt: 0, otherDebts: 0,
    };
    const result = calculator.compute(calculator.inputSchema.parse(allZeros));
    expect(result.netWorth).toBe(0);
    expect(result.totalAssets).toBe(0);
    expect(result.totalLiabilities).toBe(0);
    expect(result.debtToAssetRatio).toBe(0);
    expect(result.liquidAssets).toBe(0);
    expect(result.illiquidAssets).toBe(0);
  });

  it("debtToAssetRatio is correctly computed", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        ...validInput,
        cashAndSavings: 100000,
        mortgage: 50000,
      }),
    );
    expect(result.debtToAssetRatio).toBeCloseTo(0.5, 5);
  });

  it("liquidAssets = cashAndSavings + investmentAccounts", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        ...validInput,
        cashAndSavings: 15000,
        investmentAccounts: 25000,
        homeValue: 300000,
      }),
    );
    expect(result.liquidAssets).toBe(40000);
  });

  it("illiquidAssets includes retirement, home, other real estate, vehicles, other", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        ...validInput,
        retirementAccounts: 50000,
        homeValue: 200000,
        otherRealEstate: 100000,
        vehicleValue: 20000,
        otherAssets: 5000,
      }),
    );
    expect(result.illiquidAssets).toBe(375000);
  });

  it("can handle very large asset values", () => {
    expect(() =>
      calculator.inputSchema.parse({
        ...validInput,
        homeValue: 10_000_000,
        investmentAccounts: 5_000_000,
        retirementAccounts: 3_000_000,
      }),
    ).not.toThrow();
  });

  it("netWorth can be negative", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        ...validInput,
        cashAndSavings: 1000,
        studentLoans: 100000,
      }),
    );
    expect(result.netWorth).toBe(-99000);
    expect(result.netWorth).toBeLessThan(0);
  });
});
