import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "fake-data-generator",
  category: "developer",
  priority: "P1",
  icon: "users",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Generates fake people for testing and seed data in your browser. Names, emails and phone numbers are randomised and not tied to real people; do not use them for fraud." },
  related: ["random-string-generator", "uuid-generator", "csv-to-json"],
  tags: ["fake data generator", "faker", "test data generator", "mock data", "seed data"],
});
