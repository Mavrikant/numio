import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "pdf-splitter",
  category: "developer",
  priority: "P1",
  icon: "file-text",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Extracts page ranges from a PDF entirely in your browser using pdf-lib. The file is never uploaded." },
  related: ["pdf-merger", "image-to-pdf", "pdf-watermark"],
  tags: ["pdf splitter", "split pdf", "extract pdf pages", "pdf page extractor", "pdf split online"],
});
