import { describe, it } from "vitest";
import definition from "../definition";
import { assertI18nComplete } from "@/test-utils";

describe("Exponent — i18n", () => {
  it("has complete translations", () => {
    assertI18nComplete(definition);
  });
});
