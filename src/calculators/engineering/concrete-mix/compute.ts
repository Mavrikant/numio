import { z } from "zod";

// Standard concrete mix ratios (cement:sand:aggregate by volume)
// Mix grade and corresponding proportions (volumetric)
export const MIX_RATIOS = {
  M10: { cement: 1, sand: 3, aggregate: 6, waterCementRatio: 0.6 },
  M15: { cement: 1, sand: 2, aggregate: 4, waterCementRatio: 0.55 },
  M20: { cement: 1, sand: 1.5, aggregate: 3, waterCementRatio: 0.5 },
  M25: { cement: 1, sand: 1, aggregate: 2, waterCementRatio: 0.45 },
  M30: { cement: 1, sand: 0.75, aggregate: 1.5, waterCementRatio: 0.4 },
  custom: { cement: 1, sand: 2, aggregate: 4, waterCementRatio: 0.5 },
} as const;

export type MixGrade = keyof typeof MIX_RATIOS;

// Dry material volume factor: wet concrete volume × 1.54 to account for voids
const DRY_VOLUME_FACTOR = 1.54;

// Bulk densities in kg/m³
const CEMENT_DENSITY = 1440; // kg/m³
const SAND_DENSITY = 1600; // kg/m³
const AGGREGATE_DENSITY = 1500; // kg/m³
const WATER_DENSITY = 1000; // kg/m³

// One bag of cement = 50 kg → volume ≈ 50/1440 ≈ 0.0347 m³
const CEMENT_BAG_KG = 50;

export const inputSchema = z.object({
  mixGrade: z.enum(["M10", "M15", "M20", "M25", "M30", "custom"]),
  // For custom ratio, user specifies parts
  cementParts: z.number().min(1).max(10).optional(),
  sandParts: z.number().min(0.5).max(10).optional(),
  aggregateParts: z.number().min(0.5).max(20).optional(),
  waterCementRatio: z.number().min(0.3).max(0.8).optional(),
  // Volume of concrete required
  volumeM3: z.number().min(0.01).max(10000),
}).superRefine((data, ctx) => {
  if (data.mixGrade === "custom") {
    if (data.cementParts === undefined) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["cementParts"], message: "Cement parts are required for custom mix." });
    }
    if (data.sandParts === undefined) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["sandParts"], message: "Sand parts are required for custom mix." });
    }
    if (data.aggregateParts === undefined) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["aggregateParts"], message: "Aggregate parts are required for custom mix." });
    }
  }
});

export type ConcreteMixInputs = z.infer<typeof inputSchema>;

export interface ConcreteMixResult extends Record<string, unknown> {
  readonly cementKg: number;
  readonly sandKg: number;
  readonly aggregateKg: number;
  readonly waterLiters: number;
  readonly cementBags: number;
  readonly totalDryVolumeM3: number;
  readonly actualWaterCementRatio: number;
}

export function compute(inputs: ConcreteMixInputs): ConcreteMixResult {
  const { mixGrade, volumeM3 } = inputs;

  let cParts: number;
  let sParts: number;
  let aParts: number;
  let wcr: number;

  if (mixGrade === "custom") {
    cParts = inputs.cementParts ?? 1;
    sParts = inputs.sandParts ?? 2;
    aParts = inputs.aggregateParts ?? 4;
    wcr = inputs.waterCementRatio ?? 0.5;
  } else {
    const ratio = MIX_RATIOS[mixGrade];
    cParts = ratio.cement;
    sParts = ratio.sand;
    aParts = ratio.aggregate;
    wcr = inputs.waterCementRatio ?? ratio.waterCementRatio;
  }

  const totalParts = cParts + sParts + aParts;

  // Dry volume of concrete (accounting for compaction factor)
  const dryVolumeM3 = volumeM3 * DRY_VOLUME_FACTOR;

  // Volume of each component (in m³ before conversion to kg)
  const cementVolumeM3 = (cParts / totalParts) * dryVolumeM3;
  const sandVolumeM3 = (sParts / totalParts) * dryVolumeM3;
  const aggregateVolumeM3 = (aParts / totalParts) * dryVolumeM3;

  // Convert to kg using bulk densities
  const cementKg = cementVolumeM3 * CEMENT_DENSITY;
  const sandKg = sandVolumeM3 * SAND_DENSITY;
  const aggregateKg = aggregateVolumeM3 * AGGREGATE_DENSITY;

  // Water quantity: w/c ratio × cement weight
  const waterKg = wcr * cementKg;
  const waterLiters = waterKg / WATER_DENSITY * 1000; // 1 kg water = 1 litre

  // Number of cement bags (50 kg bags)
  const cementBags = cementKg / CEMENT_BAG_KG;

  return {
    cementKg: Math.round(cementKg * 100) / 100,
    sandKg: Math.round(sandKg * 100) / 100,
    aggregateKg: Math.round(aggregateKg * 100) / 100,
    waterLiters: Math.round(waterLiters * 100) / 100,
    cementBags: Math.round(cementBags * 100) / 100,
    totalDryVolumeM3: Math.round(dryVolumeM3 * 1000) / 1000,
    actualWaterCementRatio: Math.round(wcr * 1000) / 1000,
  };
}
