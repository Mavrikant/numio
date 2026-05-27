import { z } from "zod";

export const inputSchema = z.object({
  temperatureDifference: z.number().positive(),
  thermalResistance: z.number().positive(),
});

export type HeatTransferInputs = z.infer<typeof inputSchema>;

export interface HeatTransferResult extends Record<string, unknown> {
  readonly heatFluxW: number;        // W (Watts)
  readonly heatFluxKW: number;       // kW
  readonly heatFluxBtu: number;      // BTU/h
}

export function compute(inputs: HeatTransferInputs): HeatTransferResult {
  const { temperatureDifference, thermalResistance } = inputs;

  // Fourier's Law / Thermal Resistance formula
  // Q = ΔT / R (analogous to Ohm's Law: I = V / R)
  // Reference: ASHRAE, EN 6946, heat transfer fundamentals
  const heatFluxW = temperatureDifference / thermalResistance;
  const heatFluxKW = heatFluxW / 1000;

  // Convert W to BTU/h: 1 W ≈ 3.412 BTU/h
  const heatFluxBtu = heatFluxW * 3.412;

  return {
    heatFluxW: Math.round(heatFluxW * 100) / 100,
    heatFluxKW: Math.round(heatFluxKW * 1000) / 1000,
    heatFluxBtu: Math.round(heatFluxBtu * 100) / 100,
  };
}
