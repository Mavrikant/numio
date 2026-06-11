/**
 * ARINC 429 word decoder/encoder.
 *
 * An ARINC 429 word is 32 bits, numbered 1..32 with bit 1 transmitted first
 * (the LSB of the raw integer here). Field map:
 *
 *   bits 1-8   Label   — written as 3 octal digits, MSB-first (bit-reversed)
 *   bits 9-10  SDI     — Source/Destination Identifier (0..3)
 *   bits 11-29 Data    — 19 bits, interpreted as BNR (signed binary) or BCD
 *   bits 30-31 SSM     — Sign/Status Matrix (meaning depends on data type)
 *   bit  32    Parity  — odd parity over bits 1..31
 *
 * Everything here is pure and UI-free so it can be unit-tested directly.
 */

export type DataType = "bnr" | "bcd";

/** SSM meanings for BNR (and DISC) words, indexed by the 2-bit value. */
export const SSM_BNR = ["Failure Warning", "No Computed Data", "Functional Test", "Normal Operation"] as const;

/** SSM meanings for BCD words, indexed by the 2-bit value. */
export const SSM_BCD = ["Plus / North / East / Right / To / Above", "No Computed Data", "Functional Test", "Minus / South / West / Left / From / Below"] as const;

const MASK32 = 0xffffffff;

/** Treat a JS number as an unsigned 32-bit value. */
function u32(n: number): number {
  return n >>> 0;
}

/** Extract an inclusive bit range using 1-based ARINC numbering (bit 1 = LSB). */
function field(word: number, hiBit: number, loBit: number): number {
  const width = hiBit - loBit + 1;
  const mask = width >= 32 ? MASK32 : (1 << width) - 1;
  return (u32(word) >>> (loBit - 1)) & mask;
}

/** Reverse the low 8 bits of a byte (used for the label octal convention). */
export function reverseBits8(n: number): number {
  let out = 0;
  for (let i = 0; i < 8; i += 1) out |= ((n >>> i) & 1) << (7 - i);
  return out & 0xff;
}

/** Count of set bits in the low 32 bits. */
function popcount32(n: number): number {
  let v = u32(n);
  let c = 0;
  while (v !== 0) {
    v &= v - 1;
    c += 1;
  }
  return c;
}

/** Odd parity bit for bits 1..31 (returns the value bit 32 should hold). */
export function computeOddParity(wordBits1to31: number): 0 | 1 {
  // Odd parity: total number of 1s (including the parity bit) must be odd.
  return popcount32(field(wordBits1to31, 31, 1)) % 2 === 0 ? 1 : 0;
}

/** Parse a word from `0x..` / bare hex (<=8 digits) or a 32-bit binary string. */
export function parseWord(input: string): number {
  const raw = input.trim().replace(/[_\s]/g, "");
  if (raw === "") throw new Error("Empty input");

  if (/^[01]{1,32}$/.test(raw) && raw.length > 8) {
    return parseInt(raw, 2) >>> 0;
  }
  const hex = raw.replace(/^0x/i, "");
  if (/^[0-9a-fA-F]{1,8}$/.test(hex)) {
    return parseInt(hex, 16) >>> 0;
  }
  if (/^[01]{1,8}$/.test(raw)) {
    return parseInt(raw, 2) >>> 0;
  }
  throw new Error("Invalid word: expected hex (e.g. 0x2D0000A8) or 32-bit binary");
}

/** Three-digit octal label string for a raw 8-bit label field value. */
function labelToOctal(labelField: number): string {
  return reverseBits8(labelField).toString(8).padStart(3, "0");
}

/** Interpret a BNR data field: bit 29 (within 11..29) is the sign bit. */
export function bnrToSigned(dataField: number): number {
  // dataField holds bits 11..29 (19 bits) right-aligned. Bit 29 is the sign.
  const signBit = (dataField >>> 18) & 1;
  const magnitude = dataField & ((1 << 18) - 1);
  return signBit ? magnitude - (1 << 18) : magnitude;
}

/**
 * Extract BCD digits from the 19-bit data field. The most significant digit
 * uses 3 bits (0..7); the remaining four digits use 4 bits each.
 */
export function bcdFromField(dataField: number): number[] {
  const digits = [
    (dataField >>> 16) & 0x7, // bits 27-29 (3 bits)
    (dataField >>> 12) & 0xf, // bits 23-26
    (dataField >>> 8) & 0xf, // bits 19-22
    (dataField >>> 4) & 0xf, // bits 15-18
    dataField & 0xf, // bits 11-14
  ];
  return digits;
}

export interface DecodedWord {
  readonly word: number;
  readonly hex: string;
  readonly binary: string;
  readonly labelOctal: string;
  readonly labelRaw: number;
  readonly sdi: number;
  readonly ssm: number;
  readonly ssmMeaning: string;
  readonly dataField: number;
  readonly dataHex: string;
  readonly bnrValue: number | null;
  readonly bnrScaled: number | null;
  readonly bcdDigits: number[] | null;
  readonly parityBit: number;
  readonly parityValid: boolean;
}

export function decodeArinc429(word: number, opts: { dataType: DataType; bnrScale?: number }): DecodedWord {
  const w = u32(word);
  const labelRaw = field(w, 8, 1);
  const sdi = field(w, 10, 9);
  const dataField = field(w, 29, 11);
  const ssm = field(w, 31, 30);
  const parityBit = field(w, 32, 32);

  const bnr = opts.dataType === "bnr" ? bnrToSigned(dataField) : null;
  const bnrScaled = bnr !== null && opts.bnrScale !== undefined ? bnr * opts.bnrScale : null;

  return {
    word: w,
    hex: "0x" + w.toString(16).toUpperCase().padStart(8, "0"),
    binary: w.toString(2).padStart(32, "0"),
    labelOctal: labelToOctal(labelRaw),
    labelRaw,
    sdi,
    ssm,
    ssmMeaning: (opts.dataType === "bcd" ? SSM_BCD : SSM_BNR)[ssm],
    dataField,
    dataHex: "0x" + dataField.toString(16).toUpperCase(),
    bnrValue: bnr,
    bnrScaled,
    bcdDigits: opts.dataType === "bcd" ? bcdFromField(dataField) : null,
    parityBit,
    parityValid: parityBit === computeOddParity(w),
  };
}

export interface EncodeFields {
  /** Label as a 3-digit octal string (e.g. "203") or number 0..255. */
  readonly labelOctal: string;
  readonly sdi: number;
  readonly ssm: number;
  readonly dataType: DataType;
  /** BNR: signed integer count of LSBs. BCD: non-negative integer value. */
  readonly value: number;
}

export interface EncodedWord {
  readonly word: number;
  readonly hex: string;
  readonly binary: string;
  readonly parityBit: number;
}

/** Build the 19-bit BCD data field from a non-negative integer (max 5 digits). */
function bcdToField(value: number): number {
  if (value < 0) throw new Error("BCD value must be non-negative");
  if (value > 79999) throw new Error("BCD value out of range (max 79999)");
  const s = Math.trunc(value).toString().padStart(5, "0");
  const d = s.split("").map(Number);
  return ((d[0] & 0x7) << 16) | (d[1] << 12) | (d[2] << 8) | (d[3] << 4) | d[4];
}

export function encodeArinc429(fields: EncodeFields): EncodedWord {
  const label = typeof fields.labelOctal === "number" ? fields.labelOctal : parseInt(fields.labelOctal, 8);
  if (!Number.isInteger(label) || label < 0 || label > 255) throw new Error("Label out of range (octal 000..377)");
  if (!Number.isInteger(fields.sdi) || fields.sdi < 0 || fields.sdi > 3) throw new Error("SDI out of range (0..3)");
  if (!Number.isInteger(fields.ssm) || fields.ssm < 0 || fields.ssm > 3) throw new Error("SSM out of range (0..3)");

  let dataField: number;
  if (fields.dataType === "bnr") {
    const v = Math.trunc(fields.value);
    if (v < -(1 << 18) || v > (1 << 18) - 1) throw new Error("BNR value out of range (19-bit signed)");
    dataField = v & ((1 << 19) - 1);
  } else {
    dataField = bcdToField(fields.value);
  }

  const labelBits = reverseBits8(label);
  let word =
    (u32(labelBits) |
      ((fields.sdi & 0x3) << 8) |
      ((dataField & ((1 << 19) - 1)) << 10) |
      ((fields.ssm & 0x3) << 29)) >>>
    0;

  const parityBit = computeOddParity(word);
  word = (word | (parityBit << 31)) >>> 0;

  return {
    word,
    hex: "0x" + word.toString(16).toUpperCase().padStart(8, "0"),
    binary: word.toString(2).padStart(32, "0"),
    parityBit,
  };
}
