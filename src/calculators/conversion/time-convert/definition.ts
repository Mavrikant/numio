import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(["second", "minute", "hour", "day", "week", "month", "year"]),
  toUnit: z.enum(["second", "minute", "hour", "day", "week", "month", "year"]),
});

export default defineCalculator({
  slug: "time-convert",
  category: "conversion",
  priority: "P1",
  icon: "clock",
  inputs: [
    {
      id: "value",
      type: {
        kind: "number",
        min: 0,
        step: 0.01,
      },
      defaultValue: 1,
      required: true,
    },
    {
      id: "fromUnit",
      type: {
        kind: "select",
        options: [
          { value: "second", i18nKey: "second" },
          { value: "minute", i18nKey: "minute" },
          { value: "hour", i18nKey: "hour" },
          { value: "day", i18nKey: "day" },
          { value: "week", i18nKey: "week" },
          { value: "month", i18nKey: "month" },
          { value: "year", i18nKey: "year" },
        ],
      },
      defaultValue: "hour",
      required: true,
    },
    {
      id: "toUnit",
      type: {
        kind: "select",
        options: [
          { value: "second", i18nKey: "second" },
          { value: "minute", i18nKey: "minute" },
          { value: "hour", i18nKey: "hour" },
          { value: "day", i18nKey: "day" },
          { value: "week", i18nKey: "week" },
          { value: "month", i18nKey: "month" },
          { value: "year", i18nKey: "year" },
        ],
      },
      defaultValue: "day",
      required: true,
    },
  ],
  outputs: [
    {
      id: "result",
      format: "number",
      precision: 2,
      highlight: true,
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{Result} = \\text{Value} \\times \\frac{\\text{Factor}_{from}}{\\text{Factor}_{to}}",
    references: [
      {
        title: "SI Base Unit of Time",
        url: "https://en.wikipedia.org/wiki/Second",
        authority: "Wikipedia",
      },
      {
        title: "Gregorian Calendar",
        url: "https://en.wikipedia.org/wiki/Gregorian_calendar",
        authority: "Wikipedia",
      },
    ],
    disclaimer:
      "This converter uses average values: 1 year = 365.25 days (accounting for leap years), 1 month = 30.4375 days. Actual durations depend on the specific calendar context.",
  },
  related: ["data-storage", "speed"],
  tags: ["time", "units", "conversion", "calendar", "duration"],
});
