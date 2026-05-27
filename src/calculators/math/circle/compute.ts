import { z } from "zod";

/**
 * Circle calculator — given any one of radius, diameter, circumference or area,
 * derive the other three plus the geometry of the disk.
 *
 *   d = 2r,  C = 2πr,  A = πr²
 *
 * The input value is interpreted according to the chosen `known` quantity, then
 * everything is recomputed from the implied radius.
 */
export const inputSchema = z.object({
  known: z.enum(["radius", "diameter", "circumference", "area"]).default("radius"),
  value: z.number().positive().max(1e12),
});

export type CircleInputs = z.infer<typeof inputSchema>;

export interface CircleResult extends Record<string, unknown> {
  readonly radius: number;
  readonly diameter: number;
  readonly circumference: number;
  readonly area: number;
}

function radiusFrom(known: CircleInputs["known"], value: number): number {
  switch (known) {
    case "radius":
      return value;
    case "diameter":
      return value / 2;
    case "circumference":
      return value / (2 * Math.PI);
    case "area":
      return Math.sqrt(value / Math.PI);
  }
}

export function compute(inputs: CircleInputs): CircleResult {
  const radius = radiusFrom(inputs.known, inputs.value);
  return {
    radius,
    diameter: 2 * radius,
    circumference: 2 * Math.PI * radius,
    area: Math.PI * radius * radius,
  };
}
