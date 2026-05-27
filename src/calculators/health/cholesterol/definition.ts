import { z } from "zod";

import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z
  .object({
    totalCholesterol: z.number().positive(),
    hdl: z.number().positive(),
    triglycerides: z.number().positive(),
    ldl: z.number().nonnegative().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.totalCholesterol < 50 || data.totalCholesterol > 500) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["totalCholesterol"],
        message: "Total cholesterol must be between 50 and 500 mg/dL",
      });
    }
    if (data.hdl < 10 || data.hdl > 200) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["hdl"],
        message: "HDL must be between 10 and 200 mg/dL",
      });
    }
    if (data.triglycerides < 30 || data.triglycerides > 1000) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["triglycerides"],
        message: "Triglycerides must be between 30 and 1000 mg/dL",
      });
    }
    if (
      data.ldl !== undefined &&
      data.ldl !== 0 &&
      (data.ldl < 30 || data.ldl > 400)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["ldl"],
        message: "LDL must be 0 (auto-compute) or between 30 and 400 mg/dL",
      });
    }
  });

export default defineCalculator({
  slug: "cholesterol",
  category: "health",
  priority: "P2",
  icon: "heart",
  inputs: [
    {
      id: "totalCholesterol",
      type: { kind: "number", min: 50, max: 500, step: 1 },
      defaultValue: 200,
      required: true,
    },
    {
      id: "hdl",
      type: { kind: "number", min: 10, max: 200, step: 1 },
      defaultValue: 50,
      required: true,
    },
    {
      id: "triglycerides",
      type: { kind: "number", min: 30, max: 1000, step: 1 },
      defaultValue: 150,
      required: true,
    },
    {
      id: "ldl",
      type: { kind: "number", min: 0, max: 400, step: 1 },
      defaultValue: 0,
      required: false,
    },
  ],
  outputs: [
    { id: "ldlComputed", format: "number", precision: 1, highlight: true },
    { id: "totalHdlRatio", format: "number", precision: 2 },
    { id: "ldlHdlRatio", format: "number", precision: 2 },
    { id: "nonHdlCholesterol", format: "number", precision: 1 },
    { id: "category", format: "text" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    compareEnabled: true,
    nlEnabled: true,
    formulaLatex:
      "\\text{LDL}_{\\text{Friedewald}} = \\text{TC} - \\text{HDL} - \\frac{\\text{TG}}{5}",
    references: [
      {
        title:
          "Friedewald WT, Levy RI, Fredrickson DS (1972). Estimation of the concentration of low-density lipoprotein cholesterol in plasma, without use of the preparative ultracentrifuge.",
        url: "https://pubmed.ncbi.nlm.nih.gov/4337382/",
        authority: "Clinical Chemistry",
      },
      {
        title:
          "Grundy SM et al. (2018). 2018 AHA/ACC/AACVPR/AAPA/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA Guideline on the Management of Blood Cholesterol.",
        url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000625",
        authority: "American Heart Association / American College of Cardiology",
      },
      {
        title: "Third Report of the NCEP Expert Panel on Detection, Evaluation, and Treatment of High Blood Cholesterol in Adults (ATP III).",
        url: "https://www.nhlbi.nih.gov/files/docs/resources/heart/atp-3-cholesterol-full-report.pdf",
        authority: "National Heart, Lung, and Blood Institute (NHLBI)",
      },
    ],
    disclaimer:
      "Not a clinical diagnosis — consult your physician for cardiovascular risk assessment.",
  },
  related: ["blood-pressure", "bmi", "heart-rate"],
  tags: ["health", "cholesterol", "lipid", "cardiovascular", "LDL", "HDL"],
});
