import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "countdown",
  category: "datetime",
  priority: "P1",
  icon: "hourglass",
  inputs: [
    { id: "fromDate", type: { kind: "date" }, defaultValue: "today", required: true },
    { id: "targetDate", type: { kind: "date" }, defaultValue: "", required: true },
  ],
  outputs: [
    { id: "totalDays", format: "number", precision: 0, highlight: true },
    { id: "fullWeeks", format: "number", precision: 0 },
    { id: "businessDays", format: "number", precision: 0 },
    { id: "years", format: "number", precision: 0 },
    { id: "months", format: "number", precision: 0 },
    { id: "days", format: "number", precision: 0 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    references: [{ title: "Date calculation", url: "https://en.wikipedia.org/wiki/Date_calculation", authority: "Wikipedia" }],
    disclaimer: "Counts whole days in UTC between the two dates. Business days count Monday–Friday and ignore public holidays.",
  },
  related: ["date-difference", "add-business-days", "age"],
  tags: ["countdown", "days until", "time until date", "days remaining", "how many days until"],
});
