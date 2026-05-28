/** Build a data URL from a MIME type and base64 payload. */
export function toDataUrl(mime: string, base64: string): string {
  return `data:${mime};base64,${base64}`;
}

/** Build the CSS background-image and <img> snippets for a data URL. */
export function snippets(dataUrl: string): { css: string; html: string } {
  return {
    css: `background-image: url("${dataUrl}");`,
    html: `<img src="${dataUrl}" alt="" />`,
  };
}

/** Format a byte count as a human-readable size string. */
export function humanFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const units = ["KB", "MB", "GB"];
  let value = bytes / 1024;
  let i = 0;
  while (value >= 1024 && i < units.length - 1) {
    value /= 1024;
    i++;
  }
  return `${value.toFixed(value < 10 ? 2 : 1)} ${units[i]}`;
}
