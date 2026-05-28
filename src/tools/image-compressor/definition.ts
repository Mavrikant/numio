import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "image-compressor",
  category: "developer",
  priority: "P1",
  icon: "image",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Re-encodes an image as JPEG or WebP at a configurable quality. Runs entirely in your browser via Canvas — the file is never uploaded." },
  related: ["image-resizer", "image-format-converter", "image-to-base64"],
  tags: ["image compressor", "compress jpg", "compress webp", "shrink image", "reduce image size"],
});
