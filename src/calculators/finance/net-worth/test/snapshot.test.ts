import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("net-worth snapshot", () => {
  it("has correct slug and category", () => {
    expect(calculator.slug).toBe("net-worth");
    expect(calculator.category).toBe("finance");
    expect(calculator.priority).toBe("P1");
  });

  it("has 12 inputs", () => {
    expect(calculator.inputs).toHaveLength(12);
  });

  it("has 6 outputs", () => {
    expect(calculator.outputs).toHaveLength(6);
  });

  it("netWorth is highlighted", () => {
    const highlighted = calculator.outputs.find((o) => o.id === "netWorth");
    expect(highlighted?.highlight).toBe(true);
  });

  it("computes expected results for a sample scenario", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
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
      }),
    );
    expect(result.totalAssets).toBe(520000);
    expect(result.totalLiabilities).toBe(243000);
    expect(result.netWorth).toBe(277000);
    expect(result.liquidAssets).toBe(70000);
    expect(result.illiquidAssets).toBe(450000);
  });

  it("references Investopedia", () => {
    const ref = calculator.meta.references.find((r) => r.url?.includes("investopedia.com"));
    expect(ref).toBeDefined();
  });
});
