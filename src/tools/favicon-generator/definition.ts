import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "favicon-generator",
  category: "developer",
  priority: "P1",
  icon: "image",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Generates multi-size PNG favicons and a web app manifest in your browser via Canvas. The source image is never uploaded." },
  related: ["image-resizer", "image-format-converter", "meta-tag-generator"],
  tags: ["favicon generator", "create favicon", "favicon png", "apple touch icon", "site favicon"],
});
