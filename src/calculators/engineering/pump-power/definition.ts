import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "pump-power",
  category: "engineering",
  priority: "P2",
  icon: "zap",
  inputs: [
    {
      id: "flowRate",
      type: { kind: "number", min: 0.01, max: 1_000_000, step: 0.1 },
      defaultValue: 100,
      required: true,
    },
    {
      id: "flowUnit",
      type: {
        kind: "select",
        options: [
          { value: "m3h", i18nKey: "m3h" },
          { value: "ls", i18nKey: "ls" },
        ],
      },
      defaultValue: "m3h",
      required: true,
    },
    {
      id: "head",
      type: { kind: "number", min: 0.01, max: 10_000, step: 0.1, unit: "m" },
      defaultValue: 20,
      required: true,
    },
    {
      id: "density",
      type: { kind: "number", min: 1, max: 20_000, step: 1 },
      defaultValue: 1000,
      required: true,
    },
    {
      id: "pumpEfficiency",
      type: { kind: "number", min: 1, max: 100, step: 0.1, unit: "percent" },
      defaultValue: 75,
      required: true,
    },
    {
      id: "motorEfficiency",
      type: { kind: "number", min: 1, max: 100, step: 0.1, unit: "percent" },
      defaultValue: 90,
      required: true,
    },
    {
      id: "energyCost",
      type: { kind: "number", min: 0, max: 10, step: 0.001 },
      defaultValue: 0.12,
      required: true,
    },
    {
      id: "operatingHours",
      type: { kind: "number", min: 0, max: 8760, step: 1, unit: "hour" },
      defaultValue: 8000,
      required: true,
    },
  ],
  outputs: [
    { id: "hydraulicPowerKw", format: "number", precision: 3, unit: "kw" },
    { id: "shaftPowerKw", format: "number", precision: 3, unit: "kw" },
    { id: "electricalPowerKw", format: "number", precision: 3, unit: "kw", highlight: true },
    { id: "overallEfficiency", format: "number", precision: 2, unit: "percent" },
    { id: "annualEnergyKwh", format: "number", precision: 1, unit: "kwh" },
    { id: "annualCost", format: "currency", precision: 2, unit: "usd" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "P_{hyd} = \\frac{\\rho \\cdot g \\cdot Q \\cdot H}{1000}, \\quad P_{shaft} = \\frac{P_{hyd}}{\\eta_{pump}}, \\quad P_{elec} = \\frac{P_{shaft}}{\\eta_{motor}}",
    references: [
      {
        title: "ANSI/HI 9.6.7 — Effects of Liquid Viscosity on Rotodynamic (Centrifugal and Vertical) Pump Performance",
        url: "https://www.pumps.org/standards/",
        authority: "Hydraulic Institute (HI)",
      },
      {
        title: "Pumps — Power Calculations",
        url: "https://www.engineeringtoolbox.com/pumps-power-d_505.html",
        authority: "The Engineering ToolBox",
      },
      {
        title: "Motor and Pump Efficiency — DOE Best Practices",
        url: "https://www.energy.gov/eere/amo/pumping-systems",
        authority: "U.S. Department of Energy (DOE)",
      },
    ],
    disclaimer:
      "Results assume steady-state, single-phase liquid flow at the rated operating point. Actual pump performance depends on the pump curve, NPSH availability, fluid properties (viscosity, temperature), piping losses, and variable-speed drive efficiency. Always size pumps from the manufacturer's certified curves.",
  },
  related: ["flow-rate", "electrical-power", "power-factor"],
  tags: [
    "pump",
    "hydraulic power",
    "shaft power",
    "centrifugal pump",
    "pump efficiency",
    "motor efficiency",
    "energy cost",
    "fluid mechanics",
  ],
});
