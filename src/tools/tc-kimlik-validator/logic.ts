export interface TcKimlikResult {
  readonly valid: boolean;
  readonly error: string | null;
}

/**
 * Validate a Turkish national ID (TC Kimlik No) by the standard checksum
 * rules: 11 digits, first digit non-zero, digit 10 derived from the odd/even
 * sum rule, digit 11 from the sum of the first ten digits.
 */
export function validateTcKimlik(input: string): TcKimlikResult {
  const s = input.replace(/\s+/g, "");
  if (!s) return { valid: false, error: null };
  if (!/^\d{11}$/.test(s)) return { valid: false, error: "TC Kimlik No must be exactly 11 digits." };

  const d = s.split("").map(Number) as number[];
  if (d[0] === 0) return { valid: false, error: "The first digit cannot be 0." };

  const oddSum = d[0]! + d[2]! + d[4]! + d[6]! + d[8]!;
  const evenSum = d[1]! + d[3]! + d[5]! + d[7]!;
  const digit10 = (oddSum * 7 - evenSum + 100) % 10;
  if (digit10 !== d[9]) return { valid: false, error: "Checksum failed at digit 10." };

  const sum10 = d.slice(0, 10).reduce((a, b) => a + b, 0);
  if (sum10 % 10 !== d[10]) return { valid: false, error: "Checksum failed at digit 11." };

  return { valid: true, error: null };
}
