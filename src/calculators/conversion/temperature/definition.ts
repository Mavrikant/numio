import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import i18n from "./i18n";
import { compute } from "./compute";

const inputSchema = z.object({
  celsius: z.number().finite().optional(),
  fahrenheit: z.number().finite().optional(),
  kelvin: z.number().finite().optional(),
  reaumur: z.number().finite().optional(),
  rankine: z.number().finite().optional(),
});

export default defineCalculator({
  slug: "temperature",
  category: "conversion",
  priority: "P0",
  icon: "thermometer",
  inputs: [
    {
      id: "celsius",
      type: { kind: "number", step: 0.01 },
      defaultValue: 0,
      required: false,
    },
    {
      id: "fahrenheit",
      type: { kind: "number", step: 0.01 },
      defaultValue: 32,
      required: false,
    },
    {
      id: "kelvin",
      type: { kind: "number", step: 0.01, min: 0 },
      defaultValue: 273.15,
      required: false,
    },
    {
      id: "reaumur",
      type: { kind: "number", step: 0.01 },
      defaultValue: 0,
      required: false,
    },
    {
      id: "rankine",
      type: { kind: "number", step: 0.01, min: 0 },
      defaultValue: 491.67,
      required: false,
    },
  ],
  outputs: [
    { id: "celsius", format: "number", precision: 2 },
    { id: "fahrenheit", format: "number", precision: 2 },
    { id: "kelvin", format: "number", precision: 2 },
    { id: "reaumur", format: "number", precision: 2 },
    { id: "rankine", format: "number", precision: 2 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    description: "Convert between Celsius, Fahrenheit, Kelvin, Réaumur, and Rankine temperature scales with instantaneous cross-conversion",
    references: [
      {
        title: "Temperature Conversion - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature",
        authority: "Wikipedia",
      },
      {
        title: "Celsius.org - Temperature Conversion",
        url: "https://www.celsius.org/",
        authority: "Celsius.org",
      },
    ],
  },
});
