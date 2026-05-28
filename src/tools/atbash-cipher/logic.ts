/**
 * Atbash is a monoalphabetic substitution where A↔Z, B↔Y, … — the same
 * function encodes and decodes. Non-letters are left untouched.
 */
export function atbash(input: string): string {
  let out = "";
  for (const ch of input) {
    const code = ch.charCodeAt(0);
    if (code >= 65 && code <= 90) out += String.fromCharCode(90 - (code - 65));
    else if (code >= 97 && code <= 122) out += String.fromCharCode(122 - (code - 97));
    else out += ch;
  }
  return out;
}
