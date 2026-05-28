import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "css-neumorphism-generator",
  category: "developer",
  priority: "P2",
  icon: "square",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Generates the classic neumorphism soft-shadow CSS in your browser with a live preview." },
  related: ["box-shadow-generator", "css-gradient-generator", "border-radius-generator"],
  tags: ["neumorphism generator", "soft ui shadow", "neumorphic css", "soft shadow generator", "neumorphism css"],
});
