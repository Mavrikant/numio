export type ShakeKind = "yes" | "noncommittal" | "no";

export interface Answer {
  readonly text: string;
  readonly kind: ShakeKind;
}

/** The classic 20 Magic 8-Ball answers, grouped by sentiment. */
export const ANSWERS: Answer[] = [
  { text: "It is certain.", kind: "yes" },
  { text: "It is decidedly so.", kind: "yes" },
  { text: "Without a doubt.", kind: "yes" },
  { text: "Yes definitely.", kind: "yes" },
  { text: "You may rely on it.", kind: "yes" },
  { text: "As I see it, yes.", kind: "yes" },
  { text: "Most likely.", kind: "yes" },
  { text: "Outlook good.", kind: "yes" },
  { text: "Yes.", kind: "yes" },
  { text: "Signs point to yes.", kind: "yes" },
  { text: "Reply hazy, try again.", kind: "noncommittal" },
  { text: "Ask again later.", kind: "noncommittal" },
  { text: "Better not tell you now.", kind: "noncommittal" },
  { text: "Cannot predict now.", kind: "noncommittal" },
  { text: "Concentrate and ask again.", kind: "noncommittal" },
  { text: "Don't count on it.", kind: "no" },
  { text: "My reply is no.", kind: "no" },
  { text: "My sources say no.", kind: "no" },
  { text: "Outlook not so good.", kind: "no" },
  { text: "Very doubtful.", kind: "no" },
];

/** Pick a random answer using the supplied 0..1 random source. */
export function shake(rand: () => number): Answer {
  return ANSWERS[Math.floor(rand() * ANSWERS.length)]!;
}
