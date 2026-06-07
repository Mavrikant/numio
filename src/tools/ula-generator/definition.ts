import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "ula-generator",
  category: "developer",
  priority: "P2",
  icon: "network",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Addresses are generated locally in your browser using a secure random source." },
  related: ["ipv6-expand-compress", "mac-address-generator", "subnet-calculator"],
  tags: ["ipv6 ula generator", "unique local address", "rfc 4193 prefix", "fd00 prefix generator", "ipv6 private address"],
});
