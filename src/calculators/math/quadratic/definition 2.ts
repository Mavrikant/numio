import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "quadratic",
  category: "math",
  priority: "P1",
  icon: "function-square",
  inputs: [
    { id: "a", type: { kind: "number", min: -1000, max: 1000, step: 0.1 }, defaultValue: 1, required: true },
    { id: "b", type: { kind: "number", min: -1000, max: 1000, step: 0.1 }, defaultValue: -5, required: true },
    { id: "c", type: { kind: "number", min: -1000, max: 1000, step: 0.1 }, defaultValue: 6, required: true },
  ],
  outputs: [
    { id: "discriminant", format: "number", precision: 4 },
    { id: "root1", format: "text" },
    { id: "root2", format: "text" },
    { id: "vertex_x", format: "number", precision: 4 },
    { id: "vertex_y", format: "number", precision: 4, highlight: true },
    { id: "axis_of_symmetry", format: "number", precision: 4 },
    { id: "root1_type", format: "text" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "ax^2 + bx + c = 0 \\quad x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
    references: [
      { title: "Quadratic Formula", url: "https://en.wikipedia.org/wiki/Quadratic_formula", authority: "Wikipedia" },
      { title: "Discriminant", url: "https://en.wikipedia.org/wiki/Discriminant", authority: "Wikipedia" },
    ],
  },
  related: ["square-root", "exponent"],
  tags: ["quadratic", "algebra", "roots", "equation"],
});
