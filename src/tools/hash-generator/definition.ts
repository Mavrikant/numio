import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "hash-generator",
  category: "security",
  priority: "P0",
  icon: "hash",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [
      {
        title: "FIPS 180-4 — Secure Hash Standard (SHS)",
        url: "https://csrc.nist.gov/publications/detail/fips/180/4/final",
        authority: "NIST",
      },
      {
        title: "SubtleCrypto.digest() — MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest",
        authority: "MDN",
      },
    ],
    accuracyNote:
      "Hashes are computed with the browser's Web Crypto API using the exact algorithm you select. SHA-1 is included for legacy/checksum use only — it is cryptographically broken and must not be used for security.",
    disclaimer:
      "All hashing happens locally in your browser. Your input is never sent to a server.",
  },
  related: ["hmac-generator", "base64", "password-generator"],
  tags: ["hash", "sha256", "sha512", "sha1", "checksum", "digest", "security"],
});
