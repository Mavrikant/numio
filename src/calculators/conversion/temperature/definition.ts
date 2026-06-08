import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import i18n from "./i18n";
import { compute } from "./compute";

const inputSchema = z.object({
  value: z.number().finite(),
  fromUnit: z.enum(["celsius", "fahrenheit", "kelvin", "reaumur", "rankine"]),
});

const unitOptions = [
  { value: "celsius", label: "Celsius (°C)" },
  { value: "fahrenheit", label: "Fahrenheit (°F)" },
  { value: "kelvin", label: "Kelvin (K)" },
  { value: "reaumur", label: "Réaumur (°Ré)" },
  { value: "rankine", label: "Rankine (°R)" },
];

export default defineCalculator({
  slug: "temperature",
  category: "conversion",
  priority: "P0",
  icon: "thermometer",
  inputs: [
    {
      id: "value",
      type: { kind: "number", step: 0.01 },
      defaultValue: 0,
      required: true,
    },
    {
      id: "fromUnit",
      type: { kind: "select", options: unitOptions },
      defaultValue: "celsius",
      required: true,
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
