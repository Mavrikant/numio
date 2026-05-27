import { z } from "zod";

export const inputSchema = z.object({
  capacitance: z.number().positive(), // Farads
  voltage: z.number().positive(), // Volts
  frequency: z.number().optional().default(0), // Hz (0 = DC)
});

export type CapacitorInputs = z.infer<typeof inputSchema>;

export interface CapacitorResult extends Record<string, unknown> {
  readonly charge: number; // Coulombs
  readonly energy: number; // Joules
  readonly reactance: number | null; // Ohms (null for DC)
  readonly timeConstantFor1k: number; // seconds (1k ohm RC time constant)
}

// Constants
const EPSILON_0 = 8.854e-12; // Permittivity of free space (F/m)
const PI = Math.PI;

export function compute(inputs: CapacitorInputs): CapacitorResult {
  const { capacitance, voltage, frequency } = inputs;

  // Charge: Q = C * V (Coulombs)
  const charge = capacitance * voltage;

  // Energy: E = 0.5 * C * V² (Joules)
  const energy = 0.5 * capacitance * voltage * voltage;

  // Reactance: Xc = 1 / (2πfC) ohms (for AC, null for DC)
  let reactance: number | null = null;
  if (frequency && frequency > 0) {
    reactance = 1 / (2 * PI * frequency * capacitance);
  }

  // RC time constant (τ) with 1 kΩ resistor
  // τ = RC seconds
  const R_1k = 1000; // 1 kΩ
  const timeConstantFor1k = R_1k * capacitance;

  return {
    charge: Math.round(charge * 1e12) / 1e12, // High precision for small values
    energy: Math.round(energy * 1e12) / 1e12,
    reactance: reactance ? Math.round(reactance * 100) / 100 : null,
    timeConstantFor1k: Math.round(timeConstantFor1k * 1e9) / 1e9,
  };
}
