import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "markdown-to-html",
  category: "developer",
  priority: "P1",
  icon: "file-code",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Converts a useful subset of Markdown (headings, lists, code, quotes, emphasis, links, images) to HTML in your browser. Not a full CommonMark or GFM implementation." },
  related: ["html-to-text", "markdown-table-generator", "html-entities"],
  tags: ["markdown to html", "md to html", "markdown converter", "markdown preview", "render markdown"],
});
