import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "ip-class-info",
  category: "developer",
  priority: "P2",
  icon: "network",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Classifies any IPv4 or IPv6 address in your browser: classful class, private/loopback/link-local/multicast/documentation flags and explanatory notes." },
  related: ["subnet-calculator", "ipv4-converter", "ipv6-expand-compress"],
  tags: ["ip class lookup", "private ip range", "ip address info", "rfc 1918 check", "ipv4 class"],
});
