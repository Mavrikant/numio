import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  operation: z.enum(["add", "subtract", "multiply", "determinant"]),
  matrixSize: z.enum(["2x2", "3x3"]),
  a11: z.number(),
  a12: z.number().optional(),
  a13: z.number().optional(),
  a21: z.number(),
  a22: z.number().optional(),
  a23: z.number().optional(),
  a31: z.number().optional(),
  a32: z.number().optional(),
  a33: z.number().optional(),
  b11: z.number().optional(),
  b12: z.number().optional(),
  b13: z.number().optional(),
  b21: z.number().optional(),
  b22: z.number().optional(),
  b23: z.number().optional(),
  b31: z.number().optional(),
  b32: z.number().optional(),
  b33: z.number().optional(),
});

export default defineCalculator({
  slug: "matrix",
  category: "math",
  priority: "P2",
  icon: "grid",
  inputs: [
    {
      id: "operation",
      type: {
        kind: "select",
        options: [
          { value: "add", i18nKey: "add" },
          { value: "subtract", i18nKey: "subtract" },
          { value: "multiply", i18nKey: "multiply" },
          { value: "determinant", i18nKey: "determinant" },
        ],
      },
      defaultValue: "add",
      required: true,
    },
    {
      id: "matrixSize",
      type: {
        kind: "select",
        options: [
          { value: "2x2", i18nKey: "2x2" },
          { value: "3x3", i18nKey: "3x3" },
        ],
      },
      defaultValue: "2x2",
      required: true,
    },
    { id: "a11", type: { kind: "number", step: 0.1 }, defaultValue: 1, required: true },
    { id: "a12", type: { kind: "number", step: 0.1 }, defaultValue: 2, required: false },
    { id: "a13", type: { kind: "number", step: 0.1 }, defaultValue: 0, required: false },
    { id: "a21", type: { kind: "number", step: 0.1 }, defaultValue: 3, required: true },
    { id: "a22", type: { kind: "number", step: 0.1 }, defaultValue: 4, required: false },
    { id: "a23", type: { kind: "number", step: 0.1 }, defaultValue: 0, required: false },
    { id: "a31", type: { kind: "number", step: 0.1 }, defaultValue: 0, required: false },
    { id: "a32", type: { kind: "number", step: 0.1 }, defaultValue: 0, required: false },
    { id: "a33", type: { kind: "number", step: 0.1 }, defaultValue: 0, required: false },
    { id: "b11", type: { kind: "number", step: 0.1 }, defaultValue: 5, required: false },
    { id: "b12", type: { kind: "number", step: 0.1 }, defaultValue: 6, required: false },
    { id: "b13", type: { kind: "number", step: 0.1 }, defaultValue: 0, required: false },
    { id: "b21", type: { kind: "number", step: 0.1 }, defaultValue: 7, required: false },
    { id: "b22", type: { kind: "number", step: 0.1 }, defaultValue: 8, required: false },
    { id: "b23", type: { kind: "number", step: 0.1 }, defaultValue: 0, required: false },
    { id: "b31", type: { kind: "number", step: 0.1 }, defaultValue: 0, required: false },
    { id: "b32", type: { kind: "number", step: 0.1 }, defaultValue: 0, required: false },
    { id: "b33", type: { kind: "number", step: 0.1 }, defaultValue: 0, required: false },
  ],
  outputs: [
    { id: "result", format: "text" },
    { id: "determinant", format: "number", precision: 4 },
    { id: "c11", format: "number", precision: 2 },
    { id: "c12", format: "number", precision: 2 },
    { id: "c13", format: "number", precision: 2 },
    { id: "c21", format: "number", precision: 2 },
    { id: "c22", format: "number", precision: 2 },
    { id: "c23", format: "number", precision: 2 },
    { id: "c31", format: "number", precision: 2 },
    { id: "c32", format: "number", precision: 2 },
    { id: "c33", format: "number", precision: 2 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\det(A) = ad-bc \\text{ (2×2)}; \\text{expansion by minors (3×3)}",
    references: [
      {
        title: "Matrix (mathematics)",
        url: "https://en.wikipedia.org/wiki/Matrix_(mathematics)",
        authority: "Wikipedia",
      },
      {
        title: "Determinant — Linear Algebra",
        url: "https://en.wikipedia.org/wiki/Determinant",
        authority: "Wikipedia",
      },
    ],
  },
  related: ["ratio", "percentage"],
  tags: ["math", "matrix", "linear algebra", "determinant"],
});
