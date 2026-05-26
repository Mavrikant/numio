import { describe, it } from "vitest";
import i18n from "../i18n";
import { assertI18nComplete } from "@/test-utils";

describe("bac i18n", () => {
  it("has all 12 locales with required fields", () => {
    assertI18nComplete(i18n);
  });
});
