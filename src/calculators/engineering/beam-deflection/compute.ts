import { z } from "zod";

export const inputSchema = z.object({
  beamType: z.enum(["simply-supported", "cantilever"]),
  loadType: z.enum(["point-center", "point-end", "udl"]),
  load: z.number().positive(), // kN (point) or kN/m (udl)
  span: z.number().positive(), // metres
  E: z.number().positive(),   // GPa (Young's modulus)
  I: z.number().positive(),   // cm⁴ (second moment of area)
}).superRefine((data, ctx) => {
  if (data.beamType === "simply-supported" && data.loadType === "point-end") {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["loadType"],
      message: "Point load at free end is only valid for cantilever beams.",
    });
  }
});

export type BeamDeflectionInputs = z.infer<typeof inputSchema>;

export interface BeamDeflectionResult extends Record<string, unknown> {
  readonly maxDeflection: number;    // mm
  readonly maxBendingMoment: number; // N·m
  readonly maxShear: number;         // N
  readonly reactionA: number;        // N (at fixed end / left support)
  readonly reactionB: number;        // N (at right support, 0 for cantilever)
}

export function compute(inputs: BeamDeflectionInputs): BeamDeflectionResult {
  const { beamType, loadType, load, span: L, E, I } = inputs;

  // Unit conversions
  const E_Pa = E * 1e9;             // GPa → Pa
  const I_m4 = I * 1e-8;           // cm⁴ → m⁴
  const EI = E_Pa * I_m4;          // N·m²

  let maxDeflection = 0; // m (will convert to mm)
  let maxBendingMoment = 0; // N·m
  let maxShear = 0; // N
  let reactionA = 0; // N
  let reactionB = 0; // N

  if (beamType === "simply-supported") {
    if (loadType === "point-center") {
      // F = load in kN → N
      const F = load * 1000;
      maxDeflection = (F * L * L * L) / (48 * EI);
      maxBendingMoment = (F * L) / 4;
      maxShear = F / 2;
      reactionA = F / 2;
      reactionB = F / 2;
    } else if (loadType === "udl") {
      // w = load in kN/m → N/m
      const w = load * 1000;
      maxDeflection = (5 * w * Math.pow(L, 4)) / (384 * EI);
      maxBendingMoment = (w * L * L) / 8;
      maxShear = (w * L) / 2;
      reactionA = (w * L) / 2;
      reactionB = (w * L) / 2;
    }
  } else if (beamType === "cantilever") {
    if (loadType === "point-end") {
      const F = load * 1000;
      maxDeflection = (F * L * L * L) / (3 * EI);
      maxBendingMoment = F * L;
      maxShear = F;
      reactionA = F;
      reactionB = 0;
    } else if (loadType === "udl") {
      const w = load * 1000;
      maxDeflection = (w * Math.pow(L, 4)) / (8 * EI);
      maxBendingMoment = (w * L * L) / 2;
      maxShear = w * L;
      reactionA = w * L;
      reactionB = 0;
    } else if (loadType === "point-center") {
      // Cantilever with point load at midspan
      const F = load * 1000;
      const a = L / 2;
      // δ_max at free end = F·a²·(3L - a) / (6EI) for load at distance a from fixed end
      maxDeflection = (F * a * a * (3 * L - a)) / (6 * EI);
      maxBendingMoment = F * a;
      maxShear = F;
      reactionA = F;
      reactionB = 0;
    }
  }

  return {
    maxDeflection: maxDeflection * 1000, // m → mm
    maxBendingMoment,
    maxShear,
    reactionA,
    reactionB,
  };
}
