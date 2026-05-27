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
    ],
  },
  related: ["histogram", "scatter-plot"],
  tags: ["time series", "line chart", "trend", "moving average", "data analysis"],
});
