const ENCODE: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

const DECODE_NAMED: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  copy: "©",
  reg: "®",
};

export function encodeEntities(text: string): string {
  return text.replace(/[&<>"']/g, (c) => ENCODE[c]!);
}

export function decodeEntities(text: string): string {
  return text.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (match, body: string) => {
    if (body[0] === "#") {
      const cp =
        body[1] === "x" || body[1] === "X"
          ? parseInt(body.slice(2), 16)
          : parseInt(body.slice(1), 10);
      // Code points beyond U+10FFFF would make String.fromCodePoint throw.
      return Number.isNaN(cp) || cp > 0x10ffff ? match : String.fromCodePoint(cp);
    }
    return DECODE_NAMED[body.toLowerCase()] ?? match;
  });
}
