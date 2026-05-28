import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "image-to-ascii",
  category: "developer",
  priority: "P2",
  icon: "type",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Renders an image as ASCII characters via Canvas in your browser. The image is never uploaded." },
  related: ["ascii-table", "image-to-base64", "fancy-text-generator"],
  tags: ["image to ascii", "ascii art generator", "photo to ascii", "ascii art", "text art"],
});
