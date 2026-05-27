import { z } from "zod";

/**
 * Parabolic (dish) antenna gain and half-power beamwidth.
 *
 * The boresight gain of an aperture antenna relative to an isotropic radiator:
 *
 *   G = η · (π·D / λ)²            (linear)
 *   G(dBi) = 10·log10(η) + 20·log10(π·D·f / c)
 *
 * where D is the dish diameter (m), λ the wavelength (m), f the frequency (Hz),
 * c = 299 792 458 m/s and η the aperture efficiency (typically 0.5–0.7).
 *
 * Half-power (−3 dB) beamwidth for a uniformly-ish illuminated circular dish
 * is approximated by the widely-used engineering rule:
 *
 *   HPBW(°) ≈ 70 · λ / D
 *
 * Effective aperture: A_eff = G·λ² / (4π).
 *
 * References:
 *   - Balanis, C.A. "Antenna Theory: Analysis and Design."
 *   - ITU-R / standard parabolic-reflector gain and beamwidth relations.
 */
export const inputSchema = z.object({
  diameterM: z.number().positive().max(1000),
  frequencyMHz: z.number().positive().max(1e9),
  efficiencyPct: z.number().min(1).max(100).default(55),
});

export type AntennaGainInputs = z.infer<typeof inputSchema>;

export interface AntennaGainResult extends Record<string, unknown> {
  readonly gainDbi: number;
  readonly gainLinear: number;
  readonly beamwidthDeg: number;
  readonly wavelengthM: number;
  readonly effectiveApertureM2: number;
}

const SPEED_OF_LIGHT = 299_792_458; // m/s, exact (NIST/CODATA)

export function compute(inputs: AntennaGainInputs): AntennaGainResult {
  const fHz = inputs.frequencyMHz * 1e6;
  const eta = inputs.efficiencyPct / 100;
  const wavelengthM = SPEED_OF_LIGHT / fHz;

  const gainLinear = eta * Math.pow((Math.PI * inputs.diameterM) / wavelengthM, 2);
  const gainDbi = 10 * Math.log10(gainLinear);
  const beamwidthDeg = (70 * wavelengthM) / inputs.diameterM;
  const effectiveApertureM2 = (gainLinear * wavelengthM * wavelengthM) / (4 * Math.PI);

  return { gainDbi, gainLinear, beamwidthDeg, wavelengthM, effectiveApertureM2 };
}
