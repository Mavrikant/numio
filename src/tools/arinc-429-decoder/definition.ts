import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "arinc-429-decoder",
  category: "developer",
  priority: "P2",
  icon: "binary",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [
      { title: "ARINC 429", url: "https://en.wikipedia.org/wiki/ARINC_429", authority: "Wikipedia" },
    ],
    disclaimer:
      "Decodes and encodes 32-bit ARINC 429 words in your browser. Follows the standard field map (label 1-8, SDI 9-10, data 11-29, SSM 30-31, parity 32), the MSB-first octal label convention (bit-reversed) and odd parity. Verify against your equipment's ICD before operational use.",
  },
  related: ["number-base-converter", "crc32-checksum", "mcdc-test-case-generator"],
  tags: [
    "arinc 429 decoder",
    "arinc 429 encoder",
    "arinc 429 word",
    "avionics data bus",
    "arinc label decoder",
    "bnr bcd",
    "parity calculator",
  ],
});
