/**
 * Shared statistical utility functions for math calculators.
 * Provides mean, median, mode, range, standard deviation, variance, z-score, and normal CDF.
 */

/**
 * Calculate arithmetic mean (average) of an array of numbers.
 * @param values Array of numbers
 * @returns Mean value
 */
export function mean(values: readonly number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, val) => sum + val, 0) / values.length;
}

/**
 * Calculate median (middle value) of an array.
 * For even-length arrays, returns the average of the two middle values.
 * @param values Array of numbers
 * @returns Median value
 */
export function median(values: readonly number[]): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
  return sorted[mid];
}

/**
 * Calculate mode (most frequently occurring value) of an array.
 * Returns the smallest mode if multiple modes exist.
 * @param values Array of numbers
 * @returns Mode value
 */
export function mode(values: readonly number[]): number | null {
  if (values.length === 0) return null;

  const frequency: Record<number, number> = {};
  let maxFreq = 0;
  let mode: number | null = null;

  for (const val of values) {
    frequency[val] = (frequency[val] || 0) + 1;
    if (frequency[val] > maxFreq) {
      maxFreq = frequency[val];
      mode = val;
    }
  }

  // If all values appear equally, there is no mode
  if (maxFreq === 1) return null;

  return mode;
}

/**
 * Calculate range (max - min) of an array.
 * @param values Array of numbers
 * @returns Range value
 */
export function range(values: readonly number[]): number {
  if (values.length === 0) return 0;
  const min = Math.min(...values);
  const max = Math.max(...values);
  return max - min;
}

/**
 * Calculate variance of an array.
 * Uses population variance formula (dividing by n) by default.
 * @param values Array of numbers
 * @param sample If true, uses sample variance (n-1 divisor); otherwise population (n)
 * @returns Variance value
 */
export function variance(values: readonly number[], sample = false): number {
  if (values.length === 0) return 0;
  if (sample && values.length < 2) return 0;

  const m = mean(values);
  const sumSquaredDiffs = values.reduce((sum, val) => sum + (val - m) ** 2, 0);
  const divisor = sample ? values.length - 1 : values.length;

  return sumSquaredDiffs / divisor;
}

/**
 * Calculate standard deviation of an array.
 * Uses population standard deviation formula (dividing by n) by default.
 * @param values Array of numbers
 * @param sample If true, uses sample standard deviation (n-1 divisor); otherwise population (n)
 * @returns Standard deviation value
 */
export function standardDeviation(values: readonly number[], sample = false): number {
  return Math.sqrt(variance(values, sample));
}

/**
 * Calculate z-score (standardized score) for a value.
 * z = (x - μ) / σ
 * @param value The value to standardize
 * @param mean The mean of the distribution
 * @param stdDev The standard deviation of the distribution
 * @returns Z-score value
 */
export function zScore(value: number, mean: number, stdDev: number): number {
  if (stdDev === 0) return 0;
  return (value - mean) / stdDev;
}

/**
 * Approximate the cumulative distribution function (CDF) of the standard normal distribution.
 * Uses the error function approximation method based on Abramowitz and Stegun (1964).
 * This is a polynomial approximation accurate to ~0.000013.
 * @param z Z-score value
 * @returns Cumulative probability (0 to 1)
 */
export function normalCDF(z: number): number {
  // Handle extreme values
  if (z < -6.5) return 0;
  if (z > 6.5) return 1;

  // Constants for Abramowitz-Stegun approximation
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  // Compute error function
  const sign = z >= 0 ? 1 : -1;
  const absZ = Math.abs(z);
  const t = 1.0 / (1.0 + p * absZ);
  const t2 = t * t;
  const t3 = t2 * t;
  const t4 = t3 * t;
  const t5 = t4 * t;

  const erf = 1.0 - (a1 * t + a2 * t2 + a3 * t3 + a4 * t4 + a5 * t5) * Math.exp(-(absZ * absZ));

  // Convert error function to CDF
  return 0.5 * (1.0 + sign * erf);
}

/**
 * Calculate percentile from z-score using normal CDF.
 * @param z Z-score value
 * @returns Percentile (0-100)
 */
export function percentileFromZ(z: number): number {
  return normalCDF(z) * 100;
}

/**
 * Calculate quartiles (Q1, Q2/median, Q3) of an array.
 * @param values Array of numbers
 * @returns Object with q1, q2 (median), q3
 */
export function quartiles(values: readonly number[]): { q1: number; q2: number; q3: number } {
  if (values.length === 0) return { q1: 0, q2: 0, q3: 0 };

  const sorted = [...values].sort((a, b) => a - b);
  const len = sorted.length;

  // Calculate median (Q2)
  const q2 = len % 2 === 0 ? (sorted[len / 2 - 1] + sorted[len / 2]) / 2 : sorted[Math.floor(len / 2)];

  // Calculate Q1 (median of lower half)
  const lowerHalf = sorted.slice(0, Math.floor(len / 2));
  const q1 = lowerHalf.length % 2 === 0 ? (lowerHalf[lowerHalf.length / 2 - 1] + lowerHalf[lowerHalf.length / 2]) / 2 : lowerHalf[Math.floor(lowerHalf.length / 2)];

  // Calculate Q3 (median of upper half)
  const upperHalf = sorted.slice(Math.ceil(len / 2));
  const q3 = upperHalf.length % 2 === 0 ? (upperHalf[upperHalf.length / 2 - 1] + upperHalf[upperHalf.length / 2]) / 2 : upperHalf[Math.floor(upperHalf.length / 2)];

  return { q1, q2, q3 };
}

/**
 * Calculate min and max of an array.
 * @param values Array of numbers
 * @returns Object with min and max
 */
export function minMax(values: readonly number[]): { min: number; max: number } {
  if (values.length === 0) return { min: 0, max: 0 };
  return {
    min: Math.min(...values),
    max: Math.max(...values),
  };
}
