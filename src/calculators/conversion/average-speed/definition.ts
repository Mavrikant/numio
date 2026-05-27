import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "average-speed",
  category: "conversion",
  priority: "P2",
  icon: "gauge",
  inputs: [
    { id: "distance", type: { kind: "number", min: 0.01, max: 1e7, step: 0.1, unit: "km" }, defaultValue: 120, required: true },
    { id: "hours", type: { kind: "number", min: 0, max: 100000, step: 1, unit: "hour", integer: true }, defaultValue: 1, required: false },
    { id: "minutes", type: { kind: "number", min: 0, max: 59, step: 1, unit: "minute" }, defaultValue: 30, required: false },
  ],
  outputs: [
    { id: "speedKmh", format: "number", precision: 2, unit: "kmh", highlight: true },
    { id: "speedMph", format: "number", precision: 2, unit: "mph" },
    { id: "speedMs", format: "number", precision: 2, unit: "ms" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "v = \\frac{d}{t}",
    references: [{ title: "Speed", url: "https://en.wikipedia.org/wiki/Speed", authority: "Wikipedia" }],
  },
  related: ["speed", "fuel-cost", "running-pace"],
  tags: ["average speed calculator", "speed from distance and time", "km/h calculator", "mph calculator", "distance time speed"],
});
