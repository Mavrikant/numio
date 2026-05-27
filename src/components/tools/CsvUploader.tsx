/**
 * CsvUploader — drag-and-drop / file-picker + paste-textarea for tools.
 *
 * Emits a parsed dataset to the parent via onParsed. Also exposes
 * a "Use sample data" button when the parent provides a sample.
 *
 * Pure client component — no SSR concerns. All errors surfaced inline.
 */

import { useCallback, useId, useRef, useState } from "react";
import {
  describeDataset,
  parseCsv,
  type ParsedDataset,
  type ParseOptions,
} from "@/lib/csv";

export interface CsvUploaderProps {
  readonly onParsed: (ds: ParsedDataset, sourceLabel: string) => void;
  readonly sample?: { readonly label: string; readonly csv: string };
  readonly maxBytes?: number; // default 5MB
  readonly labels?: Partial<{
    title: string;
    dragHint: string;
    chooseFile: string;
    pasteHint: string;
    pastePlaceholder: string;
    parse: string;
    useSample: string;
    hasHeader: string;
    delimiter: string;
    autoDetect: string;
    rowsCols: string; // template "{summary}"
    error: string;
    tooBig: string;
  }>;
}

const DEFAULT_LABELS = {
  title: "Upload your data",
  dragHint: "Drag & drop a CSV file here, or",
  chooseFile: "Choose file",
  pasteHint: "…or paste CSV / TSV data below:",
  pastePlaceholder: "x,y\n1,2\n3,4",
  parse: "Parse",
  useSample: "Use sample data",
  hasHeader: "First row is header",
  delimiter: "Delimiter",
  autoDetect: "Auto-detect",
  rowsCols: "Parsed: {summary}",
  error: "Could not parse",
  tooBig: "File too large (max 5MB)",
};

export default function CsvUploader({
  onParsed,
  sample,
  maxBytes = 5 * 1024 * 1024,
  labels: lbls = {},
}: CsvUploaderProps) {
  const L = { ...DEFAULT_LABELS, ...lbls };
  const inputId = useId();
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [hasHeader, setHasHeader] = useState(true);
  const [delimiter, setDelimiter] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [summary, setSummary] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const doParse = useCallback(
    (csv: string, sourceLabel: string) => {
      setPending(true);
      setError(null);
      try {
        const opts: ParseOptions = delimiter
          ? { hasHeader, delimiter }
          : { hasHeader };
        const ds = parseCsv(csv, opts);
        if (ds.headers.length === 0) {
          throw new Error("No columns detected");
        }
        setSummary(describeDataset(ds));
        onParsed(ds, sourceLabel);
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setPending(false);
      }
    },
    [hasHeader, delimiter, onParsed],
  );

  const handleFile = useCallback(
    async (file: File) => {
      if (file.size > maxBytes) {
        setError(L.tooBig);
        return;
      }
      try {
        const text = await file.text();
        doParse(text, file.name);
      } catch (e) {
        setError(String(e));
      }
    },
    [doParse, maxBytes, L.tooBig],
  );

  const onFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) void handleFile(f);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (f) void handleFile(f);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{L.title}</h3>

      {/* Drag-and-drop file zone */}
      <div
        className={[
          "rounded-lg border-2 border-dashed p-6 text-center transition-colors",
          dragOver
            ? "border-blue-400 bg-blue-50 dark:bg-blue-950/30"
            : "border-slate-300 dark:border-slate-600",
        ].join(" ")}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={onDrop}
      >
        <p className="text-sm text-slate-600 dark:text-slate-400">{L.dragHint}</p>
        <label
          htmlFor={inputId}
          className="mt-2 inline-block cursor-pointer rounded-md bg-blue-600 px-4 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
        >
          {L.chooseFile}
          <input
            id={inputId}
            type="file"
            accept=".csv,.tsv,.txt,text/csv,text/tab-separated-values,text/plain"
            className="sr-only"
            onChange={onFileInput}
          />
        </label>
      </div>

      {/* Paste textarea */}
      <div>
        <p className="mb-2 text-sm text-slate-600 dark:text-slate-400">{L.pasteHint}</p>
        <textarea
          ref={textRef}
          rows={6}
          placeholder={L.pastePlaceholder}
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 font-mono text-xs text-slate-900 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
        />
      </div>

      {/* Options row */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            checked={hasHeader}
            onChange={(e) => setHasHeader(e.target.checked)}
            className="rounded border-slate-300"
          />
          <span className="text-slate-700 dark:text-slate-300">{L.hasHeader}</span>
        </label>
        <label className="inline-flex items-center gap-2">
          <span className="text-slate-700 dark:text-slate-300">{L.delimiter}:</span>
          <select
            value={delimiter}
            onChange={(e) => setDelimiter(e.target.value)}
            className="rounded border border-slate-300 bg-white px-2 py-1 text-sm dark:border-slate-600 dark:bg-slate-800"
          >
            <option value="">{L.autoDetect}</option>
            <option value=",">,</option>
            <option value=";">;</option>
            <option value="\t">Tab</option>
            <option value="|">|</option>
          </select>
        </label>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => doParse(textRef.current?.value ?? "", "pasted")}
          disabled={pending}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 disabled:opacity-50"
        >
          {L.parse}
        </button>
        {sample && (
          <button
            type="button"
            onClick={() => doParse(sample.csv, sample.label)}
            className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
          >
            {L.useSample}
          </button>
        )}
      </div>

      {/* Feedback */}
      {summary && !error && (
        <div className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-800 dark:border-green-800/50 dark:bg-green-950/30 dark:text-green-300">
          {L.rowsCols.replace("{summary}", summary)}
        </div>
      )}
      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300">
          {L.error}: {error}
        </div>
      )}
    </div>
  );
}
