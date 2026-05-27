import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  value: z.number(),
  fromUnit: z.enum(["degree", "radian", "gradian", "arcminute", "arcsecond"]),
  toUnit: z.enum(["degree", "radian", "gradian", "arcminute", "arcsecond"]),
});

export default defineCalculator({
  slug: "angle",
  category: "conversion",
  priority: "P2",
  icon: "compass",
  inputs: [
    {
      id: "value",
      type: {
        kind: "number",
        step: 0.01,
      },
      defaultValue: 45,
      required: true,
    },
    {
      id: "fromUnit",
      type: {
        kind: "select",
        options: [
          { value: "degree", i18nKey: "degree" },
          { value: "radian", i18nKey: "radian" },
          { value: "gradian", i18nKey: "gradian" },
          { value: "arcminute", i18nKey: "arcminute" },
          { value: "arcsecond", i18nKey: "arcsecond" },
        ],
      },
      defaultValue: "degree",
      required: true,
    },
    {
      id: "toUnit",
      type: {
        kind: "select",
        options: [
          { value: "degree", i18nKey: "degree" },
          { value: "radian", i18nKey: "radian" },
          { value: "gradian", i18nKey: "gradian" },
          { value: "arcminute", i18nKey: "arcminute" },
          { value: "arcsecond", i18nKey: "arcsecond" },
        ],
      },
      defaultValue: "radian",
      required: true,
    },
  ],
  outputs: [
    {
      id: "result",
      format: "number",
      precision: 4,
      highlight: true,
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{radians} = \\text{degrees} \\times \\frac{\\pi}{180}",
    references: [
      {
        title: "Radian — Standard Angular Unit",
        url: "https://en.wikipedia.org/wiki/Radian",
        authority: "Wikipedia",
      },
      {
        title: "Angular Units and Conversions",
        url: "https://en.wikipedia.org/wiki/Angle",
        authority: "Wikipedia",
      },
    ],
    disclaimer:
      "Radians are the SI standard unit for angles. Degrees and gradians are widely used in engineering and surveying. Arcminutes and arcseconds are primarily used in astronomy and navigation.",
  },
  related: ["pythagorean", "triangle"],
  tags: ["angle", "units", "conversion", "degrees", "radians", "math", "geometry"],
});
