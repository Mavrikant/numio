import { describe, it, expect } from "vitest";
import definition from "../definition";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";

describe("average snapshot", () => {
  it("matches snapshot for standard inputs", () => {
    const parsed = definition.inputSchema.parse({ values: "4, 8, 15, 16, 23, 42" });
    const result = definition.compute(parsed);
    expect(result).toMatchSnapshot();
  });

  it("schema validates correct inputs", () => {
    assertSchemaValidates(
      definition as AnyCalculatorDefinition,
      { values: "1, 2, 3" },
      { values: 123 }
    );
  });

  it("compute is pure", () => {
    const parsed = definition.inputSchema.parse({ values: "1, 2, 3" });
    assertComputeIsPure(definition as AnyCalculatorDefinition, parsed as Record<string, unknown>);
  });
});
