import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "base32",
  category: "developer",
  priority: "P2",
  icon: "binary",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Encoding and decoding run entirely in your browser." },
  related: ["base64", "hash-generator", "url-encode"],
  tags: ["base32", "base32 encode", "base32 decode", "rfc 4648", "encoder decoder"],
});
