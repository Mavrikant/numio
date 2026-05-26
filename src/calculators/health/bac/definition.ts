import { defineCalculator } from "@/types/calculator";
import { z } from "zod";
import { compute } from "./compute";

export default defineCalculator({
  slug: "bac",
  category: "health",
  inputs: [
    {
      id: "drinks",
      type: "number",
      label: "Number of Drinks",
      defaultValue: 2,
      validation: z.number().min(0).max(30),
    },
    {
      id: "weightKg",
      type: "number",
      label: "Weight (kg)",
      defaultValue: 70,
      validation: z.number().min(30).max(300),
    },
    {
      id: "sex",
      type: "select",
      label: "Biological Sex",
      defaultValue: "male",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ],
      validation: z.enum(["male", "female"]),
    },
    {
      id: "hoursElapsed",
      type: "number",
      label: "Hours Since First Drink",
      defaultValue: 1,
      validation: z.number().min(0).max(24),
    },
  ],
  outputs: [
    {
      id: "bac",
      type: "number",
      label: "Blood Alcohol Content (%)",
      unit: "%",
    },
    {
      id: "hoursUntilSober",
      type: "number",
      label: "Hours Until Sober",
      unit: "h",
    },
    {
      id: "isLegal",
      type: "boolean",
      label: "Legal to Drive",
    },
    {
      id: "isDangerous",
      type: "boolean",
      label: "Dangerous Level",
    },
    {
      id: "category",
      type: "text",
      label: "Impairment Category",
    },
  ],
  compute,
});
