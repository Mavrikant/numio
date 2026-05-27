import { z } from "zod";

/**
 * Time duration calculator — elapsed time between a start and end clock time,
 * minus an optional break. If the end time is earlier than the start, the span
 * is assumed to cross midnight (common for shift/timesheet use). Pure: no clock
 * access, no timezone handling — times are wall-clock HH:MM.
 */
const hhmm = z.string().regex(/^([01]?\d|2[0-3]):[0-5]\d$/, "Time must be HH:MM (00:00–23:59)");

export const inputSchema = z.object({
  startTime: hhmm,
  endTime: hhmm,
  breakMinutes: z.number().min(0).max(1440).default(0),
});

export type TimeDurationInputs = z.infer<typeof inputSchema>;

export interface TimeDurationResult extends Record<string, unknown> {
  readonly totalMinutes: number;
  readonly totalHours: number;
  readonly hoursPart: number;
  readonly minutesPart: number;
  readonly formatted: string;
}

function toMinutes(t: string): number {
  const [h, m] = t.split(":");
  return Number(h) * 60 + Number(m);
}

export function compute(inputs: TimeDurationInputs): TimeDurationResult {
  const start = toMinutes(inputs.startTime);
  let end = toMinutes(inputs.endTime);
  if (end < start) end += 24 * 60; // crosses midnight

  const gross = end - start;
  const totalMinutes = Math.max(0, gross - inputs.breakMinutes);
  const hoursPart = Math.floor(totalMinutes / 60);
  const minutesPart = totalMinutes % 60;

  return {
    totalMinutes,
    totalHours: totalMinutes / 60,
    hoursPart,
    minutesPart,
    formatted: `${hoursPart}h ${String(minutesPart).padStart(2, "0")}m`,
  };
}
