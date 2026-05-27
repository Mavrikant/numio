import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "uuid-generator",
  category: "developer",
  priority: "P1",
  icon: "fingerprint",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "UUIDs are generated locally with the Web Crypto API and never leave your device." },
  related: ["base64", "color-converter", "json-formatter"],
  tags: ["uuid generator", "guid generator", "uuid v4", "random id", "unique id"],
});
