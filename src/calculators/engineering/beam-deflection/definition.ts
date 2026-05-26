import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "beam-deflection",
  category: "engineering",
  priority: "P1",
  icon: "ruler",
  inputs: [
    {
      id: "beamType",
      type: {
        kind: "select",
        options: [
          { value: "simply-supported", i18nKey: "simplySupported" },
          { value: "cantilever", i18nKey: "cantilever" },
        ],
      },
      defaultValue: "simply-supported",
      required: true,
    },
    {
      id: "loadType",
      type: {
        kind: "select",
        options: [
          { value: "point-center", i18nKey: "pointCenter" },
          { value: "point-end", i18nKey: "pointEnd" },
          { value: "udl", i18nKey: "udl" },
        ],
      },
      defaultValue: "point-center",
      required: true,
    },
    {
      id: "load",
      type: { kind: "number", min: 0.001, step: 0.1 },
      defaultValue: 10,
      required: true,
    },
    {
      id: "span",
      type: { kind: "number", min: 0.01, step: 0.1, unit: "m" },
      defaultValue: 5,
      required: true,
    },
    {
      id: "E",
      type: { kind: "number", min: 0.001, step: 1 },
      defaultValue: 200,
      required: true,
    },
    {
      id: "I",
      type: { kind: "number", min: 0.001, step: 100 },
      defaultValue: 1000,
      required: true,
    },
  ],
  outputs: [
    {
      id: "maxDeflection",
      format: "number",
      precision: 3,
      unit: "mm",
      highlight: true,
    },
    {
      id: "maxBendingMoment",
      format: "number",
      precision: 1,
    },
    {
      id: "maxShear",
      format: "number",
      precision: 1,
    },
    {
      id: "reactionA",
      format: "number",
      precision: 1,
    },
    {
      id: "reactionB",
      format: "number",
      precision: 1,
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "\\delta_{\\text{max}} = \\frac{FL^3}{48EI} \\text{ (SS point)}, \\quad \\delta_{\\text{max}} = \\frac{5wL^4}{384EI} \\text{ (SS UDL)}",
    references: [
      {
        title: "Roark's Formulas for Stress and Strain, 8th edition",
        authority: "Young, W.C. & Budynas, R.G. (McGraw-Hill, 2011)",
      },
      {
        title: "Mechanics of Materials",
        authority: "Hibbeler, R.C. (Pearson)",
      },
    ],
    disclaimer:
      "This calculator assumes linearly elastic, homogeneous, prismatic beams with small deflections. Results do not account for shear deformation, self-weight, or pre-stress. Always verify structural designs with a licensed engineer.",
  },
  related: ["concrete"],
  tags: ["beam", "deflection", "structural", "bending moment", "shear force", "Euler-Bernoulli"],
});
