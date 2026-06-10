export interface XmlResult {
  readonly output: string;
  readonly error: string | null;
}

const INDENT = "  ";

/**
 * Pretty-print XML by inserting newlines and indentation between tags. This is a
 * structural reformatter, not a validating parser: it normalises whitespace
 * between elements but preserves text content and attributes as written.
 */
export function formatXml(input: string): XmlResult {
  const src = input.trim();
  if (!src) return { output: "", error: null };

  // Collapse whitespace that sits purely between tags, then split on tag
  // boundaries using a sentinel that can't occur in text (newlines can).
  const SEP = String.fromCharCode(0);
  const normalized = src.replace(/>\s+</g, "><");
  const tokens = normalized.replace(/></g, `>${SEP}<`).split(SEP);

  let depth = 0;
  const lines: string[] = [];
  for (const raw of tokens) {
    const token = raw.trim();
    if (!token) continue;
    const isClosing = /^<\//.test(token);
    const isSelfContained = /^<[^>]+\/>$/.test(token) || /^<\?/.test(token) || /^<!--/.test(token) || /^<!/.test(token);
    const opensAndCloses = /^<([\w:-]+)(\s[^>]*)?>[\s\S]*<\/\1>$/.test(token);

    if (isClosing) depth = Math.max(0, depth - 1);
    lines.push(INDENT.repeat(depth) + token);
    if (!isClosing && !isSelfContained && !opensAndCloses && /^<[^/]/.test(token)) depth += 1;
  }

  if (depth !== 0) return { output: lines.join("\n"), error: "Unbalanced tags — check your XML." };
  return { output: lines.join("\n"), error: null };
}
