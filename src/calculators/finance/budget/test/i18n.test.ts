import { describe, it } from "vitest";
import { assertI18nComplete } from "@/test-utils";
import calculator from "../definition";

describe("budget i18n completeness", () => {
  it("all 12 locales are complete with no placeholders", () => {
    assertI18nComplete(calculator);
  });
});
