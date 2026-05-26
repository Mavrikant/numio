import { describe } from "vitest";
import { assertI18nComplete } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("pregnancy-weight i18n — completeness", () => {
  assertI18nComplete(calculator as unknown as AnyCalculatorDefinition);
});
