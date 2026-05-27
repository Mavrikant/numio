import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "antenna-gain",
  category: "engineering",
  priority: "P2",
  icon: "satellite-dish",
  inputs: [
    {
      id: "diameterM",
      type: { kind: "number", min: 0.01, max: 1000, step: 0.01, unit: "m" },
      defaultValue: 1.2,
      required: true,
    },
    {
      id: "frequencyMHz",
      type: { kind: "number", min: 1, max: 1e9, step: 1, unit: "hertz" },
      defaultValue: 12000,
      required: true,
    },
    {
      id: "efficiencyPct",
      type: { kind: "number", min: 1, max: 100, step: 1, unit: "percent" },
      defaultValue: 55,
      required: true,
    },
  ],
  outputs: [
    { id: "gainDbi", format: "number", precision: 2, highlight: true },
    { id: "gainLinear", format: "number", precision: 1 },
    { id: "beamwidthDeg", format: "number", precision: 3 },
    { id: "wavelengthM", format: "number", precision: 4, unit: "m" },
    { id: "effectiveApertureM2", format: "number", precision: 4, unit: "m2" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "G = \\eta\\left(\\frac{\\pi D}{\\lambda}\\right)^2,\\quad \\text{HPBW} \\approx \\frac{70\\lambda}{D}",
    references: [
      {
        title: "Balanis, C. A. — Antenna Theory: Analysis and Design (aperture gain)",
        url: "https://en.wikipedia.org/wiki/Parabolic_antenna",
        authority: "Wikipedia / Balanis",
      },
      {
        title: "Antenna gain and effective aperture relations",
        url: "https://en.wikipedia.org/wiki/Antenna_gain",
        authority: "Wikipedia",
      },
    ],
    disclaimer:
      "Gain and beamwidth use the standard parabolic-aperture approximations and assume a circular reflector with the stated aperture efficiency. Real dishes are affected by surface tolerance, feed spillover, blockage and illumination taper. The 70·λ/D beamwidth rule is an approximation (values of 58–70 are used depending on illumination).",
  },
  related: ["free-space-path-loss", "signal-frequency", "dipole-antenna-length"],
  tags: ["antenna gain", "parabolic", "dish", "dBi", "beamwidth", "HPBW", "aperture", "RF", "satellite", "microwave"],
});
