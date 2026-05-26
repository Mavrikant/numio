import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  age: z.number().int().min(10).max(100),
  restingHeartRate: z.number().int().min(30).max(100),
  formula: z.enum(["simple", "karvonen"]),
});

export default defineCalculator({
  slug: "heart-rate",
  category: "health",
  priority: "P1",
  icon: "activity",
  inputs: [
    {
      id: "age",
      type: { kind: "number", min: 10, max: 100, step: 1, unit: "year", integer: true },
      defaultValue: 30,
      required: true,
    },
    {
      id: "restingHeartRate",
      type: { kind: "number", min: 30, max: 100, step: 1, integer: true },
      defaultValue: 60,
      required: true,
    },
    {
      id: "formula",
      type: {
        kind: "select",
        options: [
          { value: "simple", i18nKey: "simple" },
          { value: "karvonen", i18nKey: "karvonen" },
        ],
      },
      defaultValue: "karvonen",
      required: true,
    },
  ],
  outputs: [
    { id: "maxHR", format: "number", precision: 0, highlight: true },
    { id: "hrr", format: "number", precision: 0 },
    { id: "zone1Min", format: "number", precision: 0 },
    { id: "zone1Max", format: "number", precision: 0 },
    { id: "zone2Min", format: "number", precision: 0 },
    { id: "zone2Max", format: "number", precision: 0 },
    { id: "zone3Min", format: "number", precision: 0 },
    { id: "zone3Max", format: "number", precision: 0 },
    { id: "zone4Min", format: "number", precision: 0 },
    { id: "zone4Max", format: "number", precision: 0 },
    { id: "zone5Min", format: "number", precision: 0 },
    { id: "zone5Max", format: "number", precision: 0 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{HRR} = \\text{MaxHR} - \\text{RHR};\\quad \\text{Zone} = (\\text{HRR} \\times \\%) + \\text{RHR}",
    references: [
      {
        title: "Karvonen MJ et al. — The effects of training on heart rate (1957)",
        url: "https://pubmed.ncbi.nlm.nih.gov/13470504/",
        authority: "Annals of Medicine and Experimental Biology Fenniae",
      },
      {
        title: "ACSM's Guidelines for Exercise Testing and Prescription",
        url: "https://www.acsm.org/education-resources/books/acsm-guidelines",
        authority: "American College of Sports Medicine",
      },
    ],
    disclaimer:
      "These heart rate zones are general fitness guidelines. Individual responses to exercise vary. Consult a physician before starting a new exercise program, especially if you have a cardiovascular condition.",
  },
  related: ["blood-pressure", "bmi", "tdee"],
  tags: ["heart rate", "training zones", "Karvonen", "fitness", "cardio"],
});
