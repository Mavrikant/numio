/**
 * Descriptive statistics — shared between standalone analysis tools and
 * any calculator that wants to show summary stats on user-provided data.
 *
 * All functions are pure, deterministic, and accept readonly number[].
 * Edge cases: empty arrays return safe sentinel values (NaN or 0) — callers
 * should check arr.length first if they want to avoid those.
 */

export interface DescribeResult {
  readonly count: number;
  readonly mean: number;
  readonly median: number;
  readonly mode: number | null;
  readonly min: number;
  readonly max: number;
  readonly range: number;
  readonly sum: number;
  readonly variance: number;
  readonly stdDev: number;
  readonly q1: number;
  readonly q3: number;
  readonly iqr: number;
  readonly skewness: number;
  readonly kurtosis: number;
}

export function mean(xs: ReadonlyArray<number>): number {
  if (xs.length === 0) return NaN;
  let s = 0;
  for (const x of xs) s += x;
  return s / xs.length;
}

export function variance(xs: ReadonlyArray<number>, sample = true): number {
  if (xs.length === 0) return NaN;
  if (xs.length === 1) return 0;
  const m = mean(xs);
  let s = 0;
  for (const x of xs) {
    const d = x - m;
    s += d * d;
  }
  return s / (sample ? xs.length - 1 : xs.length);
}

export function stdDev(xs: ReadonlyArray<number>, sample = true): number {
  return Math.sqrt(variance(xs, sample));
}

export function median(xs: ReadonlyArray<number>): number {
  if (xs.length === 0) return NaN;
  const sorted = [...xs].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1]! + sorted[mid]!) / 2 : sorted[mid]!;
}

/**
 * Quantile via linear interpolation (R-7 / Excel-style).
 * q ∈ [0, 1].
 */
export function quantile(xs: ReadonlyArray<number>, q: number): number {
  if (xs.length === 0) return NaN;
  const sorted = [...xs].sort((a, b) => a - b);
  const idx = q * (sorted.length - 1);
  const lo = Math.floor(idx);
  const hi = Math.ceil(idx);
  if (lo === hi) return sorted[lo]!;
  const frac = idx - lo;
  return sorted[lo]! * (1 - frac) + sorted[hi]! * frac;
}

export function mode(xs: ReadonlyArray<number>): number | null {
  if (xs.length === 0) return null;
  const counts = new Map<number, number>();
  for (const x of xs) counts.set(x, (counts.get(x) ?? 0) + 1);
  let best: number | null = null;
  let bestCount = 0;
  for (const [val, c] of counts) {
    if (c > bestCount) {
      best = val;
      bestCount = c;
    }
  }
  // If everything appears once, there's no meaningful mode.
  return bestCount > 1 ? best : null;
}

export function skewness(xs: ReadonlyArray<number>): number {
  const n = xs.length;
  if (n < 3) return NaN;
  const m = mean(xs);
  const s = stdDev(xs);
  if (s === 0) return 0;
  let acc = 0;
  for (const x of xs) acc += ((x - m) / s) ** 3;
  return (n / ((n - 1) * (n - 2))) * acc;
}

export function kurtosis(xs: ReadonlyArray<number>): number {
  const n = xs.length;
  if (n < 4) return NaN;
  const m = mean(xs);
  const s = stdDev(xs);
  if (s === 0) return 0;
  let acc = 0;
  for (const x of xs) acc += ((x - m) / s) ** 4;
  const a = (n * (n + 1)) / ((n - 1) * (n - 2) * (n - 3));
  const b = (3 * (n - 1) ** 2) / ((n - 2) * (n - 3));
  return a * acc - b;
}

/** Pearson correlation coefficient. */
export function pearson(xs: ReadonlyArray<number>, ys: ReadonlyArray<number>): number {
  if (xs.length !== ys.length || xs.length < 2) return NaN;
  const mx = mean(xs);
  const my = mean(ys);
  let num = 0;
  let denX = 0;
  let denY = 0;
  for (let i = 0; i < xs.length; i++) {
    const dx = xs[i]! - mx;
    const dy = ys[i]! - my;
    num += dx * dy;
    denX += dx * dx;
    denY += dy * dy;
  }
  const den = Math.sqrt(denX * denY);
  return den === 0 ? NaN : num / den;
}

/** Simple linear regression: returns slope, intercept, r². */
export function linearRegression(
  xs: ReadonlyArray<number>,
  ys: ReadonlyArray<number>,
): { slope: number; intercept: number; r2: number } {
  if (xs.length !== ys.length || xs.length < 2) {
    return { slope: NaN, intercept: NaN, r2: NaN };
  }
  const mx = mean(xs);
  const my = mean(ys);
  let num = 0;
  let den = 0;
  for (let i = 0; i < xs.length; i++) {
    const dx = xs[i]! - mx;
    num += dx * (ys[i]! - my);
    den += dx * dx;
  }
  const slope = den === 0 ? 0 : num / den;
  const intercept = my - slope * mx;
  const r = pearson(xs, ys);
  return { slope, intercept, r2: r * r };
}

/** Full describe — calls every stat for a column-summary panel. */
export function describe(xs: ReadonlyArray<number>): DescribeResult {
  const sorted = [...xs].sort((a, b) => a - b);
  const min = sorted[0] ?? NaN;
  const max = sorted[sorted.length - 1] ?? NaN;
  let sum = 0;
  for (const x of xs) sum += x;
  return {
    count: xs.length,
    mean: mean(xs),
    median: median(xs),
    mode: mode(xs),
    min,
    max,
    range: xs.length > 0 ? max - min : NaN,
    sum,
    variance: variance(xs),
    stdDev: stdDev(xs),
    q1: quantile(xs, 0.25),
    q3: quantile(xs, 0.75),
    iqr: quantile(xs, 0.75) - quantile(xs, 0.25),
    skewness: skewness(xs),
    kurtosis: kurtosis(xs),
  };
}

/**
 * Compute histogram bins using Freedman-Diaconis rule (robust to outliers).
 * Falls back to Sturges' rule for tiny datasets.
 */
export function histogramBins(
  xs: ReadonlyArray<number>,
  opts: { bins?: number | "auto" } = {},
): { binEdges: number[]; counts: number[]; binWidth: number } {
  const n = xs.length;
  if (n === 0) return { binEdges: [], counts: [], binWidth: 0 };

  const sorted = [...xs].sort((a, b) => a - b);
  const min = sorted[0]!;
  const max = sorted[sorted.length - 1]!;
  const range = max - min;

  let binCount: number;
  if (typeof opts.bins === "number") {
    binCount = Math.max(1, Math.floor(opts.bins));
  } else {
    // Freedman-Diaconis: h = 2 * IQR * n^(-1/3)
    const iqr = quantile(xs, 0.75) - quantile(xs, 0.25);
    if (iqr === 0 || n < 30) {
      // Sturges
      binCount = Math.max(1, Math.ceil(Math.log2(n) + 1));
    } else {
      const h = (2 * iqr) / Math.cbrt(n);
      binCount = Math.max(1, Math.ceil(range / h));
    }
  }

  if (range === 0) {
    return { binEdges: [min, min + 1], counts: [n], binWidth: 1 };
  }

  const binWidth = range / binCount;
  const binEdges: number[] = Array.from(
    { length: binCount + 1 },
    (_, i) => min + i * binWidth,
  );
  const counts = new Array<number>(binCount).fill(0);
  for (const x of xs) {
    let idx = Math.floor((x - min) / binWidth);
    if (idx >= binCount) idx = binCount - 1;
    counts[idx]! += 1;
  }
  return { binEdges, counts, binWidth };
}
