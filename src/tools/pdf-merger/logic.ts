import { PDFDocument } from "pdf-lib";

/** Merge an ordered list of PDF byte arrays into one PDF. */
export async function mergePdfs(pdfs: Uint8Array[]): Promise<Uint8Array> {
  const out = await PDFDocument.create();
  for (const bytes of pdfs) {
    const src = await PDFDocument.load(bytes);
    const pages = await out.copyPages(src, src.getPageIndices());
    for (const page of pages) out.addPage(page);
  }
  return out.save();
}

export { parsePageRanges } from "../_shared/pdf";
