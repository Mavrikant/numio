import { z } from "zod";

export const inputSchema = z.object({
  primaryVoltage: z.number().positive(),
  primaryCurrent: z.number().positive(),
  secondaryVoltage: z.number().positive(),
  efficiency: z.number().min(0).max(100), // percent
});

export type TransformerInputs = z.infer<typeof inputSchema>;

export interface TransformerResult extends Record<string, unknown> {
  readonly turnsRatio: number; // Np / Ns
  readonly secondaryCurrent: number; // Amps
  readonly primaryPower: number; // Watts
  readonly secondaryPower: number; // Watts
  readonly powerLoss: number; // Watts
}

export function compute(inputs: TransformerInputs): TransformerResult {
  const { primaryVoltage, primaryCurrent, secondaryVoltage, efficiency } = inputs;

  // Ideal transformer: Vp/Vs = Np/Ns = Is/Ip
  // Turns ratio
  const turnsRatio = primaryVoltage / secondaryVoltage;

  // Secondary current (ideal): Is = Ip * (Np/Ns) = Ip * (Vp/Vs)
  const idealSecondaryCurrent = primaryCurrent * turnsRatio;

  // Account for efficiency: actual secondary current is lower
  // Efficiency = Pout / Pin = (Vs * Is_actual) / (Vp * Ip)
  // Is_actual = (Vp * Ip * efficiency) / (Vs * 100)
  const secondaryCurrent = (primaryVoltage * primaryCurrent * efficiency) / (secondaryVoltage * 100);

  // Power calculations
  const primaryPower = primaryVoltage * primaryCurrent;
  const secondaryPower = secondaryVoltage * secondaryCurrent;
  const powerLoss = primaryPower - secondaryPower;

  return {
    turnsRatio: Math.round(turnsRatio * 10000) / 10000,
    secondaryCurrent: Math.round(secondaryCurrent * 10000) / 10000,
    primaryPower: Math.round(primaryPower * 100) / 100,
    secondaryPower: Math.round(secondaryPower * 100) / 100,
    powerLoss: Math.round(powerLoss * 100) / 100,
  };
}
