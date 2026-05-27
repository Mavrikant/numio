import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "chart-builder",
  category: "visualization",
  priority: "P0",
  icon: "chart-bar",
  componentImport: "./Tool",
  i18n,
  meta: {
    accuracyNote:
      "All parsing and rendering happen entirely in your browser — your CSV never leaves your device. Charts are drawn with Plotly.js and can be exported as PNG or SVG at any resolution.",
  },
  related: ["scatter-plot", "histogram", "time-series", "stats-dashboard"],
  tags: [
    "chart maker",
    "graph maker",
    "csv to chart",
    "data visualization",
    "line chart",
    "bar chart",
    "scatter plot",
    "pie chart",
    "histogram",
    "box plot",
    "plotly",
    "download chart image",
  ],
});
