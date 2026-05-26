import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "conception",
  category: "health",
  priority: "P1",
  icon: "baby",
  inputs: [
    {
      id: "mode",
      type: {
        kind: "select",
        options: [
          { value: "from_lmp", i18nKey: "from_lmp" },
          { value: "from_duedate", i18nKey: "from_duedate" },
        ],
      },
      defaultValue: "from_lmp",
      required: true,
    },
    {
      id: "dateInput",
      type: {
        kind: "date",
      },
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
  ],
  outputs: [
    {
      id: "conceptionDate",
      format: "date",
      highlight: true,
    },
    {
      id: "fertileWindowStart",
      format: "date",
    },
    {
      id: "fertileWindowEnd",
      format: "date",
    },
    {
      id: "estimatedDueDate",
      format: "date",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    references: [
      {
        title: "Methods for Estimating the Due Date — ACOG Committee Opinion 700",
        url: "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date",
        authority: "American College of Obstetricians and Gynecologists (ACOG)",
      },
      {
        title: "Calculating gestational age and due dates",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK442018/",
        authority: "NCBI StatPearls",
      },
    ],
    disclaimer:
      "This calculator provides estimates only. Actual conception date can vary. Consult a healthcare professional for clinical assessment.",
  },
  related: ["pregnancy-weight", "bmi-kids"],
  tags: ["pregnancy", "conception", "fertility", "due date", "health"],
});
