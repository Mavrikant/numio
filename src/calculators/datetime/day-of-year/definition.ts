import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "day-of-year",
  category: "datetime",
  priority: "P2",
  icon: "calendar",
  inputs: [{ id: "date", type: { kind: "date" }, defaultValue: "today", required: true }],
  outputs: [
    { id: "dayOfYear", format: "number", precision: 0, highlight: true },
    { id: "daysRemaining", format: "number", precision: 0 },
    { id: "daysInYear", format: "number", precision: 0 },
    { id: "percentElapsed", format: "percent", precision: 1 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    references: [{ title: "Ordinal date", url: "https://en.wikipedia.org/wiki/Ordinal_date", authority: "Wikipedia" }],
  },
  related: ["week-number", "leap-year", "date-difference"],
  tags: ["day of year", "ordinal date", "day number", "days remaining in year", "julian day of year"],
});
