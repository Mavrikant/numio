import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "power-factor",
  category: "engineering",
  priority: "P1",
  icon: "activity",
  inputs: [
    {
      id: "mode",
      type: {
        kind: "select",
        options: [
          { value: "pf_from_power", i18nKey: "pf_from_power" },
          { value: "power_from_pf", i18nKey: "power_from_pf" },
          { value: "correction", i18nKey: "correction" },
        ],
      },
      defaultValue: "pf_from_power",
      required: true,
    },
    {
      id: "realPowerKw",
      type: { kind: "number", min: 0, max: 1_000_000, step: 0.1, unit: "kw" },
      defaultValue: 75,
      required: false,
    },
    {
      id: "reactivePowerKvar",
      type: { kind: "number", min: -1_000_000, max: 1_000_000, step: 0.1 },
      defaultValue: 50,
      required: false,
    },
    {
      id: "kva",
      type: { kind: "number", min: 0, max: 1_000_000, step: 0.1 },
      defaultValue: 100,
      required: false,
    },
    {
      id: "pf",
      type: { kind: "number", min: 0.01, max: 1, step: 0.01, unit: "ratio" },
      defaultValue: 0.85,
      required: false,
    },
    {
      id: "currentPf",
      type: { kind: "number", min: 0.01, max: 1, step: 0.01, unit: "ratio" },
      defaultValue: 0.7,
      required: false,
    },
    {
      id: "targetPf",
      type: { kind: "number", min: 0.01, max: 1, step: 0.01, unit: "ratio" },
      defaultValue: 0.95,
      required: false,
    },
    {
      id: "voltageV",
      type: { kind: "number", min: 100, max: 13800, step: 1, unit: "volt" },
      defaultValue: 230,
      required: false,
    },
    {
      id: "frequencyHz",
      type: {
        kind: "select",
        options: [
          { value: "50", i18nKey: "50hz" },
          { value: "60", i18nKey: "60hz" },
        ],
      },
      defaultValue: "50",
      required: false,
    },
  ],
  outputs: [
    {
      id: "powerFactorPf",
      format: "number",
      precision: 3,
      unit: "ratio",
      highlight: true,
    },
    {
      id: "realPowerKw",
      format: "number",
      precision: 2,
      unit: "kw",
    },
    {
      id: "apparentPowerKva",
      format: "number",
      precision: 2,
    },
    {
      id: "reactivePowerKvar",
      format: "number",
      precision: 2,
    },
    {
      id: "phaseAngleDeg",
      format: "number",
      precision: 1,
    },
    {
      id: "correctionCapacitorMicrofarad",
      format: "number",
      precision: 1,
    },
    {
      id: "kvarRequired",
      format: "number",
      precision: 2,
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "PF = \\cos(\\phi) = \\frac{P}{S},\\quad Q_{cap} = P(\\tan\\phi_1 - \\tan\\phi_2)",
    references: [
      {
        title: "IEEE Standard for Power Factor and Reactive Power",
        url: "https://standards.ieee.org/ieee/1459/3388/",
        authority: "Institute of Electrical and Electronics Engineers (IEEE)",
      },
      {
        title: "IEC 61000-3-2 — Limits for Harmonic Current Emissions",
        url: "https://www.iec.ch/",
        authority: "International Electrotechnical Commission (IEC)",
      },
    ],
    disclaimer:
      "Power factor correction values assume linear loads and fundamental frequency. Harmonics from non-linear loads (VFDs, UPS, etc.) require specialized harmonic analysis.",
  },
  related: ["ohms-law", "wire-gauge", "led-resistor"],
  tags: ["power factor", "kVA", "kVAR", "reactive power", "capacitor", "electrical"],
});
