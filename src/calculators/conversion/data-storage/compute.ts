import { z } from "zod";

export const inputSchema = z.object({
  value: z.number().nonnegative(),
  fromUnit: z.enum(["B", "KB", "MB", "GB", "TB", "PB"]),
  toUnit: z.enum(["B", "KB", "MB", "GB", "TB", "PB"]),
  mode: z.enum(["binary", "decimal"]),
});

export type DataStorageInputs = z.infer<typeof inputSchema>;

export interface DataStorageResult extends Record<string, unknown> {
  readonly result: number;
  readonly explanation: string;
}

// Conversion factors
// Binary (1024-based): 1 KB = 1024 B
// Decimal (1000-based): 1 KB = 1000 B
const BINARY_FACTORS: Record<string, number> = {
  B: 1,
  KB: 1024,
  MB: 1024 ** 2,
  GB: 1024 ** 3,
  TB: 1024 ** 4,
  PB: 1024 ** 5,
};

const DECIMAL_FACTORS: Record<string, number> = {
  B: 1,
  KB: 1000,
  MB: 1000 ** 2,
  GB: 1000 ** 3,
  TB: 1000 ** 4,
  PB: 1000 ** 5,
};

export function compute(inputs: DataStorageInputs): DataStorageResult {
  const factors = inputs.mode === "binary" ? BINARY_FACTORS : DECIMAL_FACTORS;

  // Convert from source unit to bytes
  const bytes = inputs.value * factors[inputs.fromUnit];

  // Convert from bytes to target unit
  const result = bytes / factors[inputs.toUnit];

  const baseStr = inputs.mode === "binary" ? "1024" : "1000";
  const explanation = inputs.mode === "binary"
    ? `Binary conversion (KiB, MiB, GiB use base 1024)`
    : `Decimal conversion (KB, MB, GB use base 1000)`;

  return {
    result: result,
    explanation,
  };
}
