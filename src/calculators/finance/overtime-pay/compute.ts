import { z } from "zod";

/** Pay from regular hours plus overtime hours at a multiplier of the base rate. */
export const inputSchema = z.object({
  hourlyRate: z.number().positive().max(100000),
  regularHours: z.number().min(0).max(10000),
  overtimeHours: z.number().min(0).max(10000).default(0),
  overtimeMultiplier: z.number().min(1).max(10).default(1.5),
});

export type OvertimeInputs = z.infer<typeof inputSchema>;

export interface OvertimeResult extends Record<string, unknown> {
  readonly regularPay: number;
  readonly overtimePay: number;
  readonly totalPay: number;
  readonly overtimeRate: number;
}

export function compute(inputs: OvertimeInputs): OvertimeResult {
  const overtimeRate = inputs.hourlyRate * inputs.overtimeMultiplier;
  const regularPay = inputs.hourlyRate * inputs.regularHours;
  const overtimePay = overtimeRate * inputs.overtimeHours;
  return { regularPay, overtimePay, totalPay: regularPay + overtimePay, overtimeRate };
}
