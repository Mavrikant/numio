import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "capacitor",
  category: "engineering",
  priority: "P1",
  icon: "circle",
  inputs: [
    {
      id: "capacitance",
      type: {
        kind: "number",
        min: 1e-12,
        max: 10,
        step: 1e-6,
        unit: "farad",
      },
      defaultValue: 1e-6,
      required: true,
    },
    {
      id: "voltage",
      type: {
        kind: "number",
        min: 0.01,
        max: 1000,
        step: 0.1,
        unit: "volt",
      },
      defaultValue: 5,
      required: true,
    },
    {
      id: "frequency",
      type: {
        kind: "number",
        min: 0,
        max: 1e6,
        step: 1,
        unit: "hertz",
      },
      defaultValue: 0,
      required: false,
    },
  ],
  outputs: [
    {
      id: "charge",
      format: "number",
      precision: 6,
      unit: "coulomb",
      highlight: true,
    },
    {
      id: "energy",
      format: "number",
      precision: 9,
      unit: "joule",
    },
    {
      id: "reactance",
      format: "number",
      precision: 2,
      unit: "ohm",
    },
    {
      id: "timeConstantFor1k",
      format: "number",
      precision: 6,
      unit: "second",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "Q = CV, \\quad E = \\frac{1}{2}CV^2, \\quad X_c = \\frac{1}{2\\pi f C}, \\quad \\tau = RC",
    references: [
      {
        title: "Capacitance and Dielectrics — MIT OpenCourseWare",
        url: "https://ocw.mit.edu/courses/physics/",
        authority: "Massachusetts Institute of Technology (MIT)",
      },
      {
        title: "IEC 60062 — Electronic colour codes",
        authority: "International Electrotechnical Commission (IEC)",
      },
    ],
    accuracyNote:
      "Charge and energy assume ideal capacitor (no leakage). Real capacitors have finite resistance.",
    disclaimer:
      "This calculator is for educational purposes. For safety-critical applications, consult an electronics engineer.",
  },
  related: ["ohms-law", "resistor-color"],
  tags: ["capacitor", "charge", "energy", "reactance", "RC", "electronics"],
});
