import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "resistor-combination",
  category: "engineering",
  priority: "P2",
  icon: "zap",
  inputs: [
    {
      id: "r1",
      type: { kind: "number", min: 0.000001, max: 1_000_000_000, step: 1, unit: "ohm" },
      defaultValue: 100,
      required: true,
    },
    {
      id: "r2",
      type: { kind: "number", min: 0.000001, max: 1_000_000_000, step: 1, unit: "ohm" },
      defaultValue: 200,
      required: true,
    },
  ],
  outputs: [
    { id: "parallel", format: "number", precision: 4, unit: "ohm", highlight: true },
    { id: "series", format: "number", precision: 4, unit: "ohm", highlight: true },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    compareEnabled: true,
    formulaLatex:
      "R_{\\text{series}} = R_1 + R_2, \\quad R_{\\text{parallel}} = \\dfrac{R_1 R_2}{R_1 + R_2}",
    references: [
      {
        title: "Resistors in Series and Parallel",
        url: "https://www.electronics-tutorials.ws/resistor/res_5.html",
        authority: "Basic Electronics Tutorials",
      },
      {
        title: "Resistors in Parallel — All About Circuits",
        url: "https://www.allaboutcircuits.com/textbook/direct-current/chpt-5/simple-parallel-circuits/",
        authority: "All About Circuits",
      },
    ],
  },
  related: ["ohms-law", "led-resistor", "resistor-color", "voltage-drop"],
  tags: ["resistor", "series", "parallel", "equivalent resistance", "electronics"],
});
