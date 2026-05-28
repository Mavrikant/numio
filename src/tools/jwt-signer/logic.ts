export type HmacAlg = "HS256" | "HS384" | "HS512";

const SHA: Record<HmacAlg, string> = { HS256: "SHA-256", HS384: "SHA-384", HS512: "SHA-512" };

function base64UrlEncode(bytes: Uint8Array | ArrayBuffer): string {
  const arr = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let bin = "";
  for (const b of arr) bin += String.fromCharCode(b);
  return btoa(bin).replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function encodeJson(value: unknown): string {
  return base64UrlEncode(new TextEncoder().encode(JSON.stringify(value)));
}

/**
 * Sign a JWT with HMAC (HS256/HS384/HS512). Header is `{alg, typ:"JWT"}` and
 * the payload is signed verbatim.
 */
export async function signJwt(payload: unknown, secret: string, alg: HmacAlg): Promise<string> {
  if (!secret) throw new Error("A secret is required to sign the JWT.");
  const header = { alg, typ: "JWT" };
  const headerB64 = encodeJson(header);
  const payloadB64 = encodeJson(payload);
  const data = `${headerB64}.${payloadB64}`;
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: SHA[alg] },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(data));
  return `${data}.${base64UrlEncode(sig)}`;
}
