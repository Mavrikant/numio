import { syllablesInWord } from "../syllable-counter/logic";

export interface ReadabilityScores {
  readonly sentences: number;
  readonly words: number;
  readonly syllables: number;
  readonly complexWords: number;
  readonly characters: number;
  readonly fleschReadingEase: number;
  readonly fleschKincaidGrade: number;
  readonly gunningFog: number;
  readonly automatedReadabilityIndex: number;
  readonly smog: number;
}

function countSentences(text: string): number {
  const matches = text.match(/[^.!?]+[.!?]+/g);
  return matches ? matches.length : text.trim() === "" ? 0 : 1;
}

function isComplex(word: string): boolean {
  // Gunning Fog: "complex" = 3 or more syllables (excluding common suffixes is the strict version, this is the common one).
  return syllablesInWord(word) >= 3;
}

const round = (n: number) => Math.round(n * 10) / 10;

/** Compute several standard readability scores for an English text. */
export function readabilityScores(text: string): ReadabilityScores {
  const trimmed = text.trim();
  const words = trimmed === "" ? [] : trimmed.split(/\s+/);
  const wordCount = words.length;
  const sentences = Math.max(1, countSentences(trimmed));
  const syllables = words.reduce((sum, w) => sum + syllablesInWord(w), 0);
  const complexWords = words.filter(isComplex).length;
  const characters = text.replace(/\s/g, "").length;

  if (wordCount === 0) {
    return { sentences: 0, words: 0, syllables: 0, complexWords: 0, characters: 0, fleschReadingEase: 0, fleschKincaidGrade: 0, gunningFog: 0, automatedReadabilityIndex: 0, smog: 0 };
  }

  const wordsPerSentence = wordCount / sentences;
  const syllablesPerWord = syllables / wordCount;
  const flesch = 206.835 - 1.015 * wordsPerSentence - 84.6 * syllablesPerWord;
  const fk = 0.39 * wordsPerSentence + 11.8 * syllablesPerWord - 15.59;
  const fog = 0.4 * (wordsPerSentence + (complexWords / wordCount) * 100);
  // ARI is defined over letters and numbers only, not punctuation.
  const ariCharacters = (text.match(/[A-Za-z0-9]/g) ?? []).length;
  const ari = 4.71 * (ariCharacters / wordCount) + 0.5 * wordsPerSentence - 21.43;
  // SMOG needs at least 30 sentences for reliability; we still compute it for the available text.
  const smog = sentences > 0 ? 1.043 * Math.sqrt(complexWords * (30 / sentences)) + 3.1291 : 0;

  return {
    sentences,
    words: wordCount,
    syllables,
    complexWords,
    characters,
    fleschReadingEase: round(flesch),
    fleschKincaidGrade: round(fk),
    gunningFog: round(fog),
    automatedReadabilityIndex: round(ari),
    smog: round(smog),
  };
}
