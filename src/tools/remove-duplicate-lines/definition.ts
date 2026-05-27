import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "remove-duplicate-lines",
  category: "text",
  priority: "P1",
  icon: "list-x",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Runs entirely in your browser." },
  related: ["word-counter", "case-converter", "whitespace-remover"],
  tags: ["remove duplicate lines", "dedupe lines", "sort lines", "unique lines", "line tools", "delete empty lines"],
});
