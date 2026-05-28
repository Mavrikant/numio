export type PomodoroPhase = "focus" | "shortBreak" | "longBreak";

export interface PomodoroSettings {
  readonly focusMinutes: number;
  readonly shortBreakMinutes: number;
  readonly longBreakMinutes: number;
  readonly roundsBeforeLongBreak: number;
}

export const DEFAULT_SETTINGS: PomodoroSettings = {
  focusMinutes: 25,
  shortBreakMinutes: 5,
  longBreakMinutes: 15,
  roundsBeforeLongBreak: 4,
};

/** Compute the next phase given the current one and the number of completed focus rounds. */
export function nextPhase(current: PomodoroPhase, completedFocusRounds: number, settings: PomodoroSettings): PomodoroPhase {
  if (current === "focus") {
    return completedFocusRounds % settings.roundsBeforeLongBreak === 0 ? "longBreak" : "shortBreak";
  }
  return "focus";
}

export function phaseSeconds(phase: PomodoroPhase, settings: PomodoroSettings): number {
  if (phase === "focus") return settings.focusMinutes * 60;
  if (phase === "shortBreak") return settings.shortBreakMinutes * 60;
  return settings.longBreakMinutes * 60;
}

export function formatMmSs(seconds: number): string {
  const s = Math.max(0, Math.floor(seconds));
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}
