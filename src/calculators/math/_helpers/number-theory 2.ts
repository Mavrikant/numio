/**
 * Shared number theory utilities for math calculators
 * GCD (Euclidean algorithm), LCM, factorial, prime utilities, and factorization
 */

/**
 * Compute GCD using Euclidean algorithm
 * GCD(a, b) by repeatedly: a, b = b, a mod b until b = 0
 * Works for positive integers; handles edge cases (0, 1, negatives)
 */
export function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

/**
 * Compute LCM using GCD
 * LCM(a, b) = (a × b) / GCD(a, b)
 */
export function lcm(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;
  return Math.abs((a * b) / gcd(a, b));
}

/**
 * Check if a number is prime
 * Trial division up to √n
 */
export function isPrime(n: number): boolean {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  const sqrtN = Math.sqrt(n);
  for (let i = 3; i <= sqrtN; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * Sieve of Eratosthenes: find all primes up to n
 */
export function sieveOfEratosthenes(n: number): number[] {
  if (n < 2) return [];
  const sieve = new Array(n + 1).fill(true);
  sieve[0] = false;
  sieve[1] = false;
  for (let i = 2; i * i <= n; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= n; j += i) {
        sieve[j] = false;
      }
    }
  }
  return sieve
    .map((isPrime, index) => (isPrime ? index : -1))
    .filter((x) => x !== -1);
}

/**
 * Prime factorization: decompose n into prime factors with exponents
 * Returns array of [prime, exponent] pairs
 * Trial division up to √n
 */
export function primeFactorization(n: number): Array<[number, number]> {
  if (n < 2) return [];
  const factors: Array<[number, number]> = [];
  let remaining = n;

  // Trial division: check odd primes up to √n
  for (let i = 2; i * i <= remaining; i++) {
    let count = 0;
    while (remaining % i === 0) {
      count++;
      remaining /= i;
    }
    if (count > 0) {
      factors.push([i, count]);
    }
  }

  // If remaining > 1, it's a prime factor
  if (remaining > 1) {
    factors.push([remaining, 1]);
  }

  return factors;
}

/**
 * Compute factorial using BigInt for large numbers (n > 20)
 * For n ≤ 20, use regular number for speed; switch to BigInt to avoid overflow
 * Cap at n = 170 (limit before BigInt becomes unwieldy in typical use)
 */
export function factorial(n: number): number | bigint {
  if (n < 0) return NaN;
  if (n > 170) return Infinity; // Cap at 170

  if (n <= 20) {
    // Use regular number for small n
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  // Use BigInt for n > 20
  let result = 1n;
  for (let i = 2n; i <= BigInt(n); i++) {
    result *= i;
  }
  return result;
}

/**
 * Compute nCr (combinations): C(n, r) = n! / (r! × (n-r)!)
 * Uses factorial utility
 */
export function combinations(n: number, r: number): number {
  if (r < 0 || r > n) return 0;
  if (r === 0 || r === n) return 1;
  // Optimize by using the smaller of r or n-r
  const k = Math.min(r, n - r);
  let result = 1;
  for (let i = 0; i < k; i++) {
    result = (result * (n - i)) / (i + 1);
  }
  return Math.round(result); // Round to handle floating-point errors
}

/**
 * Compute nPr (permutations): P(n, r) = n! / (n-r)!
 */
export function permutations(n: number, r: number): number {
  if (r < 0 || r > n) return 0;
  if (r === 0) return 1;
  let result = 1;
  for (let i = 0; i < r; i++) {
    result *= n - i;
  }
  return result;
}
