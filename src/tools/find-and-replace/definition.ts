import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "find-and-replace",
  category: "text",
  priority: "P1",
  icon: "replace",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Runs entirely in your browser." },
  related: ["case-converter", "remove-duplicate-lines", "whitespace-remover"],
  tags: ["find and replace", "search and replace", "replace text", "regex replace", "bulk replace"],
});
