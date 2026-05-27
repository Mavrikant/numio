import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "percent-error",
  category: "math",
  priority: "P2",
  icon: "target",
  inputs: [
    { id: "measured", type: { kind: "number", min: -1e15, max: 1e15, step: 0.01 }, defaultValue: 9.8, required: true },
    { id: "actual", type: { kind: "number", min: -1e15, max: 1e15, step: 0.01 }, defaultValue: 9.81, required: true },
  ],
  outputs: [
    { id: "percentError", format: "number", precision: 4, highlight: true },
    { id: "absoluteError", format: "number", precision: 6 },
    { id: "relativeError", format: "number", precision: 6 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\% \\text{error} = \\frac{|\\text{measured} - \\text{actual}|}{|\\text{actual}|} \\times 100",
    references: [{ title: "Approximation error", url: "https://en.wikipedia.org/wiki/Approximation_error", authority: "Wikipedia" }],
  },
  related: ["percentage-change", "standard-deviation", "rounding"],
  tags: ["percent error", "percentage error", "experimental error", "relative error", "absolute error"],
});
