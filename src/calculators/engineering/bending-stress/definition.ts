import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "bending-stress",
  category: "engineering",
  priority: "P2",
  icon: "zap",
  inputs: [
    {
      id: "moment",
      type: { kind: "number", min: 0.001, step: 0.1, unit: "pa" },
      defaultValue: 50,
      required: true,
    },
    {
      id: "sectionModulus",
      type: { kind: "number", min: 0.001, step: 10 },
      defaultValue: 200,
      required: true,
    },
    {
      id: "materialType",
      type: {
        kind: "select",
        options: [
          { value: "steel", i18nKey: "steel" },
          { value: "aluminum", i18nKey: "aluminum" },
          { value: "concrete", i18nKey: "concrete" },
          { value: "timber", i18nKey: "timber" },
        ],
      },
      defaultValue: "steel",
      required: true,
    },
  ],
  outputs: [
    {
      id: "stressMPa",
      format: "number",
      precision: 1,
      unit: "pa",
      highlight: true,
    },
    {
      id: "yieldStrengthMPa",
      format: "number",
      precision: 1,
      unit: "pa",
    },
    {
      id: "safetyFactor",
      format: "number",
      precision: 2,
    },
    {
      id: "utilizationRatio",
      format: "percent",
      precision: 1,
    },
    {
      id: "classification",
      format: "text",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\sigma = \\frac{M}{Z}",
    references: [
      {
        title: "EN 1993-1-1: Eurocode 3 — Design of steel structures",
        authority: "European Committee for Standardization (CEN)",
      },
      {
        title: "Mechanics of Materials",
        authority: "Hibbeler, R.C. (Pearson)",
      },
    ],
    disclaimer:
      "This calculator provides bending stress estimates based on Euler-Bernoulli beam theory. Actual stress distribution may vary with material behavior, stress concentrations, and dynamic effects. Always consult a licensed structural engineer for design decisions.",
  },
  related: ["beam-deflection", "torque"],
  tags: ["bending stress", "section modulus", "structural design", "mechanics", "safety factor"],
});
