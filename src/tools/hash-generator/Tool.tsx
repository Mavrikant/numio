/**
 * Hash Generator — interactive security tool (client island).
 *
 * Computes SHA-1/256/384/512 of the input text with the Web Crypto API. The
 * digest is recomputed asynchronously whenever the text, algorithm, or output
 * encoding changes. Everything runs in the browser.
 */

import { useEffect, useState } from "react";
import type { Locale } from "@/config/site";
import {
  HASH_ALGORITHMS,
  DIGEST_BYTES,
  encodeBytes,
  hashText,
  type HashAlgorithm,
  type OutputEncoding,
} from "./logic";
import definition from "./definition";

interface ToolProps {
  readonly locale: Locale;
}

export default function HashGeneratorTool({ locale }: ToolProps) {
  const bundle = definition.i18n[locale] ?? definition.i18n["en"];
  const ui = bundle.ui;

  const [text, setText] = useState("");
  const [algorithm, setAlgorithm] = useState<HashAlgorithm>("SHA-256");
  const [encoding, setEncoding] = useState<OutputEncoding>("hex");
  const [digest, setDigest] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let cancelled = false;
    if (text === "") {
      setDigest("");
      return;
    }
    hashText(algorithm, text).then((bytes) => {
      if (!cancelled) setDigest(encodeBytes(bytes, encoding));
    });
    return () => {
      cancelled = true;
    };
  }, [text, algorithm, encoding]);

  const copy = () => {
    if (!digest) return;
    navigator.clipboard?.writeText(digest).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      },
      () => {},
    );
  };

  return (
    <div className="space-y-6">
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
          {ui.inputLabel}
        </span>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={ui.inputPlaceholder}
          rows={5}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm text-slate-900 focus:border-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
        />
      </label>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
            {ui.algorithm}
          </span>
          <select
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value as HashAlgorithm)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          >
            {HASH_ALGORITHMS.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </label>

        <div>
          <span className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
            {ui.encoding}
          </span>
          <div className="flex gap-2">
            {(["hex", "base64"] as const).map((enc) => (
              <button
                key={enc}
                type="button"
                onClick={() => setEncoding(enc)}
                className={`flex-1 rounded-md border px-3 py-2 text-sm font-medium ${
                  encoding === enc
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                {enc === "hex" ? ui.hex : ui.base64}
              </button>
            ))}
          </div>
        </div>
      </div>

      {algorithm === "SHA-1" && (
        <p className="rounded-md bg-amber-50 px-3 py-2 text-xs text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
          {ui.sha1Warning}
        </p>
      )}

      <div className="space-y-2 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {ui.output}{" "}
            <span className="font-normal text-slate-400">
              ({DIGEST_BYTES[algorithm]} {ui.bytes})
            </span>
          </span>
          <button
            type="button"
            onClick={copy}
            disabled={!digest}
            className="rounded-md border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {copied ? ui.copied : ui.copy}
          </button>
        </div>
        {digest ? (
          <p className="break-all font-mono text-sm text-slate-900 dark:text-slate-100">{digest}</p>
        ) : (
          <p className="text-sm text-slate-400 dark:text-slate-500">{ui.empty}</p>
        )}
      </div>
    </div>
  );
}
