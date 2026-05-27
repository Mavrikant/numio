import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "base58",
  category: "developer",
  priority: "P2",
  icon: "binary",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Encodes and decodes Base58 (Bitcoin alphabet) in your browser. Nothing is uploaded." },
  related: ["base32", "base64", "number-base-converter"],
  tags: ["base58 encode", "base58 decode", "base58 converter", "bitcoin base58", "base58 online"],
});
