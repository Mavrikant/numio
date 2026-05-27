import { describe, it } from "vitest";
import definition from "../definition";
import { assertI18nComplete } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
describe("factorial i18n", () => { it("has all 12 locales", () => { assertI18nComplete(definition as AnyCalculatorDefinition); }); });