function decode(text: string): string {
  return text
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&");
}

/**
 * Convert a useful subset of HTML to Markdown via regex transformations.
 * Handles headings, paragraphs, lists, code, blockquotes, emphasis, links,
 * images and horizontal rules. Not a full HTML parser — use this on
 * trusted HTML you control.
 */
export function htmlToMarkdown(input: string): string {
  let s = input.replace(/<!--[\s\S]*?-->/g, "");
  s = s.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "");

  // Block-level structure.
  s = s.replace(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi, (_, n, inner) => `\n${"#".repeat(Number(n))} ${inner.trim()}\n\n`);
  // Entities in code are left encoded here; the single decode() pass at the
  // end handles them (decoding twice would turn &amp;amp; into &).
  s = s.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (_, code) => `\n\`\`\`\n${code}\n\`\`\`\n\n`);
  s = s.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, inner) => "\n" + String(inner).trim().split(/\n+/).map((l: string) => `> ${l.trim()}`).join("\n") + "\n\n");

  // Lists: replace <li> first, then strip wrappers.
  s = s.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, inner) => `- ${String(inner).trim().replace(/\s+/g, " ")}\n`);
  s = s.replace(/<\/?ul[^>]*>/gi, "\n");
  s = s.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (_, inner) => {
    let i = 0;
    return "\n" + String(inner).replace(/^- /gm, () => `${++i}. `) + "\n";
  });

  s = s.replace(/<hr\s*\/?>/gi, "\n---\n");
  s = s.replace(/<br\s*\/?>/gi, "  \n");
  s = s.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, inner) => `\n${String(inner).trim().replace(/\s+/g, " ")}\n\n`);

  // Inline.
  s = s.replace(/<img[^>]*alt="([^"]*)"[^>]*src="([^"]+)"[^>]*>/gi, (_, alt, src) => `![${alt}](${src})`);
  s = s.replace(/<img[^>]*src="([^"]+)"[^>]*alt="([^"]*)"[^>]*>/gi, (_, src, alt) => `![${alt}](${src})`);
  s = s.replace(/<img[^>]*src="([^"]+)"[^>]*>/gi, (_, src) => `![](${src})`);
  s = s.replace(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => `[${String(text).trim()}](${href})`);
  s = s.replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, "**$2**");
  s = s.replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, "*$2*");
  s = s.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (_, code) => `\`${code}\``);

  // Strip any remaining tags and decode the bulk of common entities.
  s = s.replace(/<[^>]+>/g, "");
  s = decode(s);

  return s.replace(/\n{3,}/g, "\n\n").trim();
}
