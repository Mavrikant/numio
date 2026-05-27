import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  value: z.number().finite(),
  fromUnit: z.enum(["kmh", "mph", "ms", "knots", "fts"]),
  toUnit: z.enum(["kmh", "mph", "ms", "knots", "fts"]),
});

export default defineCalculator({
  slug: "speed",
  category: "conversion",
  priority: "P0",
  icon: "gauge",
  inputs: [
    {
      id: "value",
      type: { kind: "number", step: 0.01 },
      defaultValue: 100,
      required: true,
    },
    {
      id: "fromUnit",
      type: {
        kind: "select",
        options: [
          { value: "kmh", i18nKey: "kmh" },
          { value: "mph", i18nKey: "mph" },
          { value: "ms", i18nKey: "ms" },
          { value: "knots", i18nKey: "knots" },
          { value: "fts", i18nKey: "fts" },
        ],
      },
      defaultValue: "kmh",
      required: true,
    },
    {
      id: "toUnit",
      type: {
        kind: "select",
        options: [
          { value: "kmh", i18nKey: "kmh" },
          { value: "mph", i18nKey: "mph" },
          { value: "ms", i18nKey: "ms" },
          { value: "knots", i18nKey: "knots" },
          { value: "fts", i18nKey: "fts" },
        ],
      },
      defaultValue: "mph",
      required: true,
    },
  ],
  outputs: [
    {
      id: "result",
      format: "number",
      precision: 6,
      highlight: true,
    },
    {
      id: "kmh",
      format: "number",
      precision: 6,
    },
    {
      id: "mph",
      format: "number",
      precision: 6,
    },
    {
      id: "ms",
      format: "number",
      precision: 6,
    },
    {
      id: "knots",
      format: "number",
      precision: 6,
    },
    {
      id: "fts",
      format: "number",
      precision: 6,
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    references: [
      {
        title: "SI Derived Units — Speed and Velocity",
        url: "https://www.nist.gov/pml/special-publication-330",
        authority: "National Institute of Standards and Technology (NIST)",
      },
      {
        title: "Unit Conversions — Speed",
        url: "https://en.wikipedia.org/wiki/Speed",
        authority: "Wikipedia",
      },
    ],
  },
  related: ["area", "volume", "energy", "pressure"],
});
