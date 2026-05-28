import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "subnet-calculator",
  category: "developer",
  priority: "P1",
  icon: "network",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "Classless Inter-Domain Routing", url: "https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing", authority: "Wikipedia" }],
    disclaimer: "Computes IPv4 subnet details (network, broadcast, host range, mask, counts) in your browser.",
  },
  related: ["ipv4-converter", "ipv6-expand-compress", "user-agent-parser"],
  tags: ["subnet calculator", "cidr calculator", "ipv4 subnet", "network calculator", "ip range calculator"],
});
