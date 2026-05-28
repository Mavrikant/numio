import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "image-resizer",
  category: "developer",
  priority: "P1",
  icon: "image",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Resizes images via the Canvas API in your browser. The file is never uploaded." },
  related: ["image-compressor", "image-format-converter", "image-to-base64"],
  tags: ["image resizer", "resize image", "resize jpg png webp", "scale image online", "shrink image"],
});
