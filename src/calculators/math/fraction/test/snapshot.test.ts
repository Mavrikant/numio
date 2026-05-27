import { describe, it, expect } from "vitest";
import definition from "../definition";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";

describe("fraction snapshot", () => {
  it("matches snapshot for standard inputs", () => {
    const parsed = definition.inputSchema.parse({ numerator1: 3, denominator1: 4, operation: "simplify" });
    const result = definition.compute(parsed);
    expect(result).toMatchSnapshot();
  });

  it("schema validates correct inputs", () => {
    assertSchemaValidates(
      definition as AnyCalculatorDefinition,
      { numerator1: 1, denominator1: 2, operation: "simplify" },
      { numerator1: "abc", denominator1: 2, operation: "simplify" }
    );
  });

  it("compute is pure", () => {
    const parsed = definition.inputSchema.parse({ numerator1: 1, denominator1: 2, operation: "simplify" });
    assertComputeIsPure(definition as AnyCalculatorDefinition, parsed as Record<string, unknown>);
  });
});
