import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "mac-address-validator",
  category: "developer",
  priority: "P2",
  icon: "network",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "MAC address", url: "https://en.wikipedia.org/wiki/MAC_address", authority: "Wikipedia" }],
    disclaimer: "Validates and normalises 48-bit MAC addresses. Does not look up OUI vendor names — only the OUI prefix is returned.",
  },
  related: ["ipv4-converter", "ipv6-expand-compress", "subnet-calculator"],
  tags: ["mac address validator", "mac address format", "mac address normalizer", "ethernet mac", "oui prefix"],
});
