import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "lorem-ipsum",
  category: "text",
  priority: "P1",
  icon: "pilcrow",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Placeholder text is generated locally in your browser." },
  related: ["word-counter", "case-converter", "text-repeater"],
  tags: ["lorem ipsum", "placeholder text", "dummy text", "lipsum", "filler text generator"],
});
