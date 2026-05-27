import { describe, it } from "vitest";
import { assertI18nComplete } from "@/test-utils";
import calculator from "../definition";

describe("Speed i18n — completeness", () => {
  it("has complete i18n for all 12 languages", () => {
    assertI18nComplete(calculator);
  });
});
