export interface ColorCode {
  readonly code: string;
  readonly name: string;
  readonly hex: string;
}

export interface FormatCode {
  readonly code: string;
  readonly name: string;
  /** Which formatting flag this code toggles, or "reset". */
  readonly effect: "obfuscated" | "bold" | "strike" | "underline" | "italic" | "reset";
}

export interface Segment {
  text: string;
  color?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strike?: boolean;
  obfuscated?: boolean;
}

/** The 16 standard Minecraft colour codes (§0–§9, §a–§f) with display name and hex. */
export const COLOR_CODES: ReadonlyArray<ColorCode> = [
  { code: "0", name: "Black", hex: "#000000" },
  { code: "1", name: "Dark Blue", hex: "#0000AA" },
  { code: "2", name: "Dark Green", hex: "#00AA00" },
  { code: "3", name: "Dark Aqua", hex: "#00AAAA" },
  { code: "4", name: "Dark Red", hex: "#AA0000" },
  { code: "5", name: "Dark Purple", hex: "#AA00AA" },
  { code: "6", name: "Gold", hex: "#FFAA00" },
  { code: "7", name: "Gray", hex: "#AAAAAA" },
  { code: "8", name: "Dark Gray", hex: "#555555" },
  { code: "9", name: "Blue", hex: "#5555FF" },
  { code: "a", name: "Green", hex: "#55FF55" },
  { code: "b", name: "Aqua", hex: "#55FFFF" },
  { code: "c", name: "Red", hex: "#FF5555" },
  { code: "d", name: "Light Purple", hex: "#FF55FF" },
  { code: "e", name: "Yellow", hex: "#FFFF55" },
  { code: "f", name: "White", hex: "#FFFFFF" },
];

/** The Minecraft formatting codes (§k–§o, §r). */
export const FORMAT_CODES: ReadonlyArray<FormatCode> = [
  { code: "k", name: "Obfuscated", effect: "obfuscated" },
  { code: "l", name: "Bold", effect: "bold" },
  { code: "m", name: "Strikethrough", effect: "strike" },
  { code: "n", name: "Underline", effect: "underline" },
  { code: "o", name: "Italic", effect: "italic" },
  { code: "r", name: "Reset", effect: "reset" },
];

const COLOR_BY_CODE = new Map(COLOR_CODES.map((c) => [c.code, c]));
const FORMAT_BY_CODE = new Map(FORMAT_CODES.map((c) => [c.code, c]));

function emptyState(): Omit<Segment, "text"> {
  return {};
}

/**
 * Parse a Minecraft-formatted string (using `§` or `&` as the prefix) into a
 * list of styled segments. Colour codes reset active formatting (vanilla
 * behaviour), `§r` resets everything.
 */
export function parseToSegments(text: string): Segment[] {
  if (typeof text !== "string") throw new Error("Expected a string");
  const segments: Segment[] = [];
  let state: Omit<Segment, "text"> = emptyState();
  let buffer = "";

  const flush = () => {
    if (buffer === "") return;
    segments.push({ text: buffer, ...state });
    buffer = "";
  };

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if ((ch === "§" || ch === "&") && i + 1 < text.length) {
      const next = text[i + 1].toLowerCase();
      if (COLOR_BY_CODE.has(next)) {
        flush();
        // A colour code resets formatting and sets the new colour.
        state = { color: COLOR_BY_CODE.get(next)!.hex };
        i++;
        continue;
      }
      const fmt = FORMAT_BY_CODE.get(next);
      if (fmt) {
        flush();
        if (fmt.effect === "reset") {
          state = emptyState();
        } else {
          state = { ...state, [fmt.effect]: true };
        }
        i++;
        continue;
      }
    }
    buffer += ch;
  }
  flush();
  return segments;
}
