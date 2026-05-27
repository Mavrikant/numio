/**
 * Small shared primitives for the text/developer tools: a copy hook, a copy
 * button, and a couple of styled controls so each tool stays compact and the
 * look is consistent.
 */
import { useCallback, useState, type ReactNode } from "react";

export function useCopy(): { copied: boolean; copy: (text: string) => void } {
  const [copied, setCopied] = useState(false);
  const copy = useCallback((text: string) => {
    if (!text) return;
    navigator.clipboard?.writeText(text).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      },
      () => {},
    );
  }, []);
  return { copied, copy };
}

export function CopyButton({
  text,
  label,
  copiedLabel,
}: {
  readonly text: string;
  readonly label: string;
  readonly copiedLabel: string;
}) {
  const { copied, copy } = useCopy();
  return (
    <button
      type="button"
      onClick={() => copy(text)}
      disabled={!text}
      className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
    >
      {copied ? copiedLabel : label}
    </button>
  );
}

const FIELD =
  "w-full rounded-md border border-slate-300 bg-white px-3 py-2 font-mono text-sm text-slate-900 focus:border-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100";

export function TextArea({
  value,
  onChange,
  placeholder,
  rows = 6,
  readOnly = false,
}: {
  readonly value: string;
  readonly onChange?: (v: string) => void;
  readonly placeholder?: string;
  readonly rows?: number;
  readonly readOnly?: boolean;
}) {
  return (
    <textarea
      className={FIELD}
      rows={rows}
      value={value}
      placeholder={placeholder}
      readOnly={readOnly}
      onChange={onChange ? (e) => onChange(e.target.value) : undefined}
    />
  );
}

export function Field({ label, children }: { readonly label: string; readonly children: ReactNode }) {
  return (
    <label className="block space-y-1">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
      {children}
    </label>
  );
}

export const inputClass = FIELD;
