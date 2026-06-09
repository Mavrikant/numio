import { z } from "zod";

export const inputSchema = z.object({
  beginningValue: z.number().min(0.01).max(1_000_000_000_000),
  endingValue: z.number().min(0).max(1_000_000_000_000),
  years: z.number().min(0.01).max(200),
});

export type CagrInputs = z.infer<typeof inputSchema>;

export interface CagrResult extends Record<string, unknown> {
  cagr: number; // percent, e.g. 14.87 means 14.87%
  totalReturn: number; // percent over the whole period
  multiple: number; // endingValue / beginningValue
}

export function compute(inputs: CagrInputs): CagrResult {
  const { beginningValue, endingValue, years } = inputs;

  // beginningValue >= 0.01 (schema) so the division is always safe.
  const multiple = endingValue / beginningValue;
  const totalReturn = (multiple - 1) * 100;

  // CAGR = (ending / beginning)^(1/years) − 1.
  // multiple >= 0; for endingValue = 0 this yields −100% (a total loss),
  // since 0^(1/years) = 0.
  const cagr = (Math.pow(multiple, 1 / years) - 1) * 100;

  return { cagr, totalReturn, multiple };
}
