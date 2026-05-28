import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "utm-builder",
  category: "developer",
  priority: "P1",
  icon: "link",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "Campaign URL Builder", url: "https://ga-dev-tools.google/campaign-url-builder/", authority: "Google Analytics" }],
    disclaimer: "Builds a campaign-tagged URL with utm_* parameters. Existing query params on the URL are preserved.",
  },
  related: ["url-parser", "url-encode", "query-string-builder"],
  tags: ["utm builder", "utm parameter generator", "campaign url builder", "google analytics utm", "utm tag generator"],
});
