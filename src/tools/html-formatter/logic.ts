const VOID_TAGS = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
const INLINE_TAGS = new Set(["a", "abbr", "b", "bdi", "bdo", "cite", "code", "dfn", "em", "i", "kbd", "mark", "q", "s", "samp", "small", "span", "strong", "sub", "sup", "time", "u", "var"]);

interface Token {
  readonly kind: "open" | "close" | "comment" | "doctype" | "text" | "raw";
  readonly text: string;
}

function tagOf(tag: string): string {
  const m = /^<\/?\s*([A-Za-z0-9-]+)/.exec(tag);
  return m ? m[1]!.toLowerCase() : "";
}

function isVoid(token: Token): boolean {
  return token.kind === "open" && (VOID_TAGS.has(tagOf(token.text)) || token.text.endsWith("/>"));
}

function tokenize(src: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  while (i < src.length) {
    if (src.startsWith("<!--", i)) {
      const end = src.indexOf("-->", i + 4);
      const stop = end === -1 ? src.length : end + 3;
      tokens.push({ kind: "comment", text: src.slice(i, stop) });
      i = stop;
      continue;
    }
    if (/^<!doctype/i.test(src.slice(i))) {
      const end = src.indexOf(">", i);
      const stop = end === -1 ? src.length : end + 1;
      tokens.push({ kind: "doctype", text: src.slice(i, stop) });
      i = stop;
      continue;
    }
    const raw = /^<(pre|script|style)([\s>])/i.exec(src.slice(i));
    if (raw) {
      const close = new RegExp(`</${raw[1]}>`, "i").exec(src.slice(i));
      const stop = close ? i + close.index + close[0].length : src.length;
      tokens.push({ kind: "raw", text: src.slice(i, stop) });
      i = stop;
      continue;
    }
    if (src[i] === "<") {
      const end = src.indexOf(">", i);
      if (end === -1) {
        tokens.push({ kind: "text", text: src.slice(i) });
        break;
      }
      const tag = src.slice(i, end + 1);
      tokens.push({ kind: tag.startsWith("</") ? "close" : "open", text: tag });
      i = end + 1;
      continue;
    }
    const next = src.indexOf("<", i);
    const stop = next === -1 ? src.length : next;
    tokens.push({ kind: "text", text: src.slice(i, stop) });
    i = stop;
  }
  return tokens;
}

function inlineContent(tokens: Token[], start: number, openTag: string): { html: string; end: number } | null {
  // Render <openTag>…</openTag> on a single line if all contents between them are
  // text / inline tags / comments. Returns the joined HTML and the index after the close.
  const target = tagOf(openTag);
  let html = openTag;
  // Same-name inline tags can nest (<span>a<span>b</span></span>); count
  // them so we pair with the matching close tag, not the first one.
  let nesting = 0;
  for (let j = start; j < tokens.length; j++) {
    const t = tokens[j]!;
    if (t.kind === "close" && tagOf(t.text) === target) {
      if (nesting === 0) return { html: html + t.text, end: j + 1 };
      nesting--;
    }
    if (t.kind === "raw" || t.kind === "doctype") return null;
    if (t.kind === "open" && !INLINE_TAGS.has(tagOf(t.text)) && !isVoid(t)) return null;
    if (t.kind === "close" && !INLINE_TAGS.has(tagOf(t.text))) return null;
    if (t.kind === "open" && tagOf(t.text) === target && !isVoid(t)) nesting++;
    html += t.kind === "text" ? t.text.replace(/\s+/g, " ") : t.text;
  }
  return null;
}

/**
 * Beautify HTML by inserting newlines and indentation between block-level
 * tags while keeping inline content with its parent. Comments, `<pre>` and
 * `<script>`/`<style>` blocks are preserved verbatim.
 */
export function formatHtml(input: string, indent = "  "): string {
  const src = input.trim();
  if (!src) return "";
  const tokens = tokenize(src);
  let depth = 0;
  const lines: string[] = [];
  let i = 0;

  while (i < tokens.length) {
    const t = tokens[i]!;
    if (t.kind === "text") {
      const trimmed = t.text.trim();
      if (trimmed) lines.push(indent.repeat(depth) + trimmed.replace(/\s+/g, " "));
      i++;
      continue;
    }
    if (t.kind === "raw" || t.kind === "comment" || t.kind === "doctype") {
      lines.push(indent.repeat(depth) + t.text.trim());
      i++;
      continue;
    }
    if (t.kind === "close") {
      depth = Math.max(0, depth - 1);
      lines.push(indent.repeat(depth) + t.text);
      i++;
      continue;
    }
    // open tag
    if (isVoid(t)) {
      lines.push(indent.repeat(depth) + t.text);
      i++;
      continue;
    }
    const inline = inlineContent(tokens, i + 1, t.text);
    if (inline) {
      lines.push(indent.repeat(depth) + inline.html);
      i = inline.end;
      continue;
    }
    lines.push(indent.repeat(depth) + t.text);
    depth++;
    i++;
  }
  return lines.join("\n");
}
