import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

const validatedSchema = z.object({
  mode: z.enum(["find-c", "find-a", "find-b"]),
  a: z.number().min(0).optional(),
  b: z.number().min(0).optional(),
  c: z.number().min(0).optional(),
}).superRefine((data, ctx) => {
  if (data.mode === "find-c") {
    if (!data.a || !data.b) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Sides a and b required" });
    }
  } else if (data.mode === "find-a") {
    if (!data.b || !data.c) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Sides b and c required" });
    }
  } else if (!data.a || !data.c) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Sides a and c required" });
  }
});

export default defineCalculator({
  slug: "pythagorean",
  category: "math",
  priority: "P1",
  icon: "square-root",
  inputs: [
    { id: "mode", type: { kind: "select", options: [{ value: "find-c", i18nKey: "findC" }, { value: "find-a", i18nKey: "findA" }, { value: "find-b", i18nKey: "findB" }] }, defaultValue: "find-c", required: true },
    { id: "a", type: { kind: "number", min: 0.01, max: 10000, step: 0.1 }, defaultValue: 3, required: false },
    { id: "b", type: { kind: "number", min: 0.01, max: 10000, step: 0.1 }, defaultValue: 4, required: false },
    { id: "c", type: { kind: "number", min: 0.01, max: 10000, step: 0.1 }, defaultValue: 5, required: false },
  ],
  outputs: [
    { id: "a", format: "number", precision: 4 },
    { id: "b", format: "number", precision: 4 },
    { id: "c", format: "number", precision: 4, highlight: true },
    { id: "area", format: "number", precision: 4 },
    { id: "perimeter", format: "number", precision: 4 },
  ],
  inputSchema: validatedSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "a^2 + b^2 = c^2",
    references: [
      { title: "Pythagorean Theorem", url: "https://en.wikipedia.org/wiki/Pythagorean_theorem", authority: "Wikipedia" },
    ],
  },
  related: ["triangle", "square-root"],
  tags: ["pythagorean", "geometry", "right-triangle"],
});
