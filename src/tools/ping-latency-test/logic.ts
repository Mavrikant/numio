export interface Target {
  readonly label: string;
  readonly url: string;
}

export interface Sample {
  readonly target: string;
  readonly latency: number;
  readonly error?: string;
}

export const DEFAULT_TARGETS: Target[] = [
  { label: "Cloudflare", url: "https://1.1.1.1/cdn-cgi/trace" },
  { label: "Google", url: "https://www.google.com/generate_204" },
  { label: "GitHub", url: "https://api.github.com/zen" },
  { label: "Apple", url: "https://www.apple.com/library/test/success.html" },
];

/**
 * Send one HEAD-style request and return the elapsed time in ms. The request
 * uses `no-cors` mode so we can't read the response, but we can still measure
 * round-trip latency to the host. Failures are returned as null.
 */
export async function probe(url: string, timeoutMs = 5000): Promise<number | null> {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);
  const start = performance.now();
  try {
    await fetch(url, { mode: "no-cors", cache: "no-store", signal: controller.signal });
    return performance.now() - start;
  } catch {
    return null;
  } finally {
    clearTimeout(t);
  }
}

/** Summarise an array of latency samples (in ms). */
export function summarise(samples: number[]): { min: number; max: number; avg: number; jitter: number } | null {
  if (samples.length === 0) return null;
  const min = Math.min(...samples);
  const max = Math.max(...samples);
  const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
  // Jitter = mean absolute deviation between consecutive samples.
  let dsum = 0;
  for (let i = 1; i < samples.length; i++) dsum += Math.abs(samples[i]! - samples[i - 1]!);
  const jitter = samples.length > 1 ? dsum / (samples.length - 1) : 0;
  return { min, max, avg, jitter };
}
