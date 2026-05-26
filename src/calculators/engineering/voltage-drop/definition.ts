import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "voltage-drop",
  category: "engineering",
  priority: "P1",
  icon: "cable",
  inputs: [
    {
      id: "conductorMaterial",
      type: {
        kind: "select",
        options: [
          { value: "copper", i18nKey: "copper" },
          { value: "aluminum", i18nKey: "aluminum" },
        ],
      },
      defaultValue: "copper",
      required: true,
    },
    {
      id: "wireGaugeUnit",
      type: {
        kind: "select",
        options: [
          { value: "awg", i18nKey: "awg" },
          { value: "mm2", i18nKey: "mm2" },
        ],
      },
      defaultValue: "awg",
      required: true,
    },
    {
      id: "wireGauge",
      type: { kind: "number", min: 0.1, step: 1 },
      defaultValue: 12,
      required: true,
    },
    {
      id: "lengthM",
      type: { kind: "number", min: 0.1, step: 1, unit: "m" },
      defaultValue: 30,
      required: true,
    },
    {
      id: "currentA",
      type: { kind: "number", min: 0.01, step: 0.1, unit: "amp" },
      defaultValue: 15,
      required: true,
    },
    {
      id: "voltage",
      type: { kind: "number", min: 1, step: 1, unit: "volt" },
      defaultValue: 120,
      required: true,
    },
  ],
  outputs: [
    {
      id: "voltageDrop",
      format: "number",
      precision: 2,
      unit: "volt",
      highlight: true,
    },
    {
      id: "voltageDropPct",
      format: "number",
      precision: 2,
      unit: "percent",
    },
    {
      id: "receivingVoltage",
      format: "number",
      precision: 2,
      unit: "volt",
    },
    {
      id: "recommendation",
      format: "text",
    },
    {
      id: "areaMm2",
      format: "number",
      precision: 2,
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "\\Delta V = \\frac{2 \\rho I L}{A},\\quad \\Delta V_{\\%} = \\frac{\\Delta V}{V_{\\text{source}}} \\times 100",
    references: [
      {
        title: "NEC Article 210.19(A)(1) FPN No. 4",
        authority: "National Electrical Code (NEC)",
      },
      {
        title: "IEEE Std 399 — Recommended Practice for Power Systems Analysis",
        authority: "IEEE",
        url: "https://www.ieee.org/",
      },
    ],
    disclaimer:
      "This calculator assumes a single-phase resistive circuit with copper or aluminum conductors. For three-phase systems, multiply the result by √3/2 ≈ 0.866. Always verify with a licensed electrician.",
  },
  related: ["ohms-law"],
  tags: ["voltage drop", "cable", "wire", "NEC", "AWG", "electrical", "conductor"],
});
