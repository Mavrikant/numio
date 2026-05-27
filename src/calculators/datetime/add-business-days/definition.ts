import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "add-business-days",
  category: "datetime",
  priority: "P2",
  icon: "calendar-clock",
  inputs: [
    { id: "startDate", type: { kind: "date" }, defaultValue: "today", required: true },
    { id: "businessDays", type: { kind: "number", min: -100000, max: 100000, step: 1, integer: true }, defaultValue: 10, required: true },
  ],
  outputs: [
    { id: "resultDate", format: "date", highlight: true },
    { id: "calendarDays", format: "number", precision: 0, unit: "day" },
    { id: "weekendDays", format: "number", precision: 0, unit: "day" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    references: [{ title: "Business day", url: "https://en.wikipedia.org/wiki/Business_day", authority: "Wikipedia" }],
    disclaimer: "Business days are Monday–Friday. Public holidays are not excluded — they vary by country, so subtract them separately if needed. Negative values count backwards.",
  },
  related: ["date-add", "date-difference", "countdown"],
  tags: ["add business days", "working days calculator", "business days from date", "weekday calculator", "deadline calculator"],
});
