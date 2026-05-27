import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

const numInput = (def: number) => ({
  type: { kind: "number" as const, min: -1e9, max: 1e9, step: 1 },
  defaultValue: def,
  required: true,
});

export default defineCalculator({
  slug: "slope",
  category: "math",
  priority: "P1",
  icon: "trending-up",
  inputs: [
    { id: "x1", ...numInput(1) },
    { id: "y1", ...numInput(2) },
    { id: "x2", ...numInput(4) },
    { id: "y2", ...numInput(8) },
  ],
  outputs: [
    { id: "slope", format: "number", precision: 4, highlight: true },
    { id: "yIntercept", format: "number", precision: 4 },
    { id: "distance", format: "number", precision: 4, highlight: true },
    { id: "angleDeg", format: "number", precision: 3 },
    { id: "deltaX", format: "number", precision: 4 },
    { id: "deltaY", format: "number", precision: 4 },
    { id: "midpointX", format: "number", precision: 4 },
    { id: "midpointY", format: "number", precision: 4 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "m = \\frac{y_2 - y_1}{x_2 - x_1},\\quad b = y_1 - m x_1,\\quad d = \\sqrt{\\Delta x^2 + \\Delta y^2}",
    references: [
      {
        title: "Slope of a line — definition and formula",
        url: "https://en.wikipedia.org/wiki/Slope",
        authority: "Wikipedia",
      },
    ],
  },
  related: ["pythagorean", "triangle", "quadratic"],
  tags: ["slope", "slope calculator", "line", "gradient", "y-intercept", "distance", "midpoint", "two points", "geometry"],
});
