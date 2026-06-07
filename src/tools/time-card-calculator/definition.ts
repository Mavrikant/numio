import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "time-card-calculator",
  category: "developer",
  priority: "P2",
  icon: "clock",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Estimates only; calculations run in your browser and are not payroll advice." },
  related: ["duration-calculator", "timestamp-converter", "world-clock"],
  tags: ["time card calculator", "work hours calculator", "timesheet calculator", "overtime calculator", "payroll hours calculator"],
});
