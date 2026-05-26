import { z } from "zod";

export const inputSchema = z
  .object({
    lmpDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
    cycleLength: z.number().int().min(21).max(45),
  })
  .superRefine((data, ctx) => {
    const lmp = new Date(data.lmpDate);
    if (isNaN(lmp.getTime())) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["lmpDate"], message: "Invalid date" });
      return;
    }
  });

export type OvulationInputs = z.infer<typeof inputSchema>;

export interface OvulationResult extends Record<string, unknown> {
  readonly ovulationDate: string;
  readonly fertileStart: string;
  readonly fertileEnd: string;
  readonly nextPeriod: string;
  readonly lhSurgeDate: string;
}

function addDays(dateStr: string, days: number): string {
  const parts = dateStr.split("-").map(Number);
  const d = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));
  d.setUTCDate(d.getUTCDate() + days);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function compute(inputs: OvulationInputs): OvulationResult {
  const { lmpDate, cycleLength } = inputs;
  const ovulationOffset = cycleLength - 14;
  const ovulationDate = addDays(lmpDate, ovulationOffset);
  const fertileStart = addDays(ovulationDate, -5);
  const fertileEnd = addDays(ovulationDate, 1);
  const nextPeriod = addDays(lmpDate, cycleLength);
  const lhSurgeDate = addDays(ovulationDate, -1);

  return {
    ovulationDate,
    fertileStart,
    fertileEnd,
    nextPeriod,
    lhSurgeDate,
  };
}
