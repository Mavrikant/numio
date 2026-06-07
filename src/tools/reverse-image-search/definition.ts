import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "reverse-image-search",
  category: "developer",
  priority: "P2",
  icon: "image",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Only public image URLs work; searches open on each engine's own site. Nothing is uploaded from this page." },
  related: ["qr-code-generator", "image-to-base64", "color-converter"],
  tags: ["reverse image search", "search by image url", "find image source", "google lens by url", "tineye yandex search"],
});
