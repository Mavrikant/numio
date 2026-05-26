import { z } from "zod";

export const inputSchema = z.object({
  knownQty1: z.enum(["voltage", "current", "resistance", "power"]),
  value1: z.number().positive(),
  knownQty2: z.enum(["voltage", "current", "resistance", "power"]),
  value2: z.number().positive(),
}).superRefine((data, ctx) => {
  if (data.knownQty1 === data.knownQty2) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["knownQty2"],
      message: "The two known quantities must be different.",
    });
  }
});

export type OhmsLawInputs = z.infer<typeof inputSchema>;

export interface OhmsLawResult extends Record<string, unknown> {
  readonly voltage: number;
  readonly current: number;
  readonly resistance: number;
  readonly power: number;
}

type Qty = "voltage" | "current" | "resistance" | "power";

export function compute(inputs: OhmsLawInputs): OhmsLawResult {
  const known: Partial<Record<Qty, number>> = {
    [inputs.knownQty1]: inputs.value1,
    [inputs.knownQty2]: inputs.value2,
  };

  let V = known.voltage;
  let I = known.current;
  let R = known.resistance;
  let P = known.power;

  // Solve for missing quantities using Ohm's Law: V=IR, P=VI=I²R=V²/R
  if (V !== undefined && I !== undefined) {
    R = V / I;
    P = V * I;
  } else if (V !== undefined && R !== undefined) {
    I = V / R;
    P = (V * V) / R;
  } else if (V !== undefined && P !== undefined) {
    I = P / V;
    R = (V * V) / P;
  } else if (I !== undefined && R !== undefined) {
    V = I * R;
    P = I * I * R;
  } else if (I !== undefined && P !== undefined) {
    V = P / I;
    R = P / (I * I);
  } else if (R !== undefined && P !== undefined) {
    I = Math.sqrt(P / R);
    V = Math.sqrt(P * R);
  }

  return {
    voltage: V!,
    current: I!,
    resistance: R!,
    power: P!,
  };
}
