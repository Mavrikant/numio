export interface CheatsheetEntry {
  readonly pattern: string;
  readonly meaning: string;
  readonly example: string;
}

export const CATEGORIES: { id: string; label: string; entries: CheatsheetEntry[] }[] = [
  {
    id: "anchors",
    label: "Anchors",
    entries: [
      { pattern: "^", meaning: "Start of string (or line in multiline mode)", example: "^Hi" },
      { pattern: "$", meaning: "End of string (or line in multiline mode)", example: "end$" },
      { pattern: "\\b", meaning: "Word boundary", example: "\\bword\\b" },
      { pattern: "\\B", meaning: "Non-word boundary", example: "\\Bword" },
    ],
  },
  {
    id: "classes",
    label: "Character classes",
    entries: [
      { pattern: ".", meaning: "Any character except newline", example: "h.t" },
      { pattern: "\\d", meaning: "Digit (0–9)", example: "\\d{3}" },
      { pattern: "\\D", meaning: "Non-digit", example: "\\D+" },
      { pattern: "\\w", meaning: "Word character (letter, digit, underscore)", example: "\\w+" },
      { pattern: "\\W", meaning: "Non-word character", example: "\\W" },
      { pattern: "\\s", meaning: "Whitespace", example: "a\\sb" },
      { pattern: "\\S", meaning: "Non-whitespace", example: "\\S+" },
      { pattern: "[abc]", meaning: "Any of a, b or c", example: "[aeiou]" },
      { pattern: "[^abc]", meaning: "None of a, b or c", example: "[^0-9]" },
      { pattern: "[a-z]", meaning: "Range from a to z", example: "[A-Za-z]" },
    ],
  },
  {
    id: "quantifiers",
    label: "Quantifiers",
    entries: [
      { pattern: "*", meaning: "Zero or more", example: "ab*c" },
      { pattern: "+", meaning: "One or more", example: "ab+c" },
      { pattern: "?", meaning: "Zero or one", example: "colou?r" },
      { pattern: "{n}", meaning: "Exactly n", example: "\\d{4}" },
      { pattern: "{n,}", meaning: "n or more", example: "\\d{2,}" },
      { pattern: "{n,m}", meaning: "Between n and m", example: "\\d{2,4}" },
      { pattern: "*?", meaning: "Lazy zero or more", example: "<.*?>" },
    ],
  },
  {
    id: "groups",
    label: "Groups",
    entries: [
      { pattern: "(...)", meaning: "Capturing group", example: "(abc)+" },
      { pattern: "(?:...)", meaning: "Non-capturing group", example: "(?:abc)+" },
      { pattern: "(?<name>...)", meaning: "Named group", example: "(?<year>\\d{4})" },
      { pattern: "\\1, \\2", meaning: "Backreference", example: "(.)\\1" },
      { pattern: "|", meaning: "Alternation (OR)", example: "cat|dog" },
    ],
  },
  {
    id: "lookarounds",
    label: "Lookarounds",
    entries: [
      { pattern: "(?=...)", meaning: "Positive lookahead", example: "foo(?=bar)" },
      { pattern: "(?!...)", meaning: "Negative lookahead", example: "foo(?!bar)" },
      { pattern: "(?<=...)", meaning: "Positive lookbehind", example: "(?<=USD)\\d+" },
      { pattern: "(?<!...)", meaning: "Negative lookbehind", example: "(?<!\\$)\\d+" },
    ],
  },
  {
    id: "flags",
    label: "Flags",
    entries: [
      { pattern: "g", meaning: "Global — find all matches", example: "/foo/g" },
      { pattern: "i", meaning: "Case-insensitive", example: "/foo/i" },
      { pattern: "m", meaning: "Multiline (^ and $ match per line)", example: "/^foo/m" },
      { pattern: "s", meaning: "Dotall (. matches newlines)", example: "/foo.bar/s" },
      { pattern: "u", meaning: "Unicode mode", example: "/\\p{Letter}/u" },
      { pattern: "y", meaning: "Sticky — match at lastIndex", example: "/foo/y" },
    ],
  },
];

/** Filter entries across all categories by a case-insensitive query. */
export function searchEntries(query: string): { category: string; entries: CheatsheetEntry[] }[] {
  const q = query.trim().toLowerCase();
  if (!q) return CATEGORIES.map((c) => ({ category: c.label, entries: c.entries }));
  return CATEGORIES.map((c) => ({
    category: c.label,
    entries: c.entries.filter((e) => e.pattern.toLowerCase().includes(q) || e.meaning.toLowerCase().includes(q) || e.example.toLowerCase().includes(q)),
  })).filter((c) => c.entries.length > 0);
}
