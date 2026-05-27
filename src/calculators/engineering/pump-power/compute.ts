import { z } from "zod";

/**
 * Pump hydraulic + shaft power calculator.
 *
 * Hydraulic power formula:
 *   P_hydraulic [W] = ρ · g · Q · H
 * where Q is volumetric flow [m³/s], H is total head [m], ρ is fluid density
 * [kg/m³] and g = 9.80665 m/s² (standard gravity).
 *
 * Shaft power = hydraulic / pump efficiency.
 * Electrical input power = shaft / motor efficiency.
 * Overall efficiency = pump_eff × motor_eff.
 *
 * Reference: Hydraulic Institute Standards (ANSI/HI 9.6.7),
 * Engineering Toolbox — pump power calculations.
 */
export const inputSchema = z
  .object({
    flowRate: z.number().positive().max(1_000_000),
    flowUnit: z.enum(["m3h", "ls"]).default("m3h"),
    head: z.number().positive().max(10_000),
    density: z.number().positive().max(20_000).default(1000),
    pumpEfficiency: z.number().positive().max(100).default(75),
    motorEfficiency: z.number().positive().max(100).default(90),
    energyCost: z.number().nonnegative().max(10).default(0.12),
    operatingHours: z.number().nonnegative().max(8760).default(8000),
  })
  .superRefine((data, ctx) => {
    if (data.pumpEfficiency > 100) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["pumpEfficiency"],
        message: "Pump efficiency cannot exceed 100%.",
      });
    }
    if (data.motorEfficiency > 100) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["motorEfficiency"],
        message: "Motor efficiency cannot exceed 100%.",
      });
    }
  });

export type PumpPowerInputs = z.infer<typeof inputSchema>;

export interface PumpPowerResult extends Record<string, unknown> {
  readonly flowRateM3s: number;
  readonly hydraulicPowerKw: number;
  readonly shaftPowerKw: number;
  readonly electricalPowerKw: number;
  readonly overallEfficiency: number;
  readonly annualEnergyKwh: number;
  readonly annualCost: number;
}

// Gravitational acceleration (m/s²) — engineering convention.
// Hydraulic Institute pump calculations use g ≈ 9.81 m/s².
const G = 9.81;

export function compute(inputs: PumpPowerInputs): PumpPowerResult {
  // Convert flow rate to m³/s
  const flowRateM3s =
    inputs.flowUnit === "m3h" ? inputs.flowRate / 3600 : inputs.flowRate / 1000;

  // Hydraulic power: P = ρ · g · Q · H (W). Convert to kW.
  const hydraulicPowerW = inputs.density * G * flowRateM3s * inputs.head;
  const hydraulicPowerKw = hydraulicPowerW / 1000;

  const pumpEffFraction = inputs.pumpEfficiency / 100;
  const motorEffFraction = inputs.motorEfficiency / 100;

  const shaftPowerKw = hydraulicPowerKw / pumpEffFraction;
  const electricalPowerKw = shaftPowerKw / motorEffFraction;

  const overallEfficiency = pumpEffFraction * motorEffFraction * 100;

  const annualEnergyKwh = electricalPowerKw * inputs.operatingHours;
  const annualCost = annualEnergyKwh * inputs.energyCost;

  return {
    flowRateM3s: round(flowRateM3s, 6),
    hydraulicPowerKw: round(hydraulicPowerKw, 4),
    shaftPowerKw: round(shaftPowerKw, 4),
    electricalPowerKw: round(electricalPowerKw, 4),
    overallEfficiency: round(overallEfficiency, 2),
    annualEnergyKwh: round(annualEnergyKwh, 2),
    annualCost: round(annualCost, 2),
  };
}

function round(value: number, decimals: number): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
