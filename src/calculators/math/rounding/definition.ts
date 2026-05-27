import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "rounding",
  category: "math",
  priority: "P2",
  icon: "circle-dot",
  inputs: [
    { id: "value", type: { kind: "number", min: -1e15, max: 1e15, step: 0.001 }, defaultValue: 3.14159, required: true },
    { id: "decimals", type: { kind: "number", min: 0, max: 15, step: 1, integer: true }, defaultValue: 2, required: true },
  ],
  outputs: [
    { id: "rounded", format: "number", precision: 15, highlight: true },
    { id: "roundedUp", format: "number", precision: 15 },
    { id: "roundedDown", format: "number", precision: 15 },
    { id: "truncated", format: "number", precision: 15 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    references: [{ title: "Rounding", url: "https://en.wikipedia.org/wiki/Rounding", authority: "Wikipedia" }],
  },
  related: ["scientific-notation", "percentage", "average"],
  tags: ["rounding calculator", "round number", "round to decimals", "round up", "round down", "truncate"],
});
