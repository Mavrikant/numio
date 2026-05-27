import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "box-shadow-generator",
  category: "developer",
  priority: "P1",
  icon: "square",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Generates a CSS box-shadow value in your browser." },
  related: ["css-gradient-generator", "border-radius-generator", "text-shadow-generator"],
  tags: ["box shadow generator", "css box shadow", "shadow css", "drop shadow generator", "box-shadow"],
});
