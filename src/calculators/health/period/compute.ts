import { z } from "zod";

export const inputSchema = z
  .object({
    lastPeriodDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
    cycleLength: z.number().int().min(21).max(35),
    periodLength: z.number().int().min(2).max(10),
  })
  .superRefine((data, ctx) => {
    const d = new Date(data.lastPeriodDate + "T00:00:00Z");
    if (isNaN(d.getTime())) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["lastPeriodDate"],
        message: "Invalid date — must be a real calendar date",
      });
    }
  });

export type PeriodInputs = z.infer<typeof inputSchema>;

export interface PeriodResult extends Record<string, unknown> {
  readonly nextPeriodDate: string;
  readonly ovulationDate: string;
  readonly fertileWindowStart: string;
  readonly fertileWindowEnd: string;
  readonly daysUntilNextPeriod: number;
}

/**
 * Menstrual cycle predictions:
 * - Next period: lastPeriodDate + cycleLength
 * - Ovulation: nextPeriodDate - 14 days (luteal phase is ~14 days)
 * - Fertile window: ovulationDate - 5 days to ovulationDate + 1 day
 *   (sperm survives ~5 days, egg lives ~24 hours)
 *
 * References:
 * - ACOG: https://www.acog.org/womens-health/faqs/menstrual-cycle
 * - American College of Obstetricians and Gynecologists. Menstrual Cycle FAQ.
 */
function addDaysToDate(dateStr: string, days: number): string {
  const d = new Date(dateStr + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + days);
  const year = d.getUTCFullYear();
  const month = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function diffDaysUtc(startStr: string, endStr: string): number {
  const start = new Date(startStr + "T00:00:00Z");
  const end = new Date(endStr + "T00:00:00Z");
  return Math.round((end.getTime() - start.getTime()) / 86_400_000);
}

export function compute(inputs: PeriodInputs): PeriodResult {
  const { lastPeriodDate, cycleLength } = inputs;

  // Next period = lastPeriodDate + cycleLength days
  const nextPeriodDate = addDaysToDate(lastPeriodDate, cycleLength);

  // Ovulation typically occurs ~14 days before next period (luteal phase)
  const ovulationDate = addDaysToDate(nextPeriodDate, -14);

  // Fertile window: 5 days before ovulation through 1 day after
  const fertileWindowStart = addDaysToDate(ovulationDate, -5);
  const fertileWindowEnd = addDaysToDate(ovulationDate, 1);

  // Days until next period (from lastPeriodDate context)
  // We compute from lastPeriodDate, so daysUntilNextPeriod = cycleLength
  // This is always equal to cycleLength since we measure from the last period
  const daysUntilNextPeriod = Math.max(0, diffDaysUtc(lastPeriodDate, nextPeriodDate));

  return {
    nextPeriodDate,
    ovulationDate,
    fertileWindowStart,
    fertileWindowEnd,
    daysUntilNextPeriod,
  };
}
