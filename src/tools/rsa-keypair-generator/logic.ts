export interface KeyPair {
  readonly publicKey: string;
  readonly privateKey: string;
}

function arrayBufferToBase64(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin);
}

function toPem(base64: string, label: string): string {
  const lines = base64.match(/.{1,64}/g) ?? [base64];
  return `-----BEGIN ${label}-----\n${lines.join("\n")}\n-----END ${label}-----`;
}

/**
 * Generate an RSA keypair in PEM (SPKI/PKCS#8) using Web Crypto. The
 * algorithm is RSASSA-PKCS1-v1_5 with SHA-256 — a widely understood signing
 * key suitable for JWT RS256 and similar uses.
 */
export async function generateRsaKeyPair(modulusLength: 2048 | 3072 | 4096): Promise<KeyPair> {
  const { publicKey, privateKey } = await crypto.subtle.generateKey(
    {
      name: "RSASSA-PKCS1-v1_5",
      modulusLength,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: "SHA-256",
    },
    true,
    ["sign", "verify"],
  );
  const [spki, pkcs8] = await Promise.all([
    crypto.subtle.exportKey("spki", publicKey),
    crypto.subtle.exportKey("pkcs8", privateKey),
  ]);
  return {
    publicKey: toPem(arrayBufferToBase64(spki), "PUBLIC KEY"),
    privateKey: toPem(arrayBufferToBase64(pkcs8), "PRIVATE KEY"),
  };
}
