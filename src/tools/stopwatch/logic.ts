/** Format an elapsed millisecond count as "HH:MM:SS.mmm" or "MM:SS.mmm" when below an hour. */
export function formatElapsed(ms: number): string {
  const total = Math.max(0, Math.floor(ms));
  const millis = total % 1000;
  const totalSec = Math.floor(total / 1000);
  const seconds = totalSec % 60;
  const minutes = Math.floor(totalSec / 60) % 60;
  const hours = Math.floor(totalSec / 3600);
  const pad2 = (n: number) => String(n).padStart(2, "0");
  const pad3 = (n: number) => String(n).padStart(3, "0");
  if (hours > 0) return `${pad2(hours)}:${pad2(minutes)}:${pad2(seconds)}.${pad3(millis)}`;
  return `${pad2(minutes)}:${pad2(seconds)}.${pad3(millis)}`;
}
