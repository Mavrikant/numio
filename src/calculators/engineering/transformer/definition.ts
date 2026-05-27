import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "transformer",
  category: "engineering",
  priority: "P1",
  icon: "zap",
  inputs: [
    {
      id: "primaryVoltage",
      type: {
        kind: "number",
        min: 0.1,
        max: 500000,
        step: 1,
        unit: "volt",
      },
      defaultValue: 230,
      required: true,
    },
    {
      id: "primaryCurrent",
      type: {
        kind: "number",
        min: 0.01,
        max: 10000,
        step: 0.1,
        unit: "amp",
      },
      defaultValue: 10,
      required: true,
    },
    {
      id: "secondaryVoltage",
      type: {
        kind: "number",
        min: 0.1,
        max: 500000,
        step: 1,
        unit: "volt",
      },
      defaultValue: 115,
      required: true,
    },
    {
      id: "efficiency",
      type: {
        kind: "number",
        min: 0,
        max: 100,
        step: 0.1,
        unit: "percent",
      },
      defaultValue: 95,
      required: true,
    },
  ],
  outputs: [
    {
      id: "turnsRatio",
      format: "number",
      precision: 4,
      highlight: true,
    },
    {
      id: "secondaryCurrent",
      format: "number",
      precision: 4,
      unit: "amp",
    },
    {
      id: "primaryPower",
      format: "number",
      precision: 2,
      unit: "watt",
    },
    {
      id: "secondaryPower",
      format: "number",
      precision: 2,
      unit: "watt",
    },
    {
      id: "powerLoss",
      format: "number",
      precision: 2,
      unit: "watt",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "\\frac{V_p}{V_s} = \\frac{N_p}{N_s} = \\frac{I_s}{I_p}, \\quad P = VI, \\quad \\eta = \\frac{P_{out}}{P_{in}} \\times 100\\%",
    references: [
      {
        title: "Transformer Theory — IEC 60076",
        authority: "International Electrotechnical Commission (IEC)",
      },
      {
        title: "Electromagnetic Induction — Faraday's Law",
        authority: "Classical Physics",
      },
      {
        title: "Power Transformers — IEEE Standard 57",
        authority: "Institute of Electrical and Electronics Engineers (IEEE)",
      },
    ],
    accuracyNote:
      "Assumes ideal transformer with no core loss. Real transformers have copper loss (I²R), core loss (hysteresis, eddy currents), and mechanical losses.",
    disclaimer:
      "For high-voltage and high-power applications, consult licensed electrical engineers and follow local regulations.",
  },
  related: ["ohms-law", "voltage-drop"],
  tags: ["transformer", "turns ratio", "voltage", "current", "power", "efficiency"],
});
