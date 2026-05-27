import { describe, it, expect } from "vitest";
import calc from "../definition";
import { compute } from "../compute";
import {
  runNumericTests,
  assertI18nComplete,
  assertDefinitionShape,
} from "@/test-utils";

describe("roman-numerals compute", () => {
  runNumericTests(calc, [
    { inputs: { mode: "to-roman", value: "2024" }, expected: { arabic: 2024 }, tolerance: 0.5 },
    { inputs: { mode: "to-arabic", value: "MCMLXXXIV" }, expected: { arabic: 1984 }, tolerance: 0.5 },
    { inputs: { mode: "to-arabic", value: "iv" }, expected: { arabic: 4 }, tolerance: 0.5 },
  ]);

  it("encodes numbers to canonical Roman numerals", () => {
    expect(compute({ mode: "to-roman", value: "2024" }).roman).toBe("MMXXIV");
    expect(compute({ mode: "to-roman", value: "4" }).roman).toBe("IV");
    expect(compute({ mode: "to-roman", value: "3999" }).roman).toBe("MMMCMXCIX");
  });

  it("rejects out-of-range and malformed input", () => {
    expect(compute({ mode: "to-roman", value: "4000" }).valid).toBe(false);
    expect(compute({ mode: "to-roman", value: "0" }).valid).toBe(false);
    expect(compute({ mode: "to-arabic", value: "IIII" }).valid).toBe(false);
    expect(compute({ mode: "to-arabic", value: "ABC" }).valid).toBe(false);
  });

  it("round-trips", () => {
    for (const n of [1, 49, 99, 444, 888, 1666, 2024, 3888]) {
      const roman = compute({ mode: "to-roman", value: String(n) }).roman;
      expect(compute({ mode: "to-arabic", value: roman }).arabic).toBe(n);
    }
  });
});

describe("roman-numerals i18n", () => {
  it("is complete across all locales", () => {
    assertI18nComplete(calc);
  });
});

describe("roman-numerals definition", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calc, { slug: "roman-numerals", category: "conversion" });
  });
});
