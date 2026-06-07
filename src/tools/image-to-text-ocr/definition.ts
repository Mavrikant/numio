import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "image-to-text-ocr",
  category: "developer",
  priority: "P1",
  icon: "scan-text",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "OCR runs in your browser via tesseract.js. The engine and language data are fetched from a CDN on first use; the image itself is never uploaded." },
  related: ["image-to-base64", "qr-code-scanner", "word-counter"],
  tags: ["image to text", "ocr online", "extract text from image", "picture to text", "photo to text converter"],
});
