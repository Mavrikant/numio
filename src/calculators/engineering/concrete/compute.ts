import { z } from "zod";

export const inputSchema = z
  .object({
    shape: z.enum(["slab", "column", "cylinder", "footing"]),
    unit: z.enum(["metric", "imperial"]),
    // slab / column / footing: length, width, thickness/height/depth
    length: z.number().positive().optional(),
    width: z.number().positive().optional(),
    thickness: z.number().positive().optional(),
    // cylinder: diameter, height
    diameter: z.number().positive().optional(),
    height: z.number().positive().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.shape === "slab" || data.shape === "footing") {
      if (!data.length || !data.width || !data.thickness) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Slab/footing requires length, width, and thickness." });
      }
    }
    if (data.shape === "column") {
      if (!data.length || !data.width || !data.height) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Column requires length, width, and height." });
      }
    }
    if (data.shape === "cylinder") {
      if (!data.diameter || !data.height) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Cylinder requires diameter and height." });
      }
    }
  });

export type ConcreteInputs = z.infer<typeof inputSchema>;

export interface ConcreteResult extends Record<string, unknown> {
  readonly volumeM3: number;
  readonly volumeYd3: number;
  readonly bags40kg: number;
  readonly bags60lb: number;
}

// Standard 1:2:3 mix — ~8 bags of 40 kg cement per m³ of concrete
const BAGS_PER_M3 = 8;
// 1 yd³ = 0.764555 m³
const YD3_PER_M3 = 1 / 0.764555;
// imperial: 1 ft = 0.3048 m
const FT_TO_M = 0.3048;
// 60 lb bag ≈ 27.2 kg; standard US: ~5.5 bags 60lb per yd³ ≈ 7.2 per m³
const BAGS60LB_PER_M3 = 7.2;

export function compute(inputs: ConcreteInputs): ConcreteResult {
  const { shape, unit } = inputs;

  // convert imperial (feet) to metric (metres)
  const toM = (v: number) => (unit === "imperial" ? v * FT_TO_M : v);

  let volumeM3 = 0;

  if (shape === "slab" || shape === "footing") {
    const L = toM(inputs.length!);
    const W = toM(inputs.width!);
    const T = toM(inputs.thickness!);
    volumeM3 = L * W * T;
  } else if (shape === "column") {
    const L = toM(inputs.length!);
    const W = toM(inputs.width!);
    const H = toM(inputs.height!);
    volumeM3 = L * W * H;
  } else if (shape === "cylinder") {
    const D = toM(inputs.diameter!);
    const H = toM(inputs.height!);
    const r = D / 2;
    volumeM3 = Math.PI * r * r * H;
  }

  const volumeYd3 = volumeM3 * YD3_PER_M3;
  const bags40kg = Math.ceil(volumeM3 * BAGS_PER_M3);
  const bags60lb = Math.ceil(volumeM3 * BAGS60LB_PER_M3);

  return { volumeM3, volumeYd3, bags40kg, bags60lb };
}
