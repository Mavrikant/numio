import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "pdf-merger",
  category: "developer",
  priority: "P1",
  icon: "file-text",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "pdf-lib", url: "https://pdf-lib.js.org/", authority: "pdf-lib.js.org" }],
    disclaimer: "Merges PDFs entirely in your browser using pdf-lib. Files are never uploaded.",
  },
  related: ["pdf-splitter", "image-to-pdf", "pdf-watermark"],
  tags: ["pdf merger", "combine pdf", "join pdfs", "merge pdf online", "pdf joiner"],
});
