export interface WordFreq {
  readonly word: string;
  readonly count: number;
}

export interface FrequencyResult {
  readonly entries: ReadonlyArray<WordFreq>;
  readonly totalWords: number;
  readonly uniqueWords: number;
}

/** Count word occurrences, sorted by frequency (desc) then alphabetically. */
export function wordFrequencies(text: string, caseInsensitive: boolean): FrequencyResult {
  const tokens = (text.match(/[\p{L}\p{N}']+/gu) ?? []).map((w) =>
    caseInsensitive ? w.toLowerCase() : w,
  );
  const counts = new Map<string, number>();
  for (const t of tokens) counts.set(t, (counts.get(t) ?? 0) + 1);

  const entries = [...counts.entries()]
    .map(([word, count]) => ({ word, count }))
    .sort((a, b) => b.count - a.count || a.word.localeCompare(b.word));

  return { entries, totalWords: tokens.length, uniqueWords: counts.size };
}
