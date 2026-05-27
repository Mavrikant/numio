/**
 * Minify SQL by removing comments and collapsing whitespace while preserving
 * the contents of single- and double-quoted string literals. Whitespace
 * normalisation is applied only to the code between literals, never inside them.
 */
export function minifySql(input: string): string {
  // Split into alternating code / string-literal pieces.
  const pieces: { readonly literal: boolean; readonly text: string }[] = [];
  let buf = "";
  let i = 0;
  const n = input.length;

  const flush = () => {
    if (buf) pieces.push({ literal: false, text: buf });
    buf = "";
  };

  while (i < n) {
    const ch = input[i]!;
    const next = input[i + 1];

    if (ch === "'" || ch === '"') {
      flush();
      const quote = ch;
      let lit = ch;
      i++;
      while (i < n) {
        lit += input[i];
        if (input[i] === quote) {
          if (input[i + 1] === quote) {
            lit += input[i + 1];
            i += 2;
            continue;
          }
          i++;
          break;
        }
        i++;
      }
      pieces.push({ literal: true, text: lit });
      continue;
    }

    if (ch === "-" && next === "-") {
      while (i < n && input[i] !== "\n") i++;
      buf += " ";
      continue;
    }

    if (ch === "/" && next === "*") {
      i += 2;
      while (i < n && !(input[i] === "*" && input[i + 1] === "/")) i++;
      i += 2;
      buf += " ";
      continue;
    }

    buf += ch;
    i++;
  }
  flush();

  const collapse = (text: string) => text.replace(/\s+/g, " ").replace(/\s*([(),;])\s*/g, "$1");
  return pieces
    .map((p) => (p.literal ? p.text : collapse(p.text)))
    .join("")
    .trim();
}
