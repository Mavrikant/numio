import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "gfr",
  category: "health",
  priority: "P0",
  icon: "droplet",
  inputs: [
    {
      id: "creatinineUmolL",
      type: {
        kind: "number",
        min: 1,
        max: 5000,
        step: 1,
        unit: "ratio",
      },
      defaultValue: 90,
      required: true,
    },
    {
      id: "ageYears",
      type: {
        kind: "number",
        min: 18,
        max: 120,
        step: 1,
        integer: true,
        unit: "year",
      },
      defaultValue: 45,
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
      id: "race",
      type: {
        kind: "select",
        options: [
          { value: "black", i18nKey: "black" },
          { value: "other", i18nKey: "other" },
        ],
      },
      defaultValue: "other",
      required: true,
    },
  ],
  outputs: [
    {
      id: "eGfr",
      format: "number",
      precision: 1,
      highlight: true,
    },
    {
      id: "stage",
      format: "text",
    },
    {
      id: "stageLabel",
      format: "text",
    },
    {
      id: "riskLevel",
      format: "text",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{eGFR} = 142 \\times (S_{cr}/\\lambda)^\\alpha \\times 0.9938^{\\text{age}} \\times 0.942^{\\text{female}} \\times C_{race}",
    references: [
      {
        title: "A New Estimated GFR Should Be Used with Both Creatinine and Cystatin C in the General Population",
        url: "https://doi.org/10.1681/ASN.2020121280",
        authority: "Journal of the American Society of Nephrology (JASN) — Inker et al. 2021",
      },
      {
        title: "KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease",
        url: "https://kdigo.org/",
        authority: "Kidney Disease: Improving Global Outcomes (KDIGO)",
      },
    ],
    disclaimer:
      "This calculator provides an estimate of kidney function and is not a clinical diagnosis. eGFR is based on a formula using creatinine and demographic factors. Always consult a healthcare professional for medical interpretation and decisions. The results are for informational purposes only.",
  },
  related: ["blood-pressure", "cholesterol", "diabetes"],
  tags: ["kidney", "gfr", "creatinine", "ckd", "nephrology", "chronic kidney disease"],
});
