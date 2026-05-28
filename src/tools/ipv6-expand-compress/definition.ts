import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "ipv6-expand-compress",
  category: "developer",
  priority: "P2",
  icon: "network",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Expands shorthand IPv6 addresses to their full 8-group form and compresses fully padded addresses back to canonical short form." },
  related: ["ipv4-converter", "subnet-calculator", "user-agent-parser"],
  tags: ["ipv6 expand", "ipv6 compress", "ipv6 normalize", "ipv6 shorten", "ipv6 full form"],
});
