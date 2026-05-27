import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "text-diff",
  category: "text",
  priority: "P1",
  icon: "git-compare",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Comparison runs entirely in your browser." },
  related: ["find-and-replace", "remove-duplicate-lines", "word-counter"],
  tags: ["text diff", "compare text", "diff checker", "text comparison", "line diff"],
});
