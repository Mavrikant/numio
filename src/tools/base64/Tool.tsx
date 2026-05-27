/**
 * Base64 Encoder / Decoder — interactive tool (client island).
 *
 * Encodes text to Base64 or decodes Base64 to text, fully UTF-8 aware. The
 * URL-safe alphabet and padding are toggleable (encode mode only). All work is
 * pure and synchronous; nothing leaves the browser.
 */

import { useMemo, useState } from "react";
import type { Locale } from "@/config/site";
import { decodeText, encodeText } from "./logic";
import definition from "./definition";

type Mode = "encode" | "decode";

interface ToolProps {
  readonly locale: Locale;
}

export default function Base64Tool({ locale }: ToolProps) {
  const bundle = definition.i18n[locale] ?? definition.i18n["en"];
  const ui = bundle.ui;

  const [mode, setMode] = useState<Mode>("encode");
  const [input, setInput] = useState("");
  const [urlSafe, setUrlSafe] = useState(false);
  const [padding, setPadding] = useState(true);
  const [copied, setCopied] = useState(false);

  const { output, error } = useMemo(() => {
    if (input === "") return { output: "", error: false };
    try {
      if (mode === "encode") {
        return { output: encodeText(input, { urlSafe, padding }), error: false };
      }
      return { output: decodeText(input), error: false };
    } catch {
      return { output: "", error: true };
    }
  }, [input, mode, urlSafe, padding]);

  const copy = () => {
    if (!output) return;
    navigator.clipboard?.writeText(output).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      },
      () => {},
    );
  };

  return (
    <div className="space-y-6">
      {/* Mode toggle */}
      <div className="flex gap-2">
        {(["encode", "decode"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => {
              setMode(m);
              setInput("");
            }}
            className={`flex-1 rounded-md border px-4 py-2 text-sm font-medium ${
              mode === m
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
            }`}
          >
            {m === "encode" ? ui.encode : ui.decode}
          </button>
        ))}
      </div>

      <label className="block">
        <span className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
          {ui.inputLabel}
        </span>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={mode === "encode" ? ui.encodePlaceholder : ui.decodePlaceholder}
          rows={4}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm text-slate-900 focus:border-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
        />
      </label>

      {mode === "encode" && (
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
            <input
              type="checkbox"
              checked={urlSafe}
              onChange={(e) => setUrlSafe(e.target.checked)}
              className="h-4 w-4 accent-blue-600"
            />
            {ui.urlSafe}
          </label>
          <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
            <input
              type="checkbox"
              checked={padding}
              onChange={(e) => setPadding(e.target.checked)}
              className="h-4 w-4 accent-blue-600"
            />
            {ui.padding}
          </label>
        </div>
      )}

      <div className="space-y-2 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {ui.outputLabel}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {
                if (output) {
                  setInput(output);
                  setMode(mode === "encode" ? "decode" : "encode");
                }
              }}
              disabled={!output}
              className="rounded-md border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {ui.swap}
            </button>
            <button
              type="button"
              onClick={copy}
              disabled={!output}
              className="rounded-md border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {copied ? ui.copied : ui.copy}
            </button>
          </div>
        </div>
        {error ? (
          <p className="text-sm text-red-600 dark:text-red-400">{ui.invalidInput}</p>
        ) : output ? (
          <p className="break-all font-mono text-sm text-slate-900 dark:text-slate-100">{output}</p>
        ) : (
          <p className="text-sm text-slate-400 dark:text-slate-500">{ui.empty}</p>
        )}
      </div>
    </div>
  );
}
