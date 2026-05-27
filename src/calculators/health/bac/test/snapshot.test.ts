import { describe, it, expect } from "vitest";
import { compute } from "../compute";
import definition from "../definition";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";

describe("bac snapshot", () => {
  it("matches snapshot for standard male inputs", () => {
    const result = compute({ drinks: 3, weightKg: 75, sex: "male", hoursElapsed: 1 });
    expect(result).toMatchSnapshot();
  });

  it("matches snapshot for standard female inputs", () => {
    const result = compute({ drinks: 2, weightKg: 60, sex: "female", hoursElapsed: 2 });
    expect(result).toMatchSnapshot();
  });

  it("schema validates correct inputs", () => {
    assertSchemaValidates(
      definition as unknown as AnyCalculatorDefinition,
      { drinks: 2, weightKg: 70, sex: "male", hoursElapsed: 1 },
      { drinks: -1, weightKg: 70, sex: "male", hoursElapsed: 1 },
    );
  });

  it("compute is pure", () => {
    assertComputeIsPure(definition as unknown as AnyCalculatorDefinition, {
      drinks: 2,
      weightKg: 70,
      sex: "male",
      hoursElapsed: 1,
    });
  });
});
