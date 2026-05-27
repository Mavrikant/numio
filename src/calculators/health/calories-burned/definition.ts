import { z } from "zod";

import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z
  .object({
    activity: z.enum([
      "walking",
      "running",
      "cycling",
      "swimming",
      "weightlifting",
      "yoga",
      "basketball",
      "soccer",
      "tennis",
      "dancing",
      "hiking",
      "jumping-rope",
    ]),
    duration: z.number().positive(),
    weight: z.number().positive(),
    intensity: z.enum(["light", "moderate", "vigorous"]),
  })
  .superRefine((data, ctx) => {
    if (data.duration <= 0 || data.duration > 1440) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["duration"],
        message: "Duration must be between 1 and 1440 minutes",
      });
    }
    if (data.weight < 20 || data.weight > 300) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["weight"],
        message: "Weight must be between 20 and 300 kg",
      });
    }
  });

export default defineCalculator({
  slug: "calories-burned",
  category: "health",
  priority: "P2",
  icon: "flame",
  inputs: [
    {
      id: "activity",
      type: {
        kind: "select",
        options: [
          { value: "walking", i18nKey: "walking" },
          { value: "running", i18nKey: "running" },
          { value: "cycling", i18nKey: "cycling" },
          { value: "swimming", i18nKey: "swimming" },
          { value: "weightlifting", i18nKey: "weightlifting" },
          { value: "yoga", i18nKey: "yoga" },
          { value: "basketball", i18nKey: "basketball" },
          { value: "soccer", i18nKey: "soccer" },
          { value: "tennis", i18nKey: "tennis" },
          { value: "dancing", i18nKey: "dancing" },
          { value: "hiking", i18nKey: "hiking" },
          { value: "jumping-rope", i18nKey: "jumping-rope" },
        ],
      },
      defaultValue: "running",
      required: true,
    },
    {
      id: "intensity",
      type: {
        kind: "select",
        options: [
          { value: "light", i18nKey: "light" },
          { value: "moderate", i18nKey: "moderate" },
          { value: "vigorous", i18nKey: "vigorous" },
        ],
      },
      defaultValue: "moderate",
      required: true,
    },
    {
      id: "duration",
      type: {
        kind: "number",
        min: 1,
        max: 1440,
        step: 1,
        unit: "minute",
      },
      defaultValue: 30,
      required: true,
    },
    {
      id: "weight",
      type: {
        kind: "number",
        min: 20,
        max: 300,
        step: 0.1,
        unit: "kg",
      },
      defaultValue: 70,
      required: true,
    },
  ],
  outputs: [
    {
      id: "caloriesBurned",
      format: "number",
      precision: 0,
      unit: "kcal",
      highlight: true,
    },
    {
      id: "metValue",
      format: "number",
      precision: 2,
    },
    {
      id: "equivalentFoods",
      format: "text",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    compareEnabled: true,
    nlEnabled: true,
    formulaLatex:
      "\\text{kcal} = \\text{MET} \\times \\text{weight (kg)} \\times \\text{time (h)}",
    references: [
      {
        title:
          "Ainsworth BE et al. (2011). 2011 Compendium of Physical Activities: a second update of codes and MET values.",
        url: "https://doi.org/10.1249/MSS.0b013e31821ece12",
        authority: "Medicine & Science in Sports & Exercise",
      },
      {
        title: "Physical Activity Basics — How much physical activity do adults need?",
        url: "https://www.cdc.gov/physicalactivity/basics/index.htm",
        authority: "Centers for Disease Control and Prevention (CDC)",
      },
      {
        title: "Physical activity — Fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
        authority: "World Health Organization (WHO)",
      },
    ],
    disclaimer:
      "Calorie estimates are population-level approximations. Actual energy expenditure varies with fitness, terrain, technique and individual physiology.",
  },
  related: ["bmr", "tdee", "calorie", "calorie-deficit"],
  tags: ["health", "exercise", "calories", "MET", "fitness", "activity"],
});
