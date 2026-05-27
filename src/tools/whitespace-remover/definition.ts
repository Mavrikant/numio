import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "whitespace-remover",
  category: "text",
  priority: "P2",
  icon: "remove-formatting",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Runs entirely in your browser." },
  related: ["remove-duplicate-lines", "word-counter", "case-converter"],
  tags: ["whitespace remover", "remove spaces", "trim text", "remove blank lines", "collapse spaces", "clean text"],
});
