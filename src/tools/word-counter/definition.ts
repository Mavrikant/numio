import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "word-counter",
  category: "text",
  priority: "P0",
  icon: "file-text",
  componentImport: "./Tool",
  i18n,
  meta: {
    disclaimer: "All counting happens in your browser; your text is never uploaded.",
  },
  related: ["case-converter", "text-reverse", "remove-duplicate-lines"],
  tags: ["word counter", "character counter", "letter count", "text statistics", "reading time", "word count"],
});
