/** Parse a "1,3-5,7" style page-range string into an array of zero-based indices. */
export function parsePageRanges(input: string, totalPages: number): number[] {
  const set = new Set<number>();
  for (const part of input.split(",")) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    const range = /^(\d+)\s*-\s*(\d+)$/.exec(trimmed);
    if (range) {
      const a = Math.max(1, Number(range[1]));
      const b = Math.min(totalPages, Number(range[2]));
      for (let i = a; i <= b; i++) set.add(i - 1);
      continue;
    }
    if (/^\d+$/.test(trimmed)) {
      const n = Number(trimmed);
      if (n >= 1 && n <= totalPages) set.add(n - 1);
    }
  }
  return [...set].sort((a, b) => a - b);
}

/** Trigger a download for a Uint8Array as a binary file in the browser. */
export function downloadBytes(bytes: Uint8Array, filename: string, mime = "application/pdf"): void {
  const blob = new Blob([bytes as BlobPart], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
