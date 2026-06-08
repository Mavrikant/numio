import { describe, it } from "vitest";
import { assertI18nComplete } from "@/test-utils";
import calculator from "../definition";

describe("Torque — i18n completeness", () => {
  it("all locales present and complete", () => {
    assertI18nComplete(calculator);
  });
});
