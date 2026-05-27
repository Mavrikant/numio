import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "html-to-text",
  category: "developer",
  priority: "P2",
  icon: "file-text",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Conversion runs entirely in your browser." },
  related: ["html-entities", "word-counter", "whitespace-remover"],
  tags: ["html to text", "strip html", "remove html tags", "html to plain text", "extract text"],
});
