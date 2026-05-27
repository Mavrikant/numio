// Common non-ASCII letters mapped to ASCII for nicer slugs.
const CHAR_MAP: Record<string, string> = {
  ş: "s", Ş: "S", ı: "i", İ: "I", ğ: "g", Ğ: "G", ü: "u", Ü: "U",
  ö: "o", Ö: "O", ç: "c", Ç: "C", ß: "ss", æ: "ae", ø: "o", å: "a", ñ: "n",
};

export function slugify(text: string, separator: "-" | "_" = "-", lowercase = true): string {
  const mapped = text.replace(/[şŞıİğĞüÜöÖçÇßæøåñ]/g, (c) => CHAR_MAP[c] ?? c);
  const stripped = mapped.normalize("NFKD").replace(/[̀-ͯ]/g, "");
  const sepEsc = separator === "-" ? "-" : "_";
  let s = stripped.replace(/[^a-zA-Z0-9]+/g, separator);
  s = s.replace(new RegExp(`[${sepEsc}]{2,}`, "g"), separator);
  s = s.replace(new RegExp(`^[${sepEsc}]+|[${sepEsc}]+$`, "g"), "");
  return lowercase ? s.toLowerCase() : s;
}
