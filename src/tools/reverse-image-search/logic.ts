export interface SearchUrls {
  readonly google: string;
  readonly bing: string;
  readonly yandex: string;
  readonly tineye: string;
}

/**
 * Build reverse-image-search URLs for the major engines from a public image URL.
 * Each engine receives the image URL URL-encoded as a query parameter.
 */
export function buildSearchUrls(imageUrl: string): SearchUrls {
  const encoded = encodeURIComponent(imageUrl.trim());
  return {
    google: `https://lens.google.com/uploadbyurl?url=${encoded}`,
    bing: `https://www.bing.com/images/search?view=detailv2&iss=sbi&form=SBIIRP&sbisrc=UrlPaste&q=imgurl:${encoded}`,
    yandex: `https://yandex.com/images/search?rpt=imageview&url=${encoded}`,
    tineye: `https://tineye.com/search?url=${encoded}`,
  };
}

/** Heuristic: does the URL look like it points at an image file? */
export function looksLikeImage(url: string): boolean {
  return /\.(avif|bmp|gif|jpe?g|png|svg|webp)(\?|#|$)/i.test(url.trim());
}
