import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "torque",
  category: "engineering",
  priority: "P1",
  icon: "rotate-cw",
  inputs: [
    {
      id: "momentOrForce",
      type: {
        kind: "select",
        options: [
          { value: "force", i18nKey: "solveForTorque" },
          { value: "moment", i18nKey: "solveForForce" },
        ],
      },
      defaultValue: "force",
      required: true,
    },
    {
      id: "force",
      type: { kind: "number", min: 0.001, step: 0.1 },
      defaultValue: 100,
      required: true,
    },
    {
      id: "distance",
      type: { kind: "number", min: 0.001, step: 0.01, unit: "m" },
      defaultValue: 0.5,
      required: true,
    },
  ],
  outputs: [
    {
      id: "torqueNm",
      format: "number",
      precision: 2,
      highlight: true,
    },
    {
      id: "forceN",
      format: "number",
      precision: 2,
    },
    {
      id: "distanceM",
      format: "number",
      precision: 3,
      unit: "m",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\tau = F \\times r",
    references: [
      {
        title: "Rotational Dynamics — Physics Textbooks (Serway & Jewett)",
        authority: "Cengage Learning",
      },
      {
        title: "Engineering Mechanics — Statics and Dynamics",
        authority: "Hibbeler, R.C. (Pearson)",
      },
    ],
    disclaimer:
      "This calculator assumes the force is applied perpendicular to the radius (maximum torque). If the force is applied at an angle, multiply the result by sin(angle).",
  },
  related: ["bending-stress", "beam-deflection"],
  tags: ["torque", "rotational force", "moment", "mechanics", "angular motion"],
});
