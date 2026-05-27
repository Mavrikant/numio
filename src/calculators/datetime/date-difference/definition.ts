import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "date-difference",
  category: "datetime",
  priority: "P0",
  icon: "calendar-range",
  inputs: [
    { id: "startDate", type: { kind: "date" }, defaultValue: "today", required: true },
    { id: "endDate", type: { kind: "date" }, defaultValue: "", required: true },
  ],
  outputs: [
    { id: "totalDays", format: "number", precision: 0, highlight: true },
    { id: "weeks", format: "number", precision: 0 },
    { id: "remainderDays", format: "number", precision: 0 },
    { id: "years", format: "number", precision: 0 },
    { id: "months", format: "number", precision: 0 },
    { id: "days", format: "number", precision: 0 },
    { id: "businessDays", format: "number", precision: 0 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    references: [
      {
        title: "Calculating the number of days between two dates",
        url: "https://en.wikipedia.org/wiki/Date_calculation",
        authority: "Wikipedia",
      },
    ],
    disclaimer:
      "Business days count Monday–Friday only and ignore public holidays, which vary by country. Dates are handled in UTC, so daylight-saving changes do not affect the day count.",
  },
  related: ["age", "date-add", "time-duration"],
  tags: ["days between dates", "date difference", "date calculator", "how many days", "business days", "weeks between dates"],
});
