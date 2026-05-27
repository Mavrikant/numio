import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute, getAvailableIngredients } from "./compute";
import i18n from "./i18n";

const ingredientOptions = getAvailableIngredients().map((ing) => ({
  value: ing,
  i18nKey: ing.replace(/-|_/g, "-"),
}));

const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(["cup", "tbsp", "tsp", "ml", "l", "g"]),
  toUnit: z.enum(["cup", "tbsp", "tsp", "ml", "l", "g"]),
  ingredient: z.string().optional(),
});

export default defineCalculator({
  slug: "cooking",
  category: "conversion",
  priority: "P2",
  icon: "utensils",
  inputs: [
    {
      id: "value",
      type: {
        kind: "number",
        min: 0.001,
        max: 100,
        step: 0.1,
      },
      defaultValue: 1,
      required: true,
    },
    {
      id: "fromUnit",
      type: {
        kind: "select",
        options: [
          { value: "cup", i18nKey: "cup" },
          { value: "tbsp", i18nKey: "tbsp" },
          { value: "tsp", i18nKey: "tsp" },
          { value: "ml", i18nKey: "ml" },
          { value: "l", i18nKey: "l" },
          { value: "g", i18nKey: "g" },
        ],
      },
      defaultValue: "cup",
      required: true,
    },
    {
      id: "toUnit",
      type: {
        kind: "select",
        options: [
          { value: "cup", i18nKey: "cup" },
          { value: "tbsp", i18nKey: "tbsp" },
          { value: "tsp", i18nKey: "tsp" },
          { value: "ml", i18nKey: "ml" },
          { value: "l", i18nKey: "l" },
          { value: "g", i18nKey: "g" },
        ],
      },
      defaultValue: "ml",
      required: true,
    },
    {
      id: "ingredient",
      type: {
        kind: "select",
        options: [{ value: "water", i18nKey: "water" }, ...ingredientOptions.slice(1)],
      },
      defaultValue: "water",
      required: false,
    },
  ],
  outputs: [
    {
      id: "toValue",
      format: "number",
      precision: 2,
      highlight: true,
    },
    {
      id: "weightGrams",
      format: "number",
      precision: 1,
      unit: "g",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    references: [
      {
        title: "USDA Nutrition Database",
        url: "https://fdc.nal.usda.gov/",
        authority: "United States Department of Agriculture",
      },
      {
        title: "Cooking Unit Conversions",
        url: "https://www.thespruceeats.com/cooking-measurement-conversions-1319905",
        authority: "The Spruce Eats",
      },
      {
        title: "Ingredient Density Guide",
        url: "https://www.serious eats.com/baking-percentages-baker-math",
        authority: "Serious Eats",
      },
    ],
    accuracyNote:
      "Ingredient densities are approximations based on standard cooking references. Actual density varies based on moisture content, temperature, and packing method. For precision recipes, weight measurements using a kitchen scale are recommended.",
  },
  related: ["weight", "volume"],
  tags: ["cooking", "recipe", "measurement", "conversion", "baking", "kitchen"],
});
