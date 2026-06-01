import { z } from "zod";

// Byte units use an uppercase "B" suffix (B, KB, …); bit units use a "bit"
// suffix (bit, Kbit, …). Keeping the codes distinct avoids the classic
// B-vs-b ambiguity in URLs and schema values.
const UNITS = [
  "B",
  "KB",
  "MB",
  "GB",
  "TB",
  "PB",
  "bit",
  "Kbit",
  "Mbit",
  "Gbit",
  "Tbit",
  "Pbit",
] as const;

export const inputSchema = z.object({
  value: z.number().nonnegative(),
  fromUnit: z.enum(UNITS),
  toUnit: z.enum(UNITS),
  mode: z.enum(["binary", "decimal"]),
});

export type DataStorageInputs = z.infer<typeof inputSchema>;

export interface DataStorageResult extends Record<string, unknown> {
  readonly result: number;
  readonly explanation: string;
}

// Conversion factors expressed in bits — the smallest unit — so that byte and
// bit units can convert between each other (1 byte = 8 bits).
// Binary (1024-based): 1 KB = 1024 B, 1 Kbit = 1024 bit
// Decimal (1000-based): 1 KB = 1000 B, 1 Kbit = 1000 bit
const BINARY_FACTORS: Record<string, number> = {
  bit: 1,
  Kbit: 1024,
  Mbit: 1024 ** 2,
  Gbit: 1024 ** 3,
  Tbit: 1024 ** 4,
  Pbit: 1024 ** 5,
  B: 8,
  KB: 8 * 1024,
  MB: 8 * 1024 ** 2,
  GB: 8 * 1024 ** 3,
  TB: 8 * 1024 ** 4,
  PB: 8 * 1024 ** 5,
};

const DECIMAL_FACTORS: Record<string, number> = {
  bit: 1,
  Kbit: 1000,
  Mbit: 1000 ** 2,
  Gbit: 1000 ** 3,
  Tbit: 1000 ** 4,
  Pbit: 1000 ** 5,
  B: 8,
  KB: 8 * 1000,
  MB: 8 * 1000 ** 2,
  GB: 8 * 1000 ** 3,
  TB: 8 * 1000 ** 4,
  PB: 8 * 1000 ** 5,
};

export function compute(inputs: DataStorageInputs): DataStorageResult {
  const factors = inputs.mode === "binary" ? BINARY_FACTORS : DECIMAL_FACTORS;

  // Convert from source unit to bits
  const bits = inputs.value * factors[inputs.fromUnit];

  // Convert from bits to target unit
  const result = bits / factors[inputs.toUnit];

  const explanation = inputs.mode === "binary"
    ? `Binary conversion (KiB, MiB, GiB use base 1024)`
    : `Decimal conversion (KB, MB, GB use base 1000)`;

  return {
    result: result,
    explanation,
  };
}
