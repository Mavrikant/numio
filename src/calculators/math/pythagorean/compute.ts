import { z } from "zod";

export const inputSchema = z.object({
  mode: z.enum(["find-c", "find-a", "find-b"]),
  a: z.number().min(0).optional(),
  b: z.number().min(0).optional(),
  c: z.number().min(0).optional(),
});

export type PythagoreanInputs = z.infer<typeof inputSchema>;

export interface PythagoreanResult extends Record<string, unknown> {
  readonly a: number;
  readonly b: number;
  readonly c: number;
  readonly area: number;
  readonly perimeter: number;
}

export function compute(inputs: PythagoreanInputs): PythagoreanResult {
  let a: number;
  let b: number;
  let c: number;

  if (inputs.mode === "find-c") {
    a = inputs.a!;
    b = inputs.b!;
    c = Math.sqrt(a * a + b * b);
  } else if (inputs.mode === "find-a") {
    b = inputs.b!;
    c = inputs.c!;
    a = Math.sqrt(Math.max(0, c * c - b * b));
  } else {
    // find-b
    a = inputs.a!;
    c = inputs.c!;
    b = Math.sqrt(Math.max(0, c * c - a * a));
  }

  const area = (a * b) / 2;
  const perimeter = a + b + c;

  return {
    a: Math.round(a * 10000) / 10000,
    b: Math.round(b * 10000) / 10000,
    c: Math.round(c * 10000) / 10000,
    area: Math.round(area * 10000) / 10000,
    perimeter: Math.round(perimeter * 10000) / 10000,
  };
}
