import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "ip-location-lookup",
  category: "developer",
  priority: "P1",
  icon: "map-pin",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "ipwho.is", url: "https://ipwho.is/", authority: "ipwho.is" }],
    disclaimer: "Geolocates an IP address via the public ipwho.is API. Requests run from your browser; the third-party service may be rate-limited or blocked by your network, and IP geolocation is always approximate — it is not a precise physical location.",
  },
  related: ["whats-my-ip", "rdap-lookup", "subnet-calculator"],
  tags: ["ip location lookup", "ip geolocation", "ip address location", "find ip location", "ip to location"],
});
