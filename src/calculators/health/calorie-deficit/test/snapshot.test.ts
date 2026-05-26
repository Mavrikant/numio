import { describe, it, expect } from "vitest";
import { compute } from "../compute";
import definition from "../definition";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";

describe("calorie-deficit snapshot", () => {
  it("matches snapshot for metric inputs", () => {
    const result = compute({ currentWeight: 80, targetWeight: 70, unit: "metric", dailyCalorieDeficit: 500 });
    expect(result).toMatchSnapshot();
  });

  it("matches snapshot for imperial inputs", () => {
    const result = compute({ currentWeight: 180, targetWeight: 160, unit: "imperial", dailyCalorieDeficit: 400 });
    expect(result).toMatchSnapshot();
  });

  it("schema validates correct inputs", () => {
    assertSchemaValidates(definition as AnyCalculatorDefinition, {
      currentWeight: 80,
      targetWeight: 70,
      unit: "metric",
      dailyCalorieDeficit: 500,
    });
  });

  it("compute is pure", () => {
    assertComputeIsPure(definition as AnyCalculatorDefinition, {
      currentWeight: 80,
      targetWeight: 70,
      unit: "metric",
      dailyCalorieDeficit: 500,
    });
  });
});
