export type LoremUnit = "paragraphs" | "sentences" | "words";

const WORDS =
  "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure in reprehenderit voluptate velit esse cillum eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum".split(
    " ",
  );

const LEAD = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

function randInt(rng: () => number, min: number, max: number): number {
  return min + Math.floor(rng() * (max - min + 1));
}

function makeWords(rng: () => number, n: number): string {
  return Array.from({ length: n }, () => WORDS[randInt(rng, 0, WORDS.length - 1)]).join(" ");
}

function makeSentence(rng: () => number): string {
  const s = makeWords(rng, randInt(rng, 5, 12));
  return s.charAt(0).toUpperCase() + s.slice(1) + ".";
}

function makeParagraph(rng: () => number): string {
  return Array.from({ length: randInt(rng, 3, 6) }, () => makeSentence(rng)).join(" ");
}

export function generateLorem(
  unit: LoremUnit,
  count: number,
  startWithLorem: boolean,
  rng: () => number,
): string {
  const n = Math.max(1, Math.min(100, Math.floor(count)));
  if (unit === "words") {
    const words = makeWords(rng, n);
    const out = startWithLorem ? "Lorem ipsum " + words : words;
    return out.charAt(0).toUpperCase() + out.slice(1);
  }
  if (unit === "sentences") {
    const arr = Array.from({ length: n }, () => makeSentence(rng));
    if (startWithLorem) arr[0] = LEAD;
    return arr.join(" ");
  }
  const arr = Array.from({ length: n }, () => makeParagraph(rng));
  if (startWithLorem) arr[0] = LEAD + " " + arr[0];
  return arr.join("\n\n");
}
