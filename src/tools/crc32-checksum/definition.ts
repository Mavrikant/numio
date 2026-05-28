import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "crc32-checksum",
  category: "developer",
  priority: "P2",
  icon: "fingerprint",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "Cyclic redundancy check", url: "https://en.wikipedia.org/wiki/Cyclic_redundancy_check", authority: "Wikipedia" }],
    disclaimer: "Computes a CRC-32 (IEEE 802.3) checksum in your browser. CRC-32 is for error detection, not security.",
  },
  related: ["hash-generator", "base58", "text-to-hex"],
  tags: ["crc32 checksum", "crc-32 calculator", "crc32 hash", "checksum generator", "crc32 online"],
});
