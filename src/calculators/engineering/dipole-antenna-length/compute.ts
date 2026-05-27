import { z } from "zod";

/**
 * Resonant antenna element length (dipole / monopole / full-wave loop).
 *
 * The free-space wavelength is λ = c / f. A practical wire antenna is slightly
 * shorter than the ideal electrical length because of the end (capacitance)
 * effect and the wire's velocity factor:
 *
 *   physical length = (fraction · λ) · vf
 *
 * with fraction = 0.5 for a half-wave dipole, 0.25 for a quarter-wave
 * monopole, and 1.0 for a full-wave loop (its circumference). `vf` is the
 * velocity factor (≈0.95 for thin wire in air; lower for insulated/thick wire).
 *
 * For a half-wave dipole each of the two legs is half the total length.
 *
 * Reference check (half-wave dipole, vf=0.95): L ≈ 142.5 / f(MHz) metres.
 *
 * References:
 *   - ARRL Antenna Book — practical dipole length 468/f(ft) ≈ 142.6/f(m).
 *   - Standard λ = c/f relation, c = 299 792 458 m/s (NIST/CODATA).
 */
export const inputSchema = z.object({
  frequencyMHz: z.number().positive().max(1e6),
  type: z.enum(["half-wave-dipole", "quarter-wave-monopole", "full-wave-loop"]).default(
    "half-wave-dipole",
  ),
  velocityFactorPct: z.number().min(50).max(100).default(95),
});

export type DipoleInputs = z.infer<typeof inputSchema>;

export interface DipoleResult extends Record<string, unknown> {
  readonly lengthM: number;
  readonly lengthCm: number;
  readonly legLengthM: number;
  readonly wavelengthM: number;
}

const SPEED_OF_LIGHT = 299_792_458; // m/s, exact (NIST/CODATA)

const FRACTION: Record<DipoleInputs["type"], number> = {
  "half-wave-dipole": 0.5,
  "quarter-wave-monopole": 0.25,
  "full-wave-loop": 1,
};

export function compute(inputs: DipoleInputs): DipoleResult {
  const fHz = inputs.frequencyMHz * 1e6;
  const vf = inputs.velocityFactorPct / 100;
  const wavelengthM = SPEED_OF_LIGHT / fHz;

  const lengthM = FRACTION[inputs.type] * wavelengthM * vf;
  // A dipole splits into two equal legs; other types have a single conductor.
  const legLengthM = inputs.type === "half-wave-dipole" ? lengthM / 2 : lengthM;

  return {
    lengthM,
    lengthCm: lengthM * 100,
    legLengthM,
    wavelengthM,
  };
}
