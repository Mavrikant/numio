import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

const VALID = {
  currentAge: 30,
  retirementAge: 65,
  currentSavings: 50000,
  monthlyContribution: 500,
  annualReturn: 7,
  withdrawalRate: 4,
};

describe("Retirement edge cases — schema rejects invalid inputs", () => {
  it("rejects currentAge below 18", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, currentAge: 17 })).toThrow();
  });

  it("rejects currentAge above 80", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, currentAge: 81 })).toThrow();
  });

  it("rejects retirementAge below 45", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, retirementAge: 44 })).toThrow();
  });

  it("rejects retirementAge above 90", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, retirementAge: 91 })).toThrow();
  });

  it("rejects retirementAge equal to currentAge (cross-field)", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, currentAge: 50, retirementAge: 50 })).toThrow();
  });

  it("rejects retirementAge less than currentAge", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, currentAge: 55, retirementAge: 50 })).toThrow();
  });

  it("rejects negative currentSavings", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, currentSavings: -1 })).toThrow();
  });

  it("rejects negative monthlyContribution", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, monthlyContribution: -100 })).toThrow();
  });

  it("rejects annualReturn above 20", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, annualReturn: 21 })).toThrow();
  });

  it("rejects annualReturn below 0", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, annualReturn: -1 })).toThrow();
  });

  it("rejects withdrawalRate below 1", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, withdrawalRate: 0.5 })).toThrow();
  });

  it("rejects withdrawalRate above 10", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, withdrawalRate: 11 })).toThrow();
  });

  it("rejects non-integer currentAge", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, currentAge: 30.5 })).toThrow();
  });

  it("rejects NaN currentSavings", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, currentSavings: NaN })).toThrow();
  });
});

describe("Retirement edge cases — schema accepts valid boundary values", () => {
  it("accepts minimum currentAge (18)", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, currentAge: 18, retirementAge: 45 })).not.toThrow();
  });

  it("accepts maximum currentAge (80)", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, currentAge: 80, retirementAge: 90 })).not.toThrow();
  });

  it("accepts zero currentSavings", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, currentSavings: 0 })).not.toThrow();
  });

  it("accepts zero monthlyContribution", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, monthlyContribution: 0 })).not.toThrow();
  });

  it("accepts annualReturn of 0", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, annualReturn: 0 })).not.toThrow();
  });

  it("accepts withdrawalRate of 10 (maximum)", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, withdrawalRate: 10 })).not.toThrow();
  });

  it("assertSchemaValidates helper works", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      VALID,
      { ...VALID, currentAge: 55, retirementAge: 50 },
    );
  });
});

describe("Retirement edge cases — zero savings and zero contribution", () => {
  it("returns 0 income when both savings and contribution are 0", () => {
    const parsed = calculator.inputSchema.parse({
      currentAge: 30,
      retirementAge: 65,
      currentSavings: 0,
      monthlyContribution: 0,
      annualReturn: 7,
      withdrawalRate: 4,
    });
    const result = calculator.compute(parsed);
    expect(result.totalAtRetirement).toBe(0);
    expect(result.monthlyIncome).toBe(0);
    expect(result.yearsOfIncome).toBe(0);
  });
});

describe("Retirement edge cases — compute purity", () => {
  it("produces identical results across multiple calls with 7% return", () => {
    const inputs = calculator.inputSchema.parse(VALID);
    assertComputeIsPure(calculator, inputs);
  });

  it("produces identical results across multiple calls with 0% return", () => {
    const inputs = calculator.inputSchema.parse({ ...VALID, annualReturn: 0 });
    assertComputeIsPure(calculator, inputs);
  });
});
