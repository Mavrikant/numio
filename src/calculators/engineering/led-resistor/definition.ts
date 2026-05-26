import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "led-resistor",
  category: "engineering",
  priority: "P1",
  icon: "lightbulb",
  inputs: [
    {
      id: "supplyVoltage",
      type: { kind: "number", min: 1, max: 60, step: 0.1, unit: "volt" },
      defaultValue: 5,
      required: true,
    },
    {
      id: "forwardVoltage",
      type: { kind: "number", min: 0.5, max: 5, step: 0.1, unit: "volt" },
      defaultValue: 2.0,
      required: true,
    },
    {
      id: "forwardCurrentMa",
      type: { kind: "number", min: 1, max: 100, step: 1 },
      defaultValue: 20,
      required: true,
    },
    {
      id: "ledCount",
      type: { kind: "number", min: 1, max: 10, step: 1, integer: true },
      defaultValue: 1,
      required: true,
    },
  ],
  outputs: [
    {
      id: "exactResistanceOhm",
      format: "number",
      precision: 2,
      unit: "ohm",
      highlight: true,
    },
    {
      id: "standardResistanceOhm",
      format: "number",
      precision: 0,
      unit: "ohm",
    },
    {
      id: "powerDissipatedW",
      format: "number",
      precision: 3,
      unit: "watt",
    },
    {
      id: "actualCurrentMa",
      format: "number",
      precision: 2,
    },
    {
      id: "resistorColorCode",
      format: "text",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "R = \\frac{V_{supply} - V_{forward} \\times n}{I_{forward}}",
    references: [
      {
        title: "LED Current Limiting Resistor — Ohm's Law Application",
        url: "https://www.electronics-tutorials.ws/demoboard/led-resistor.html",
        authority: "Electronics Tutorials",
      },
      {
        title: "EIA E12 Resistor Series Standard",
        url: "https://www.eia.org/",
        authority: "Electronic Industries Alliance (EIA)",
      },
      {
        title: "LED Datasheet Reference — Forward Voltage",
        url: "https://www.vishay.com/leds/",
        authority: "Vishay Intertechnology",
      },
    ],
    disclaimer:
      "Always verify resistor power rating before use. Use a resistor with at least 2× the calculated power dissipation for safety margin.",
  },
  related: ["ohms-law", "voltage-drop", "power-factor"],
  tags: ["led", "resistor", "electronics", "circuit", "current limiting", "E12"],
});
