import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "factorial",
  category: "math",
  priority: "P2",
  icon: "plus",
  inputs: [{ id: "n", type: { kind: "number", min: 0, max: 170, step: 1, integer: true }, defaultValue: 5, required: true }],
  outputs: [{ id: "value", format: "text", highlight: true }, { id: "isBigInt", format: "text" }],
  inputSchema, compute, i18n,
  meta: { formulaLatex: "n! = n \\times (n-1) \\times \\cdots \\times 1", references: [{ title: "Factorial", url: "https://en.wikipedia.org/wiki/Factorial", authority: "Wikipedia" }] },
  related: ["combinations"],
  tags: ["factorial", "math"],
});
