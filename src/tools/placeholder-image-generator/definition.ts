import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "placeholder-image-generator",
  category: "developer",
  priority: "P2",
  icon: "image",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Generates a lightweight SVG placeholder image in your browser. No request is made — the result is an inline data URL." },
  related: ["image-to-base64", "base64-to-image", "lorem-ipsum"],
  tags: ["placeholder image generator", "placeholder svg", "dummy image", "mockup image", "blank image generator"],
});
