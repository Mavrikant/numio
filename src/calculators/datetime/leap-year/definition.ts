import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "leap-year",
  category: "datetime",
  priority: "P2",
  icon: "calendar-check",
  inputs: [
    { id: "year", type: { kind: "number", min: 1, max: 999999, step: 1, integer: true }, defaultValue: 2024, required: true },
  ],
  outputs: [
    { id: "daysInYear", format: "number", precision: 0, highlight: true },
    { id: "daysInFebruary", format: "number", precision: 0 },
    { id: "nextLeapYear", format: "number", precision: 0 },
    { id: "previousLeapYear", format: "number", precision: 0 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{leap} \\iff (y \\bmod 4 = 0 \\land y \\bmod 100 \\neq 0) \\lor (y \\bmod 400 = 0)",
    references: [{ title: "Leap year", url: "https://en.wikipedia.org/wiki/Leap_year", authority: "Wikipedia" }],
  },
  related: ["day-of-year", "week-number", "age"],
  tags: ["leap year", "is it a leap year", "leap year checker", "days in february", "366 days"],
});
