import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "html-to-markdown",
  category: "developer",
  priority: "P2",
  icon: "file-code",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Converts a useful subset of HTML (headings, paragraphs, lists, code, quotes, links, images, emphasis) to Markdown in your browser. Not a full HTML parser — best run on trusted content." },
  related: ["markdown-to-html", "html-to-text", "html-entities"],
  tags: ["html to markdown", "html2md", "convert html markdown", "html md converter", "markdown from html"],
});
