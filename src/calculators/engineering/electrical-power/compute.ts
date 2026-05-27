import { z } from "zod";
import { ELECTRICAL_RESISTIVITY } from "../_helpers/units";

export const inputSchema = z
  .object({
    knownQty1: z.enum(["voltage", "current", "resistance", "power"]),
    value1: z.number().min(0),
    knownQty2: z.enum(["voltage", "current", "resistance", "power"]),
    value2: z.number().min(0),
  })
  .superRefine((data, ctx) => {
    if (data.knownQty1 === data.knownQty2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["knownQty2"],
        message: "The two known quantities must be different.",
      });
    }
    if ((data.knownQty1 === "voltage" && data.value1 === 0) ||
        (data.knownQty2 === "voltage" && data.value2 === 0)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["value1"],
        message: "Voltage must be greater than zero.",
      });
    }
  });

export type ElectricalPowerInputs = z.infer<typeof inputSchema>;

export interface ElectricalPowerResult extends Record<string, unknown> {
  readonly voltage: number;
  readonly current: number;
  readonly resistance: number;
  readonly power: number;
  readonly energy24h: number;
  readonly energy30d: number;
  readonly costPerMonth: number;
}

type Qty = "voltage" | "current" | "resistance" | "power";

// US average electricity rate ($/kWh) as reference
const DEFAULT_ELECTRICITY_RATE = 0.15;

export function compute(inputs: ElectricalPowerInputs): ElectricalPowerResult {
  const { knownQty1, value1, knownQty2, value2 } = inputs;

  let known: Partial<Record<Qty, number>> = {
    [knownQty1]: value1,
    [knownQty2]: value2,
  };

  let V = known.voltage;
  let I = known.current;
  let R = known.resistance;
  let P = known.power;

  // Solve using Ohm's Law: V=IR, P=VI=I²R=V²/R
  if (V !== undefined && I !== undefined) {
    // V and I given
    R = V / I;
    P = V * I;
  } else if (V !== undefined && R !== undefined) {
    // V and R given
    if (R === 0) {
      R = 0.001; // Avoid division by zero
    }
    I = V / R;
    P = (V * V) / R;
  } else if (V !== undefined && P !== undefined) {
    // V and P given
    if (V === 0) V = 0.001;
    I = P / V;
    R = (V * V) / P;
  } else if (I !== undefined && R !== undefined) {
    // I and R given
    V = I * R;
    P = I * I * R;
  } else if (I !== undefined && P !== undefined) {
    // I and P given
    if (I === 0) I = 0.001;
    V = P / I;
    R = P / (I * I);
  } else if (R !== undefined && P !== undefined) {
    // R and P given
    if (R === 0) R = 0.001;
    I = Math.sqrt(P / R);
    V = Math.sqrt(P * R);
  }

  // Calculate energy consumption and cost
  // Energy (kWh) = Power (kW) × Time (hours)
  const powerKw = (P || 0) / 1000;
  const energy24h = powerKw * 24; // kWh per day
  const energy30d = energy24h * 30; // kWh per month
  const costPerMonth = energy30d * DEFAULT_ELECTRICITY_RATE;

  return {
    voltage: Math.round((V || 0) * 1000) / 1000,
    current: Math.round((I || 0) * 10000) / 10000,
    resistance: Math.round((R || 0) * 1000) / 1000,
    power: Math.round((P || 0) * 10) / 10,
    energy24h: Math.round(energy24h * 100) / 100,
    energy30d: Math.round(energy30d * 100) / 100,
    costPerMonth: Math.round(costPerMonth * 100) / 100,
  };
}
