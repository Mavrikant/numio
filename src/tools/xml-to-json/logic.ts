export interface XmlToJsonResult {
  readonly output: string;
  readonly error: string | null;
}

interface XmlNode {
  readonly tag: string;
  attrs: Record<string, string>;
  children: (XmlNode | string)[];
}

function decodeEntities(s: string): string {
  return s
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&");
}

function parseXml(input: string): XmlNode | string {
  const src = input
    .replace(/<\?xml[^>]*\?>/g, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<!DOCTYPE[^>]*>/gi, "")
    .trim();
  if (!src) return "";
  let i = 0;
  const stack: XmlNode[] = [];
  let root: XmlNode | null = null;

  const parseTag = (): { name: string; attrs: Record<string, string>; selfClosing: boolean; closing: boolean } => {
    let tag = "";
    // Quote-aware scan: ">" is legal inside quoted attribute values.
    let quote: '"' | "'" | null = null;
    while (i < src.length) {
      const c = src[i]!;
      if (quote) {
        if (c === quote) quote = null;
      } else if (c === '"' || c === "'") {
        quote = c;
      } else if (c === ">") {
        break;
      }
      tag += c;
      i++;
    }
    i++; // skip '>'
    const closing = tag.startsWith("/");
    const selfClosing = tag.endsWith("/") && !closing;
    const stripped = tag.replace(/^\/?/, "").replace(/\/$/, "").trim();
    const parts = stripped.match(/([\w:-]+|"[^"]*"|'[^']*'|=)/g) ?? [];
    const name = parts[0] ?? "";
    const attrs: Record<string, string> = {};
    for (let p = 1; p < parts.length; p += 3) {
      const key = parts[p];
      const eq = parts[p + 1];
      const val = parts[p + 2];
      if (key && eq === "=" && val) attrs[key] = decodeEntities(val.replace(/^["']|["']$/g, ""));
    }
    return { name, attrs, selfClosing, closing };
  };

  while (i < src.length) {
    if (src.startsWith("<![CDATA[", i)) {
      const end = src.indexOf("]]>", i + 9);
      const text = end === -1 ? src.slice(i + 9) : src.slice(i + 9, end);
      if (text && stack.length > 0) stack[stack.length - 1]!.children.push(text);
      i = end === -1 ? src.length : end + 3;
    } else if (src[i] === "<") {
      const start = i;
      i++;
      const tag = parseTag();
      if (tag.closing) {
        const popped = stack.pop();
        if (!popped || popped.tag !== tag.name) throw new Error(`Mismatched closing tag </${tag.name}>.`);
      } else {
        const node: XmlNode = { tag: tag.name, attrs: tag.attrs, children: [] };
        if (stack.length === 0) {
          if (root) throw new Error("Multiple root elements.");
          root = node;
        } else {
          stack[stack.length - 1]!.children.push(node);
        }
        if (!tag.selfClosing) stack.push(node);
      }
      if (start === i) i++; // safety net
    } else {
      let text = "";
      while (i < src.length && src[i] !== "<") {
        text += src[i];
        i++;
      }
      const trimmed = text.trim();
      if (trimmed && stack.length > 0) {
        stack[stack.length - 1]!.children.push(decodeEntities(trimmed));
      }
    }
  }
  if (stack.length > 0) throw new Error("Unclosed elements.");
  return root ?? "";
}

function nodeToJson(node: XmlNode | string): unknown {
  if (typeof node === "string") return node;
  const obj: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(node.attrs)) obj[`@${k}`] = v;
  const grouped: Record<string, unknown[]> = {};
  for (const child of node.children) {
    if (typeof child === "string") {
      const existing = grouped["#text"] ?? [];
      existing.push(child);
      grouped["#text"] = existing;
    } else {
      const sub = nodeToJson(child);
      const arr = grouped[child.tag] ?? [];
      arr.push(sub);
      grouped[child.tag] = arr;
    }
  }
  for (const [k, arr] of Object.entries(grouped)) {
    obj[k] = arr.length === 1 ? arr[0]! : arr;
  }
  if (Object.keys(obj).length === 1 && obj["#text"] !== undefined && Object.keys(node.attrs).length === 0) {
    return obj["#text"];
  }
  return obj;
}

/** Convert XML to JSON. Attributes use the "@name" prefix; text nodes become "#text". */
export function xmlToJson(input: string, indent = 2): XmlToJsonResult {
  if (!input.trim()) return { output: "", error: null };
  try {
    const root = parseXml(input);
    if (typeof root === "string") return { output: JSON.stringify(root, null, indent), error: null };
    const json = { [root.tag]: nodeToJson(root) };
    return { output: JSON.stringify(json, null, indent), error: null };
  } catch (e) {
    return { output: "", error: e instanceof Error ? e.message : "Invalid XML." };
  }
}
