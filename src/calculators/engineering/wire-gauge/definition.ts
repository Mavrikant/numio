import { defineCalculator } from "@/types/calculator";
import { AWG_VALUES, inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "wire-gauge",
  category: "engineering",
  priority: "P1",
  icon: "cable",
  inputs: [
    {
      id: "awg",
      type: {
        kind: "select",
        options: AWG_VALUES.map((v) => ({ value: v, i18nKey: v })),
      },
      defaultValue: "12",
      required: true,
    },
    {
      id: "current",
      type: { kind: "number", min: 0, max: 400, step: 0.5, unit: "amp" },
      defaultValue: 20,
      required: true,
    },
    {
      id: "lengthM",
      type: { kind: "number", min: 0.1, max: 1000, step: 0.5, unit: "m" },
      defaultValue: 30,
      required: true,
    },
    {
      id: "loadCurrent",
      type: { kind: "number", min: 0, max: 400, step: 0.5, unit: "amp" },
      defaultValue: 20,
      required: false,
    },
  ],
  outputs: [
    {
      id: "ampacity",
      format: "number",
      precision: 0,
      unit: "amp",
      highlight: true,
    },
    {
      id: "diameterMm",
      format: "number",
      precision: 3,
      unit: "mm",
    },
    {
      id: "areaMm2",
      format: "number",
      precision: 3,
    },
    {
      id: "resistancePerMeterOhm",
      format: "number",
      precision: 4,
      unit: "ohm",
    },
    {
      id: "voltageDrop",
      format: "number",
      precision: 3,
      unit: "volt",
    },
    {
      id: "voltageDropPct",
      format: "number",
      precision: 2,
      unit: "percent",
    },
    {
      id: "isSuitable",
      format: "text",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "d_{mm} = 0.127 \\times 92^{\\frac{36-AWG}{39}}, \\quad R/m = \\frac{\\rho}{A}",
    references: [
      {
        title: "NEC 310.15(B)(16) — Allowable Ampacities",
        url: "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70",
        authority: "National Fire Protection Association (NFPA 70 / NEC)",
      },
      {
        title: "AWG Copper Wire Standard",
        url: "https://www.astm.org/b0258-02r14.html",
        authority: "ASTM International",
      },
    ],
    disclaimer:
      "Ampacity values are from NEC 310.15(B)(16) for copper conductors at 60°C in free air. Actual installations may require derating for conduit fill, ambient temperature, or bundling. Always consult a licensed electrician.",
  },
  related: ["ohms-law", "voltage-drop", "power-factor"],
  tags: ["wire gauge", "AWG", "ampacity", "voltage drop", "NEC", "electrical"],
});
