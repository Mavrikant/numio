import { PDFDocument, degrees } from "pdf-lib";

export { parsePageRanges, downloadBytes } from "../_shared/pdf";

export type Rotation = 90 | 180 | 270;

/** Rotate the given (zero-based) page indices by the supplied angle. */
export async function rotatePdfPages(bytes: Uint8Array, indices: number[], angle: Rotation): Promise<Uint8Array> {
  const pdf = await PDFDocument.load(bytes);
  const target = indices.length === 0 ? pdf.getPageIndices() : indices;
  for (const i of target) {
    if (i < 0 || i >= pdf.getPageCount()) continue;
    const page = pdf.getPage(i);
    const current = page.getRotation().angle;
    page.setRotation(degrees((current + angle) % 360));
  }
  return pdf.save();
}
