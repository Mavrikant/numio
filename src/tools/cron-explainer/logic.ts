export interface CronResult {
  readonly description: string;
  readonly error: string | null;
}

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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

function validateField(field: string, spec: FieldSpec): boolean {
  return field.split(",").every((part) => {
    const [range, stepStr] = part.split("/");
    if (stepStr !== undefined && (!/^\d+$/.test(stepStr) || Number(stepStr) === 0)) return false;
    if (range === "*") return true;
    return range!.split("-").every((n) => /^\d+$/.test(n) && Number(n) >= spec.min && Number(n) <= spec.max);
  });
}

function describeMinuteHour(min: string, hour: string): string {
  if (min === "*" && hour === "*") return "every minute";
  if (hour === "*" && /^\*\/\d+$/.test(min)) return `every ${min.slice(2)} minutes`;
  if (min !== "*" && hour !== "*" && /^\d+$/.test(min) && /^\d+$/.test(hour)) {
    return `at ${hour.padStart(2, "0")}:${min.padStart(2, "0")}`;
  }
  if (/^\d+$/.test(min) && hour === "*") return `at minute ${min} of every hour`;
  return `at minute "${min}" and hour "${hour}"`;
}

/** Produce a plain-English description of a standard 5-field cron expression. */
export function explainCron(expression: string): CronResult {
  const fields = expression.trim().split(/\s+/);
  if (fields.length !== 5) {
    return { description: "", error: "A cron expression must have exactly 5 fields (minute hour day-of-month month day-of-week)." };
  }
  for (let i = 0; i < 5; i++) {
    if (!validateField(fields[i]!, SPECS[i]!)) {
      return { description: "", error: `Invalid value in field ${i + 1}: "${fields[i]}".` };
    }
  }

  const [min, hour, dom, mon, dow] = fields as [string, string, string, string, string];
  const parts = [describeMinuteHour(min, hour)];

  const dowNames =
    dow === "*"
      ? ""
      : dow.split(",").map((d) => (/^\d+$/.test(d) ? DAYS[Number(d) % 7] : d)).filter(Boolean).join(", ");
  if (dom !== "*" && dow !== "*") {
    // POSIX cron: a restricted day-of-month and day-of-week match as OR, not AND.
    parts.push(`on day-of-month ${dom} or on ${dowNames}`);
  } else if (dom !== "*") {
    parts.push(`on day-of-month ${dom}`);
  }
  if (mon !== "*") {
    const names = mon.split(",").map((m) => (/^\d+$/.test(m) ? MONTHS[Number(m) - 1] : m)).filter(Boolean);
    parts.push(`in ${names.join(", ")}`);
  }
  if (dow !== "*" && dom === "*") {
    parts.push(`on ${dowNames}`);
  }

  return { description: parts.join(", "), error: null };
}
