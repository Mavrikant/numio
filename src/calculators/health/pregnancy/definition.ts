import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z
  .object({
    lmpDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
    cycleLength: z.number().int().min(21).max(35),
    currentDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
  })
  .superRefine((data, ctx) => {
    const lmp = new Date(data.lmpDate + "T00:00:00Z");
    if (isNaN(lmp.getTime())) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["lmpDate"],
        message: "Invalid LMP date",
      });
    }
    const cur = new Date(data.currentDate + "T00:00:00Z");
    if (isNaN(cur.getTime())) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["currentDate"],
        message: "Invalid current date",
      });
    }
    if (!isNaN(lmp.getTime()) && !isNaN(cur.getTime()) && cur < lmp) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["currentDate"],
        message: "Current date must be on or after LMP date",
      });
    }
  });

export default defineCalculator({
  slug: "pregnancy",
  category: "health",
  priority: "P0",
  icon: "baby",
  inputs: [
    {
      id: "lmpDate",
      type: { kind: "date" },
      defaultValue: "",
      required: true,
    },
    {
      id: "cycleLength",
      type: {
        kind: "number",
        min: 21,
        max: 35,
        step: 1,
        integer: true,
        unit: "day",
      },
      defaultValue: 28,
      required: true,
    },
    {
      id: "currentDate",
      type: { kind: "date" },
      defaultValue: "",
      required: true,
    },
  ],
  outputs: [
    { id: "dueDate", format: "date", highlight: true },
    { id: "gestationalWeeks", format: "number", precision: 0 },
    { id: "gestationalDays", format: "number", precision: 0, unit: "day" },
    { id: "trimester", format: "number", precision: 0 },
    { id: "daysRemaining", format: "number", precision: 0, unit: "day" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{Due Date} = \\text{LMP} + 280 + (\\text{cycleLength} - 28) \\text{ days}",
    references: [
      {
        title: "Methods for Estimating the Due Date (ACOG Committee Opinion 700)",
        url: "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date",
        authority: "American College of Obstetricians and Gynecologists (ACOG)",
      },
      {
        title: "Gestational Age Assessment",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK538336/",
        authority: "StatPearls / National Library of Medicine",
      },
    ],
    disclaimer:
      "This calculator provides an estimate only. Actual birth dates vary. Always consult a healthcare provider for accurate pregnancy dating and prenatal care.",
  },
  related: ["period", "bmi", "bmr"],
  tags: ["pregnancy", "due date", "gestational age", "maternal health", "obstetrics"],
});
