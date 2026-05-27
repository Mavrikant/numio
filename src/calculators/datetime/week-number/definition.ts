import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "week-number",
  category: "datetime",
  priority: "P2",
  icon: "calendar-days",
  inputs: [{ id: "date", type: { kind: "date" }, defaultValue: "today", required: true }],
  outputs: [
    { id: "week", format: "number", precision: 0, highlight: true },
    { id: "weekYear", format: "number", precision: 0 },
    { id: "dayOfYear", format: "number", precision: 0 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    references: [
      { title: "ISO 8601 week date", url: "https://en.wikipedia.org/wiki/ISO_week_date", authority: "Wikipedia" },
    ],
    disclaimer: "Uses the ISO-8601 definition: weeks start on Monday and week 1 is the week containing the year's first Thursday.",
  },
  related: ["day-of-year", "date-difference", "age"],
  tags: ["week number", "iso week", "what week is it", "current week number", "week of year"],
});
