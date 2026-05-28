/**
 * Estimate the syllable count of an English word using a vowel-group heuristic
 * with corrections for trailing silent "e" and "le". This is approximate —
 * English has many exceptions — but matches commonly used algorithms.
 */
export function syllablesInWord(word: string): number {
  const w = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!w) return 0;
  if (w.length <= 3) return 1;

  let stripped = w.replace(/(?:[^laeiouy])es$|ed$|[^laeiouy]e$/, "");
  // Preserve a trailing silent "e" when removing it would erase the only vowel group.
  if (!/[aeiouy]/.test(stripped)) stripped = w;

  const groups = stripped.match(/[aeiouy]+/g);
  const count = groups ? groups.length : 0;
  return Math.max(1, count);
}

/** Count syllables across an arbitrary text. */
export function countSyllables(text: string): { words: number; syllables: number } {
  const words = text.split(/\s+/).filter(Boolean);
  let syllables = 0;
  for (const w of words) syllables += syllablesInWord(w);
  return { words: words.length, syllables };
}
