import { z } from "zod";

/**
 * Time to transfer a file of a given size at a given connection speed.
 * Uses decimal units (1 MB = 10⁶ bytes) and 8 bits per byte.
 */
export const inputSchema = z.object({
  fileSize: z.number().positive().max(1e9),
  fileSizeUnit: z.enum(["MB", "GB", "TB"]).default("GB"),
  speed: z.number().positive().max(1e9),
  speedUnit: z.enum(["Mbps", "MBps", "Gbps"]).default("Mbps"),
});

export type TransferInputs = z.infer<typeof inputSchema>;

export interface TransferResult extends Record<string, unknown> {
  readonly seconds: number;
  readonly minutes: number;
  readonly hours: number;
}

const BYTES: Record<TransferInputs["fileSizeUnit"], number> = { MB: 1e6, GB: 1e9, TB: 1e12 };
const BITS_PER_SEC: Record<TransferInputs["speedUnit"], number> = { Mbps: 1e6, MBps: 8e6, Gbps: 1e9 };

export function compute(inputs: TransferInputs): TransferResult {
  const totalBits = inputs.fileSize * BYTES[inputs.fileSizeUnit] * 8;
  const seconds = totalBits / (inputs.speed * BITS_PER_SEC[inputs.speedUnit]);
  return { seconds, minutes: seconds / 60, hours: seconds / 3600 };
}
