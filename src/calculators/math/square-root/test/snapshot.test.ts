import { describe, it, expect } from "vitest";
import definition from "../definition";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";

describe("square-root snapshot", () => {
  it("matches snapshot for standard inputs", () => {
    const parsed = definition.inputSchema.parse({ value: 144, nthRoot: 2 });
    const result = definition.compute(parsed);
    expect(result).toMatchSnapshot();
  });

  it("schema validates correct inputs", () => {
    assertSchemaValidates(
      definition as AnyCalculatorDefinition,
      { value: 9, nthRoot: 2 },
      { value: -1, nthRoot: 2 }
    );
  });

  it("compute is pure", () => {
    const parsed = definition.inputSchema.parse({ value: 144, nthRoot: 2 });
    assertComputeIsPure(definition as AnyCalculatorDefinition, parsed as Record<string, unknown>);
  });
});
