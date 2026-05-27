import { z } from "zod";

/**
 * Slope & line calculator — from two points (x1,y1) and (x2,y2):
 *
 *   slope m   = (y2 − y1) / (x2 − x1)
 *   intercept b = y1 − m·x1
 *   distance  = √(Δx² + Δy²)
 *   angle     = atan2(Δy, Δx)   [degrees]
 *   midpoint  = ((x1+x2)/2, (y1+y2)/2)
 *
 * A vertical line (x1 = x2) has an undefined slope; we return ±Infinity for
 * slope and NaN for the intercept, which the UI renders as "—".
 */
export const inputSchema = z.object({
  x1: z.number().min(-1e9).max(1e9),
  y1: z.number().min(-1e9).max(1e9),
  x2: z.number().min(-1e9).max(1e9),
  y2: z.number().min(-1e9).max(1e9),
});

export type SlopeInputs = z.infer<typeof inputSchema>;

export interface SlopeResult extends Record<string, unknown> {
  readonly slope: number;
  readonly yIntercept: number;
  readonly distance: number;
  readonly angleDeg: number;
  readonly deltaX: number;
  readonly deltaY: number;
  readonly midpointX: number;
  readonly midpointY: number;
}

export function compute(inputs: SlopeInputs): SlopeResult {
  const deltaX = inputs.x2 - inputs.x1;
  const deltaY = inputs.y2 - inputs.y1;
  const slope = deltaX === 0 ? (deltaY === 0 ? NaN : Infinity * Math.sign(deltaY)) : deltaY / deltaX;
  const yIntercept = Number.isFinite(slope) ? inputs.y1 - slope * inputs.x1 : NaN;

  return {
    slope,
    yIntercept,
    distance: Math.hypot(deltaX, deltaY),
    angleDeg: (Math.atan2(deltaY, deltaX) * 180) / Math.PI,
    deltaX,
    deltaY,
    midpointX: (inputs.x1 + inputs.x2) / 2,
    midpointY: (inputs.y1 + inputs.y2) / 2,
  };
}
