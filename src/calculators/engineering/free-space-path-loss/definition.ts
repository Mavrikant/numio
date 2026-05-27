import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "free-space-path-loss",
  category: "engineering",
  priority: "P2",
  icon: "radio-tower",
  inputs: [
    {
      id: "frequencyMHz",
      type: { kind: "number", min: 0.001, max: 1e9, step: 1, unit: "hertz" },
      defaultValue: 2400,
      required: true,
    },
    {
      id: "distanceKm",
      type: { kind: "number", min: 0.001, max: 1e6, step: 0.1, unit: "km" },
      defaultValue: 1,
      required: true,
    },
    {
      id: "txPowerDbm",
      type: { kind: "number", min: -100, max: 200, step: 0.1 },
      defaultValue: 20,
      required: false,
    },
    {
      id: "txGainDbi",
      type: { kind: "number", min: -50, max: 100, step: 0.1 },
      defaultValue: 0,
      required: false,
    },
    {
      id: "rxGainDbi",
      type: { kind: "number", min: -50, max: 100, step: 0.1 },
      defaultValue: 0,
      required: false,
    },
  ],
  outputs: [
    { id: "fsplDb", format: "number", precision: 2, highlight: true },
    { id: "wavelengthM", format: "number", precision: 4, unit: "m" },
    { id: "eirpDbm", format: "number", precision: 2 },
    { id: "rxPowerDbm", format: "number", precision: 2 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "\\text{FSPL}_{dB} = 20\\log_{10}(d) + 20\\log_{10}(f) + 20\\log_{10}\\!\\left(\\frac{4\\pi}{c}\\right)",
    references: [
      {
        title: "Friis transmission equation (free-space propagation)",
        url: "https://en.wikipedia.org/wiki/Friis_transmission_equation",
        authority: "Wikipedia",
      },
      {
        title: "ITU-R Recommendation P.525 — Calculation of free-space attenuation",
        url: "https://www.itu.int/rec/R-REC-P.525/",
        authority: "International Telecommunication Union (ITU)",
      },
    ],
    disclaimer:
      "Free-space path loss assumes an unobstructed line-of-sight path with no reflection, diffraction, atmospheric absorption, rain fade or multipath. Real-world links experience additional loss; FSPL is the theoretical minimum. The link-budget outputs ignore cable/connector losses and receiver noise.",
  },
  related: ["signal-frequency", "antenna-gain", "dipole-antenna-length"],
  tags: ["FSPL", "path loss", "link budget", "RF", "radio", "Friis", "dBm", "EIRP", "wireless", "propagation"],
});
