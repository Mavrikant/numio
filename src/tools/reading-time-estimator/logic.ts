export interface ReadingStats {
  readonly words: number;
  readonly characters: number;
  readonly minutes: number;
  readonly seconds: number;
  readonly pretty: string;
}

/** Count words and estimate reading + speaking time at the supplied WPM. */
export function estimateReadingTime(text: string, wpm = 200): ReadingStats {
  const trimmed = text.trim();
  const words = trimmed === "" ? 0 : trimmed.split(/\s+/).length;
  const characters = text.length;
  const safeWpm = Math.max(50, wpm);
  const totalSeconds = words === 0 ? 0 : Math.round((words / safeWpm) * 60);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const pretty =
    totalSeconds === 0
      ? "0s"
      : minutes === 0
        ? `${seconds}s`
        : seconds === 0
          ? `${minutes}m`
          : `${minutes}m ${seconds}s`;

  return { words, characters, minutes, seconds, pretty };
}
