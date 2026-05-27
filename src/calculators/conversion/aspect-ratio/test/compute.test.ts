import { describe, it, expect } from "vitest";
import calc from "../definition";
import { compute } from "../compute";
import { runNumericTests, assertI18nComplete, assertDefinitionShape } from "@/test-utils";

describe("aspect-ratio compute", () => {
  it("reduces to the simplest ratio", () => {
    expect(compute({ width: 1920, height: 1080, targetWidth: 0 }).aspectRatio).toBe("16:9");
    expect(compute({ width: 1024, height: 768, targetWidth: 0 }).aspectRatio).toBe("4:3");
  });
  runNumericTests(calc, [
    {
      inputs: { width: 1920, height: 1080, targetWidth: 1280 },
      expected: { decimalRatio: 1.7778, scaledHeight: 720 },
      tolerance: { decimalRatio: 0.001, scaledHeight: 0.01 },
    },
  ]);
  it("returns 0 scaled height when no target width", () => {
    expect(compute({ width: 16, height: 9, targetWidth: 0 }).scaledHeight).toBe(0);
  });
});

describe("aspect-ratio i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("aspect-ratio definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "aspect-ratio", category: "conversion" }));
});
