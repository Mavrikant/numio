import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "whats-my-ip",
  category: "developer",
  priority: "P1",
  icon: "globe",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "ipwho.is", url: "https://ipwho.is/", authority: "ipwho.is" }],
    disclaimer: "Looks up your public IP and approximate geolocation via the public ipwho.is API (falling back to api.ipify.org). Requests run from your browser; the third-party service may be rate-limited or blocked by your network, and geolocation is approximate.",
  },
  related: ["ip-location-lookup", "rdap-lookup", "subnet-calculator"],
  tags: ["what is my ip", "my ip address", "public ip lookup", "find my ip", "ip location"],
});
