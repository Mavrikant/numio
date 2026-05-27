import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "time-series",
  category: "data-analysis",
  priority: "P0",
  icon: "line-chart",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [
      {
        title: "Chatfield, C. (2003). The Analysis of Time Series: An Introduction.",
        authority: "Chapman & Hall/CRC",
      },
      {
        title: "Hyndman, R.J., Athanasopoulos, G. (2021). Forecasting: Principles and Practice (3rd ed).",
        authority: "OTexts",
        url: "https://otexts.com/fpp3/",
      },
    ],
    accuracyNote:
      "Moving averages are simple centered averages. Edge points without a full window are omitted rather than padded to avoid distortion.",
  },
  related: ["histogram", "scatter-plot", "stats-dashboard"],
  tags: ["time series", "line chart", "trend", "moving average", "data analysis", "date chart"],
});
