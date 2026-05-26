import { z } from "zod";

import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

// Validation bounds — metric
const METRIC_WEIGHT_MIN = 1;
const METRIC_WEIGHT_MAX = 500; // kg
const METRIC_HEIGHT_MIN = 50; // cm
const METRIC_HEIGHT_MAX = 250; // cm

// Validation bounds — imperial
const IMPERIAL_WEIGHT_MIN = 2;
const IMPERIAL_WEIGHT_MAX = 1100; // lb
const IMPERIAL_HEIGHT_MIN = 20; // inches
const IMPERIAL_HEIGHT_MAX = 100; // inches

const inputSchema = z
  .object({
    unit: z.enum(["metric", "imperial"]),
    weight: z.number().positive(),
    height: z.number().positive(),
  })
  .superRefine((data, ctx) => {
    if (data.unit === "metric") {
      if (data.weight < METRIC_WEIGHT_MIN || data.weight > METRIC_WEIGHT_MAX) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["weight"],
          message: `Weight must be between ${METRIC_WEIGHT_MIN} and ${METRIC_WEIGHT_MAX} kg`,
        });
      }
      if (data.height < METRIC_HEIGHT_MIN || data.height > METRIC_HEIGHT_MAX) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["height"],
          message: `Height must be between ${METRIC_HEIGHT_MIN} and ${METRIC_HEIGHT_MAX} cm`,
        });
      }
    } else {
      if (
        data.weight < IMPERIAL_WEIGHT_MIN ||
        data.weight > IMPERIAL_WEIGHT_MAX
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["weight"],
          message: `Weight must be between ${IMPERIAL_WEIGHT_MIN} and ${IMPERIAL_WEIGHT_MAX} lb`,
        });
      }
      if (
        data.height < IMPERIAL_HEIGHT_MIN ||
        data.height > IMPERIAL_HEIGHT_MAX
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["height"],
          message: `Height must be between ${IMPERIAL_HEIGHT_MIN} and ${IMPERIAL_HEIGHT_MAX} inches`,
        });
      }
    }
  });

export default defineCalculator({
  slug: "bmi",
  category: "health",
  priority: "P0",
  icon: "scale",
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
      id: "weight",
      type: {
        kind: "number",
        min: METRIC_WEIGHT_MIN,
        max: METRIC_WEIGHT_MAX,
        step: 0.1,
        unit: "kg",
      },
      defaultValue: 70,
      required: true,
    },
    {
      id: "height",
      type: {
        kind: "number",
        min: METRIC_HEIGHT_MIN,
        max: METRIC_HEIGHT_MAX,
        step: 1,
        unit: "cm",
      },
      defaultValue: 170,
      required: true,
    },
  ],
  outputs: [
    {
      id: "bmi",
      format: "number",
      precision: 1,
      highlight: true,
    },
    {
      id: "category",
      format: "text",
    },
    {
      id: "healthyMinWeight",
      format: "number",
      precision: 2,
      unit: "kg",
    },
    {
      id: "healthyMaxWeight",
      format: "number",
      precision: 2,
      unit: "kg",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{BMI} = \\frac{\\text{weight (kg)}}{\\text{height (m)}^2}",
    references: [
      {
        title: "A healthy lifestyle — WHO recommendations",
        url: "https://www.who.int/europe/news-room/fact-sheets/item/a-healthy-lifestyle---who-recommendations",
        authority: "World Health Organization (WHO)",
      },
      {
        title: "About Adult BMI",
        url: "https://www.cdc.gov/healthyweight/assessing/bmi/",
        authority: "Centers for Disease Control and Prevention (CDC)",
      },
    ],
    disclaimer:
      "BMI is a population-level screening tool. It does not diagnose body fatness or health. Consult a healthcare professional for individual assessment.",
  },
  related: ["body-fat-percentage", "ideal-weight", "calorie-calculator"],
  tags: ["health", "weight", "bmi", "obesity", "fitness"],
});
