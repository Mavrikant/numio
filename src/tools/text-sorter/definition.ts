import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "text-sorter",
  category: "text",
  priority: "P2",
  icon: "arrow-down-up",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Runs entirely in your browser." },
  related: ["remove-duplicate-lines", "whitespace-remover", "word-counter"],
  tags: ["sort lines", "alphabetical sort", "text sorter", "sort list", "sort by length", "numeric sort"],
});
