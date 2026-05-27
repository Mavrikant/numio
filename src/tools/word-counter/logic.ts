export interface TextStats {
  readonly characters: number;
  readonly charactersNoSpaces: number;
  readonly words: number;
  readonly sentences: number;
  readonly paragraphs: number;
  readonly lines: number;
  readonly readingMinutes: number;
}

/** Words-per-minute used for the reading-time estimate. */
const WPM = 200;

export function analyzeText(text: string): TextStats {
  const chars = Array.from(text);
  const words = text.trim() === "" ? 0 : (text.trim().match(/\S+/g) ?? []).length;
  const sentences =
    text.trim() === "" ? 0 : (text.match(/[^.!?。！？]+[.!?。！？]+/g) ?? []).length || (text.trim() ? 1 : 0);
  const paragraphs = text.trim() === "" ? 0 : text.split(/\n\s*\n/).filter((p) => p.trim() !== "").length;
  const lines = text === "" ? 0 : text.split(/\r\n|\r|\n/).length;

  return {
    characters: chars.length,
    charactersNoSpaces: chars.filter((c) => !/\s/.test(c)).length,
    words,
    sentences,
    paragraphs,
    lines,
    readingMinutes: words / WPM,
  };
}
