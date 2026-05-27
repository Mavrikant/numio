import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "line-break-remover",
  category: "text",
  priority: "P2",
  icon: "wrap-text",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Runs entirely in your browser." },
  related: ["whitespace-remover", "remove-duplicate-lines", "word-counter"],
  tags: ["remove line breaks", "remove newlines", "join lines", "strip line breaks", "unwrap text"],
});
