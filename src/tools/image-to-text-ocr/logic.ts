/**
 * Pure helpers for the OCR tool. The heavy lifting (tesseract.js) is dynamically
 * imported inside Tool.tsx so it never enters the main bundle; here we only keep
 * the supported language list and small text post-processing.
 */

export interface OcrLanguage {
  readonly code: string;
  readonly label: string;
}

/** Tesseract language codes offered in the UI (data fetched on demand at runtime). */
export const OCR_LANGUAGES: ReadonlyArray<OcrLanguage> = [
  { code: "eng", label: "English" },
  { code: "spa", label: "Español" },
  { code: "fra", label: "Français" },
  { code: "deu", label: "Deutsch" },
  { code: "ita", label: "Italiano" },
  { code: "por", label: "Português" },
  { code: "rus", label: "Русский" },
  { code: "tur", label: "Türkçe" },
  { code: "ara", label: "العربية" },
  { code: "hin", label: "हिन्दी" },
  { code: "chi_sim", label: "中文 (简体)" },
  { code: "jpn", label: "日本語" },
  { code: "kor", label: "한국어" },
];

/** Trim trailing whitespace from each line and collapse 3+ blank lines to one. */
export function cleanOcrText(text: string): string {
  return text
    .split("\n")
    .map((line) => line.replace(/\s+$/, ""))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
