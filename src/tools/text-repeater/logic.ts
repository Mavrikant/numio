export type RepeatSeparator = "none" | "space" | "newline" | "comma";

const SEP: Record<RepeatSeparator, string> = {
  none: "",
  space: " ",
  newline: "\n",
  comma: ", ",
};

export function repeatText(text: string, count: number, separator: RepeatSeparator): string {
  const n = Math.max(0, Math.min(100000, Math.floor(count)));
  if (n === 0 || text === "") return "";
  return Array.from({ length: n }, () => text).join(SEP[separator]);
}
