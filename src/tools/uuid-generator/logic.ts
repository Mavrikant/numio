/**
 * UUID-generator logic — pure helpers.
 *
 * `generateUuidV4` takes a `randomBytes` provider so it stays deterministic in
 * tests; the browser component passes a `crypto.getRandomValues`-backed
 * function. Formatting (case, hyphens) is pure.
 */

export interface UuidOptions {
  readonly uppercase: boolean;
  readonly hyphens: boolean;
}

/**
 * Build an RFC 4122 version-4 UUID from 16 random bytes. The caller supplies
 * `randomBytes(16)`; we set the version (4) and variant (10xx) bits.
 */
export function generateUuidV4(randomBytes: (n: number) => Uint8Array): string {
  const b = randomBytes(16);
  b[6] = (b[6]! & 0x0f) | 0x40; // version 4
  b[8] = (b[8]! & 0x3f) | 0x80; // variant 10xx
  const hex: string[] = [];
  for (const byte of b) hex.push(byte.toString(16).padStart(2, "0"));
  return (
    hex.slice(0, 4).join("") +
    "-" +
    hex.slice(4, 6).join("") +
    "-" +
    hex.slice(6, 8).join("") +
    "-" +
    hex.slice(8, 10).join("") +
    "-" +
    hex.slice(10, 16).join("")
  );
}

/** Apply case / hyphen formatting to a canonical UUID string. */
export function formatUuid(uuid: string, options: UuidOptions): string {
  let out = options.hyphens ? uuid : uuid.replace(/-/g, "");
  if (options.uppercase) out = out.toUpperCase();
  return out;
}

export const NIL_UUID = "00000000-0000-0000-0000-000000000000";

/** Generate `count` formatted v4 UUIDs. */
export function generateMany(
  count: number,
  options: UuidOptions,
  randomBytes: (n: number) => Uint8Array,
): string[] {
  const n = Math.max(0, Math.min(count, 1000));
  const out: string[] = [];
  for (let i = 0; i < n; i++) out.push(formatUuid(generateUuidV4(randomBytes), options));
  return out;
}
