import { z } from "zod";

export const inputSchema = z
  .object({
    force: z.number(),        // N (force)
    distance: z.number(),     // m (perpendicular distance/radius)
    momentOrForce: z.enum(["moment", "force"]), // Calculation mode
  })
  .superRefine((data, ctx) => {
    if (data.momentOrForce === "moment" && data.force <= 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["force"],
        message: "Torque/moment must be positive.",
      });
    }
    if (data.momentOrForce === "force" && data.distance <= 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["distance"],
        message: "Distance must be positive.",
      });
    }
  });

export type TorqueInputs = z.infer<typeof inputSchema>;

export interface TorqueResult extends Record<string, unknown> {
  readonly torqueNm: number;
  readonly forceN: number;
  readonly distanceM: number;
}

export function compute(inputs: TorqueInputs): TorqueResult {
  const { force, distance, momentOrForce } = inputs;

  let torqueNm = 0;
  let forceN = 0;
  let distanceM = 0;

  if (momentOrForce === "moment") {
    // User provided torque (force param), need to solve for force or distance
    // τ = F × r → F = τ / r (if r is known), or r = τ / F (if F is known)
    // Display torque as given
    torqueNm = force;
    forceN = distance > 0 ? force / distance : 0;
    distanceM = distance;
  } else if (momentOrForce === "force") {
    // User provided force and distance, calculate torque
    // τ = F × r
    forceN = force;
    distanceM = distance;
    torqueNm = force * distance;
  }

  return {
    torqueNm: Math.round(torqueNm * 100) / 100,
    forceN: Math.round(forceN * 100) / 100,
    distanceM: Math.round(distanceM * 1000) / 1000,
  };
}
