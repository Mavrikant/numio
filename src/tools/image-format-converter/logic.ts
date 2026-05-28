export const SUPPORTED_FORMATS = ["image/png", "image/jpeg", "image/webp"] as const;
export type SupportedFormat = (typeof SUPPORTED_FORMATS)[number];

export function extensionFor(mime: SupportedFormat): string {
  if (mime === "image/png") return "png";
  if (mime === "image/jpeg") return "jpg";
  return "webp";
}
