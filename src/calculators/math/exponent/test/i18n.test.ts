import { describe, it } from "vitest";
import { assertI18nComplete } from "@/test/i18n-utils";
import definition from "../definition";

describe("Exponent — i18n", () => {
  it("has complete translations", () => {
    assertI18nComplete(definition);
  });
});
