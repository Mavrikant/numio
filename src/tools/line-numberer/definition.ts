import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "line-numberer",
  category: "text",
  priority: "P2",
  icon: "list-ordered",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Runs entirely in your browser." },
  related: ["remove-duplicate-lines", "text-sorter", "word-counter"],
  tags: ["line numbering", "add line numbers", "number lines", "numbered list", "line counter"],
});
