import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z
  .object({
    gender: z.enum(["male", "female"]),
    height: z.number().positive(),
    unit: z.enum(["metric", "imperial"]),
  })
  .superRefine((data, ctx) => {
    if (data.unit === "metric") {
      if (data.height < 50 || data.height > 250) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["height"], message: "Height 50–250 cm" });
      }
    } else {
      if (data.height < 20 || data.height > 100) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["height"], message: "Height 20–100 inches" });
      }
    }
  });

export default defineCalculator({
  slug: "ideal-weight",
  category: "health",
  priority: "P1",
  icon: "target",
  inputs: [
    {
      id: "unit",
      type: {
        kind: "select",
        options: [
          { value: "metric", i18nKey: "metric" },
          { value: "imperial", i18nKey: "imperial" },
        ],
      },
      defaultValue: "metric",
      required: true,
    },
    {
      id: "gender",
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
      id: "height",
      type: {
        kind: "number",
        min: 50,
        max: 250,
        step: 1,
        unit: "cm",
      },
      defaultValue: 170,
      required: true,
    },
  ],
  outputs: [
    {
      id: "devine",
      format: "number",
      precision: 1,
      unit: "kg",
      highlight: true,
    },
    {
      id: "robinson",
      format: "number",
      precision: 1,
      unit: "kg",
    },
    {
      id: "miller",
      format: "number",
      precision: 1,
      unit: "kg",
    },
    {
      id: "hamwi",
      format: "number",
      precision: 1,
      unit: "kg",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{IBW (Devine, male)} = 50 + 2.3 \\times (\\text{height in} - 60)",
    references: [
      {
        title: "Pai MP, Hall PD (1995). Simplifying the drug dosage adjustment formula for body weight.",
        url: "https://doi.org/10.1177/106002809502900106",
        authority: "Annals of Pharmacotherapy",
      },
      {
        title: "Devine BJ (1974). Gentamicin therapy.",
        authority: "Drug Intelligence & Clinical Pharmacy",
      },
    ],
    disclaimer:
      "Ideal body weight formulas were developed for drug dosing, not as general health targets. A healthy weight range depends on body composition, ethnicity, age, and overall health status.",
  },
  related: ["bmi", "body-fat", "bmr"],
  tags: ["health", "ideal weight", "IBW", "Devine", "Robinson", "Miller", "Hamwi"],
});
