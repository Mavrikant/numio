/**
 * EmbedDialog — React component that opens a modal with iframe/script embed snippets.
 *
 * Shows:
 * - Tab: "iframe" — copy-paste <iframe> snippet
 * - Tab: "script" — copy-paste <script> snippet that injects the iframe
 * - Theme picker: light / dark / auto
 * - Locale picker: all 12 supported locales
 * - Live preview iframe
 * - Copy-to-clipboard buttons
 */

import React, { useState, useCallback, useRef, useEffect } from "react";
import { LOCALES, LOCALE_NATIVE_NAMES, SITE_URL, BASE_PATH, type Locale } from "@/config/site";
import { getLocalizedSlug } from "@/lib/i18n";
import type { AnyCalculatorDefinition } from "@/types/calculator";

// ─── Types ───────────────────────────────────────────────────────────────────

type Theme = "light" | "dark" | "auto";
type Tab = "iframe" | "script";

interface EmbedDialogProps {
  readonly calc: AnyCalculatorDefinition;
  readonly locale: Locale;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function buildEmbedUrl(
  calc: AnyCalculatorDefinition,
  locale: Locale,
  theme: Theme,
): string {
  const localizedSlug = getLocalizedSlug(calc.slug, locale);
  const url = `${SITE_URL}${BASE_PATH}/embed/${locale}/${calc.category}/${localizedSlug}/`;
  const params = new URLSearchParams();
  if (theme !== "light") params.set("theme", theme);
  const qs = params.toString();
  return qs ? `${url}?${qs}` : url;
}

function buildIframeSnippet(embedUrl: string): string {
  return `<iframe\n  src="${embedUrl}"\n  width="100%"\n  height="600"\n  frameborder="0"\n  loading="lazy"\n  title="Calculator by Numio"\n></iframe>`;
}

function buildScriptSnippet(embedUrl: string): string {
  return `<div id="numio-calc"></div>
<script>
(function() {
  var d = document.getElementById('numio-calc');
  var iframe = document.createElement('iframe');
  iframe.src = '${embedUrl}';
  iframe.width = '100%';
  iframe.height = '600';
  iframe.frameBorder = '0';
  iframe.loading = 'lazy';
  iframe.title = 'Calculator by Numio';
  // Responsive height: listen for postMessage from the widget
  window.addEventListener('message', function(e) {
    if (e.data && e.data.type === 'numio:resize' && e.data.height) {
      iframe.height = e.data.height;
    }
  });
  d.appendChild(iframe);
})();
<\/script>`;
}

// ─── Copy button ─────────────────────────────────────────────────────────────

function CopyButton({ text, className }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback — create a temporary textarea
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [text]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={
        className ??
        "rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 min-h-[44px] sm:min-h-0"
      }
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function EmbedDialog({ calc, locale: initialLocale }: EmbedDialogProps) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("iframe");
  const [theme, setTheme] = useState<Theme>("light");
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Open / close the native <dialog>
  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (open) {
      if (!el.open) el.showModal();
    } else {
      if (el.open) el.close();
    }
  }, [open]);

  // Close on backdrop click
  const handleDialogClick = useCallback((e: React.MouseEvent<HTMLDialogElement>) => {
    const rect = dialogRef.current?.getBoundingClientRect();
    if (!rect) return;
    const clickedOutside =
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom;
    if (clickedOutside) setOpen(false);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const embedUrl = buildEmbedUrl(calc, locale, theme);
  const iframeSnippet = buildIframeSnippet(embedUrl);
  const scriptSnippet = buildScriptSnippet(embedUrl);
  const activeSnippet = tab === "iframe" ? iframeSnippet : scriptSnippet;

  return (
    <>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg border border-purple-300 bg-purple-50 px-3 py-1.5 text-sm font-medium text-purple-700 shadow-sm hover:bg-purple-100 dark:border-purple-700 dark:bg-purple-950 dark:text-purple-300 dark:hover:bg-purple-900 min-h-[44px] sm:min-h-0"
      >
        Embed
      </button>

      {/* Dialog */}
      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
      <dialog
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Embed calculator"
        onClick={handleDialogClick}
        className="m-auto w-[calc(100vw-1rem)] max-w-2xl max-h-[90vh] mx-2 sm:mx-auto overflow-y-auto rounded-2xl border border-slate-200 bg-white p-0 shadow-2xl backdrop:bg-black/40 dark:border-slate-700 dark:bg-slate-900"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-700">
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
            Embed Calculator
          </h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Options row: theme + locale */}
          <div className="flex flex-wrap gap-6">
            {/* Theme picker */}
            <fieldset>
              <legend className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Theme
              </legend>
              <div className="flex gap-3">
                {(["light", "dark", "auto"] as Theme[]).map((t) => (
                  <label key={t} className="flex cursor-pointer items-center gap-1.5 text-sm text-slate-700 dark:text-slate-300">
                    <input
                      type="radio"
                      name="embed-theme"
                      value={t}
                      checked={theme === t}
                      onChange={() => setTheme(t)}
                      className="accent-purple-600"
                    />
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Locale picker */}
            <div>
              <label
                htmlFor="embed-locale"
                className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400"
              >
                Language
              </label>
              <select
                id="embed-locale"
                value={locale}
                onChange={(e) => setLocale(e.target.value as Locale)}
                className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
              >
                {LOCALES.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc.toUpperCase()} — {LOCALE_NATIVE_NAMES[loc]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Tabs */}
          <div>
            <div className="mb-3 flex gap-1 rounded-lg border border-slate-200 bg-slate-50 p-1 dark:border-slate-700 dark:bg-slate-800">
              {(["iframe", "script"] as Tab[]).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  className={`flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    tab === t
                      ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-slate-100"
                      : "text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                  }`}
                >
                  {t === "iframe" ? "<iframe>" : "<script>"}
                </button>
              ))}
            </div>

            {/* Snippet description */}
            <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">
              {tab === "iframe"
                ? "Paste this HTML snippet wherever you want the calculator to appear."
                : "Use this if you need the calculator to resize responsively or your CMS strips iframe tags."}
            </p>

            {/* Code block */}
            <div className="relative">
              <pre className="overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 whitespace-pre-wrap break-all sm:whitespace-pre sm:break-normal">
                <code>{activeSnippet}</code>
              </pre>
              <div className="absolute right-3 top-3">
                <CopyButton text={activeSnippet} />
              </div>
            </div>
          </div>

          {/* Preview */}
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Preview
            </p>
            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
              <iframe
                key={embedUrl}
                src={embedUrl}
                width="100%"
                height="420"
                title="Calculator preview"
                loading="lazy"
                className="block border-0"
              />
            </div>
            <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">
              This preview shows the embedded widget your visitors will see.
            </p>
          </div>

          {/* Attribution note */}
          <p className="text-xs text-slate-400 dark:text-slate-500">
            The widget includes a small "Powered by Numio" attribution link — this is required for free embedding. Contact us if you need white-label options.
          </p>
        </div>
      </dialog>
    </>
  );
}
