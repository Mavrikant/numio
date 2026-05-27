import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "color-mixer",
  category: "developer",
  priority: "P2",
  icon: "blend",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Mixes two colors in RGB space in your browser." },
  related: ["color-palette-generator", "color-shades-generator", "color-converter"],
  tags: ["color mixer", "mix colors", "blend colors", "color blender", "combine colors"],
});
