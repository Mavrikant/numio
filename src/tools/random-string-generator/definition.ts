import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "random-string-generator",
  category: "developer",
  priority: "P2",
  icon: "shuffle",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Strings are generated locally with the Web Crypto API and never leave your device." },
  related: ["uuid-generator", "hash-generator", "base64"],
  tags: ["random string generator", "random text", "random token", "nonce generator", "random id"],
});
