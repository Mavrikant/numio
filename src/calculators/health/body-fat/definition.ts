import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z
  .object({
    gender: z.enum(["male", "female"]),
    height: z.number().positive(),
    weight: z.number().positive(),
    waist: z.number().positive(),
    neck: z.number().positive(),
    hip: z.number().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.height < 50 || data.height > 250) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["height"], message: "Height 50–250 cm" });
    }
    if (data.weight < 1 || data.weight > 300) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["weight"], message: "Weight 1–300 kg" });
    }
    if (data.waist < 30 || data.waist > 200) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["waist"], message: "Waist 30–200 cm" });
    }
    if (data.neck < 20 || data.neck > 80) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["neck"], message: "Neck 20–80 cm" });
    }
    if (data.gender === "female") {
      if (data.hip == null) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["hip"], message: "Hip measurement required for females" });
      } else if (data.hip < 50 || data.hip > 200) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["hip"], message: "Hip 50–200 cm" });
      }
    }
    if (data.waist <= data.neck) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["waist"], message: "Waist must be larger than neck" });
    }
  });

export default defineCalculator({
  slug: "body-fat",
  category: "health",
  priority: "P1",
  icon: "activity",
  inputs: [
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
      type: { kind: "number", min: 50, max: 250, step: 0.5, unit: "cm" },
      defaultValue: 175,
      required: true,
    },
    {
      id: "weight",
      type: { kind: "number", min: 1, max: 300, step: 0.1, unit: "kg" },
      defaultValue: 75,
      required: true,
    },
    {
      id: "waist",
      type: { kind: "number", min: 30, max: 200, step: 0.5, unit: "cm" },
      defaultValue: 85,
      required: true,
    },
    {
      id: "neck",
      type: { kind: "number", min: 20, max: 80, step: 0.5, unit: "cm" },
      defaultValue: 37,
      required: true,
    },
    {
      id: "hip",
      type: { kind: "number", min: 50, max: 200, step: 0.5, unit: "cm" },
      defaultValue: 95,
      required: false,
    },
  ],
  outputs: [
    {
      id: "bodyFatPct",
      format: "percent",
      precision: 1,
      highlight: true,
    },
    {
      id: "fatMass",
      format: "number",
      precision: 1,
      unit: "kg",
    },
    {
      id: "leanMass",
      format: "number",
      precision: 1,
      unit: "kg",
    },
    {
      id: "category",
      format: "text",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "\\%BF_{\\text{male}} = 86.01\\log_{10}(\\text{waist}-\\text{neck}) - 70.041\\log_{10}(\\text{height}) + 36.76",
    references: [
      {
        title: "Hodgdon JA, Beckett MB (1984). Prediction of percent body fat for US Navy personnel.",
        authority: "Naval Health Research Center",
      },
      {
        title: "US Navy Body Composition Assessment",
        url: "https://www.public.navy.mil/",
        authority: "United States Navy",
      },
    ],
    disclaimer:
      "The US Navy tape method estimates body fat percentage from circumference measurements. It is less accurate than DEXA or hydrostatic weighing but is a practical field assessment tool.",
  },
  related: ["bmi", "ideal-weight", "bmr"],
  tags: ["health", "body fat", "US Navy", "circumference", "fitness", "lean mass"],
});
