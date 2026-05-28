import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "image-to-pdf",
  category: "developer",
  priority: "P1",
  icon: "file-text",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Packs JPG and PNG images into a single PDF in your browser using pdf-lib. Files are never uploaded." },
  related: ["pdf-merger", "pdf-splitter", "image-compressor"],
  tags: ["image to pdf", "jpg to pdf", "png to pdf", "photos to pdf", "convert image to pdf"],
});
