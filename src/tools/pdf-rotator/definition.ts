import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "pdf-rotator",
  category: "developer",
  priority: "P2",
  icon: "file-text",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Rotates PDF pages in your browser using pdf-lib. Files are never uploaded." },
  related: ["pdf-merger", "pdf-splitter", "pdf-watermark"],
  tags: ["pdf rotator", "rotate pdf", "pdf rotate online", "pdf turn pages", "fix pdf orientation"],
});
