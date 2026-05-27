import { z } from "zod";
import { convert } from "@/lib/units";

export const inputSchema = z.object({
  value: z.number().finite(),
  fromUnit: z.enum(["kmh", "mph", "ms", "knots", "fts"]),
  toUnit: z.enum(["kmh", "mph", "ms", "knots", "fts"]),
});

export type SpeedInputs = z.infer<typeof inputSchema>;

export interface SpeedResult extends Record<string, unknown> {
  readonly result: number;
  readonly kmh: number;
  readonly mph: number;
  readonly ms: number;
  readonly knots: number;
  readonly fts: number;
}

export function compute(inputs: SpeedInputs): SpeedResult {
  // Convert to base unit (m/s)
  const inMs = convert(inputs.value, inputs.fromUnit, "ms");

  // Convert to all target units
  const result = convert(inMs, "ms", inputs.toUnit);

  return {
    result: Math.round(result * 10000000) / 10000000,
    kmh: Math.round(convert(inMs, "ms", "kmh") * 10000000) / 10000000,
    mph: Math.round(convert(inMs, "ms", "mph") * 10000000) / 10000000,
    ms: Math.round(inMs * 10000000) / 10000000,
    knots: Math.round(convert(inMs, "ms", "knots") * 10000000) / 10000000,
    fts: Math.round(convert(inMs, "ms", "fts") * 10000000) / 10000000,
  };
}
