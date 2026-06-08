import { describe, it } from "vitest";
import { assertI18nComplete } from "@/test-utils";
import calculator from "../definition";

describe("Dynamic viscosity — i18n completeness", () => {
  it("all languages present and complete", () => {
    assertI18nComplete(calculator);
  });
});
