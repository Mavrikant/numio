/**
 * RFC 3492 Punycode encode/decode plus IDNA domain helpers.
 *
 * The core `encode`/`decode` functions implement the bootstring algorithm with
 * the parameters defined for Punycode. `domainToAscii`/`domainToUnicode` apply
 * it per dot-separated label, prefixing `xn--` for encoded labels and passing
 * pure-ASCII labels through unchanged.
 */

const BASE = 36;
const TMIN = 1;
const TMAX = 26;
const SKEW = 38;
const DAMP = 700;
const INITIAL_BIAS = 72;
const INITIAL_N = 128;
const DELIMITER = "-";

function adapt(delta: number, numPoints: number, firstTime: boolean): number {
  let d = firstTime ? Math.floor(delta / DAMP) : Math.floor(delta / 2);
  d += Math.floor(d / numPoints);
  let k = 0;
  while (d > Math.floor(((BASE - TMIN) * TMAX) / 2)) {
    d = Math.floor(d / (BASE - TMIN));
    k += BASE;
  }
  return k + Math.floor(((BASE - TMIN + 1) * d) / (d + SKEW));
}

/** digit (0..35) -> code point of the basic code point used for it. */
function digitToBasic(digit: number): number {
  // 0..25 -> 'a'..'z' ; 26..35 -> '0'..'9'
  return digit + 22 + (digit < 26 ? 75 : 0);
}

/** basic code point -> digit value (0..35), or BASE if not a valid digit. */
function basicToDigit(codePoint: number): number {
  if (codePoint - 48 < 10) return codePoint - 22; // '0'..'9'
  if (codePoint - 65 < 26) return codePoint - 65; // 'A'..'Z'
  if (codePoint - 97 < 26) return codePoint - 97; // 'a'..'z'
  return BASE;
}

/** Encode a Unicode string to a Punycode string (without the `xn--` prefix). */
export function encode(input: string): string {
  const codePoints = Array.from(input, (c) => c.codePointAt(0) as number);
  const output: number[] = [];

  for (const cp of codePoints) {
    if (cp < 0x80) output.push(cp);
  }

  const basicLength = output.length;
  let handled = basicLength;

  if (basicLength > 0) output.push(DELIMITER.charCodeAt(0));

  let n = INITIAL_N;
  let bias = INITIAL_BIAS;
  let delta = 0;

  while (handled < codePoints.length) {
    let m = Number.MAX_SAFE_INTEGER;
    for (const cp of codePoints) {
      if (cp >= n && cp < m) m = cp;
    }

    delta += (m - n) * (handled + 1);
    n = m;

    for (const cp of codePoints) {
      if (cp < n) delta++;
      if (cp === n) {
        let q = delta;
        for (let k = BASE; ; k += BASE) {
          const t = k <= bias ? TMIN : k >= bias + TMAX ? TMAX : k - bias;
          if (q < t) break;
          output.push(digitToBasic(t + ((q - t) % (BASE - t))));
          q = Math.floor((q - t) / (BASE - t));
        }
        output.push(digitToBasic(q));
        bias = adapt(delta, handled + 1, handled === basicLength);
        delta = 0;
        handled++;
      }
    }
    delta++;
    n++;
  }

  return String.fromCharCode(...output);
}

/** Decode a Punycode string (without the `xn--` prefix) to Unicode. */
export function decode(input: string): string {
  const output: number[] = [];
  const inputLength = input.length;

  let n = INITIAL_N;
  let bias = INITIAL_BIAS;
  let i = 0;

  const lastDelim = input.lastIndexOf(DELIMITER);
  const basicEnd = lastDelim < 0 ? 0 : lastDelim;
  for (let j = 0; j < basicEnd; j++) {
    const c = input.charCodeAt(j);
    if (c >= 0x80) throw new Error("Invalid Punycode: non-basic code point");
    output.push(c);
  }

  let index = basicEnd > 0 ? basicEnd + 1 : 0;

  while (index < inputLength) {
    const oldi = i;
    let w = 1;
    for (let k = BASE; ; k += BASE) {
      if (index >= inputLength) throw new Error("Invalid Punycode: truncated");
      const digit = basicToDigit(input.charCodeAt(index++));
      if (digit >= BASE) throw new Error("Invalid Punycode: invalid digit");
      if (digit > Math.floor((Number.MAX_SAFE_INTEGER - i) / w)) throw new Error("Invalid Punycode: overflow");
      i += digit * w;
      const t = k <= bias ? TMIN : k >= bias + TMAX ? TMAX : k - bias;
      if (digit < t) break;
      w *= BASE - t;
    }

    const outLength = output.length + 1;
    bias = adapt(i - oldi, outLength, oldi === 0);
    n += Math.floor(i / outLength);
    i %= outLength;
    output.splice(i, 0, n);
    i++;
  }

  return String.fromCodePoint(...output);
}

function isAscii(str: string): boolean {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 0x80) return false;
  }
  return true;
}

/** Convert a domain to its ASCII (Punycode / xn--) form, label by label. */
export function domainToAscii(domain: string): string {
  return domain
    .split(".")
    .map((label) => (isAscii(label) ? label : `xn--${encode(label)}`))
    .join(".");
}

/** Convert a domain's `xn--` labels back to Unicode, leaving ASCII labels as-is. */
export function domainToUnicode(domain: string): string {
  return domain
    .split(".")
    .map((label) => (/^xn--/i.test(label) ? decode(label.slice(4)) : label))
    .join(".");
}
