interface FieldSpec {
  readonly min: number;
  readonly max: number;
}

const SPECS: FieldSpec[] = [
  { min: 0, max: 59 }, // minute
  { min: 0, max: 23 }, // hour
  { min: 1, max: 31 }, // day of month
  { min: 1, max: 12 }, // month
  { min: 0, max: 6 }, // day of week
];

function parseField(field: string, spec: FieldSpec): Set<number> | null {
  const values = new Set<number>();
  for (const part of field.split(",")) {
    const [range, stepStr] = part.split("/");
    const step = stepStr ? Number(stepStr) : 1;
    if (!Number.isInteger(step) || step <= 0) return null;
    let start: number;
    let end: number;
    if (range === "*") {
      start = spec.min;
      end = spec.max;
    } else if (range!.includes("-")) {
      const halves = range!.split("-");
      if (halves.length !== 2 || !halves.every((h) => /^\d+$/.test(h))) return null;
      start = Number(halves[0]);
      end = Number(halves[1]);
    } else if (/^\d+$/.test(range!)) {
      start = Number(range);
      end = stepStr ? spec.max : start;
    } else {
      return null;
    }
    if (start < spec.min || end > spec.max || start > end) return null;
    for (let v = start; v <= end; v += step) values.add(v);
  }
  return values;
}

/**
 * Compute the next N matching dates for a standard 5-field cron expression
 * starting from `from`. The day-of-month / day-of-week rule follows cron's
 * convention: if both fields are restricted, the next time either matches.
 */
export function nextRuns(expression: string, from: Date, count: number): Date[] {
  const fields = expression.trim().split(/\s+/);
  if (fields.length !== 5) return [];
  const parsed = fields.map((f, i) => parseField(f, SPECS[i]!));
  if (parsed.some((p) => p === null)) return [];
  const [minutes, hours, doms, months, dows] = parsed as Set<number>[];

  const domAll = fields[2] === "*";
  const dowAll = fields[4] === "*";

  const out: Date[] = [];
  const d = new Date(from.getTime());
  d.setSeconds(0, 0);
  d.setMinutes(d.getMinutes() + 1);

  const guard = new Date(d.getTime());
  guard.setFullYear(guard.getFullYear() + 5);

  while (out.length < count && d.getTime() < guard.getTime()) {
    if (!months!.has(d.getMonth() + 1)) {
      d.setDate(1);
      d.setHours(0, 0, 0, 0);
      d.setMonth(d.getMonth() + 1);
      continue;
    }
    const dom = d.getDate();
    const dow = d.getDay();
    const domMatch = doms!.has(dom);
    const dowMatch = dows!.has(dow);
    const dayMatch = domAll && dowAll ? true : domAll ? dowMatch : dowAll ? domMatch : domMatch || dowMatch;
    if (!dayMatch) {
      d.setHours(0, 0, 0, 0);
      d.setDate(d.getDate() + 1);
      continue;
    }
    if (!hours!.has(d.getHours())) {
      d.setMinutes(0, 0, 0);
      d.setHours(d.getHours() + 1);
      continue;
    }
    if (!minutes!.has(d.getMinutes())) {
      d.setSeconds(0, 0);
      d.setMinutes(d.getMinutes() + 1);
      continue;
    }
    out.push(new Date(d.getTime()));
    d.setMinutes(d.getMinutes() + 1);
  }
  return out;
}
