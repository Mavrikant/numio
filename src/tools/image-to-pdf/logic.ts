import { PDFDocument } from "pdf-lib";

export type PageSize = "fit" | "a4" | "letter";

const A4 = { width: 595.28, height: 841.89 };
const LETTER = { width: 612, height: 792 };

interface ImageInput {
  readonly bytes: Uint8Array;
  readonly type: "image/jpeg" | "image/png";
}

/** Pack one or more images into a single PDF, one image per page. */
export async function imagesToPdf(images: ImageInput[], pageSize: PageSize): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  for (const img of images) {
    const embedded = img.type === "image/png" ? await pdf.embedPng(img.bytes) : await pdf.embedJpg(img.bytes);
    const w = embedded.width;
    const h = embedded.height;
    const box = pageSize === "a4" ? A4 : pageSize === "letter" ? LETTER : { width: w, height: h };
    const page = pdf.addPage([box.width, box.height]);
    if (pageSize === "fit") {
      page.drawImage(embedded, { x: 0, y: 0, width: w, height: h });
    } else {
      const scale = Math.min(box.width / w, box.height / h);
      const drawW = w * scale;
      const drawH = h * scale;
      page.drawImage(embedded, { x: (box.width - drawW) / 2, y: (box.height - drawH) / 2, width: drawW, height: drawH });
    }
  }
  return pdf.save();
}
