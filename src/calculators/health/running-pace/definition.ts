import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "running-pace",
  category: "health",
  priority: "P1",
  icon: "timer",
  inputs: [
    {
      id: "distanceValue",
      type: { kind: "number", min: 0.01, max: 1e6, step: 0.01 },
      defaultValue: 10,
      required: true,
    },
    {
      id: "distanceUnit",
      type: {
        kind: "select",
        options: [
          { value: "km", i18nKey: "km" },
          { value: "mi", i18nKey: "mi" },
          { value: "m", i18nKey: "m" },
        ],
      },
      defaultValue: "km",
      required: true,
    },
    {
      id: "hours",
      type: { kind: "number", min: 0, max: 1000, step: 1, unit: "hour", integer: true },
      defaultValue: 0,
      required: false,
    },
    {
      id: "minutes",
      type: { kind: "number", min: 0, max: 59, step: 1, unit: "minute" },
      defaultValue: 50,
      required: false,
    },
    {
      id: "seconds",
      type: { kind: "number", min: 0, max: 59, step: 1, unit: "second" },
      defaultValue: 0,
      required: false,
    },
  ],
  outputs: [
    { id: "pacePerKm", format: "text", highlight: true },
    { id: "pacePerMile", format: "text" },
    { id: "speedKmh", format: "number", precision: 2, unit: "kmh" },
    { id: "speedMph", format: "number", precision: 2, unit: "mph" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{pace} = \\frac{t}{d}, \\quad \\text{speed} = \\frac{d}{t}",
    references: [
      {
        title: "Pace (running) — definition and conversions",
        url: "https://en.wikipedia.org/wiki/Pace_(speed)",
        authority: "Wikipedia",
      },
    ],
    disclaimer:
      "Pace and speed are computed directly from the distance and time you enter. Real race performance also depends on terrain, weather, elevation and fatigue.",
  },
  related: ["calories-burned", "heart-rate", "vo2max"],
  tags: ["pace", "running", "running pace", "speed", "min per km", "min per mile", "jogging", "marathon", "5k", "10k"],
});
