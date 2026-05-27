import { describe, it } from "vitest";
import { assertI18nComplete } from "@/test-utils";
import definition from "../definition";

describe("power-convert — i18n", () => {
  it("has complete 12-language i18n bundle", () => {
    assertI18nComplete(definition.i18n);
  });
});
