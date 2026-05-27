import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "age",
  category: "datetime",
  priority: "P0",
  icon: "cake",
  inputs: [
    { id: "birthDate", type: { kind: "date" }, defaultValue: "", required: true },
    { id: "asOfDate", type: { kind: "date" }, defaultValue: "today", required: true },
  ],
  outputs: [
    { id: "ageYears", format: "number", precision: 0, highlight: true },
    { id: "ageMonths", format: "number", precision: 0 },
    { id: "ageDays", format: "number", precision: 0 },
    { id: "totalMonths", format: "number", precision: 0 },
    { id: "totalWeeks", format: "number", precision: 0 },
    { id: "totalDays", format: "number", precision: 0 },
    { id: "nextBirthday", format: "date" },
    { id: "daysToNextBirthday", format: "number", precision: 0 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    references: [
      {
        title: "Calendar date arithmetic — years, months and days between dates",
        url: "https://en.wikipedia.org/wiki/Age",
        authority: "Wikipedia",
      },
    ],
    disclaimer:
      "Age is computed in whole calendar years, months and days using UTC dates. Leap days are handled by clamping (e.g. a Feb 29 birthday falls on Feb 28 in common years for the next-birthday calculation).",
  },
  related: ["date-difference", "date-add"],
  tags: ["age calculator", "how old am I", "age from date of birth", "date of birth", "age in days", "next birthday"],
});
