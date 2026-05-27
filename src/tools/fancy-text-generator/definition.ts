import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "fancy-text-generator",
  category: "text",
  priority: "P2",
  icon: "sparkles",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Uses Unicode look-alike characters; some apps may not render every style. Runs in your browser." },
  related: ["case-converter", "upside-down-text", "unicode-inspector"],
  tags: ["fancy text", "bold text generator", "unicode text", "stylish text", "cool fonts"],
});
