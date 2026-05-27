import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "hash-generator",
  category: "developer",
  priority: "P1",
  icon: "hash",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Hashes are computed locally with the Web Crypto API; your input never leaves your device." },
  related: ["base64", "uuid-generator", "json-formatter"],
  tags: ["hash generator", "sha256", "sha1", "sha512", "checksum", "sha hash"],
});
