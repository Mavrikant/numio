import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  systolic: z.number().int().min(60).max(250),
  diastolic: z.number().int().min(40).max(150),
});

export default defineCalculator({
  slug: "blood-pressure",
  category: "health",
  priority: "P1",
  icon: "heart-pulse",
  inputs: [
    {
      id: "systolic",
      type: { kind: "number", min: 60, max: 250, step: 1, unit: "pa", integer: true },
      defaultValue: 120,
      required: true,
    },
    {
      id: "diastolic",
      type: { kind: "number", min: 40, max: 150, step: 1, unit: "pa", integer: true },
      defaultValue: 80,
      required: true,
    },
  ],
  outputs: [
    { id: "category", format: "text", highlight: true },
    { id: "systolicCategory", format: "text" },
    { id: "diastolicCategory", format: "text" },
    { id: "recommendation", format: "text" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    references: [
      {
        title: "2017 ACC/AHA High Blood Pressure Clinical Practice Guideline",
        url: "https://doi.org/10.1016/j.jacc.2017.11.006",
        authority: "American Heart Association / American College of Cardiology",
      },
      {
        title: "High Blood Pressure Symptoms and Causes",
        url: "https://www.cdc.gov/high-blood-pressure/about/index.html",
        authority: "Centers for Disease Control and Prevention (CDC)",
      },
    ],
    disclaimer:
      "This calculator is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. A single reading is not sufficient to diagnose hypertension. Always consult a qualified healthcare provider.",
  },
  related: ["heart-rate", "bmi"],
  tags: ["blood pressure", "hypertension", "heart health", "AHA", "cardiovascular"],
});
