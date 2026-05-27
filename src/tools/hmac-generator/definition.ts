import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "hmac-generator",
  category: "security",
  priority: "P1",
  icon: "shield-check",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [
      {
        title: "RFC 2104 — HMAC: Keyed-Hashing for Message Authentication",
        url: "https://www.rfc-editor.org/rfc/rfc2104",
        authority: "IETF",
      },
      {
        title: "SubtleCrypto.sign() — MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/sign",
        authority: "MDN",
      },
    ],
    accuracyNote:
      "HMAC is computed with the Web Crypto API using your chosen SHA-2 hash. The key and message are treated as UTF-8 text.",
    disclaimer:
      "Your key and message never leave your browser — the HMAC is computed locally.",
  },
  related: ["hash-generator", "base64", "password-generator"],
  tags: ["hmac", "sha256", "message authentication", "signature", "mac", "security"],
});
