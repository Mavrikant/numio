import { z } from "zod";

export const inputSchema = z
  .object({
    lmpDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
    cycleLength: z.number().int().min(21).max(35),
    currentDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
  })
  .superRefine((data, ctx) => {
    const lmp = new Date(data.lmpDate + "T00:00:00Z");
    if (isNaN(lmp.getTime())) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["lmpDate"],
        message: "Invalid LMP date",
      });
    }
    const cur = new Date(data.currentDate + "T00:00:00Z");
    if (isNaN(cur.getTime())) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["currentDate"],
        message: "Invalid current date",
      });
    }
    if (!isNaN(lmp.getTime()) && !isNaN(cur.getTime()) && cur < lmp) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["currentDate"],
        message: "Current date must be on or after LMP date",
      });
    }
  });

export type PregnancyInputs = z.infer<typeof inputSchema>;

export type Trimester = 1 | 2 | 3;

export interface PregnancyResult extends Record<string, unknown> {
  readonly dueDate: string;
  readonly gestationalWeeks: number;
  readonly gestationalDays: number;
  readonly trimester: Trimester;
  readonly daysRemaining: number;
}

/**
 * Naegele's Rule (adjusted for cycle length):
 * Due date = LMP + 280 days + (cycleLength - 28) days
 * Reference: ACOG Committee Opinion 700, May 2017
 * https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date
 *
 * Trimester boundaries (gestational age from LMP):
 *   T1: weeks 0–13 (days 0–97)
 *   T2: weeks 14–27 (days 98–195)
 *   T3: weeks 28+ (days 196+)
 */
function addDaysToDate(dateStr: string, days: number): string {
  // Pure UTC date arithmetic — no Date.now(), no random
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

function classifyTrimester(gestationalDaysTotal: number): Trimester {
  if (gestationalDaysTotal < 98) return 1;   // 0–13 weeks 6 days
  if (gestationalDaysTotal < 196) return 2;  // 14–27 weeks 6 days
  return 3;                                   // 28+ weeks
}

export function compute(inputs: PregnancyInputs): PregnancyResult {
  const { lmpDate, cycleLength, currentDate } = inputs;

  // Naegele's base: LMP + 280 days, adjusted for cycle length deviation from 28
  const adjustmentDays = cycleLength - 28;
  const pregnancyDuration = 280 + adjustmentDays;
  const dueDate = addDaysToDate(lmpDate, pregnancyDuration);

  // Gestational age = days elapsed since LMP up to currentDate
  const elapsedDays = diffDaysUtc(lmpDate, currentDate);
  const clampedElapsed = Math.max(0, elapsedDays);

  const gestationalWeeks = Math.floor(clampedElapsed / 7);
  const gestationalDays = clampedElapsed % 7;

  const trimester = classifyTrimester(clampedElapsed);

  // Days remaining until due date from currentDate
  const daysRemaining = Math.max(0, diffDaysUtc(currentDate, dueDate));

  return {
    dueDate,
    gestationalWeeks,
    gestationalDays,
    trimester,
    daysRemaining,
  };
}
