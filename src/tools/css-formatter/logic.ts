/**
 * Beautify a CSS string by inserting newlines and indentation around `{`,
 * `}` and `;`. Preserves the content of strings and comments verbatim.
 */
export function formatCss(input: string, indent = "  "): string {
  const src = input.trim();
  if (!src) return "";

  // Split into pieces, keeping strings and comments untouched.
  const pieces: { raw: boolean; text: string }[] = [];
  let i = 0;
  let buf = "";
  while (i < src.length) {
    const ch = src[i]!;
    if (ch === "/" && src[i + 1] === "*") {
      if (buf) {
        pieces.push({ raw: false, text: buf });
        buf = "";
      }
      const end = src.indexOf("*/", i + 2);
      const stop = end === -1 ? src.length : end + 2;
      pieces.push({ raw: true, text: src.slice(i, stop) });
      i = stop;
      continue;
    }
    if (ch === '"' || ch === "'") {
      const quote = ch;
      let lit = ch;
      i++;
      while (i < src.length) {
        lit += src[i];
        if (src[i] === "\\" && i + 1 < src.length) {
          lit += src[i + 1];
          i += 2;
          continue;
        }
        if (src[i] === quote) {
          i++;
          break;
        }
        i++;
      }
      if (buf) {
        pieces.push({ raw: false, text: buf });
        buf = "";
      }
      pieces.push({ raw: true, text: lit });
      continue;
    }
    buf += ch;
    i++;
  }
  if (buf) pieces.push({ raw: false, text: buf });

  let depth = 0;
  let out = "";
  let atLineStart = true;
  let parens = 0;
  let sawDeclColon = false;
  const newline = () => {
    out += "\n" + indent.repeat(Math.max(0, depth));
    atLineStart = true;
  };
  const writeSpace = () => {
    if (out && !atLineStart && !out.endsWith(" ")) out += " ";
  };

  // First `{`, `}` or `;` after the given position (skipping raw pieces) —
  // tells a selector (`{` follows, colons belong to pseudo-classes) apart
  // from a declaration (`;`/`}` follows, the first colon separates the value).
  const nextDelim = (pi: number, ci: number): string => {
    for (let p = pi; p < pieces.length; p++) {
      const piece = pieces[p]!;
      if (piece.raw) continue;
      const text = piece.text;
      for (let c = p === pi ? ci : 0; c < text.length; c++) {
        const ch = text[c]!;
        if (ch === "{" || ch === "}" || ch === ";") return ch;
      }
    }
    return "";
  };

  for (let pi = 0; pi < pieces.length; pi++) {
    const piece = pieces[pi]!;
    if (piece.raw) {
      out += piece.text;
      atLineStart = false;
      continue;
    }
    const text = piece.text;
    for (let ci = 0; ci < text.length; ci++) {
      const c = text[ci]!;
      if (c === "{") {
        writeSpace();
        out += "{";
        depth++;
        sawDeclColon = false;
        newline();
      } else if (c === "}") {
        depth = Math.max(0, depth - 1);
        // Trim trailing whitespace before closing brace.
        out = out.replace(/[ \t]+$/g, "");
        if (!out.endsWith("\n")) out += "\n";
        out += indent.repeat(depth) + "}";
        sawDeclColon = false;
        newline();
      } else if (c === ";") {
        out += ";";
        sawDeclColon = false;
        newline();
      } else if (
        c === ":" &&
        depth > 0 &&
        parens === 0 &&
        !sawDeclColon &&
        nextDelim(pi, ci + 1) !== "{"
      ) {
        out += ": ";
        sawDeclColon = true;
        atLineStart = false;
      } else if (c === "," && depth === 0) {
        out += ",";
        newline();
      } else if (c === "\n" || c === "\r" || c === "\t") {
        // Collapse whitespace except at the start of a logical line.
        if (!atLineStart && !out.endsWith(" ")) out += " ";
      } else if (c === " ") {
        if (!atLineStart && !out.endsWith(" ")) out += " ";
      } else {
        if (c === "(") parens++;
        else if (c === ")") parens = Math.max(0, parens - 1);
        out += c;
        atLineStart = false;
      }
    }
  }
  return out.replace(/\n{2,}/g, "\n").trim();
}
