import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "dipole-antenna-length",
  category: "engineering",
  priority: "P2",
  icon: "radio",
  inputs: [
    {
      id: "frequencyMHz",
      type: { kind: "number", min: 0.01, max: 1e6, step: 0.01, unit: "hertz" },
      defaultValue: 14.1,
      required: true,
    },
    {
      id: "type",
      type: {
        kind: "select",
        options: [
          { value: "half-wave-dipole", i18nKey: "half-wave-dipole" },
          { value: "quarter-wave-monopole", i18nKey: "quarter-wave-monopole" },
          { value: "full-wave-loop", i18nKey: "full-wave-loop" },
        ],
      },
      defaultValue: "half-wave-dipole",
      required: true,
    },
    {
      id: "velocityFactorPct",
      type: { kind: "number", min: 50, max: 100, step: 0.5, unit: "percent" },
      defaultValue: 95,
      required: true,
    },
  ],
  outputs: [
    { id: "lengthM", format: "number", precision: 4, unit: "m", highlight: true },
    { id: "lengthCm", format: "number", precision: 1, unit: "cm" },
    { id: "legLengthM", format: "number", precision: 4, unit: "m" },
    { id: "wavelengthM", format: "number", precision: 4, unit: "m" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "L = \\text{fraction} \\cdot \\lambda \\cdot \\text{vf},\\quad \\lambda = \\frac{c}{f}",
    references: [
      {
        title: "ARRL Antenna Book — practical dipole length (468/f ft ≈ 142.6/f m)",
        url: "https://en.wikipedia.org/wiki/Dipole_antenna",
        authority: "ARRL / Wikipedia",
      },
      {
        title: "Monopole antenna and velocity-factor relations",
        url: "https://en.wikipedia.org/wiki/Monopole_antenna",
        authority: "Wikipedia",
      },
    ],
    disclaimer:
      "Computed lengths are practical starting points. The actual resonant length depends on wire diameter, insulation, height above ground, nearby objects and feed method, so trim and measure SWR to fine-tune. A quarter-wave monopole assumes an adequate ground plane.",
  },
  related: ["signal-frequency", "free-space-path-loss", "antenna-gain"],
  tags: ["dipole", "antenna length", "half-wave", "quarter-wave", "monopole", "ham radio", "RF", "resonant", "wavelength", "velocity factor"],
});
