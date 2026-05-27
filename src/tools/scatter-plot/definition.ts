import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "scatter-plot",
  category: "data-analysis",
  priority: "P0",
  icon: "scatter-chart",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [
      {
        title: "Pearson, K. (1895). Notes on regression and inheritance in the case of two parents.",
        authority: "Proceedings of the Royal Society",
      },
    ],
  },
  related: ["histogram", "stats-dashboard"],
  tags: ["scatter plot", "correlation", "regression", "data analysis"],
});
