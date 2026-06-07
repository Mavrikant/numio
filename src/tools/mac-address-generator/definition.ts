import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "mac-address-generator",
  category: "developer",
  priority: "P2",
  icon: "network",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Addresses are generated locally in your browser using a secure random source." },
  related: ["mac-address-validator", "ipv4-converter", "ula-generator"],
  tags: ["random mac address generator", "mac address generator", "locally administered mac", "fake mac address", "mac address creator"],
});
