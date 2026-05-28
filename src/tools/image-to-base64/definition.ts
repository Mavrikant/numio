import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "image-to-base64",
  category: "developer",
  priority: "P1",
  icon: "image",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Converts an image to a Base64 data URL entirely in your browser. The file is never uploaded." },
  related: ["base64-to-image", "base64", "color-converter"],
  tags: ["image to base64", "base64 image encoder", "image data url", "png to base64", "convert image base64"],
});
