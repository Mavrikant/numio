export interface MimeEntry {
  readonly ext: string;
  readonly type: string;
}

export const MIME_TYPES: ReadonlyArray<MimeEntry> = [
  { ext: "txt", type: "text/plain" },
  { ext: "html", type: "text/html" },
  { ext: "css", type: "text/css" },
  { ext: "csv", type: "text/csv" },
  { ext: "js", type: "text/javascript" },
  { ext: "mjs", type: "text/javascript" },
  { ext: "json", type: "application/json" },
  { ext: "xml", type: "application/xml" },
  { ext: "pdf", type: "application/pdf" },
  { ext: "zip", type: "application/zip" },
  { ext: "gz", type: "application/gzip" },
  { ext: "tar", type: "application/x-tar" },
  { ext: "doc", type: "application/msword" },
  { ext: "docx", type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" },
  { ext: "xls", type: "application/vnd.ms-excel" },
  { ext: "xlsx", type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" },
  { ext: "ppt", type: "application/vnd.ms-powerpoint" },
  { ext: "pptx", type: "application/vnd.openxmlformats-officedocument.presentationml.presentation" },
  { ext: "png", type: "image/png" },
  { ext: "jpg", type: "image/jpeg" },
  { ext: "jpeg", type: "image/jpeg" },
  { ext: "gif", type: "image/gif" },
  { ext: "webp", type: "image/webp" },
  { ext: "svg", type: "image/svg+xml" },
  { ext: "ico", type: "image/x-icon" },
  { ext: "bmp", type: "image/bmp" },
  { ext: "avif", type: "image/avif" },
  { ext: "mp3", type: "audio/mpeg" },
  { ext: "wav", type: "audio/wav" },
  { ext: "ogg", type: "audio/ogg" },
  { ext: "mp4", type: "video/mp4" },
  { ext: "webm", type: "video/webm" },
  { ext: "mov", type: "video/quicktime" },
  { ext: "woff", type: "font/woff" },
  { ext: "woff2", type: "font/woff2" },
  { ext: "ttf", type: "font/ttf" },
  { ext: "otf", type: "font/otf" },
  { ext: "wasm", type: "application/wasm" },
  { ext: "md", type: "text/markdown" },
  { ext: "yaml", type: "application/yaml" },
  { ext: "yml", type: "application/yaml" },
];

export function lookupMime(query: string): ReadonlyArray<MimeEntry> {
  const q = query.trim().toLowerCase().replace(/^\./, "");
  if (q === "") return MIME_TYPES;
  return MIME_TYPES.filter((m) => m.ext.includes(q) || m.type.toLowerCase().includes(q));
}
