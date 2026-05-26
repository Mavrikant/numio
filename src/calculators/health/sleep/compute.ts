// Reference: Sleep Foundation — Stages of Sleep
// https://www.sleepfoundation.org/stages-of-sleep
//
// Sleep cycle: 90 minutes per cycle
// Time to fall asleep: 14 minutes (average sleep latency)
// Mode 1 (from_bedtime): given bedtime, compute wake-up times for 4..7 cycles
// Mode 2 (from_waketime): given wake time, compute bed times for 4..7 cycles
//
// All times computed as minutes-since-midnight (0–1439) to stay pure/deterministic.
// HH:MM input is parsed to minutes; output is formatted back to HH:MM.

import { z } from "zod";

export const inputSchema = z.object({
  mode: z.enum(["from_bedtime", "from_waketime"]),
  inputTime: z.string().regex(/^\d{2}:\d{2}$/, "Time must be in HH:MM format"),
  cycleCount: z.number().int().min(4).max(9),
});

export type SleepInputs = z.infer<typeof inputSchema>;

export interface CycleOption {
  readonly cycles: number;
  readonly time: string;
  readonly duration: string;
}

export interface SleepResult extends Record<string, unknown> {
  readonly recommendedTimes: readonly string[];
  readonly sleepDurationHours: number;
  readonly cyclesOptions: readonly CycleOption[];
}

const CYCLE_MINUTES = 90;
const SLEEP_LATENCY_MINUTES = 14;
const TOTAL_MINUTES_IN_DAY = 1440;

function parseHHMM(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return (h ?? 0) * 60 + (m ?? 0);
}

function formatMinutes(totalMins: number): string {
  // Wrap around midnight
  const wrapped = ((totalMins % TOTAL_MINUTES_IN_DAY) + TOTAL_MINUTES_IN_DAY) % TOTAL_MINUTES_IN_DAY;
  const h = Math.floor(wrapped / 60);
  const m = wrapped % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}

export function compute(inputs: SleepInputs): SleepResult {
  const { mode, inputTime, cycleCount } = inputs;
  const inputMins = parseHHMM(inputTime);

  const cyclesOptions: CycleOption[] = [];
  const recommendedTimes: string[] = [];

  for (let cycles = 4; cycles <= 7; cycles++) {
    const sleepMins = cycles * CYCLE_MINUTES; // pure sleep time

    let targetMins: number;
    if (mode === "from_bedtime") {
      // bedtime + latency + sleepMins = wake time
      targetMins = inputMins + SLEEP_LATENCY_MINUTES + sleepMins;
    } else {
      // wake time - sleepMins - latency = bedtime
      targetMins = inputMins - sleepMins - SLEEP_LATENCY_MINUTES;
    }

    const formattedTime = formatMinutes(targetMins);
    const durationStr = formatDuration(sleepMins);

    cyclesOptions.push({
      cycles,
      time: formattedTime,
      duration: durationStr,
    });
  }

  // The primary recommended time corresponds to the selected cycleCount
  const primarySleepMins = cycleCount * CYCLE_MINUTES;
  let primaryMins: number;
  if (mode === "from_bedtime") {
    primaryMins = inputMins + SLEEP_LATENCY_MINUTES + primarySleepMins;
  } else {
    primaryMins = inputMins - primarySleepMins - SLEEP_LATENCY_MINUTES;
  }

  // Return all 4 cycle options as recommended times (4, 5, 6, 7 cycles)
  for (const opt of cyclesOptions) {
    recommendedTimes.push(opt.time);
  }

  const sleepDurationHours = Math.round((primarySleepMins / 60) * 10) / 10;

  // primaryMins used for the primary recommendation
  void primaryMins; // explicitly unused – all times returned via cyclesOptions

  return {
    recommendedTimes,
    sleepDurationHours,
    cyclesOptions,
  };
}
