import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "square-footage",
  category: "engineering",
  priority: "P1",
  icon: "square",
  inputs: [
    {
      id: "shape",
      type: {
        kind: "select",
        options: [
          { value: "rectangle", i18nKey: "rectangle" },
          { value: "circle", i18nKey: "circle" },
          { value: "triangle", i18nKey: "triangle" },
        ],
      },
      defaultValue: "rectangle",
      required: true,
    },
    {
      id: "length",
      type: { kind: "number", min: 0.01, step: 0.1, unit: "m" },
      defaultValue: 10,
      required: false,
    },
    {
      id: "width",
      type: { kind: "number", min: 0.01, step: 0.1, unit: "m" },
      defaultValue: 5,
      required: false,
    },
    {
      id: "radius",
      type: { kind: "number", min: 0.01, step: 0.1, unit: "m" },
      defaultValue: 3,
      required: false,
    },
    {
      id: "diameter",
      type: { kind: "number", min: 0.01, step: 0.1, unit: "m" },
      defaultValue: 6,
      required: false,
    },
    {
      id: "base",
      type: { kind: "number", min: 0.01, step: 0.1, unit: "m" },
      defaultValue: 5,
      required: false,
    },
    {
      id: "height",
      type: { kind: "number", min: 0.01, step: 0.1, unit: "m" },
      defaultValue: 4,
      required: false,
    },
  ],
  outputs: [
    {
      id: "areaM2",
      format: "number",
      precision: 3,
      unit: "m",
      highlight: true,
    },
    {
      id: "areaFt2",
      format: "number",
      precision: 2,
    },
    {
      id: "perimeterM",
      format: "number",
      precision: 2,
      unit: "m",
    },
    {
      id: "perimeterFt",
      format: "number",
      precision: 2,
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "A_{\\text{rect}} = L \\times W,\\quad A_{\\text{circle}} = \\pi r^2,\\quad A_{\\text{triangle}} = \\frac{1}{2} b \\times h",
    references: [
      {
        title: "Geometry Formulas — Area and Perimeter",
        url: "https://en.wikipedia.org/wiki/Area",
        authority: "Wikipedia — Geometry",
      },
    ],
    disclaimer:
      "Triangle perimeter is estimated using isosceles approximation (assumes right triangle). For precise results with arbitrary triangles, provide all three side lengths separately.",
  },
  related: ["concrete", "beam-deflection"],
  tags: ["area", "geometry", "square footage", "perimeter", "land area", "construction"],
});
