import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "ipv6-cidr-range",
  category: "developer",
  priority: "P2",
  icon: "network",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Calculations run entirely in your browser; no addresses leave your device." },
  related: ["subnet-calculator", "ipv6-expand-compress", "ipv4-ipv6-converter"],
  tags: ["ipv6 cidr calculator", "ipv6 range to cidr", "ipv6 subnet range", "cidr to ip range", "ipv6 address range"],
});
