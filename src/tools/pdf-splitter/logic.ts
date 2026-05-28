import { PDFDocument } from "pdf-lib";

export { parsePageRanges } from "../_shared/pdf";

/** Extract the given page indices from a PDF as a new PDF. */
export async function extractPages(bytes: Uint8Array, indices: number[]): Promise<Uint8Array> {
  const src = await PDFDocument.load(bytes);
  const out = await PDFDocument.create();
  const valid = indices.filter((i) => i >= 0 && i < src.getPageCount());
  if (valid.length === 0) throw new Error("Select at least one valid page.");
  const pages = await out.copyPages(src, valid);
  for (const page of pages) out.addPage(page);
  return out.save();
}

/** Read the page count from a PDF without keeping the document around. */
export async function readPageCount(bytes: Uint8Array): Promise<number> {
  const src = await PDFDocument.load(bytes);
  return src.getPageCount();
}
