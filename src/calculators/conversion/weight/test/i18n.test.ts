import { describe, it } from "vitest";
import { assertI18nComplete } from "@/test-utils";
import calculator from "../definition";

describe("Weight — i18n completeness", () => {
  it("all 12 languages present and complete", () => {
    assertI18nComplete(calculator);
  });
});
