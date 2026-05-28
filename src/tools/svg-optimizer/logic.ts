export interface SvgOptimizeResult {
  readonly output: string;
  readonly originalSize: number;
  readonly optimizedSize: number;
}

/**
 * Apply lightweight, lossless-by-default cleanups to an SVG string.
 * This is not a substitute for SVGO — it handles the common wins (XML
 * declarations, comments, metadata, default-value attributes, redundant
 * whitespace) without requiring a parser.
 */
export function optimizeSvg(input: string): SvgOptimizeResult {
  const originalSize = input.length;
  let out = input;
  out = out.replace(/<\?xml[^>]*\?>/g, "");
  out = out.replace(/<!--[\s\S]*?-->/g, "");
  out = out.replace(/<!DOCTYPE[^>]*>/gi, "");
  out = out.replace(/<\/?(metadata|title|desc|sodipodi:[^>]+|inkscape:[^>]+)[^>]*>/g, "");
  out = out.replace(/\s+(xmlns:sodipodi|sodipodi:[\w-]+|xmlns:inkscape|inkscape:[\w-]+|xml:space|version|standalone|enable-background)="[^"]*"/g, "");
  // Drop a handful of attributes whose only value is the SVG default.
  out = out.replace(/\s+(fill-opacity|stroke-opacity|stop-opacity)="1"/g, "");
  out = out.replace(/\s+stroke-width="1"/g, "");
  out = out.replace(/>\s+</g, "><");
  out = out.replace(/\s+/g, " ");
  out = out.trim();
  return { output: out, originalSize, optimizedSize: out.length };
}
