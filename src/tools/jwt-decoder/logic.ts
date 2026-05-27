import { decodeBase64 } from "../base64/logic";

export interface DecodedJwt {
  readonly header: string;
  readonly payload: string;
  readonly signature: string;
}

function decodeSegment(seg: string): unknown {
  const std = seg.replace(/-/g, "+").replace(/_/g, "/");
  return JSON.parse(decodeBase64(std));
}

/** Decode a JWT into pretty-printed header and payload JSON. Throws if malformed. */
export function decodeJwt(token: string): DecodedJwt {
  const parts = token.trim().split(".");
  if (parts.length < 2 || !parts[0] || !parts[1]) throw new Error("Invalid JWT");
  return {
    header: JSON.stringify(decodeSegment(parts[0]), null, 2),
    payload: JSON.stringify(decodeSegment(parts[1]), null, 2),
    signature: parts[2] ?? "",
  };
}
