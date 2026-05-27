export type ReverseMode = "characters" | "words" | "lines";

export function reverseText(text: string, mode: ReverseMode): string {
  switch (mode) {
    case "characters":
      return Array.from(text).reverse().join("");
    case "words":
      return text.split(/(\s+)/).reverse().join("");
    case "lines":
      return text.split(/\r?\n/).reverse().join("\n");
  }
}
