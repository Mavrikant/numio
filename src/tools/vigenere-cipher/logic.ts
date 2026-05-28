function shift(ch: string, by: number): string {
  const code = ch.charCodeAt(0);
  if (code >= 65 && code <= 90) return String.fromCharCode(((code - 65 + by) % 26 + 26) % 26 + 65);
  if (code >= 97 && code <= 122) return String.fromCharCode(((code - 97 + by) % 26 + 26) % 26 + 97);
  return ch;
}

function keyShifts(key: string): number[] {
  const out: number[] = [];
  for (const ch of key) {
    const code = ch.charCodeAt(0);
    if (code >= 65 && code <= 90) out.push(code - 65);
    else if (code >= 97 && code <= 122) out.push(code - 97);
  }
  return out;
}

/** Encrypt `input` with a Vigenère keyword. Non-letters are not shifted and do not advance the key. */
export function vigenereEncrypt(input: string, key: string): string {
  const shifts = keyShifts(key);
  if (shifts.length === 0) return input;
  let out = "";
  let i = 0;
  for (const ch of input) {
    const code = ch.charCodeAt(0);
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      out += shift(ch, shifts[i % shifts.length]!);
      i++;
    } else {
      out += ch;
    }
  }
  return out;
}

/** Decrypt `input` with a Vigenère keyword. */
export function vigenereDecrypt(input: string, key: string): string {
  const shifts = keyShifts(key);
  if (shifts.length === 0) return input;
  let out = "";
  let i = 0;
  for (const ch of input) {
    const code = ch.charCodeAt(0);
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      out += shift(ch, -shifts[i % shifts.length]!);
      i++;
    } else {
      out += ch;
    }
  }
  return out;
}
