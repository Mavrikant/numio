import { z } from "zod";

import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z
  .object({
    testType: z.enum(["cooper-12min", "mile-and-half"]),
    distance: z.number().nonnegative().optional(),
    timeMinutes: z.number().nonnegative().optional(),
    age: z.number().positive(),
    sex: z.enum(["male", "female"]),
  })
  .superRefine((data, ctx) => {
    if (data.age < 10 || data.age > 90) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["age"],
        message: "Age must be between 10 and 90 years",
      });
    }
    if (data.testType === "cooper-12min") {
      if (data.distance === undefined || data.distance <= 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["distance"],
          message: "Distance is required for the Cooper 12-minute test",
        });
      } else if (data.distance < 500 || data.distance > 6000) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["distance"],
          message: "Distance must be between 500 and 6000 metres",
        });
      }
    } else {
      if (data.timeMinutes === undefined || data.timeMinutes <= 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["timeMinutes"],
          message: "Time is required for the 1.5-mile run test",
        });
      } else if (data.timeMinutes < 5 || data.timeMinutes > 30) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["timeMinutes"],
          message: "Time must be between 5 and 30 minutes",
        });
      }
    }
  });

export default defineCalculator({
  slug: "vo2max",
  category: "health",
  priority: "P2",
  icon: "activity",
  inputs: [
    {
      id: "testType",
      type: {
        kind: "select",
        options: [
          { value: "cooper-12min", i18nKey: "cooper-12min" },
          { value: "mile-and-half", i18nKey: "mile-and-half" },
        ],
      },
      defaultValue: "cooper-12min",
      required: true,
    },
    {
      id: "sex",
      type: {
        kind: "select",
        options: [
          { value: "male", i18nKey: "male" },
          { value: "female", i18nKey: "female" },
        ],
      },
      defaultValue: "male",
      required: true,
    },
    {
      id: "age",
      type: { kind: "number", min: 10, max: 90, step: 1, integer: true },
      defaultValue: 30,
      required: true,
    },
    {
      id: "distance",
      type: { kind: "number", min: 0, max: 6000, step: 10, unit: "m" },
      defaultValue: 2400,
      required: false,
    },
    {
      id: "timeMinutes",
      type: { kind: "number", min: 0, max: 30, step: 0.1, unit: "minute" },
      defaultValue: 12,
      required: false,
    },
  ],
  outputs: [
    {
      id: "vo2maxMlKgMin",
      format: "number",
      precision: 1,
      highlight: true,
    },
    { id: "fitnessCategory", format: "text" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    compareEnabled: true,
    nlEnabled: true,
    formulaLatex:
      "\\text{VO}_{2}\\text{max}_{\\text{Cooper}} = \\frac{d_m - 504.9}{44.73}",
    references: [
      {
        title:
          "Cooper KH (1968). A means of assessing maximal oxygen intake. Correlation between field and treadmill testing.",
        url: "https://jamanetwork.com/journals/jama/article-abstract/337841",
        authority: "JAMA",
      },
      {
        title:
          "ACSM's Guidelines for Exercise Testing and Prescription, 11th edition (2021).",
        url: "https://www.acsm.org/education-resources/books/guidelines-exercise-testing-prescription",
        authority: "American College of Sports Medicine",
      },
      {
        title:
          "Larsen GE, George JD, Alexander JL et al. (2002). Prediction of maximum oxygen consumption from walking, jogging, or running.",
        url: "https://pubmed.ncbi.nlm.nih.gov/11993795/",
        authority: "Research Quarterly for Exercise and Sport",
      },
    ],
    disclaimer:
      "VO₂max field-test estimates are approximate. Stop the test and consult a doctor if you feel chest pain, dizziness or undue shortness of breath.",
  },
  related: ["heart-rate", "calories-burned", "bmr"],
  tags: ["health", "VO2max", "aerobic", "fitness", "endurance", "cardio"],
});
