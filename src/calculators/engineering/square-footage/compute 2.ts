import { z } from "zod";

export const inputSchema = z.object({
  shape: z.enum(["rectangle", "circle", "triangle"]),
  // Rectangle
  length: z.number().positive().optional(),
  width: z.number().positive().optional(),
  // Circle
  radius: z.number().positive().optional(),
  diameter: z.number().positive().optional(),
  // Triangle
  base: z.number().positive().optional(),
  height: z.number().positive().optional(),
}).superRefine((data, ctx) => {
  if (data.shape === "rectangle") {
    if (!data.length || !data.width) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Rectangle requires length and width.",
      });
    }
  }
  if (data.shape === "circle") {
    if (!data.radius && !data.diameter) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Circle requires radius or diameter.",
      });
    }
  }
  if (data.shape === "triangle") {
    if (!data.base || !data.height) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Triangle requires base and height.",
      });
    }
  }
});

export type SquareFootageInputs = z.infer<typeof inputSchema>;

export interface SquareFootageResult extends Record<string, unknown> {
  readonly areaM2: number;
  readonly areaFt2: number;
  readonly perimeterM: number;
  readonly perimeterFt: number;
}

// 1 ft² = 0.092903 m²
const FT2_TO_M2 = 0.092903;
const M2_TO_FT2 = 1 / FT2_TO_M2; // ≈ 10.764
const FT_TO_M = 0.3048;
const M_TO_FT = 1 / FT_TO_M; // ≈ 3.28084

export function compute(inputs: SquareFootageInputs): SquareFootageResult {
  let areaM2 = 0;
  let perimeterM = 0;

  if (inputs.shape === "rectangle") {
    const length = inputs.length!;
    const width = inputs.width!;
    areaM2 = length * width;
    perimeterM = 2 * (length + width);
  } else if (inputs.shape === "circle") {
    // Use radius if provided, else derive from diameter
    const radius = inputs.radius ?? inputs.diameter! / 2;
    areaM2 = Math.PI * radius * radius;
    perimeterM = 2 * Math.PI * radius;
  } else if (inputs.shape === "triangle") {
    const base = inputs.base!;
    const height = inputs.height!;
    areaM2 = (base * height) / 2;
    // Perimeter requires all three sides — for now, assume isosceles approximation
    // For right triangle: hypotenuse = √(base² + height²)
    const hypotenuse = Math.sqrt(base * base + height * height);
    perimeterM = base + height + hypotenuse;
  }

  const areaFt2 = areaM2 * M2_TO_FT2;
  const perimeterFt = perimeterM * M_TO_FT;

  return {
    areaM2: Math.round(areaM2 * 1000) / 1000,
    areaFt2: Math.round(areaFt2 * 100) / 100,
    perimeterM: Math.round(perimeterM * 100) / 100,
    perimeterFt: Math.round(perimeterFt * 100) / 100,
  };
}
