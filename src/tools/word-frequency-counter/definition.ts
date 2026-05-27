import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "word-frequency-counter",
  category: "text",
  priority: "P2",
  icon: "chart-bar",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Runs entirely in your browser." },
  related: ["word-counter", "text-sorter", "remove-duplicate-lines"],
  tags: ["word frequency", "word counter", "keyword density", "word count list", "frequency analysis"],
});
