import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "color-shades-generator",
  category: "developer",
  priority: "P2",
  icon: "layers",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Generates tints and shades of a color in your browser by varying HSL lightness." },
  related: ["color-palette-generator", "color-mixer", "color-converter"],
  tags: ["color shades generator", "tints and shades", "color tints", "shade generator", "color variations"],
});
