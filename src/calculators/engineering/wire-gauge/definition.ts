import { defineCalculator } from "@/types/calculator";
import {
  SIZE_UNITS,
  MATERIALS,
  FREQUENCIES,
  inputSchema,
  compute,
} from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "wire-gauge",
  category: "engineering",
  priority: "P1",
  icon: "cable",
  inputs: [
    {
      id: "sizeUnit",
      type: {
        kind: "select",
        options: SIZE_UNITS.map((v) => ({ value: v, i18nKey: v })),
      },
      defaultValue: "mm2",
      required: true,
    },
    {
      id: "wireSize",
      type: { kind: "number", min: 0.01, max: 2000, step: 0.5 },
      defaultValue: 2.5,
      required: true,
    },
    {
      id: "wireLength",
      type: { kind: "number", min: 0.1, max: 10000, step: 0.5, unit: "m" },
      defaultValue: 50,
      required: true,
    },
    {
      id: "current",
      type: { kind: "number", min: 0.01, max: 1000, step: 0.5, unit: "amp" },
      defaultValue: 16,
      required: true,
    },
    {
      id: "material",
      type: {
        kind: "select",
        options: MATERIALS.map((v) => ({ value: v, i18nKey: v })),
      },
      defaultValue: "copper",
      required: true,
    },
    {
      id: "frequency",
      type: {
        kind: "select",
        options: FREQUENCIES.map((v) => ({ value: v, i18nKey: v })),
      },
      defaultValue: "ac50",
      required: true,
    },
  ],
  outputs: [
    {
      id: "voltageDrop",
      format: "number",
      precision: 3,
      unit: "volt",
      highlight: true,
    },
    {
      id: "resistance",
      format: "number",
      precision: 4,
      unit: "ohm",
    },
    {
      id: "powerLoss",
      format: "number",
      precision: 2,
      unit: "watt",
    },
    {
      id: "ampacityRating",
      format: "number",
      precision: 0,
      unit: "amp",
    },
    {
      id: "crossSectionArea",
      format: "number",
      precision: 3,
    },
    {
      id: "awgEquivalent",
      format: "number",
      precision: 1,
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "R = \\frac{2 \\cdot L \\cdot \\rho}{A} \\cdot k_{ac}, \\quad V_{drop} = I \\cdot R, \\quad P_{loss} = I^2 \\cdot R",
    references: [
      {
        title: "NEC 310.16 — Allowable Ampacities of Insulated Conductors",
        url: "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70",
        authority: "National Fire Protection Association (NFPA 70 / NEC)",
      },
      {
        title: "ASTM B258 — Standard AWG Sizes for Solid Round Wires",
        url: "https://www.astm.org/b0258-02r14.html",
        authority: "ASTM International",
      },
      {
        title: "IEC 60228 — Conductors of Insulated Cables",
        url: "https://webstore.iec.ch/publication/824",
        authority: "International Electrotechnical Commission",
      },
    ],
    disclaimer:
      "Ampacity values are interpolated from NEC 310.16 (60 °C copper column) with an aluminum derate of ~78 %. Actual installations may require derating for ambient temperature, conduit fill, bundling, or termination ratings. Always consult a licensed electrician and local electrical codes.",
  },
  related: ["ohms-law", "voltage-drop", "power-factor"],
  tags: ["wire gauge", "AWG", "ampacity", "voltage drop", "NEC", "electrical"],
});
