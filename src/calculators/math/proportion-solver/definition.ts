import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "proportion-solver",
  category: "math",
  priority: "P2",
  icon: "equal",
  inputs: [
    { id: "a", type: { kind: "number", min: -1e15, max: 1e15, step: 1 }, defaultValue: 2, required: true },
    { id: "b", type: { kind: "number", min: -1e15, max: 1e15, step: 1 }, defaultValue: 3, required: true },
    { id: "c", type: { kind: "number", min: -1e15, max: 1e15, step: 1 }, defaultValue: 8, required: true },
  ],
  outputs: [
    { id: "x", format: "number", precision: 6, highlight: true },
    { id: "ratio", format: "number", precision: 6 },
    { id: "crossProduct", format: "number", precision: 6 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\frac{a}{b} = \\frac{c}{x} \\;\\Rightarrow\\; x = \\frac{b \\cdot c}{a}",
    references: [{ title: "Proportionality (cross-multiplication)", url: "https://en.wikipedia.org/wiki/Cross-multiplication", authority: "Wikipedia" }],
  },
  related: ["ratio", "percentage", "fraction"],
  tags: ["proportion solver", "cross multiplication", "solve for x", "ratio proportion", "a/b = c/x"],
});
