const esc = (s: string): string => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

/** Allow http(s), mailto and relative URLs only; anything else (javascript:, data:, …) is dropped. */
const safeUrl = (url: string): string =>
  /^(https?:|mailto:)/i.test(url) || !/^[a-z][a-z0-9+.-]*:/i.test(url) ? url : "#";

function inline(text: string): string {
  let out = esc(text);
  // Inline code: backticks. Content is already escaped; stash spans in
  // placeholders so later replacements can't touch code content.
  const codes: string[] = [];
  out = out.replace(/`([^`]+)`/g, (_, code) => {
    codes.push(`<code>${code}</code>`);
    return `\u0000${codes.length - 1}\u0000`;
  });
  out = out.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (_, alt, src) => `<img src="${safeUrl(src)}" alt="${alt}">`);
  out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, href) => `<a href="${safeUrl(href)}">${label}</a>`);
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/(?<![*\w])\*([^*]+)\*(?!\w)/g, "<em>$1</em>");
  return out.replace(/\u0000(\d+)\u0000/g, (_, i) => codes[Number(i)]!);
}

/**
 * Convert a small, well-defined subset of Markdown to HTML: ATX headings,
 * fenced code blocks, blockquotes, unordered/ordered lists, paragraphs,
 * inline emphasis, code, links and images. Not a CommonMark spec implementation —
 * it covers the common cases for blog drafts and READMEs.
 */
export function markdownToHtml(input: string): string {
  const lines = input.replace(/\r\n?/g, "\n").split("\n");
  const out: string[] = [];
  let i = 0;
  let inList: "ul" | "ol" | null = null;
  let inBlockquote = false;

  const closeList = () => {
    if (inList) {
      out.push(`</${inList}>`);
      inList = null;
    }
  };
  const closeBlockquote = () => {
    if (inBlockquote) {
      out.push("</blockquote>");
      inBlockquote = false;
    }
  };

  while (i < lines.length) {
    const line = lines[i]!;

    // Fenced code block.
    if (/^```/.test(line)) {
      closeList();
      closeBlockquote();
      const lang = line.slice(3).trim();
      const body: string[] = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i]!)) {
        body.push(lines[i]!);
        i++;
      }
      i++; // skip closing fence
      out.push(`<pre><code${lang ? ` class="language-${lang}"` : ""}>${esc(body.join("\n"))}</code></pre>`);
      continue;
    }

    // ATX heading.
    const heading = /^(#{1,6})\s+(.*)$/.exec(line);
    if (heading) {
      closeList();
      closeBlockquote();
      const level = heading[1]!.length;
      out.push(`<h${level}>${inline(heading[2]!)}</h${level}>`);
      i++;
      continue;
    }

    // Blockquote.
    if (/^>\s?/.test(line)) {
      closeList();
      if (!inBlockquote) {
        out.push("<blockquote>");
        inBlockquote = true;
      }
      out.push(`<p>${inline(line.replace(/^>\s?/, ""))}</p>`);
      i++;
      continue;
    }

    // Unordered list.
    if (/^[-*+]\s+/.test(line)) {
      closeBlockquote();
      if (inList !== "ul") {
        closeList();
        out.push("<ul>");
        inList = "ul";
      }
      out.push(`<li>${inline(line.replace(/^[-*+]\s+/, ""))}</li>`);
      i++;
      continue;
    }

    // Ordered list.
    if (/^\d+\.\s+/.test(line)) {
      closeBlockquote();
      if (inList !== "ol") {
        closeList();
        out.push("<ol>");
        inList = "ol";
      }
      out.push(`<li>${inline(line.replace(/^\d+\.\s+/, ""))}</li>`);
      i++;
      continue;
    }

    // Horizontal rule.
    if (/^---+$/.test(line)) {
      closeList();
      closeBlockquote();
      out.push("<hr>");
      i++;
      continue;
    }

    // Blank line.
    if (/^\s*$/.test(line)) {
      closeList();
      closeBlockquote();
      i++;
      continue;
    }

    // Paragraph: collect until blank line or block element.
    closeList();
    closeBlockquote();
    const paragraph: string[] = [line];
    i++;
    while (i < lines.length && !/^\s*$/.test(lines[i]!) && !/^(#{1,6}\s|```|>\s?|[-*+]\s|\d+\.\s|---+$)/.test(lines[i]!)) {
      paragraph.push(lines[i]!);
      i++;
    }
    out.push(`<p>${inline(paragraph.join(" "))}</p>`);
  }
  closeList();
  closeBlockquote();
  return out.join("\n");
}
