import { z } from "zod";

/**
 * Conversion factors to the SI base unit (joule, J).
 * Sources: NIST SP 811 and CODATA 2018.
 *   - cal is the thermochemical calorie (4.184 J exact, NIST).
 *   - BTU is the International Table BTU (IT, 1055.05585262 J).
 *   - eV uses the CODATA exact elementary charge (1.602176634e-19 C).
 *   - ft·lb uses the international foot and pound-force.
 */
export const UNIT_FACTORS = {
  J: 1,
  kJ: 1000,
  MJ: 1e6,
  cal: 4.184,
  kcal: 4184,
  Wh: 3600,
  kWh: 3.6e6,
  BTU: 1055.05585262,
  ft_lb: 1.35581794833,
  eV: 1.602176634e-19,
} as const;

export const ENERGY_UNITS = [
  "J",
  "kJ",
  "MJ",
  "cal",
  "kcal",
  "Wh",
  "kWh",
  "BTU",
  "ft_lb",
  "eV",
] as const;

export const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(ENERGY_UNITS),
  toUnit: z.enum(ENERGY_UNITS),
});

export type EnergyInputs = z.infer<typeof inputSchema>;

export interface EnergyResult extends Record<string, unknown> {
  readonly result: number;
  readonly resultFormatted: string;
}

export function compute(inputs: EnergyInputs): EnergyResult {
  const fromFactor = UNIT_FACTORS[inputs.fromUnit];
  const toFactor = UNIT_FACTORS[inputs.toUnit];

  if (fromFactor === undefined || toFactor === undefined) {
    throw new Error(
      `Unknown unit: ${fromFactor === undefined ? inputs.fromUnit : inputs.toUnit}`,
    );
  }

  const result = (inputs.value * fromFactor) / toFactor;

  // Energy spans many orders of magnitude (eV ↔ kWh): use exponential
  // for extreme values, otherwise round to 6 decimals.
  let resultFormatted: string;
  if (result !== 0 && (Math.abs(result) < 0.0001 || Math.abs(result) > 1_000_000_000)) {
    resultFormatted = result.toExponential(6);
  } else if (Math.abs(result) < 1) {
    resultFormatted = result.toFixed(8).replace(/\.?0+$/, "");
  } else {
    resultFormatted = (Math.round(result * 1_000_000) / 1_000_000).toString();
  }

  return {
    result:
      Math.abs(result) > 1e15 || (result !== 0 && Math.abs(result) < 1e-15)
        ? result
        : Math.round(result * 1_000_000) / 1_000_000,
    resultFormatted,
  };
}
