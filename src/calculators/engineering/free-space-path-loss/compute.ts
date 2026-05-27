import { z } from "zod";

/**
 * Free-Space Path Loss (FSPL) + simple link budget.
 *
 * FSPL is the attenuation of radio energy between two antennas in free space
 * (line of sight, no obstacles, no multipath). In decibels:
 *
 *   FSPL(dB) = 20·log10(d) + 20·log10(f) + 20·log10(4π/c)
 *            = 20·log10(d_m) + 20·log10(f_Hz) − 147.55
 *
 * where d is distance (m), f is frequency (Hz) and c = 299 792 458 m/s. The
 * −147.55 dB constant is 20·log10(4π/c).
 *
 * Received power (a one-line link budget) follows from:
 *   P_rx = P_tx + G_tx + G_rx − FSPL          (all in dB / dBm / dBi)
 * with EIRP = P_tx + G_tx.
 *
 * References:
 *   - Friis transmission equation (free-space). Friis, H.T. (1946).
 *   - ITU-R P.525: Calculation of free-space attenuation.
 */
export const inputSchema = z.object({
  frequencyMHz: z.number().positive().max(1e9),
  distanceKm: z.number().positive().max(1e6),
  txPowerDbm: z.number().min(-100).max(200).default(0),
  txGainDbi: z.number().min(-50).max(100).default(0),
  rxGainDbi: z.number().min(-50).max(100).default(0),
});

export type FsplInputs = z.infer<typeof inputSchema>;

export interface FsplResult extends Record<string, unknown> {
  readonly fsplDb: number;
  readonly wavelengthM: number;
  readonly eirpDbm: number;
  readonly rxPowerDbm: number;
}

const SPEED_OF_LIGHT = 299_792_458; // m/s, exact (NIST/CODATA)

export function compute(inputs: FsplInputs): FsplResult {
  const fHz = inputs.frequencyMHz * 1e6;
  const dM = inputs.distanceKm * 1000;

  // FSPL = 20log10(d) + 20log10(f) + 20log10(4π/c)
  const fsplDb =
    20 * Math.log10(dM) +
    20 * Math.log10(fHz) +
    20 * Math.log10((4 * Math.PI) / SPEED_OF_LIGHT);

  const wavelengthM = SPEED_OF_LIGHT / fHz;
  const eirpDbm = inputs.txPowerDbm + inputs.txGainDbi;
  const rxPowerDbm = eirpDbm + inputs.rxGainDbi - fsplDb;

  return { fsplDb, wavelengthM, eirpDbm, rxPowerDbm };
}
