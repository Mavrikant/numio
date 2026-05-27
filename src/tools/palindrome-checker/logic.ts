export interface PalindromeResult {
  readonly normalized: string;
  readonly isPalindrome: boolean;
}

/** Check whether text reads the same forwards and backwards. */
export function checkPalindrome(text: string, ignoreCase: boolean, ignorePunctuation: boolean): PalindromeResult {
  let s = text;
  if (ignorePunctuation) s = s.replace(/[^\p{L}\p{N}]/gu, "");
  if (ignoreCase) s = s.toLowerCase();
  const chars = Array.from(s);
  const reversed = [...chars].reverse().join("");
  return { normalized: s, isPalindrome: s.length > 0 && chars.join("") === reversed };
}
