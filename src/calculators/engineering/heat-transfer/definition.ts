import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "heat-transfer",
  category: "engineering",
  priority: "P1",
  icon: "thermometer",
  inputs: [
    {
      id: "temperatureDifference",
      type: { kind: "number", min: 0.001, step: 0.1, unit: "celsius" },
      defaultValue: 20,
      required: true,
    },
    {
      id: "thermalResistance",
      type: { kind: "number", min: 0.001, step: 0.01 },
      defaultValue: 0.5,
      required: true,
    },
  ],
  outputs: [
    {
      id: "heatFluxW",
      format: "number",
      precision: 2,
      unit: "watt",
      highlight: true,
    },
    {
      id: "heatFluxKW",
      format: "number",
      precision: 3,
      unit: "kw",
    },
    {
      id: "heatFluxBtu",
      format: "number",
      precision: 2,
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "Q = \\frac{\\Delta T}{R}",
    references: [
      {
        title: "ASHRAE Fundamentals Handbook — Heat and Mass Transfer",
        authority: "American Society of Heating, Refrigerating and Air-Conditioning Engineers",
      },
      {
        title: "EN 6946: Building components and building elements — Thermal resistance and thermal transmittance",
        authority: "European Committee for Standardization (CEN)",
      },
    ],
    disclaimer:
      "This calculator assumes steady-state heat transfer and constant thermal resistance. For dynamic thermal analysis or complex geometries, use detailed thermal simulations.",
  },
  related: ["beam-deflection"],
  tags: ["heat transfer", "thermal resistance", "HVAC", "energy", "building physics"],
});
