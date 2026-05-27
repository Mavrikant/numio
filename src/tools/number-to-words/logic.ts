const ONES = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
  "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
  "seventeen", "eighteen", "nineteen",
];
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const SCALES = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion"];

function threeDigitsToWords(n: number): string {
  const parts: string[] = [];
  const hundreds = Math.floor(n / 100);
  const rest = n % 100;
  if (hundreds > 0) parts.push(`${ONES[hundreds]} hundred`);
  if (rest > 0) {
    if (rest < 20) parts.push(ONES[rest]!);
    else {
      const tens = Math.floor(rest / 10);
      const ones = rest % 10;
      parts.push(ones > 0 ? `${TENS[tens]}-${ONES[ones]}` : TENS[tens]!);
    }
  }
  return parts.join(" ");
}

/** Convert an integer (as string or number) to English words. Throws if invalid. */
export function numberToWords(input: string | number): string {
  const str = String(input).trim();
  if (!/^-?\d+$/.test(str)) throw new Error("Not an integer");
  let n = BigInt(str);
  if (n === 0n) return "zero";

  const negative = n < 0n;
  if (negative) n = -n;
  if (n >= 10n ** 24n) throw new Error("Too large");

  const groups: number[] = [];
  while (n > 0n) {
    groups.push(Number(n % 1000n));
    n /= 1000n;
  }

  const words: string[] = [];
  for (let i = groups.length - 1; i >= 0; i--) {
    if (groups[i] === 0) continue;
    const chunk = threeDigitsToWords(groups[i]!);
    words.push(i > 0 ? `${chunk} ${SCALES[i]}` : chunk);
  }

  return (negative ? "negative " : "") + words.join(" ");
}
