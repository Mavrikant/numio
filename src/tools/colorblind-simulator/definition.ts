import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "colorblind-simulator",
  category: "developer",
  priority: "P2",
  icon: "eye",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "Color blindness", url: "https://en.wikipedia.org/wiki/Color_blindness", authority: "Wikipedia" }],
    disclaimer: "Simulates protanopia, deuteranopia, tritanopia and achromatopsia by applying published RGB transformation matrices. The result approximates how the image is perceived — it is not a clinical diagnostic tool.",
  },
  related: ["color-contrast-checker", "color-palette-generator", "color-shades-generator"],
  tags: ["colorblind simulator", "color blindness preview", "protanopia simulator", "deuteranopia simulator", "tritanopia preview"],
});
