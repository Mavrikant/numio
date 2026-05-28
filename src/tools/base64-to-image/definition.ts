import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "base64-to-image",
  category: "developer",
  priority: "P1",
  icon: "image",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Decodes a Base64 string or data URL into an image preview in your browser. Nothing is uploaded." },
  related: ["image-to-base64", "base64", "color-converter"],
  tags: ["base64 to image", "base64 image decoder", "data url to image", "decode base64 image", "view base64 image"],
});
