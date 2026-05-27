import { z } from "zod";

/**
 * Signal frequency / wavelength / period calculator.
 *
 * Core relations:
 *   v = f · λ       (wave speed = frequency × wavelength)
 *   T = 1 / f       (period = 1 / frequency)
 *
 * Wave speed depends on medium:
 *   - vacuum (electromagnetic): c = 299 792 458 m/s (CODATA exact)
 *   - air (acoustic, 20°C, 1 atm): 343 m/s
 *   - water (acoustic, freshwater 20°C): 1480 m/s
 *
 * The "vacuum" medium implies an electromagnetic wave (radio, light).
 * "Air" and "water" imply an acoustic (sound) wave at the specified
 * temperature. Mixing the two cases — e.g. picking "air" for a radio
 * signal — would silently use the speed of sound, so the caller must
 * choose the medium that matches the wave type.
 *
 * References:
 *   - NIST: speed of light in vacuum, c = 299792458 m/s exact.
 *     https://physics.nist.gov/cgi-bin/cuu/Value?c
 *   - ITU-R Recommendation V.431: nomenclature of frequency bands.
 *   - Speed of sound in air (20°C, dry): 343 m/s; in water (20°C): 1480 m/s.
 */
export const inputSchema = z.object({
  mode: z.enum([
    "frequency-to-wavelength",
    "wavelength-to-frequency",
    "period-to-frequency",
  ]),
  value: z.number().positive().max(1e30),
  medium: z.enum(["vacuum", "air", "water"]).default("vacuum"),
});

export type SignalFrequencyInputs = z.infer<typeof inputSchema>;

export interface SignalFrequencyResult extends Record<string, unknown> {
  readonly frequencyHz: number;
  readonly frequencyDisplay: string;
  readonly wavelengthM: number;
  readonly wavelengthDisplay: string;
  readonly periodS: number;
  readonly waveSpeedMs: number;
  readonly waveType: "electromagnetic" | "acoustic";
}

const SPEED_OF_LIGHT = 299_792_458; // m/s, exact (NIST/CODATA)
const SPEED_OF_SOUND_AIR = 343; // m/s at 20°C, 1 atm
const SPEED_OF_SOUND_WATER = 1480; // m/s, freshwater at 20°C

function speedForMedium(medium: SignalFrequencyInputs["medium"]): number {
  switch (medium) {
    case "vacuum":
      return SPEED_OF_LIGHT;
    case "air":
      return SPEED_OF_SOUND_AIR;
    case "water":
      return SPEED_OF_SOUND_WATER;
  }
}

function formatFrequency(hz: number): string {
  if (!Number.isFinite(hz) || hz <= 0) return "0 Hz";
  if (hz >= 1e12) return `${(hz / 1e12).toPrecision(4)} THz`;
  if (hz >= 1e9) return `${(hz / 1e9).toPrecision(4)} GHz`;
  if (hz >= 1e6) return `${(hz / 1e6).toPrecision(4)} MHz`;
  if (hz >= 1e3) return `${(hz / 1e3).toPrecision(4)} kHz`;
  return `${hz.toPrecision(4)} Hz`;
}

function formatWavelength(m: number): string {
  if (!Number.isFinite(m) || m <= 0) return "0 m";
  if (m >= 1000) return `${(m / 1000).toPrecision(4)} km`;
  if (m >= 1) return `${m.toPrecision(4)} m`;
  if (m >= 1e-2) return `${(m * 100).toPrecision(4)} cm`;
  if (m >= 1e-3) return `${(m * 1000).toPrecision(4)} mm`;
  if (m >= 1e-6) return `${(m * 1e6).toPrecision(4)} µm`;
  return `${(m * 1e9).toPrecision(4)} nm`;
}

export function compute(inputs: SignalFrequencyInputs): SignalFrequencyResult {
  const v = speedForMedium(inputs.medium);
  const waveType: "electromagnetic" | "acoustic" =
    inputs.medium === "vacuum" ? "electromagnetic" : "acoustic";

  let frequencyHz: number;
  let wavelengthM: number;

  switch (inputs.mode) {
    case "frequency-to-wavelength":
      frequencyHz = inputs.value;
      wavelengthM = v / frequencyHz;
      break;
    case "wavelength-to-frequency":
      wavelengthM = inputs.value;
      frequencyHz = v / wavelengthM;
      break;
    case "period-to-frequency":
      // T (s) → f = 1/T
      frequencyHz = 1 / inputs.value;
      wavelengthM = v / frequencyHz;
      break;
  }

  const periodS = 1 / frequencyHz;

  return {
    frequencyHz,
    frequencyDisplay: formatFrequency(frequencyHz),
    wavelengthM,
    wavelengthDisplay: formatWavelength(wavelengthM),
    periodS,
    waveSpeedMs: v,
    waveType,
  };
}
