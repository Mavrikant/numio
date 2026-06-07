import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "raid-calculator",
  category: "developer",
  priority: "P2",
  icon: "server",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Estimates run entirely in your browser and assume identical disks; verify with your controller's specs." },
  related: ["subnet-calculator", "bandwidth-calculator", "number-base-converter"],
  tags: ["raid calculator", "raid capacity calculator", "raid 5 usable space", "raid storage efficiency", "raid fault tolerance"],
});
