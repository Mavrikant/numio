/** Prefix each line with a sequential number. */
export function numberLines(text: string, start: number, step: number, separator: string): string {
  return text
    .split(/\r?\n/)
    .map((line, i) => `${start + i * step}${separator}${line}`)
    .join("\n");
}
