import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "random-color",
  category: "developer",
  priority: "P2",
  icon: "palette",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Colors are generated locally with the Web Crypto API." },
  related: ["color-converter", "color-palette-generator", "random-number-generator"],
  tags: ["random color generator", "random hex color", "random color", "color picker", "hex generator"],
});
