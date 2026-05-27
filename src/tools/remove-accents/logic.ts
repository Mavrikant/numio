// Letters that don't decompose under NFKD but have common ASCII equivalents.
const EXTRA: Record<string, string> = {
  ß: "ss", æ: "ae", Æ: "AE", œ: "oe", Œ: "OE", ø: "o", Ø: "O",
  ł: "l", Ł: "L", đ: "d", Đ: "D", ð: "d", Ð: "D", þ: "th", Þ: "Th",
  ı: "i", İ: "I",
};

/** Strip accents/diacritics and map common special letters to ASCII. */
export function removeAccents(text: string): string {
  const mapped = text.replace(/[ßæÆœŒøØłŁđĐðÐþÞıİ]/g, (c) => EXTRA[c] ?? c);
  return mapped.normalize("NFKD").replace(/[̀-ͯ]/g, "");
}
