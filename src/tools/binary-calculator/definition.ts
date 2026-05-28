import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "binary-calculator",
  category: "developer",
  priority: "P2",
  icon: "binary",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Performs arithmetic and bitwise operations on binary numbers using BigInt for arbitrary precision. Inputs accept whitespace and underscores as separators." },
  related: ["number-base-converter", "ipv4-converter", "text-to-binary"],
  tags: ["binary calculator", "bitwise calculator", "binary arithmetic", "and or xor calculator", "binary shift calculator"],
});
