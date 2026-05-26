import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "bmi-kids",
  category: "health",
  priority: "P1",
  icon: "baby",
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
      id: "age",
      type: {
        kind: "number",
        min: 2,
        max: 20,
        step: 1,
        integer: true,
        unit: "year",
      },
      defaultValue: 10,
      required: true,
    },
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
        min: 5,
        max: 250,
        step: 0.1,
        unit: "kg",
      },
      defaultValue: 35,
      required: true,
    },
    {
      id: "height",
      type: {
        kind: "number",
        min: 50,
        max: 220,
        step: 0.1,
        unit: "cm",
      },
      defaultValue: 140,
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
      id: "weightStatus",
      format: "text",
    },
    {
      id: "percentileEstimate",
      format: "text",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{BMI} = \\frac{\\text{weight (kg)}}{\\text{height (m)}^2}",
    references: [
      {
        title: "CDC BMI-for-Age Growth Charts",
        url: "https://www.cdc.gov/growthcharts/",
        authority: "Centers for Disease Control and Prevention (CDC)",
      },
      {
        title: "Kuczmarski RJ et al. (2002). 2000 CDC growth charts for the United States. Adv Data. 314:1–190.",
        url: "https://www.cdc.gov/nchs/data/series/sr_11/sr11_246.pdf",
        authority: "National Center for Health Statistics",
      },
    ],
    disclaimer:
      "This calculator provides a BMI percentile estimate based on simplified CDC 2000 growth chart lookups. For accurate clinical assessment, use the CDC online tool or consult a paediatrician.",
    accuracyNote:
      "Percentile estimates use linear interpolation between embedded 5th, 85th, and 95th percentile cutoffs. Values are approximate.",
  },
  related: ["bmi", "ideal-weight", "pregnancy-weight"],
  tags: ["BMI kids", "pediatric BMI", "child BMI", "growth charts", "CDC", "children health"],
});
