import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "pregnancy-weight",
  category: "health",
  priority: "P1",
  icon: "heart",
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
      id: "prePregnancyWeight",
      type: {
        kind: "number",
        min: 30,
        max: 300,
        step: 0.1,
        unit: "kg",
      },
      defaultValue: 65,
      required: true,
    },
    {
      id: "height",
      type: {
        kind: "number",
        min: 48,
        max: 220,
        step: 1,
        unit: "cm",
      },
      defaultValue: 165,
      required: true,
    },
    {
      id: "gestationalWeek",
      type: {
        kind: "number",
        min: 1,
        max: 42,
        step: 1,
        integer: true,
        unit: "day",
      },
      defaultValue: 20,
      required: true,
    },
    {
      id: "currentWeight",
      type: {
        kind: "number",
        min: 30,
        max: 350,
        step: 0.1,
        unit: "kg",
      },
      defaultValue: 72,
      required: true,
    },
  ],
  outputs: [
    {
      id: "preBmi",
      format: "number",
      precision: 1,
    },
    {
      id: "bmiCategory",
      format: "text",
    },
    {
      id: "recommendedTotalGainMin",
      format: "number",
      precision: 1,
      unit: "kg",
    },
    {
      id: "recommendedTotalGainMax",
      format: "number",
      precision: 1,
      unit: "kg",
    },
    {
      id: "currentGain",
      format: "number",
      precision: 1,
      unit: "kg",
      highlight: true,
    },
    {
      id: "expectedGainAtWeek",
      format: "number",
      precision: 1,
      unit: "kg",
    },
    {
      id: "onTrack",
      format: "text",
    },
    {
      id: "weeklyRateKg",
      format: "number",
      precision: 2,
      unit: "kg",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    references: [
      {
        title: "Weight Gain During Pregnancy: Reexamining the Guidelines (IOM 2009)",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK32813/",
        authority: "Institute of Medicine (IOM) / National Academies of Sciences, Engineering, and Medicine",
      },
      {
        title: "WHO recommendations on antenatal care for a positive pregnancy experience",
        url: "https://www.who.int/publications/i/item/9789241549912",
        authority: "World Health Organization (WHO)",
      },
    ],
    disclaimer:
      "This calculator is based on IOM 2009 guidelines and provides population-level estimates. Individual needs vary. Consult your obstetrician or midwife for personalised advice.",
  },
  related: ["bmi", "conception", "bmi-kids"],
  tags: ["pregnancy weight gain", "IOM guidelines", "gestational weight", "prenatal", "obstetrics"],
});
