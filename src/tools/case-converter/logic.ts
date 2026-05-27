export type CaseMode =
  | "upper"
  | "lower"
  | "title"
  | "sentence"
  | "camel"
  | "pascal"
  | "snake"
  | "kebab";

export const CASE_MODES: readonly CaseMode[] = [
  "upper",
  "lower",
  "title",
  "sentence",
  "camel",
  "pascal",
  "snake",
  "kebab",
];

/** Split text into word tokens, ignoring separators and case boundaries. */
function tokenize(text: string): string[] {
  return (
    text
      // split camelCase / PascalCase boundaries
      .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
      .split(/[\s_\-./\\]+/)
      .map((w) => w.trim())
      .filter((w) => w.length > 0)
  );
}

export function convertCase(text: string, mode: CaseMode): string {
  switch (mode) {
    case "upper":
      return text.toUpperCase();
    case "lower":
      return text.toLowerCase();
    case "title":
      return text.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
    case "sentence":
      return text
        .toLowerCase()
        .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    case "camel": {
      const t = tokenize(text.toLowerCase());
      return t.map((w, i) => (i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1))).join("");
    }
    case "pascal":
      return tokenize(text.toLowerCase())
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join("");
    case "snake":
      return tokenize(text).join("_").toLowerCase();
    case "kebab":
      return tokenize(text).join("-").toLowerCase();
  }
}
