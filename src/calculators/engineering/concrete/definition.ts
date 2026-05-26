import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "concrete",
  category: "engineering",
  priority: "P1",
  icon: "building",
  inputs: [
    {
      id: "shape",
      type: {
        kind: "select",
        options: [
          { value: "slab", i18nKey: "slab" },
          { value: "column", i18nKey: "column" },
          { value: "cylinder", i18nKey: "cylinder" },
          { value: "footing", i18nKey: "footing" },
        ],
      },
      defaultValue: "slab",
      required: true,
    },
    {
      id: "unit",
      type: {
        kind: "select",
        options: [
          { value: "metric", i18nKey: "metric" },
          { value: "imperial", i18nKey: "imperial" },
        ],
      },
      defaultValue: "metric",
      required: true,
    },
    {
      id: "length",
      type: { kind: "number", min: 0, step: 0.01, unit: "m" },
      defaultValue: 5,
      required: false,
    },
    {
      id: "width",
      type: { kind: "number", min: 0, step: 0.01, unit: "m" },
      defaultValue: 3,
      required: false,
    },
    {
      id: "thickness",
      type: { kind: "number", min: 0, step: 0.01, unit: "m" },
      defaultValue: 0.15,
      required: false,
    },
    {
      id: "diameter",
      type: { kind: "number", min: 0, step: 0.01, unit: "m" },
      defaultValue: 0.3,
      required: false,
    },
    {
      id: "height",
      type: { kind: "number", min: 0, step: 0.01, unit: "m" },
      defaultValue: 3,
      required: false,
    },
  ],
  outputs: [
    {
      id: "volumeM3",
      format: "number",
      precision: 3,
      unit: "m",
      highlight: true,
    },
    {
      id: "volumeYd3",
      format: "number",
      precision: 3,
    },
    {
      id: "bags40kg",
      format: "number",
      precision: 0,
    },
    {
      id: "bags60lb",
      format: "number",
      precision: 0,
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "V_{\\text{slab}} = L \\times W \\times T, \\quad V_{\\text{cyl}} = \\pi r^2 h",
    references: [
      {
        title: "Concrete Volume and Mix Design",
        url: "https://www.cement.org/",
        authority: "Portland Cement Association",
      },
    ],
    disclaimer:
      "Volume estimates assume 0% waste. Add 5–10% for waste and spillage. Bag counts assume a standard 1:2:3 mix ratio.",
  },
  related: ["beam-deflection"],
  tags: ["concrete", "volume", "cement", "construction", "slab", "footing"],
});
