import { describe, it } from "vitest";
import { assertI18nComplete } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import definition from "../definition";

describe("time-convert — i18n", () => {
  it("has complete 12-language i18n bundle", () => {
    assertI18nComplete(definition as unknown as AnyCalculatorDefinition);
  });
});
