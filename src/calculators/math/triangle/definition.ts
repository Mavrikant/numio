import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

const validatedSchema = z
  .object({
    method: z.enum(["sss", "sas", "asa", "aas", "ssa"]),
    sideA: z.number().positive().optional(),
    sideB: z.number().positive().optional(),
    sideC: z.number().positive().optional(),
    angleA: z.number().min(0).max(180).optional(),
    angleB: z.number().min(0).max(180).optional(),
    angleC: z.number().min(0).max(180).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.method === "sss") {
      if (!data.sideA || !data.sideB || !data.sideC) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "SSS method requires three sides (a, b, c)",
        });
        return;
      }
      // Triangle inequality: sum of any two sides > third side
      if (
        data.sideA + data.sideB <= data.sideC ||
        data.sideB + data.sideC <= data.sideA ||
        data.sideA + data.sideC <= data.sideB
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Triangle inequality violated: sum of any two sides must be greater than the third",
        });
      }
    } else if (data.method === "sas") {
      if (!data.sideA || !data.sideB || data.angleC === undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "SAS method requires two sides (a, b) and included angle (C)",
        });
        return;
      }
      if (data.angleC <= 0 || data.angleC >= 180) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["angleC"],
          message: "Angle must be between 0 and 180 degrees",
        });
      }
    } else if (data.method === "asa") {
      if (data.angleA === undefined || !data.sideB || data.angleB === undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "ASA method requires two angles (A, B) and included side (b)",
        });
        return;
      }
      if (data.angleA + data.angleB >= 180) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Sum of angles A and B must be less than 180 degrees",
        });
      }
    } else if (data.method === "aas") {
      if (data.angleA === undefined || data.angleB === undefined || !data.sideC) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "AAS method requires two angles (A, B) and opposite side (c)",
        });
        return;
      }
      if (data.angleA + data.angleB >= 180) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Sum of angles A and B must be less than 180 degrees",
        });
      }
    } else if (data.method === "ssa") {
      if (!data.sideA || !data.sideB || data.angleA === undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "SSA method requires two sides (a, b) and angle opposite to side a (A)",
        });
        return;
      }
      if (data.angleA <= 0 || data.angleA >= 180) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["angleA"],
          message: "Angle must be between 0 and 180 degrees",
        });
      }
    }
  });

export default defineCalculator({
  slug: "triangle",
  category: "math",
  priority: "P1",
  icon: "triangle",
  inputs: [
    {
      id: "method",
      type: {
        kind: "select",
        options: [
          { value: "sss", i18nKey: "sss" },
          { value: "sas", i18nKey: "sas" },
          { value: "asa", i18nKey: "asa" },
          { value: "aas", i18nKey: "aas" },
          { value: "ssa", i18nKey: "ssa" },
        ],
      },
      defaultValue: "sss",
      required: true,
    },
    {
      id: "sideA",
      type: {
        kind: "number",
        min: 0.01,
        max: 10000,
        step: 0.1,
      },
      defaultValue: 3,
      required: false,
    },
    {
      id: "sideB",
      type: {
        kind: "number",
        min: 0.01,
        max: 10000,
        step: 0.1,
      },
      defaultValue: 4,
      required: false,
    },
    {
      id: "sideC",
      type: {
        kind: "number",
        min: 0.01,
        max: 10000,
        step: 0.1,
      },
      defaultValue: 5,
      required: false,
    },
    {
      id: "angleA",
      type: {
        kind: "number",
        min: 0,
        max: 180,
        step: 0.1,
      },
      defaultValue: 60,
      required: false,
    },
    {
      id: "angleB",
      type: {
        kind: "number",
        min: 0,
        max: 180,
        step: 0.1,
      },
      defaultValue: 60,
      required: false,
    },
    {
      id: "angleC",
      type: {
        kind: "number",
        min: 0,
        max: 180,
        step: 0.1,
      },
      defaultValue: 60,
      required: false,
    },
  ],
  outputs: [
    { id: "sideA", format: "number", precision: 4 },
    { id: "sideB", format: "number", precision: 4 },
    { id: "sideC", format: "number", precision: 4 },
    { id: "angleA", format: "number", precision: 2, unit: "percent" },
    { id: "angleB", format: "number", precision: 2, unit: "percent" },
    { id: "angleC", format: "number", precision: 2, unit: "percent" },
    { id: "area", format: "number", precision: 4, highlight: true },
    { id: "perimeter", format: "number", precision: 4 },
    { id: "triangleType", format: "text" },
  ],
  inputSchema: validatedSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "\\text{Law of Cosines: } c^2 = a^2 + b^2 - 2ab\\cos(C) \\quad \\text{Area: } A = \\sqrt{s(s-a)(s-b)(s-c)}",
    references: [
      {
        title: "Law of Cosines",
        url: "https://en.wikipedia.org/wiki/Law_of_cosines",
        authority: "Wikipedia",
      },
      {
        title: "Law of Sines",
        url: "https://en.wikipedia.org/wiki/Law_of_sines",
        authority: "Wikipedia",
      },
      {
        title: "Heron's Formula",
        url: "https://en.wikipedia.org/wiki/Heron%27s_formula",
        authority: "Wikipedia",
      },
    ],
  },
  related: ["pythagorean", "square-root"],
  tags: ["triangle", "geometry", "sides", "angles", "area"],
});
