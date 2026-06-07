export interface TextStats {
  readonly words: number;
  readonly characters: number;
  readonly charactersNoSpaces: number;
  readonly lines: number;
}

/** Compute basic word/character/line statistics for a block of text. */
export function textStats(text: string): TextStats {
  if (typeof text !== "string") throw new Error("Expected a string");
  const trimmed = text.trim();
  const words = trimmed === "" ? 0 : trimmed.split(/\s+/).length;
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;
  const lines = text === "" ? 0 : text.split(/\r\n|\r|\n/).length;
  return { words, characters, charactersNoSpaces, lines };
}
