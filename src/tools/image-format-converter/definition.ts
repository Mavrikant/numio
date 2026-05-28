import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "image-format-converter",
  category: "developer",
  priority: "P1",
  icon: "image",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Re-encodes images between PNG, JPEG and WebP via the Canvas API in your browser. The file is never uploaded." },
  related: ["image-compressor", "image-resizer", "image-to-base64"],
  tags: ["image format converter", "png to jpg", "png to webp", "jpg to webp", "convert image format"],
});
