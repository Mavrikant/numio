const NATO: Record<string, string> = {
  a: "Alfa", b: "Bravo", c: "Charlie", d: "Delta", e: "Echo", f: "Foxtrot",
  g: "Golf", h: "Hotel", i: "India", j: "Juliett", k: "Kilo", l: "Lima",
  m: "Mike", n: "November", o: "Oscar", p: "Papa", q: "Quebec", r: "Romeo",
  s: "Sierra", t: "Tango", u: "Uniform", v: "Victor", w: "Whiskey", x: "X-ray",
  y: "Yankee", z: "Zulu",
  "0": "Zero", "1": "One", "2": "Two", "3": "Three", "4": "Four",
  "5": "Five", "6": "Six", "7": "Seven", "8": "Eight", "9": "Nine",
};

/** Convert text to the NATO phonetic alphabet. Spaces become "/". */
export function toNato(text: string): string {
  return Array.from(text)
    .map((ch) => {
      if (ch === " ") return "/";
      const word = NATO[ch.toLowerCase()];
      return word ?? ch;
    })
    .join(" ")
    .trim();
}
