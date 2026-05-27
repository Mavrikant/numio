import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "combinations",
  category: "math",
  priority: "P2",
  icon: "shuffle",
  inputs: [
    { id: "n", type: { kind: "number", min: 0, max: 1000, step: 1, integer: true }, defaultValue: 5, required: true },
    { id: "r", type: { kind: "number", min: 0, max: 1000, step: 1, integer: true }, defaultValue: 2, required: true }
  ],
  outputs: [{ id: "nCr", format: "number", highlight: true }, { id: "nPr", format: "number" }],
  inputSchema, compute, i18n,
  meta: { formulaLatex: "C(n,r) = \\frac{n!}{r!(n-r)!}", references: [{ title: "Combination", url: "https://en.wikipedia.org/wiki/Combination", authority: "Wikipedia" }] },
  related: ["factorial"],
  tags: ["combinations", "math"],
});
