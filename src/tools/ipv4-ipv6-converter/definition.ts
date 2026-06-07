import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "ipv4-ipv6-converter",
  category: "developer",
  priority: "P2",
  icon: "network",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Conversion runs entirely in your browser; no addresses leave your device." },
  related: ["ipv4-converter", "ipv6-expand-compress", "subnet-calculator"],
  tags: ["ipv4 to ipv6 converter", "ipv4 mapped ipv6", "6to4 address", "ipv6 to ipv4", "ipv4 in ipv6"],
});
