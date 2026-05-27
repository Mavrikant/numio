import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "protein-intake",
  category: "health",
  priority: "P1",
  icon: "egg",
  inputs: [
    { id: "weight", type: { kind: "number", min: 1, max: 500, step: 0.5, unit: "kg" }, defaultValue: 70, required: true },
    {
      id: "activity",
      type: {
        kind: "select",
        options: [
          { value: "sedentary", i18nKey: "sedentary" },
          { value: "active", i18nKey: "active" },
          { value: "athlete", i18nKey: "athlete" },
        ],
      },
      defaultValue: "active",
      required: true,
    },
  ],
  outputs: [
    { id: "proteinGrams", format: "number", precision: 0, highlight: true },
    { id: "proteinLow", format: "number", precision: 0 },
    { id: "proteinHigh", format: "number", precision: 0 },
    { id: "perMeal", format: "number", precision: 0 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    references: [
      { title: "Dietary protein recommendations (g/kg)", url: "https://en.wikipedia.org/wiki/Protein_(nutrient)#Dietary_recommendations", authority: "Wikipedia" },
    ],
    disclaimer: "General guidance based on grams of protein per kilogram of body weight. Individual needs vary with goals, age and health; consult a professional for personalised advice.",
  },
  related: ["macros", "tdee", "calorie"],
  tags: ["protein intake", "daily protein", "protein calculator", "grams of protein", "protein per day"],
});
