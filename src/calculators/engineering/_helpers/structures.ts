/**
 * Engineering structures helper — material properties, concrete mixes, formulas
 * References:
 * - TS EN 206:2014 (Turkish Standard for Concrete)
 * - ASTM C33 (Standard Specification for Concrete Aggregates)
 * - IS 456:2000 (Indian Standard Code of Practice)
 * - Machinery Handbook (Steel densities and properties)
 */

/**
 * Concrete mix ratios by grade (cement:sand:aggregate by volume)
 * Reference: TS EN 206, Indian Standard IS 10262:2009
 */
export const CONCRETE_MIX_RATIOS = {
  M10: { cement: 1, sand: 3, aggregate: 6, waterCementRatio: 0.6, compressiveStrength: 10 },
  M15: { cement: 1, sand: 2, aggregate: 4, waterCementRatio: 0.55, compressiveStrength: 15 },
  M20: { cement: 1, sand: 1.5, aggregate: 3, waterCementRatio: 0.5, compressiveStrength: 20 },
  M25: { cement: 1, sand: 1, aggregate: 2, waterCementRatio: 0.45, compressiveStrength: 25 },
  M30: { cement: 1, sand: 0.75, aggregate: 1.5, waterCementRatio: 0.4, compressiveStrength: 30 },
  M35: { cement: 1, sand: 0.65, aggregate: 1.3, waterCementRatio: 0.35, compressiveStrength: 35 },
  M40: { cement: 1, sand: 0.55, aggregate: 1.1, waterCementRatio: 0.3, compressiveStrength: 40 },
} as const;

export type ConcreteGrade = keyof typeof CONCRETE_MIX_RATIOS;

/**
 * Bulk densities for concrete materials (kg/m³)
 * Reference: TS EN 206, ASTM C33, typical values at moisture equilibrium
 */
export const MATERIAL_DENSITIES = {
  cement: 1440,        // Portland cement (typical)
  sand: 1600,          // River sand, oven-dry
  aggregate: 1500,     // Coarse aggregate (20-40 mm)
  water: 1000,         // Pure water at 20°C
  steel: 7850,         // Carbon/mild steel (structural)
  steelRebar: 7850,    // Reinforcing steel bar
  aluminum: 2700,      // Aluminum alloy
  copper: 8960,        // Electrolytic copper
  brass: 8500,         // Brass alloy
  cast_iron: 7200,     // Cast iron
} as const;

/**
 * Steel reinforcement bar diameters (mm) and cross-sectional areas (mm²)
 * Reference: IS 1786:2008 (Indian Standard), EN 10080 (European Standard)
 */
export const STEEL_REBAR_TABLE: Record<number, number> = {
  6: 28.27,      // 6 mm dia → 28.27 mm²
  8: 50.27,      // 8 mm
  10: 78.54,     // 10 mm
  12: 113.10,    // 12 mm
  16: 201.06,    // 16 mm
  20: 314.16,    // 20 mm
  25: 490.87,    // 25 mm
  32: 804.25,    // 32 mm
  40: 1256.64,   // 40 mm
};

/**
 * Common steel pipe dimensions (OD mm, wall thickness mm → cross-section mm²)
 * Reference: EN 10220 (Structural hollow sections), ISO 1127
 * Format: "OD×WT" → area
 */
export const STEEL_PIPE_TABLE: Record<string, number> = {
  // Format: "12.7×2.0" (12.7 mm OD, 2.0 mm wall)
  "12.7×2.0": 70.6,
  "16×2.0": 94.0,
  "20×2.0": 117.9,
  "25×2.0": 153.8,
  "32×2.5": 237.4,
  "40×2.5": 299.0,
  "50×3.0": 453.0,
  "63×3.0": 583.0,
  "75×4.0": 888.0,
  "89×4.0": 1055.0,
  "101.6×4.0": 1242.0,
};

/**
 * Concrete compaction/shrinkage factor for dry volume calculation
 * Wet concrete → dry material volume factor
 * Reference: TS EN 206, ACI 211.1
 */
export const DRY_VOLUME_FACTOR = 1.54;

/**
 * Standard cement bag weight (kg)
 * Most common worldwide: 50 kg bags
 * Reference: ISO 1692, TS EN 197-1
 */
export const CEMENT_BAG_WEIGHT_KG = 50;

/**
 * Darcy-Weisbach friction factor approximations
 */

/**
 * Swamee-Jain approximation for friction factor (valid for turbulent flow)
 * f = 0.25 / [log₁₀(ε/(3.7D) + 5.74/Re^0.9)]²
 * More accurate than Colebrook-White for most engineering purposes
 * Reference: Swamee & Jain (1976), ASCE Journal
 *
 * @param relativeRoughness - ε/D (absolute roughness / diameter)
 * @param reynoldsNumber - Re (dimensionless)
 * @returns Friction factor f (Darcy-Weisbach)
 */
export function frictionFactorSwameeJain(relativeRoughness: number, reynoldsNumber: number): number {
  const numerator = relativeRoughness / 3.7 + (5.74 / Math.pow(reynoldsNumber, 0.9));
  const denominator = Math.log10(numerator);
  return 0.25 / (denominator * denominator);
}

/**
 * Haaland approximation (fast, explicit, good accuracy)
 * f = -2 log₁₀[(ε/(3.7D) + (6.9/Re))^1.11]²
 * Reference: Haaland (1983)
 *
 * @param relativeRoughness - ε/D
 * @param reynoldsNumber - Re
 * @returns Friction factor f
 */
export function frictionFactorHaaland(relativeRoughness: number, reynoldsNumber: number): number {
  const term = relativeRoughness / 3.7 + 6.9 / reynoldsNumber;
  const exponent = Math.pow(term, 1.11);
  return 1 / (2 * Math.log10(exponent));
}

/**
 * Laminar flow friction factor (Re < 2300)
 * f = 64 / Re
 * Reference: Hagen-Poiseuille law
 *
 * @param reynoldsNumber - Re
 * @returns Friction factor f (laminar)
 */
export function frictionFactorLaminar(reynoldsNumber: number): number {
  return 64 / reynoldsNumber;
}

/**
 * Relative pipe roughness (ε/D) for common materials
 * ε = absolute roughness (mm)
 * Usage: divide by pipe diameter to get relative roughness
 * Reference: Colebrook-White studies, Moody chart
 */
export const PIPE_ROUGHNESS_MM: Record<string, number> = {
  smooth_pvc: 0.0015,
  drawn_tubing: 0.0015,
  commercial_steel: 0.045,
  galvanized_iron: 0.15,
  cast_iron: 0.26,
  concrete: 0.3,
  riveted_steel: 3.0,
};

/**
 * Classify flow regime based on Reynolds number
 * Reference: Hydraulics textbooks, ASHRAE guidelines
 *
 * @param reynoldsNumber - Re (dimensionless)
 * @returns Flow regime: "laminar" | "transition" | "turbulent"
 */
export function classifyFlowRegime(reynoldsNumber: number): "laminar" | "transition" | "turbulent" {
  if (reynoldsNumber < 2300) return "laminar";
  if (reynoldsNumber < 4000) return "transition";
  return "turbulent";
}

/**
 * Calculate Reynolds number
 * Re = (ρ × v × D) / μ = (v × D) / ν
 * where ν = μ / ρ (kinematic viscosity)
 * Reference: Fluid mechanics fundamentals
 *
 * @param velocityMs - Flow velocity (m/s)
 * @param diameterM - Pipe diameter (m)
 * @param kinematicViscosityM2s - Kinematic viscosity (m²/s), typical for water at 20°C: 1.0e-6
 * @returns Reynolds number (dimensionless)
 */
export function calculateReynoldsNumber(
  velocityMs: number,
  diameterM: number,
  kinematicViscosityM2s: number = 1.0e-6 // water at 20°C
): number {
  return (velocityMs * diameterM) / kinematicViscosityM2s;
}

/**
 * Darcy-Weisbach head loss equation
 * hf = f × (L/D) × (v²/2g)
 * where hf = head loss (m), f = friction factor, L = length, D = diameter, v = velocity, g = 9.81 m/s²
 * Reference: Darcy-Weisbach formula, fluid mechanics
 *
 * @param frictionFactor - f (dimensionless, from friction factor function)
 * @param lengthM - Pipe length (m)
 * @param diameterM - Pipe diameter (m)
 * @param velocityMs - Flow velocity (m/s)
 * @returns Head loss (m)
 */
export function calculateHeadLoss(
  frictionFactor: number,
  lengthM: number,
  diameterM: number,
  velocityMs: number
): number {
  const g = 9.81;
  return frictionFactor * (lengthM / diameterM) * (velocityMs * velocityMs) / (2 * g);
}

/**
 * Calculate flow rate from velocity and pipe cross-section
 * Q = v × A = v × π × (D/2)²
 * Reference: Continuity equation
 *
 * @param velocityMs - Flow velocity (m/s)
 * @param diameterM - Pipe diameter (m)
 * @returns Flow rate (m³/s)
 */
export function calculateFlowRate(velocityMs: number, diameterM: number): number {
  const radiusM = diameterM / 2;
  return velocityMs * Math.PI * radiusM * radiusM;
}

/**
 * Calculate flow velocity from flow rate and pipe cross-section
 * v = Q / A = Q / [π × (D/2)²]
 * Reference: Continuity equation
 *
 * @param flowRateM3s - Flow rate (m³/s)
 * @param diameterM - Pipe diameter (m)
 * @returns Velocity (m/s)
 */
export function calculateVelocity(flowRateM3s: number, diameterM: number): number {
  const radiusM = diameterM / 2;
  return flowRateM3s / (Math.PI * radiusM * radiusM);
}

/**
 * Moment of inertia for common beam cross-sections
 * Used in deflection and bending stress calculations
 * Reference: Strength of Materials, engineering beam tables (Roark's Formulas)
 */
export const BEAM_MOMENTS_OF_INERTIA = {
  // I = (1/12) × b × h³ for rectangular section
  // Example: 200×300 mm section
  rectangular: (widthMm: number, heightMm: number): number => {
    return (widthMm * heightMm ** 3) / 12;
  },

  // I = (π × D⁴) / 64 for circular solid section
  circular: (diameterMm: number): number => {
    return (Math.PI * diameterMm ** 4) / 64;
  },

  // I = (π × (D_outer⁴ - D_inner⁴)) / 64 for hollow circular (pipe)
  circularHollow: (outerDiameterMm: number, innerDiameterMm: number): number => {
    return (Math.PI * (outerDiameterMm ** 4 - innerDiameterMm ** 4)) / 64;
  },
};

/**
 * Material properties for structural design (elastic moduli, yield strengths, densities)
 * Reference: EN 1993-1-1 (Eurocode 3), EN 1992-1-1 (Eurocode 2), common handbooks
 */
export const STRUCTURAL_MATERIALS = {
  steel: {
    density: 7850,        // kg/m³
    elasticity: 200,      // GPa (Young's modulus E)
    shearModulus: 80,     // GPa (G)
    yieldStrength: 250,   // MPa (fy for S275)
    poisson: 0.3,
  },
  aluminum: {
    density: 2700,        // kg/m³
    elasticity: 70,       // GPa
    shearModulus: 26,     // GPa
    yieldStrength: 240,   // MPa
    poisson: 0.33,
  },
  concrete: {
    density: 2400,        // kg/m³
    elasticity: 30,       // GPa (typical for C30)
    shearModulus: 13,     // GPa
    compressiveStrength: 30, // MPa
    poisson: 0.2,
  },
  timber: {
    density: 600,         // kg/m³ (softwood)
    elasticity: 11,       // GPa
    shearModulus: 0.7,    // GPa
    yieldStrength: 10,    // MPa (bending)
    poisson: 0.37,
  },
};

/**
 * Section modulus from moment of inertia
 * Z = I / c, where c = h/2 for symmetric sections
 * Used in bending stress: σ = M / Z
 * Reference: Mechanics of Materials
 *
 * @param momentOfInertia - I in mm⁴ or cm⁴
 * @param distanceToFiber - c (distance to extreme fiber) in same units as MOI
 * @returns Section modulus in mm³ or cm³ respectively
 */
export function calculateSectionModulus(
  momentOfInertia: number,
  distanceToFiber: number
): number {
  if (distanceToFiber <= 0) return 0;
  return momentOfInertia / distanceToFiber;
}

/**
 * Radius of gyration from MOI and area
 * r = √(I / A)
 * Reference: Mechanics of Materials
 *
 * @param momentOfInertia - I in mm⁴ (or cm⁴)
 * @param area - A in mm² (or cm²)
 * @returns Radius of gyration in mm (or cm)
 */
export function calculateRadiusOfGyration(
  momentOfInertia: number,
  area: number
): number {
  if (area <= 0) return 0;
  return Math.sqrt(momentOfInertia / area);
}

/**
 * Safety factor check for bending stress
 * Reference: EN 1993-1-1 (typical γM = 1.0 for steel)
 *
 * @param actualStress - Calculated stress (σ) in MPa
 * @param yieldStrength - Material yield strength (fy) in MPa
 * @param safetyFactor - Design safety factor (default 1.5)
 * @returns Safe or unsafe (safety factor: actual / allowed)
 */
export function checkBendingStressSafety(
  actualStress: number,
  yieldStrength: number,
  safetyFactor: number = 1.5
): { safe: boolean; utilizationRatio: number } {
  const allowedStress = yieldStrength / safetyFactor;
  const utilizationRatio = actualStress / allowedStress;
  return {
    safe: utilizationRatio <= 1.0,
    utilizationRatio,
  };
}

/**
 * Standard I-beam properties (metric: IPE sections)
 * Reference: EN 10034, Eurocode 3 section properties
 * Units: I in cm⁴, Z in cm³, A in cm²
 */
export const STANDARD_IBEAMS: Record<string, {
  name: string;
  height: number;   // mm
  I: number;        // cm⁴
  Z: number;        // cm³ (section modulus)
  A: number;        // cm² (area)
  weight: number;   // kg/m
}> = {
  "IPE100": {
    name: "IPE 100",
    height: 100,
    I: 171,
    Z: 34.2,
    A: 10.3,
    weight: 8.1,
  },
  "IPE120": {
    name: "IPE 120",
    height: 120,
    I: 318,
    Z: 53.1,
    A: 13.2,
    weight: 10.4,
  },
  "IPE140": {
    name: "IPE 140",
    height: 140,
    I: 541,
    Z: 77.3,
    A: 16.4,
    weight: 12.9,
  },
  "IPE160": {
    name: "IPE 160",
    height: 160,
    I: 869,
    Z: 109,
    A: 20.1,
    weight: 15.8,
  },
  "IPE180": {
    name: "IPE 180",
    height: 180,
    I: 1320,
    Z: 146,
    A: 23.9,
    weight: 18.8,
  },
  "IPE200": {
    name: "IPE 200",
    height: 200,
    I: 1943,
    Z: 194,
    A: 28.5,
    weight: 22.4,
  },
  "IPE240": {
    name: "IPE 240",
    height: 240,
    I: 3892,
    Z: 324,
    A: 39.1,
    weight: 30.7,
  },
  "IPE270": {
    name: "IPE 270",
    height: 270,
    I: 5790,
    Z: 429,
    A: 45.9,
    weight: 36.1,
  },
  "IPE300": {
    name: "IPE 300",
    height: 300,
    I: 8356,
    Z: 557,
    A: 53.8,
    weight: 42.2,
  },
};

export default {
  CONCRETE_MIX_RATIOS,
  MATERIAL_DENSITIES,
  STRUCTURAL_MATERIALS,
  STEEL_REBAR_TABLE,
  STEEL_PIPE_TABLE,
  STANDARD_IBEAMS,
  DRY_VOLUME_FACTOR,
  CEMENT_BAG_WEIGHT_KG,
  frictionFactorSwameeJain,
  frictionFactorHaaland,
  frictionFactorLaminar,
  PIPE_ROUGHNESS_MM,
  classifyFlowRegime,
  calculateReynoldsNumber,
  calculateHeadLoss,
  calculateFlowRate,
  calculateVelocity,
  calculateSectionModulus,
  calculateRadiusOfGyration,
  checkBendingStressSafety,
  BEAM_MOMENTS_OF_INERTIA,
};
