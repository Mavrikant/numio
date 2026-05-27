import { z } from "zod";

/**
 * Aspect ratio of a width × height, reduced to simplest form (e.g. 16:9), plus
 * the decimal ratio and a scaled height for an optional target width.
 */
export const inputSchema = z.object({
  width: z.number().positive().max(1e7),
  height: z.number().positive().max(1e7),
  targetWidth: z.number().min(0).max(1e7).default(0),
});

export type AspectRatioInputs = z.infer<typeof inputSchema>;

export interface AspectRatioResult extends Record<string, unknown> {
  readonly aspectRatio: string;
  readonly decimalRatio: number;
  readonly scaledHeight: number;
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

export function compute(inputs: AspectRatioInputs): AspectRatioResult {
  const w = Math.round(inputs.width);
  const h = Math.round(inputs.height);
  const g = gcd(w, h) || 1;
  return {
    aspectRatio: `${w / g}:${h / g}`,
    decimalRatio: inputs.width / inputs.height,
    scaledHeight: inputs.targetWidth > 0 ? (inputs.targetWidth * inputs.height) / inputs.width : 0,
  };
}
