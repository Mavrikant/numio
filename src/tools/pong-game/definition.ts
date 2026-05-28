import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "pong-game",
  category: "developer",
  priority: "P2",
  icon: "gamepad",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "A minimal browser-side Pong clone. Use W/S for the left paddle, ↑/↓ for the right paddle — or switch the right paddle to CPU." },
  related: ["dice-roller", "magic-8-ball", "stopwatch"],
  tags: ["pong game", "browser pong", "javascript pong", "play pong online", "classic pong"],
});
