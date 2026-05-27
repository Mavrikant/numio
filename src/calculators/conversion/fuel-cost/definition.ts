import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "fuel-cost",
  category: "conversion",
  priority: "P1",
  icon: "fuel",
  inputs: [
    { id: "distance", type: { kind: "number", min: 0.1, max: 1e7, step: 1, unit: "km" }, defaultValue: 500, required: true },
    { id: "efficiency", type: { kind: "number", min: 0.1, max: 1000, step: 0.1 }, defaultValue: 7, required: true },
    { id: "fuelPrice", type: { kind: "number", min: 0.01, max: 1e6, step: 0.01, unit: "usd" }, defaultValue: 1.5, required: true },
  ],
  outputs: [
    { id: "totalCost", format: "currency", precision: 2, highlight: true },
    { id: "fuelUsed", format: "number", precision: 2, unit: "l" },
    { id: "costPerDistance", format: "currency", precision: 4 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{cost} = \\frac{d}{100} \\cdot e \\cdot p",
    references: [{ title: "Fuel economy in automobiles", url: "https://en.wikipedia.org/wiki/Fuel_economy_in_automobiles", authority: "Wikipedia" }],
    disclaimer: "Uses fuel economy in litres per 100 km and a price per litre. Real consumption varies with driving style, load, terrain and conditions.",
  },
  related: ["fuel-economy", "data-transfer-time", "speed"],
  tags: ["fuel cost calculator", "trip cost", "gas cost calculator", "fuel consumption cost", "petrol cost"],
});
