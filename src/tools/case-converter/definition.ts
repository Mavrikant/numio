import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "case-converter",
  category: "text",
  priority: "P1",
  icon: "case-sensitive",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Conversion happens entirely in your browser." },
  related: ["word-counter", "slugify", "text-reverse"],
  tags: ["case converter", "uppercase", "lowercase", "title case", "camelCase", "snake_case", "kebab-case"],
});
