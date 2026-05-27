import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "aspect-ratio",
  category: "conversion",
  priority: "P2",
  icon: "ratio",
  inputs: [
    { id: "width", type: { kind: "number", min: 1, max: 1e7, step: 1 }, defaultValue: 1920, required: true },
    { id: "height", type: { kind: "number", min: 1, max: 1e7, step: 1 }, defaultValue: 1080, required: true },
    { id: "targetWidth", type: { kind: "number", min: 0, max: 1e7, step: 1 }, defaultValue: 1280, required: false },
  ],
  outputs: [
    { id: "aspectRatio", format: "text", highlight: true },
    { id: "decimalRatio", format: "number", precision: 4 },
    { id: "scaledHeight", format: "number", precision: 2 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    references: [{ title: "Aspect ratio (image)", url: "https://en.wikipedia.org/wiki/Aspect_ratio_(image)", authority: "Wikipedia" }],
  },
  related: ["square-footage", "area", "circle"],
  tags: ["aspect ratio calculator", "16:9", "ratio of width to height", "resize keeping ratio", "screen ratio"],
});
