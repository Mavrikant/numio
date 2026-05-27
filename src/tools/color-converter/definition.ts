import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "color-converter",
  category: "developer",
  priority: "P0",
  icon: "palette",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Conversion happens entirely in your browser." },
  related: ["base64", "json-formatter", "uuid-generator"],
  tags: ["color converter", "hex to rgb", "rgb to hex", "hsl", "color picker", "hex rgb hsl"],
});
