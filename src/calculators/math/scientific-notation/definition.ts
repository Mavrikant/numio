import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "scientific-notation",
  category: "math",
  priority: "P0",
  icon: "calculator",
  inputs: [
    { id: "value", type: { kind: "number" }, defaultValue: 0.00012345, required: true },
    { id: "mode", type: { kind: "select", options: [{ value: "toScientific", i18nKey: "toScientific" }] }, defaultValue: "toScientific", required: true }
  ],
  outputs: [{ id: "scientific", format: "text", highlight: true }, { id: "standard", format: "text" }],
  inputSchema, compute, i18n,
  meta: { references: [{ title: "Scientific Notation", url: "https://en.wikipedia.org/wiki/Scientific_notation", authority: "Wikipedia" }] },
  related: [],
  tags: ["scientific", "notation", "math"],
});
