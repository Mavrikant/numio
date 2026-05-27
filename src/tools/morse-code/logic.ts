const TO_MORSE: Record<string, string> = {
  a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....",
  i: "..", j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.",
  q: "--.-", r: ".-.", s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-",
  y: "-.--", z: "--..",
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
  ".": ".-.-.-", ",": "--..--", "?": "..--..", "'": ".----.", "!": "-.-.--",
  "/": "-..-.", "(": "-.--.", ")": "-.--.-", "&": ".-...", ":": "---...",
  ";": "-.-.-.", "=": "-...-", "+": ".-.-.", "-": "-....-", "_": "..--.-",
  '"': ".-..-.", "@": ".--.-.",
};

const FROM_MORSE: Record<string, string> = Object.fromEntries(
  Object.entries(TO_MORSE).map(([k, v]) => [v, k]),
);

/** Text → Morse. Letters separated by spaces, words by " / ". */
export function textToMorse(text: string): string {
  return text
    .trim()
    .split(/\s+/)
    .map((word) =>
      Array.from(word)
        .map((ch) => TO_MORSE[ch.toLowerCase()] ?? "")
        .filter((c) => c !== "")
        .join(" "),
    )
    .filter((w) => w !== "")
    .join(" / ");
}

/** Morse → text. Accepts "/" (or multiple spaces) as the word separator. */
export function morseToText(morse: string): string {
  return morse
    .trim()
    .split(/\s*\/\s*|\s{2,}/)
    .map((word) =>
      word
        .trim()
        .split(/\s+/)
        .map((code) => FROM_MORSE[code] ?? "")
        .join(""),
    )
    .join(" ")
    .trim();
}
