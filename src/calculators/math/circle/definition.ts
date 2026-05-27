import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "circle",
  category: "math",
  priority: "P1",
  icon: "circle",
  inputs: [
    {
      id: "known",
      type: {
        kind: "select",
        options: [
          { value: "radius", i18nKey: "radius" },
          { value: "diameter", i18nKey: "diameter" },
          { value: "circumference", i18nKey: "circumference" },
          { value: "area", i18nKey: "area" },
        ],
      },
      defaultValue: "radius",
      required: true,
    },
    {
      id: "value",
      type: { kind: "number", min: 0.000001, max: 1e12, step: 1 },
      defaultValue: 5,
      required: true,
    },
  ],
  outputs: [
    { id: "radius", format: "number", precision: 6 },
    { id: "diameter", format: "number", precision: 6 },
    { id: "circumference", format: "number", precision: 6, highlight: true },
    { id: "area", format: "number", precision: 6, highlight: true },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "d = 2r,\\quad C = 2\\pi r,\\quad A = \\pi r^2",
    references: [
      {
        title: "Circle — radius, diameter, circumference and area",
        url: "https://en.wikipedia.org/wiki/Circle",
        authority: "Wikipedia",
      },
    ],
  },
  related: ["square-footage", "pythagorean", "triangle"],
  tags: ["circle", "radius", "diameter", "circumference", "area of a circle", "pi", "geometry"],
});
