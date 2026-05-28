import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "text-encrypt",
  category: "developer",
  priority: "P1",
  icon: "lock",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "AES-GCM (SubtleCrypto)", url: "https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt", authority: "MDN" }],
    disclaimer: "Encrypts text with AES-256-GCM and a PBKDF2-derived key entirely in your browser. Nothing is uploaded. If you lose the passphrase, the text cannot be recovered.",
  },
  related: ["hash-generator", "base64", "crc32-checksum"],
  tags: ["text encrypt", "aes encryption", "encrypt text online", "password encrypt", "aes-gcm encrypt"],
});
