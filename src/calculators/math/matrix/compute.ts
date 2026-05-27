import { z } from "zod";

export const inputSchema = z.object({
  operation: z.enum(["add", "subtract", "multiply", "determinant"]),
  matrixSize: z.enum(["2x2", "3x3"]),
  // 2x2 matrix: a, b, c, d
  a11: z.number(),
  a12: z.number().optional(),
  a13: z.number().optional(),
  a21: z.number(),
  a22: z.number().optional(),
  a23: z.number().optional(),
  a31: z.number().optional(),
  a32: z.number().optional(),
  a33: z.number().optional(),
  // Second matrix for add/subtract/multiply
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

export type MatrixInputs = z.infer<typeof inputSchema>;

export interface MatrixResult extends Record<string, unknown> {
  readonly result: string;
  readonly determinant?: number;
  readonly c11?: number;
  readonly c12?: number;
  readonly c13?: number;
  readonly c21?: number;
  readonly c22?: number;
  readonly c23?: number;
  readonly c31?: number;
  readonly c32?: number;
  readonly c33?: number;
}

function det2x2(a: number, b: number, c: number, d: number): number {
  return a * d - b * c;
}

function det3x3(
  a: number, b: number, c: number,
  d: number, e: number, f: number,
  g: number, h: number, i: number
): number {
  return (
    a * (e * i - f * h) -
    b * (d * i - f * g) +
    c * (d * h - e * g)
  );
}

export function compute(inputs: MatrixInputs): MatrixResult {
  if (inputs.matrixSize === "2x2") {
    const a = inputs.a11;
    const b = inputs.a12 ?? 0;
    const c = inputs.a21;
    const d = inputs.a22 ?? 0;

    if (inputs.operation === "determinant") {
      const det = det2x2(a, b, c, d);
      return {
        result: det.toString(),
        determinant: Math.round(det * 10000) / 10000,
      };
    }

    const b11 = inputs.b11 ?? 0;
    const b12 = inputs.b12 ?? 0;
    const b21 = inputs.b21 ?? 0;
    const b22 = inputs.b22 ?? 0;

    if (inputs.operation === "add") {
      return {
        result: "addition",
        c11: a + b11,
        c12: b + b12,
        c21: c + b21,
        c22: d + b22,
      };
    }

    if (inputs.operation === "subtract") {
      return {
        result: "subtraction",
        c11: a - b11,
        c12: b - b12,
        c21: c - b21,
        c22: d - b22,
      };
    }

    if (inputs.operation === "multiply") {
      return {
        result: "multiplication",
        c11: a * b11 + b * b21,
        c12: a * b12 + b * b22,
        c21: c * b11 + d * b21,
        c22: c * b12 + d * b22,
      };
    }
  }

  // 3x3 operations
  const a = inputs.a11;
  const b = inputs.a12 ?? 0;
  const c = inputs.a13 ?? 0;
  const d = inputs.a21;
  const e = inputs.a22 ?? 0;
  const f = inputs.a23 ?? 0;
  const g = inputs.a31 ?? 0;
  const h = inputs.a32 ?? 0;
  const i = inputs.a33 ?? 0;

  if (inputs.operation === "determinant") {
    const det = det3x3(a, b, c, d, e, f, g, h, i);
    return {
      result: det.toString(),
      determinant: Math.round(det * 10000) / 10000,
    };
  }

  const b11 = inputs.b11 ?? 0;
  const b12 = inputs.b12 ?? 0;
  const b13 = inputs.b13 ?? 0;
  const b21 = inputs.b21 ?? 0;
  const b22 = inputs.b22 ?? 0;
  const b23 = inputs.b23 ?? 0;
  const b31 = inputs.b31 ?? 0;
  const b32 = inputs.b32 ?? 0;
  const b33 = inputs.b33 ?? 0;

  if (inputs.operation === "add") {
    return {
      result: "addition",
      c11: a + b11,
      c12: b + b12,
      c13: c + b13,
      c21: d + b21,
      c22: e + b22,
      c23: f + b23,
      c31: g + b31,
      c32: h + b32,
      c33: i + b33,
    };
  }

  if (inputs.operation === "subtract") {
    return {
      result: "subtraction",
      c11: a - b11,
      c12: b - b12,
      c13: c - b13,
      c21: d - b21,
      c22: e - b22,
      c23: f - b23,
      c31: g - b31,
      c32: h - b32,
      c33: i - b33,
    };
  }

  // multiply 3x3
  return {
    result: "multiplication",
    c11: a * b11 + b * b21 + c * b31,
    c12: a * b12 + b * b22 + c * b32,
    c13: a * b13 + b * b23 + c * b33,
    c21: d * b11 + e * b21 + f * b31,
    c22: d * b12 + e * b22 + f * b32,
    c23: d * b13 + e * b23 + f * b33,
    c31: g * b11 + h * b21 + i * b31,
    c32: g * b12 + h * b22 + i * b32,
    c33: g * b13 + h * b23 + i * b33,
  };
}
