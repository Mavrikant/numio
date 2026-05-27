import { z } from "zod";

export const inputSchema = z.object({
  a: z.number().refine(n => n !== 0, "a cannot be 0"),
  b: z.number(),
  c: z.number(),
});

export type QuadraticInputs = z.infer<typeof inputSchema>;

export interface QuadraticResult extends Record<string, unknown> {
  readonly a: number;
  readonly b: number;
  readonly c: number;
  readonly discriminant: number;
  readonly root1: number | string;
  readonly root2: number | string;
  readonly vertex_x: number;
  readonly vertex_y: number;
  readonly axis_of_symmetry: number;
  readonly root1_type: "real" | "complex";
}

export function compute(inputs: QuadraticInputs): QuadraticResult {
  const { a, b, c } = inputs;
  const discriminant = b * b - 4 * a * c;
  const vertex_x = -b / (2 * a);
  const vertex_y = a * vertex_x * vertex_x + b * vertex_x + c;

  let root1: number | string;
  let root2: number | string;
  let root1_type: "real" | "complex" = "real";

  if (discriminant >= 0) {
    const sqrt_disc = Math.sqrt(discriminant);
    root1 = (-b + sqrt_disc) / (2 * a);
    root2 = (-b - sqrt_disc) / (2 * a);
    root1 = Math.round(root1 * 10000) / 10000;
    root2 = Math.round(root2 * 10000) / 10000;
  } else {
    root1_type = "complex";
    const real = -b / (2 * a);
    const imag = Math.sqrt(-discriminant) / (2 * a);
    root1 = `${Math.round(real * 10000) / 10000} + ${Math.round(imag * 10000) / 10000}i`;
    root2 = `${Math.round(real * 10000) / 10000} - ${Math.round(imag * 10000) / 10000}i`;
  }

  return {
    a,
    b,
    c,
    discriminant: Math.round(discriminant * 10000) / 10000,
    root1,
    root2,
    vertex_x: Math.round(vertex_x * 10000) / 10000,
    vertex_y: Math.round(vertex_y * 10000) / 10000,
    axis_of_symmetry: Math.round(vertex_x * 10000) / 10000,
    root1_type,
  };
}
