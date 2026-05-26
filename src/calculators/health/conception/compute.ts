/**
 * Conception Date Calculator
 *
 * From LMP mode:
 *   conception ≈ LMP + (cycleLength - 14) days  [accounts for variable cycle length]
 *   dueDate = conception + 266 days (38 weeks of actual gestation)
 *   OR equivalently: dueDate = LMP + 280 days (standard Naegele's rule for 28-day cycle)
 *
 * From due date mode:
 *   conception ≈ dueDate - 266 days
 *   LMP ≈ dueDate - 280 days (Naegele's rule)
 *
 * Fertile window: ±5 days around conception date
 *
 * Reference: ACOG Committee Opinion 700 (2017)
 *   https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date
 */

import { z } from "zod";

export const inputSchema = z.object({
  mode: z.enum(["from_lmp", "from_duedate"]),
  dateInput: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
  cycleLength: z.number().int().min(21).max(35).default(28),
});

export type ConceptionInputs = z.infer<typeof inputSchema>;

export interface ConceptionResult extends Record<string, unknown> {
  readonly conceptionDate: string;
  readonly fertileWindowStart: string;
  readonly fertileWindowEnd: string;
  readonly estimatedDueDate: string;
}

/**
 * Add `days` integer to a YYYY-MM-DD date string, return YYYY-MM-DD.
 * Pure arithmetic — no Date.now(), no locale, no timezone drift.
 */
function addDays(dateStr: string, days: number): string {
  // Parse as UTC epoch to avoid DST surprises
  const ms = Date.parse(dateStr + "T00:00:00Z") + days * 86_400_000;
  const d = new Date(ms);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function compute(inputs: ConceptionInputs): ConceptionResult {
  const { mode, dateInput, cycleLength } = inputs;

  let conceptionDate: string;
  let estimatedDueDate: string;

  if (mode === "from_lmp") {
    // Days from LMP to ovulation/conception = cycleLength - 14
    const daysToConception = cycleLength - 14;
    conceptionDate = addDays(dateInput, daysToConception);
    // Due date = LMP + 280 days for 28-day cycle, adjusted for actual cycle
    // = conception + 266 days
    estimatedDueDate = addDays(conceptionDate, 266);
  } else {
    // from_duedate
    conceptionDate = addDays(dateInput, -266);
    estimatedDueDate = dateInput;
  }

  // Fertile window: ±5 days around conception date
  const fertileWindowStart = addDays(conceptionDate, -5);
  const fertileWindowEnd = addDays(conceptionDate, 5);

  return {
    conceptionDate,
    fertileWindowStart,
    fertileWindowEnd,
    estimatedDueDate,
  };
}
