import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "scientific-notation",
  category: "math",
  priority: "P0",
  icon: "calculator",
  inputs: [
    { id: "value", type: { kind: "number" }, defaultValue: 0.00012345, required: true },
    { id: "mode", type: { kind: "select", options: [{ value: "toScientific", i18nKey: "toScientific" }, { value: "toStandard", i18nKey: "toStandard" }, { value: "toEngineering", i18nKey: "toEngineering" }] }, defaultValue: "toScientific", required: true }
  ],
  outputs: [{ id: "scientific", format: "text", highlight: true }, { id: "standard", format: "text" }],
  inputSchema, compute, i18n,
  meta: {
    formulaLatex: "a \\times 10^n, \\quad 1 \\leq a < 10",
    references: [
      { title: "Scientific Notation — Wolfram MathWorld", url: "https://mathworld.wolfram.com/ScientificNotation.html", authority: "Wolfram MathWorld" },
      { title: "Scientific Notation — Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-scientific-notation/a/scientific-notation-review", authority: "Khan Academy" },
      { title: "NIST Guide to SI Units", url: "https://www.nist.gov/pml/special-publication-811", authority: "NIST" },
    ]
  },
  related: [],
  tags: ["scientific", "notation", "engineering", "powers-of-ten", "math"],
});
