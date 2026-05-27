import { decodeEntities } from "../html-entities/logic";

/**
 * Strip HTML to readable plain text: drop script/style, turn block-level tags
 * and <br> into line breaks, remove remaining tags, then decode entities.
 */
export function htmlToText(html: string): string {
  const BLOCK = "p|div|h[1-6]|li|tr|section|article|header|footer";
  let t = html.replace(/<(script|style)[\s\S]*?<\/\1>/gi, "");
  t = t.replace(/<br\s*\/?>/gi, "\n");
  t = t.replace(new RegExp(`<\\/?(?:${BLOCK})[^>]*>`, "gi"), "\n");
  t = t.replace(/<[^>]+>/g, "");
  t = decodeEntities(t);
  return t
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
