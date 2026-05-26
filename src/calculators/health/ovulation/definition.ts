import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z
  .object({
    lmpDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
    cycleLength: z.number().int().min(21).max(45),
  });

export default defineCalculator({
  slug: "ovulation",
  category: "health",
  priority: "P1",
  icon: "calendar-heart",
  inputs: [
    {
      id: "lmpDate",
      type: { kind: "date" },
      defaultValue: "",
      required: true,
    },
    {
      id: "cycleLength",
      type: { kind: "number", min: 21, max: 45, step: 1, unit: "day", integer: true },
      defaultValue: 28,
      required: true,
    },
  ],
  outputs: [
    { id: "ovulationDate", format: "date", highlight: true },
    { id: "fertileStart", format: "date" },
    { id: "fertileEnd", format: "date" },
    { id: "nextPeriod", format: "date" },
    { id: "lhSurgeDate", format: "date" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{Ovulation} = \\text{LMP} + (\\text{CycleLength} - 14)",
    references: [
      {
        title: "Timing of sexual intercourse in relation to ovulation",
        url: "https://www.nejm.org/doi/full/10.1056/NEJM199512073332301",
        authority: "New England Journal of Medicine",
      },
      {
        title: "Menstrual cycle overview",
        url: "https://www.who.int/news-room/fact-sheets/detail/family-planning-contraception",
        authority: "World Health Organization (WHO)",
      },
    ],
    disclaimer:
      "This calculator provides estimates based on average cycle patterns. Ovulation timing varies between individuals. This tool is not a contraceptive method and should not replace medical advice.",
  },
  related: ["period", "bmi"],
  tags: ["ovulation", "fertility", "menstrual cycle", "women's health", "pregnancy planning"],
});
