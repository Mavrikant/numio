import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "image-cropper",
  category: "developer",
  priority: "P2",
  icon: "crop",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Crops images via Canvas in your browser. The file is never uploaded." },
  related: ["image-resizer", "image-compressor", "image-format-converter"],
  tags: ["image cropper", "crop image", "crop jpg", "instagram crop", "square crop"],
});
