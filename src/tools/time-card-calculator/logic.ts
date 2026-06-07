export interface TimecardRow {
  readonly in: string;
  readonly out: string;
  readonly breakMin?: number;
}

export interface TimecardOptions {
  readonly otThresholdH: number;
  readonly rate: number;
}

export interface TimecardResult {
  readonly perRow: number[];
  readonly totalH: number;
  readonly regularH: number;
  readonly overtimeH: number;
  readonly pay: number;
}

/** Parse an "HH:MM" string into minutes since midnight. Throws if malformed. */
function parseHHMM(value: string): number {
  const m = /^(\d{1,2}):(\d{2})$/.exec(value.trim());
  if (!m) throw new Error(`Invalid time: "${value}"`);
  const h = Number(m[1]);
  const min = Number(m[2]);
  if (h > 23 || min > 59) throw new Error(`Invalid time: "${value}"`);
  return h * 60 + min;
}

/** Hours worked for a single row, handling overnight shifts and break deduction. */
function rowHours(row: TimecardRow): number {
  const start = parseHHMM(row.in);
  let end = parseHHMM(row.out);
  if (end < start) end += 24 * 60; // overnight shift
  const breakMin = row.breakMin ?? 0;
  const worked = (end - start - breakMin) / 60;
  return Math.max(0, worked);
}

/**
 * Compute a weekly timecard: hours per row, totals, and pay split between
 * regular and overtime (1.5×) based on the weekly overtime threshold.
 */
export function computeTimecard(rows: ReadonlyArray<TimecardRow>, opts: TimecardOptions): TimecardResult {
  const otThresholdH = Number.isFinite(opts.otThresholdH) ? opts.otThresholdH : 40;
  const rate = Number.isFinite(opts.rate) ? opts.rate : 0;

  const perRow = rows.map(rowHours);
  const totalH = perRow.reduce((a, b) => a + b, 0);
  const regularH = Math.min(totalH, otThresholdH);
  const overtimeH = Math.max(0, totalH - otThresholdH);
  const pay = regularH * rate + overtimeH * rate * 1.5;

  return { perRow, totalH, regularH, overtimeH, pay };
}
