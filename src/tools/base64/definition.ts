import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "base64",
  category: "security",
  priority: "P0",
  icon: "binary",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [
      {
        title: "RFC 4648 — The Base16, Base32, and Base64 Data Encodings",
        url: "https://www.rfc-editor.org/rfc/rfc4648",
        authority: "IETF",
      },
    ],
    accuracyNote:
      "Text is converted to UTF-8 bytes before encoding, so non-ASCII characters round-trip correctly. Base64 is an encoding, not encryption — it provides no confidentiality.",
    disclaimer: "Encoding and decoding run entirely in your browser; nothing is uploaded.",
  },
  related: ["hash-generator", "hmac-generator"],
  tags: ["base64", "encode", "decode", "url-safe", "encoding", "data-uri"],
});
