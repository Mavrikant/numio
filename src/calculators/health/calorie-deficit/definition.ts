import { defineCalculator } from "@/types/calculator";
import { z } from "zod";
import { compute } from "./compute";

export default defineCalculator({
  slug: "calorie-deficit",
  category: "health",
  inputs: [
    {
      id: "currentWeight",
      type: "number",
      label: "Current Weight",
      defaultValue: 80,
      validation: z.number().min(20).max(500),
    },
    {
      id: "targetWeight",
      type: "number",
      label: "Target Weight",
      defaultValue: 70,
      validation: z.number().min(20).max(500),
    },
    {
      id: "unit",
      type: "select",
      label: "Unit",
      defaultValue: "metric",
      options: [
        { value: "metric", label: "kg" },
        { value: "imperial", label: "lbs" },
      ],
      validation: z.enum(["metric", "imperial"]),
    },
    {
      id: "dailyCalorieDeficit",
      type: "number",
      label: "Daily Calorie Deficit (kcal)",
      defaultValue: 500,
      validation: z.number().min(50).max(2000),
    },
  ],
  outputs: [
    {
      id: "weightToLoseKg",
      type: "number",
      label: "Weight to Lose (kg)",
      unit: "kg",
    },
    {
      id: "weeklyDeficit",
      type: "number",
      label: "Weekly Deficit (kcal)",
      unit: "kcal",
    },
    {
      id: "weeksToGoal",
      type: "number",
      label: "Weeks to Goal",
      unit: "weeks",
    },
    {
      id: "monthsToGoal",
      type: "number",
      label: "Months to Goal",
      unit: "months",
    },
    {
      id: "weeklyLossKg",
      type: "number",
      label: "Weekly Loss (kg)",
      unit: "kg/week",
    },
    {
      id: "totalCalorieDeficit",
      type: "number",
      label: "Total Calorie Deficit Needed (kcal)",
      unit: "kcal",
    },
  ],
  compute,
});
