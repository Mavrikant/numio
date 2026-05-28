import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "exif-stripper",
  category: "developer",
  priority: "P2",
  icon: "shield",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "Exchangeable image file format", url: "https://en.wikipedia.org/wiki/Exif", authority: "Wikipedia" }],
    disclaimer: "Removes APPn and COM metadata segments (EXIF, IPTC, XMP, ICC, comments) from JPEGs in your browser. Other formats are re-encoded via Canvas, which also drops metadata.",
  },
  related: ["image-compressor", "image-resizer", "image-format-converter"],
  tags: ["exif remover", "strip exif", "remove image metadata", "photo privacy", "gps remover photo"],
});
