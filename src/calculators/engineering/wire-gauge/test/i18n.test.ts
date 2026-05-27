import { describe, it } from "vitest";
import { assertI18nComplete } from "@/test-utils";
import calculator from "../definition";

describe("Wire Gauge — i18n completeness", () => {
  it("all 12 locales present and complete", () => {
    assertI18nComplete(calculator);
  });
});
