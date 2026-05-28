import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "css-glassmorphism-generator",
  category: "developer",
  priority: "P2",
  icon: "square",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Generates frosted-glass (glassmorphism) CSS using backdrop-filter. The effect requires a colourful background behind the element to be visible." },
  related: ["css-gradient-generator", "box-shadow-generator", "css-neumorphism-generator"],
  tags: ["glassmorphism generator", "frosted glass css", "backdrop filter generator", "glass effect css", "glassmorphism css"],
});
