import { describe, it, expect } from "vitest";
import definition from "../definition";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";

describe("square-root snapshot", () => {
  it("matches snapshot for standard inputs", () => {
    const result = definition.compute({ value: 10 });
    expect(result).toMatchSnapshot();
  });

  it("schema validates correct inputs", () => {
    assertSchemaValidates(
      definition as AnyCalculatorDefinition,
      { value: 10 },
      { value: "invalid" }
    );
  });

  it("compute is pure", () => {
    assertComputeIsPure(definition as AnyCalculatorDefinition, { value: 10 });
  });
});
