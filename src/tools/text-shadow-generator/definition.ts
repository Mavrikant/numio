import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "text-shadow-generator",
  category: "developer",
  priority: "P2",
  icon: "type",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Generates a CSS text-shadow value in your browser." },
  related: ["box-shadow-generator", "css-gradient-generator", "border-radius-generator"],
  tags: ["text shadow generator", "css text shadow", "text-shadow", "text shadow css", "text effect css"],
});
