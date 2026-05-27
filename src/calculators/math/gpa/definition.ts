import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "gpa",
  category: "math",
  priority: "P1",
  icon: "graduation-cap",
  inputs: [
    { id: "gradePoints", type: { kind: "text", maxLength: 500 }, defaultValue: "4, 3.7, 3.3, 4, 3", required: true },
    { id: "creditHours", type: { kind: "text", maxLength: 500 }, defaultValue: "3, 4, 3, 2, 3", required: false },
  ],
  outputs: [
    { id: "gpa", format: "number", precision: 3, highlight: true },
    { id: "totalCredits", format: "number", precision: 1 },
    { id: "totalQualityPoints", format: "number", precision: 2 },
    { id: "courseCount", format: "number", precision: 0 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{GPA} = \\frac{\\sum (g_i \\cdot c_i)}{\\sum c_i}",
    references: [
      {
        title: "Grade point average — weighted calculation",
        url: "https://en.wikipedia.org/wiki/Grading_systems_by_country",
        authority: "Wikipedia",
      },
    ],
    disclaimer:
      "Enter grade points on your institution's scale (commonly 0–4.0; some use 0–4.3, 0–5 or 0–10). Letter-grade-to-point mapping varies by school, so convert your letters to points first. Leave credits blank to weight courses equally.",
  },
  related: ["average", "standard-deviation", "percentage"],
  tags: ["gpa calculator", "grade point average", "weighted gpa", "college gpa", "semester gpa", "student"],
});
