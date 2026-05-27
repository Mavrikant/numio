import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "uuid-generator",
  category: "security",
  priority: "P0",
  icon: "fingerprint",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [
      {
        title: "RFC 9562 — Universally Unique IDentifiers (UUIDs)",
        url: "https://www.rfc-editor.org/rfc/rfc9562",
        authority: "IETF",
      },
      {
        title: "Crypto.getRandomValues() — MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues",
        authority: "MDN",
      },
    ],
    accuracyNote:
      "Version-4 UUIDs use 122 random bits drawn from the browser's cryptographically-secure random source, with the version and variant bits set per RFC 9562.",
    disclaimer: "UUIDs are generated locally in your browser and never transmitted.",
  },
  related: ["password-generator", "hash-generator"],
  tags: ["uuid", "guid", "uuid v4", "random", "identifier", "generator"],
});
