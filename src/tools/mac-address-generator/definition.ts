import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "mac-address-generator",
  category: "developer",
  priority: "P2",
  icon: "network",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "MAC address", url: "https://en.wikipedia.org/wiki/MAC_address", authority: "Wikipedia" }],
    disclaimer:
      "MAC addresses are generated locally in your browser with the Web Crypto API for testing and sampling. They are random and not tied to any real hardware.",
  },
  related: ["mac-address-validator", "ipv4-converter", "subnet-calculator"],
  tags: ["mac address generator", "random mac address", "dummy mac address", "fake mac generator", "mac address with prefix", "test mac address"],
});
