import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "pdf-watermark",
  category: "developer",
  priority: "P2",
  icon: "file-text",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Adds a text watermark to every page of a PDF in your browser using pdf-lib. The file is never uploaded." },
  related: ["pdf-merger", "pdf-splitter", "pdf-rotator"],
  tags: ["pdf watermark", "watermark pdf", "stamp pdf", "pdf draft watermark", "add watermark pdf"],
});
