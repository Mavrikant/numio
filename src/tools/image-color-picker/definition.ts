import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "image-color-picker",
  category: "developer",
  priority: "P2",
  icon: "palette",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Extracts a dominant-colour palette from any image in your browser using coarse 5-bit-per-channel quantization. The file is never uploaded." },
  related: ["color-palette-generator", "tailwind-shade-generator", "color-converter"],
  tags: ["image color picker", "extract palette from image", "dominant colors image", "image to palette", "color from photo"],
});
