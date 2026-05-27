import { z } from "zod";
import { convertUnit, lengthUnits } from "../_helpers/units-table";

export const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(["m", "cm", "mm", "km", "in", "ft", "yd", "mi", "nm", "μm"]),
  toUnit: z.enum(["m", "cm", "mm", "km", "in", "ft", "yd", "mi", "nm", "μm"]),
});

export type LengthInputs = z.infer<typeof inputSchema>;

export interface LengthResult extends Record<string, unknown> {
  readonly result: number;
  readonly resultFormatted: string;
}

export function compute(inputs: LengthInputs): LengthResult {
  const fromUnitDef = lengthUnits[inputs.fromUnit];
  const toUnitDef = lengthUnits[inputs.toUnit];

  if (!fromUnitDef || !toUnitDef) {
    throw new Error(`Unknown unit: ${!fromUnitDef ? inputs.fromUnit : inputs.toUnit}`);
  }

  const result = convertUnit(inputs.value, fromUnitDef, toUnitDef);

  // Format result with reasonable precision
  let resultFormatted: string;
  if (result < 0.01 || result > 1000000) {
    resultFormatted = result.toExponential(4);
  } else if (result < 1) {
    resultFormatted = result.toFixed(6).replace(/\.?0+$/, "");
  } else {
    resultFormatted = (Math.round(result * 10000) / 10000).toString();
  }

  return {
    result: Math.round(result * 10000) / 10000,
    resultFormatted,
  };
}
