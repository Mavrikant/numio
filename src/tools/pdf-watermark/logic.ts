import { PDFDocument, StandardFonts, degrees, rgb } from "pdf-lib";

export interface WatermarkOptions {
  readonly text: string;
  readonly fontSize: number;
  readonly opacity: number;
  readonly rotation: number;
  readonly color: { r: number; g: number; b: number };
}

/** Add a diagonal text watermark to every page of a PDF. */
export async function addWatermark(bytes: Uint8Array, opts: WatermarkOptions): Promise<Uint8Array> {
  if (!opts.text.trim()) throw new Error("Watermark text is required.");
  const pdf = await PDFDocument.load(bytes);
  const font = await pdf.embedFont(StandardFonts.HelveticaBold);
  const opacity = Math.max(0, Math.min(1, opts.opacity));

  for (const page of pdf.getPages()) {
    const { width, height } = page.getSize();
    const textWidth = font.widthOfTextAtSize(opts.text, opts.fontSize);
    const x = (width - textWidth) / 2;
    const y = height / 2;
    page.drawText(opts.text, {
      x,
      y,
      size: opts.fontSize,
      font,
      color: rgb(opts.color.r / 255, opts.color.g / 255, opts.color.b / 255),
      opacity,
      rotate: degrees(opts.rotation),
    });
  }
  return pdf.save();
}
