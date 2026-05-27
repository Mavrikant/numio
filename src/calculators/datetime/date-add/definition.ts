import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

const intInput = (max: number) => ({
  type: { kind: "number" as const, min: 0, max, step: 1, integer: true },
  defaultValue: 0,
  required: false,
});

export default defineCalculator({
  slug: "date-add",
  category: "datetime",
  priority: "P1",
  icon: "calendar-plus",
  inputs: [
    { id: "startDate", type: { kind: "date" }, defaultValue: "today", required: true },
    {
      id: "operation",
      type: {
        kind: "select",
        options: [
          { value: "add", i18nKey: "add" },
          { value: "subtract", i18nKey: "subtract" },
        ],
      },
      defaultValue: "add",
      required: true,
    },
    { id: "years", ...intInput(100000) },
    { id: "months", ...intInput(1200) },
    { id: "weeks", ...intInput(100000) },
    { id: "days", ...intInput(1000000), defaultValue: 30 },
  ],
  outputs: [
    { id: "resultDate", format: "date", highlight: true },
    { id: "totalDaysOffset", format: "number", precision: 0, unit: "day" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    references: [
      {
        title: "Date arithmetic — adding and subtracting calendar units",
        url: "https://en.wikipedia.org/wiki/Date_calculation",
        authority: "Wikipedia",
      },
    ],
    disclaimer:
      "Adding months or years clamps to the last day of the target month (e.g. Jan 31 + 1 month = Feb 28/29). Years and months are applied before weeks and days.",
  },
  related: ["date-difference", "age", "time-duration"],
  tags: ["date add", "add days to date", "subtract days from date", "date plus days", "future date", "date calculator"],
});
