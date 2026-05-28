import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "viewport-info",
  category: "developer",
  priority: "P2",
  icon: "monitor",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Reports the live viewport, screen and device-pixel-ratio for your current browser window. Useful for responsive-design testing." },
  related: ["aspect-ratio", "user-agent-parser", "ipv4-converter"],
  tags: ["viewport size", "screen resolution", "what's my screen size", "device pixel ratio", "responsive design"],
});
