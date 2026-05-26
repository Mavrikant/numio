import { describe, it, expect } from "vitest";
import { compute } from "../compute";
import definition from "../definition";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";

describe("percentage snapshot", () => {
  it("matches snapshot for what_is_x_pct_of_y", () => {
    const result = compute({ mode: "what_is_x_pct_of_y", x: 20, y: 150 });
    expect(result).toMatchSnapshot();
  });

  it("matches snapshot for pct_change", () => {
    const result = compute({ mode: "pct_change", x: 80, y: 100 });
    expect(result).toMatchSnapshot();
  });

  it("schema validates correct inputs", () => {
    assertSchemaValidates(
      definition as AnyCalculatorDefinition,
      { mode: "what_is_x_pct_of_y", x: 10, y: 100 },
      { mode: "invalid_mode", x: 10, y: 100 }
    );
  });

  it("compute is pure", () => {
    assertComputeIsPure(definition as AnyCalculatorDefinition, {
      mode: "what_is_x_pct_of_y",
      x: 10,
      y: 100,
    });
  });
});
