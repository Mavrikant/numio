import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z
  .object({
    lastPeriodDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
    cycleLength: z.number().int().min(21).max(35),
    periodLength: z.number().int().min(2).max(10),
  })
  .superRefine((data, ctx) => {
    const d = new Date(data.lastPeriodDate + "T00:00:00Z");
    if (isNaN(d.getTime())) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["lastPeriodDate"],
        message: "Invalid date — must be a real calendar date",
      });
    }
  });

export default defineCalculator({
  slug: "period",
  category: "health",
  priority: "P1",
  icon: "calendar-heart",
  inputs: [
    {
      id: "lastPeriodDate",
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
      id: "periodLength",
      type: {
        kind: "number",
        min: 2,
        max: 10,
        step: 1,
        integer: true,
        unit: "day",
      },
      defaultValue: 5,
      required: true,
    },
  ],
  outputs: [
    { id: "nextPeriodDate", format: "date", highlight: true },
    { id: "ovulationDate", format: "date" },
    { id: "fertileWindowStart", format: "date" },
    { id: "fertileWindowEnd", format: "date" },
    { id: "daysUntilNextPeriod", format: "number", precision: 0, unit: "day" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    references: [
      {
        title: "Menstrual Cycle (FAQ)",
        url: "https://www.acog.org/womens-health/faqs/menstrual-cycle",
        authority: "American College of Obstetricians and Gynecologists (ACOG)",
      },
      {
        title: "Calculating Fertile Window",
        url: "https://www.nichd.nih.gov/health/topics/fertility/conditioninfo/ovulation",
        authority: "NIH — Eunice Kennedy Shriver NICHD",
      },
    ],
    disclaimer:
      "This calculator provides estimates based on average cycle patterns. Individual cycles vary. This is not a contraception method and should not replace medical advice.",
  },
  related: ["pregnancy", "bmi", "bmr"],
  tags: ["period", "menstrual cycle", "ovulation", "fertility", "women health"],
});
