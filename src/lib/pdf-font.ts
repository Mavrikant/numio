/**
 * Lazy-loads the bundled DejaVu Sans subset (Latin + Latin Extended-A/B
 * + Cyrillic + Greek + Vietnamese) and registers it on a jsPDF document
 * as a Unicode-capable replacement for the built-in "helvetica" font.
 *
 * jsPDF's Standard 14 fonts are encoded with Windows-1252 and silently
 * mangle anything outside Latin-1 — including Turkish ş/ğ/ı, Polish
 * ą/ę/ł, Czech ř/ě/ů, and the full Cyrillic / Greek / Vietnamese
 * blocks. Embedding a TTF is the only way jsPDF can render those glyphs.
 *
 * The two TTF files are fetched once per session and cached in module
 * scope, so repeat exports don't re-download.
 */

import type { jsPDF } from "jspdf";

const FONT_FAMILY = "DejaVuSans";
const REGULAR_URL = "/numio/fonts/DejaVuSans-subset.ttf";
const BOLD_URL = "/numio/fonts/DejaVuSans-Bold-subset.ttf";

let cache: Promise<{ regular: string; bold: string }> | null = null;

function bytesToBase64(bytes: Uint8Array): string {
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(
      ...bytes.subarray(i, Math.min(i + chunk, bytes.length)),
    );
  }
  return btoa(binary);
}

async function fetchBase64(url: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Font fetch failed (${res.status}): ${url}`);
  const buf = await res.arrayBuffer();
  return bytesToBase64(new Uint8Array(buf));
}

async function loadFonts(): Promise<{ regular: string; bold: string }> {
  if (!cache) {
    cache = Promise.all([fetchBase64(REGULAR_URL), fetchBase64(BOLD_URL)])
      .then(([regular, bold]) => ({ regular, bold }))
      .catch((err) => {
        cache = null;
        throw err;
      });
  }
  return cache;
}

/**
 * Registers DejaVu Sans (regular + bold) on the provided document and
 * makes it the active font. After this resolves, calls to
 * `doc.setFont("DejaVuSans", "bold")` (or "normal") work as expected.
 *
 * Returns the family name so callers can substitute it for "helvetica".
 */
export async function registerUnicodeFont(doc: jsPDF): Promise<string> {
  const { regular, bold } = await loadFonts();
  doc.addFileToVFS(`${FONT_FAMILY}.ttf`, regular);
  doc.addFont(`${FONT_FAMILY}.ttf`, FONT_FAMILY, "normal");
  doc.addFileToVFS(`${FONT_FAMILY}-Bold.ttf`, bold);
  doc.addFont(`${FONT_FAMILY}-Bold.ttf`, FONT_FAMILY, "bold");
  doc.setFont(FONT_FAMILY, "normal");
  return FONT_FAMILY;
}
