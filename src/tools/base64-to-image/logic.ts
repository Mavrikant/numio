export interface ParsedImage {
  readonly dataUrl: string;
  readonly mime: string;
  readonly extension: string;
  readonly valid: boolean;
}

const MIME_EXT: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/gif": "gif",
  "image/webp": "webp",
  "image/svg+xml": "svg",
  "image/bmp": "bmp",
  "image/x-icon": "ico",
};

const BASE64_RE = /^[A-Za-z0-9+/]+={0,2}$/;

/**
 * Normalise pasted input into a renderable image data URL. Accepts a full
 * `data:` URL or a bare Base64 string (defaulting to image/png).
 */
export function parseImageInput(input: string): ParsedImage {
  const s = input.trim().replace(/\s+/g, "");
  if (!s) return { dataUrl: "", mime: "", extension: "", valid: false };

  const dataMatch = /^data:(image\/[\w.+-]+);base64,(.+)$/.exec(s);
  if (dataMatch) {
    const mime = dataMatch[1]!;
    const payload = dataMatch[2]!;
    const valid = BASE64_RE.test(payload);
    return { dataUrl: s, mime, extension: MIME_EXT[mime] ?? "img", valid };
  }

  if (BASE64_RE.test(s)) {
    return { dataUrl: `data:image/png;base64,${s}`, mime: "image/png", extension: "png", valid: true };
  }

  return { dataUrl: "", mime: "", extension: "", valid: false };
}
