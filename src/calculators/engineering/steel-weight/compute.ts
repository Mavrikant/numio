import { z } from "zod";
import { MATERIAL_DENSITIES, STEEL_REBAR_TABLE, STEEL_PIPE_TABLE } from "../_helpers/structures";

export const inputSchema = z
  .object({
    type: z.enum(["bar", "rebar", "pipe", "plate"]),
    material: z.enum(["steel", "aluminum", "copper"]),
    // Rebar: diameter
    rebarDiameter: z.number().positive().optional(),
    // Pipe: outer diameter, wall thickness (or select from table)
    pipeOuterDia: z.number().positive().optional(),
    pipeWallThickness: z.number().positive().optional(),
    // Plate: width, height
    plateWidth: z.number().positive().optional(),
    plateHeight: z.number().positive().optional(),
    plateThickness: z.number().positive().optional(),
    // Common to all
    lengthM: z.number().positive(),
    quantity: z.number().int().positive().default(1),
  })
  .superRefine((data, ctx) => {
    // Type-specific required fields. Without these refinements the schema
    // would accept e.g. `{type:"rebar", lengthM:6}` with no diameter and
    // compute() would dereference a nullish field, returning NaN.
    if ((data.type === "rebar" || data.type === "bar") && data.rebarDiameter == null) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["rebarDiameter"],
        message: "Required for rebar/bar",
      });
    }
    if (data.type === "pipe") {
      if (data.pipeOuterDia == null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["pipeOuterDia"],
          message: "Required for pipe",
        });
      }
      if (data.pipeWallThickness == null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["pipeWallThickness"],
          message: "Required for pipe",
        });
      }
    }
    if (data.type === "plate") {
      if (data.plateWidth == null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["plateWidth"],
          message: "Required for plate",
        });
      }
      if (data.plateThickness == null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["plateThickness"],
          message: "Required for plate",
        });
      }
    }
  });

export type SteelWeightInputs = z.infer<typeof inputSchema>;

export interface SteelWeightResult extends Record<string, unknown> {
  readonly weightKgPerMeter: number;
  readonly totalWeightKg: number;
  readonly totalWeightLb: number;
  readonly materialDensity: number;
}

// Conversion factors
const KG_TO_LB = 2.20462;

/**
 * Calculate bar cross-sectional area (mm²) from diameter (mm)
 * For circular bar: A = π × (d/2)²
 */
function calculateBarArea(diameterMm: number): number {
  return Math.PI * (diameterMm / 2) ** 2;
}

/**
 * Calculate pipe cross-sectional area (mm²) from OD and wall thickness
 * A = π × [(OD/2)² - ((OD - 2×WT)/2)²]
 */
function calculatePipeArea(outerDiaMm: number, wallThicknessMm: number): number {
  const outerRadius = outerDiaMm / 2;
  const innerRadius = outerRadius - wallThicknessMm;
  return Math.PI * (outerRadius ** 2 - Math.max(0, innerRadius) ** 2);
}

/**
 * Calculate plate cross-sectional area (mm²) from width and thickness
 * A = width × thickness (for length-wise weight calculation)
 */
function calculatePlateArea(widthMm: number, thicknessMm: number): number {
  return widthMm * thicknessMm;
}

export function compute(inputs: SteelWeightInputs): SteelWeightResult {
  const density = MATERIAL_DENSITIES[inputs.material];
  const lengthM = inputs.lengthM;
  const quantity = inputs.quantity;

  let areaMm2 = 0;

  if (inputs.type === "rebar") {
    const dia = inputs.rebarDiameter!;
    // Check if standard rebar diameter exists
    const standardArea = STEEL_REBAR_TABLE[dia];
    if (standardArea !== undefined) {
      areaMm2 = standardArea;
    } else {
      // Calculate from diameter
      areaMm2 = calculateBarArea(dia);
    }
  } else if (inputs.type === "bar") {
    const dia = inputs.rebarDiameter!;
    areaMm2 = calculateBarArea(dia);
  } else if (inputs.type === "pipe") {
    const outerDia = inputs.pipeOuterDia!;
    const wallThickness = inputs.pipeWallThickness!;
    areaMm2 = calculatePipeArea(outerDia, wallThickness);
  } else if (inputs.type === "plate") {
    const width = inputs.plateWidth!;
    const thickness = inputs.plateThickness!;
    areaMm2 = calculatePlateArea(width, thickness);
  }

  // Weight per meter = area (mm²) × length (m) × density (kg/m³) × conversion
  // area_m2 = area_mm2 × 1e-6
  // volume_m3 = area_m2 × length_m
  // weight_kg = volume_m3 × density
  // Weight per meter (single piece): (area_mm2 × 1e-6 / 1) × 1 × density
  const weightKgPerMeter = (areaMm2 * 1e-6) * density;
  const totalWeightKg = weightKgPerMeter * lengthM * quantity;
  const totalWeightLb = totalWeightKg * KG_TO_LB;

  return {
    weightKgPerMeter: Math.round(weightKgPerMeter * 1000) / 1000,
    totalWeightKg: Math.round(totalWeightKg * 100) / 100,
    totalWeightLb: Math.round(totalWeightLb * 100) / 100,
    materialDensity: density,
  };
}
