/** Shift each ASCII letter by `shift` positions (wrapping), preserving case. */
export function caesarShift(text: string, shift: number): string {
  const s = ((Math.trunc(shift) % 26) + 26) % 26;
  return text.replace(/[a-z]/gi, (c) => {
    const base = c <= "Z" ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base + s) % 26) + base);
  });
}

/** ROT13 is a Caesar cipher with a shift of 13 (its own inverse). */
export function rot13(text: string): string {
  return caesarShift(text, 13);
}
