import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "signal-frequency",
  category: "engineering",
  priority: "P2",
  icon: "zap",
  inputs: [
    {
      id: "mode",
      type: {
        kind: "select",
        options: [
          { value: "frequency-to-wavelength", i18nKey: "frequency-to-wavelength" },
          { value: "wavelength-to-frequency", i18nKey: "wavelength-to-frequency" },
          { value: "period-to-frequency", i18nKey: "period-to-frequency" },
        ],
      },
      defaultValue: "frequency-to-wavelength",
      required: true,
    },
    {
      id: "value",
      type: { kind: "number", min: 1e-30, max: 1e30, step: 0.000001 },
      defaultValue: 100_000_000, // 100 MHz default
      required: true,
    },
    {
      id: "medium",
      type: {
        kind: "select",
        options: [
          { value: "vacuum", i18nKey: "vacuum" },
          { value: "air", i18nKey: "air" },
          { value: "water", i18nKey: "water" },
        ],
      },
      defaultValue: "vacuum",
      required: true,
    },
  ],
  outputs: [
    { id: "frequencyHz", format: "number", precision: 4, unit: "hertz", highlight: true },
    { id: "frequencyDisplay", format: "text" },
    { id: "wavelengthM", format: "number", precision: 6, unit: "m" },
    { id: "wavelengthDisplay", format: "text" },
    { id: "periodS", format: "number", precision: 9, unit: "second" },
    { id: "waveSpeedMs", format: "number", precision: 0, unit: "ms" },
    { id: "waveType", format: "text" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "v = f \\cdot \\lambda, \\quad T = \\frac{1}{f}, \\quad \\lambda = \\frac{v}{f}",
    references: [
      {
        title: "CODATA Value: speed of light in vacuum (c = 299 792 458 m/s, exact)",
        url: "https://physics.nist.gov/cgi-bin/cuu/Value?c",
        authority: "National Institute of Standards and Technology (NIST)",
      },
      {
        title: "ITU-R Recommendation V.431 — Nomenclature of the frequency and wavelength bands used in telecommunications",
        url: "https://www.itu.int/rec/R-REC-V.431/",
        authority: "International Telecommunication Union (ITU)",
      },
      {
        title: "Speed of sound — reference values for air and water",
        url: "https://www.engineeringtoolbox.com/speed-sound-d_82.html",
        authority: "The Engineering ToolBox",
      },
    ],
    disclaimer:
      "Wavelength/frequency relations assume a non-dispersive, lossless medium. The 'vacuum' medium uses the exact CODATA value c = 299 792 458 m/s and applies to electromagnetic waves (radio, light). 'Air' (343 m/s at 20 °C) and 'water' (1480 m/s at 20 °C) use the speed of sound and apply only to acoustic (mechanical) waves. Real-world propagation depends on temperature, humidity, salinity, refractive index and frequency.",
  },
  related: ["power-factor", "capacitor", "transformer"],
  tags: [
    "frequency",
    "wavelength",
    "period",
    "hertz",
    "radio",
    "electromagnetic",
    "acoustic",
    "wifi",
    "5G",
    "RF",
  ],
});
