/**
 * PdfExport.tsx — C2 Sticky UX feature
 *
 * Renders "Print" and "Download PDF" buttons next to the existing
 * Copy/Share actions in CalculatorView.
 *
 * - "Print": calls window.print() — zero dependencies. Uses the @media print
 *   stylesheet defined in global.css.
 *
 * - "Download PDF": lazy-loads jsPDF only when the user clicks. Captures the
 *   calculator title, inputs (as a static table), result values, and formula
 *   (if available) using jsPDF's text API. Saves as
 *   `{calc-slug}-{YYYY-MM-DD}.pdf`.
 *
 *   jsPDF is NOT included in the main bundle — it's a dynamic import triggered
 *   only on click, keeping first-paint performance unaffected.
 */

import { useState, useCallback } from "react";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import type { CalculatorI18nBundle } from "@/types/i18n";
import type { Locale } from "@/config/site";
import { t } from "@/lib/i18n";
import { LOCALE_CURRENCY } from "@/config/site";
import {
  formatNumber,
  formatCurrency,
  formatPercent,
  formatDate,
} from "@/lib/intl";
import type { OutputFormat } from "@/types/calculator";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Mirror of ResultPanel's formatValue — keeps PDF values consistent with UI */
function formatOutputValue(
  value: unknown,
  format: OutputFormat,
  precision: number,
  locale: Locale,
  unitOverride?: string,
): string {
  if (value === null || value === undefined) return "—";

  switch (format) {
    case "number":
      return typeof value === "number"
        ? formatNumber(value, locale, {
            maximumFractionDigits: precision,
            minimumFractionDigits: 0,
          })
        : String(value);

    case "currency": {
      if (typeof value !== "number") return String(value);
      const explicitCode = unitOverride?.toUpperCase();
      const validCodes = new Set([
        "USD", "TRY", "EUR", "GBP", "JPY", "RUB", "CNY", "KRW", "INR",
        "AUD", "CAD", "CHF",
      ]);
      const currency = explicitCode && validCodes.has(explicitCode)
        ? (explicitCode as import("@/config/site").CurrencyCode)
        : LOCALE_CURRENCY[locale];
      return formatCurrency(value, locale, currency);
    }

    case "percent":
      return typeof value === "number"
        ? formatPercent(value, locale, precision)
        : String(value);

    case "duration":
      if (typeof value !== "number") return String(value);
      // Simple hours/minutes formatting
      const totalMins = Math.round(value);
      const h = Math.floor(totalMins / 60);
      const m = totalMins % 60;
      return h > 0 ? `${h}h ${m}m` : `${m}m`;

    case "date":
      if (value instanceof Date) return formatDate(value, locale);
      if (typeof value === "string") return formatDate(value, locale);
      return String(value);

    case "list":
      if (!Array.isArray(value)) return String(value);
      if (value.length === 0) return "—";
      if (typeof value[0] === "object" && value[0] !== null) {
        return `${value.length} entries`;
      }
      return (value as unknown[]).slice(0, 5).join(", ") +
        (value.length > 5 ? "…" : "");

    default:
      return String(value);
  }
}

// ─── Main component ───────────────────────────────────────────────────────────

interface PdfExportProps {
  readonly calc: AnyCalculatorDefinition;
  readonly bundle: CalculatorI18nBundle;
  readonly locale: Locale;
  readonly inputs: Record<string, number | string | boolean>;
  readonly result: Record<string, unknown> | null;
}

export function PdfExport({
  calc,
  bundle,
  locale,
  inputs,
  result,
}: PdfExportProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const labelPrint    = t(locale, "pdf.print");
  const labelDownload = t(locale, "pdf.download");
  const labelGenerated = t(locale, "pdf.generated");

  // ── Print ──────────────────────────────────────────────────────────────────
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  // ── Download PDF ───────────────────────────────────────────────────────────
  const handleDownload = useCallback(async () => {
    if (isGenerating) return;
    setIsGenerating(true);

    try {
      // Lazy-load jsPDF — NOT in main bundle
      const { jsPDF } = await import(/* webpackChunkName: "jspdf" */ "jspdf");

      const doc = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
      const pageW = doc.internal.pageSize.getWidth();
      const pageH = doc.internal.pageSize.getHeight();
      const margin = 20;
      const contentW = pageW - margin * 2;
      let y = margin;

      // ── Header bar ──────────────────────────────────────────────────────
      doc.setFillColor(14, 165, 233); // brand-500 sky blue
      doc.rect(0, 0, pageW, 12, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.text("karaman.dev/numio", margin, 8);
      doc.text(todayISO(), pageW - margin, 8, { align: "right" });

      y = 22;

      // ── Calc title ──────────────────────────────────────────────────────
      doc.setTextColor(15, 23, 42); // slate-900
      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text(bundle.title, margin, y);
      y += 8;

      // Short description
      if (bundle.short) {
        doc.setFontSize(9);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(100, 116, 139); // slate-500
        const shortLines = doc.splitTextToSize(bundle.short, contentW);
        doc.text(shortLines, margin, y);
        y += shortLines.length * 5 + 4;
      }

      // Horizontal rule
      doc.setDrawColor(226, 232, 240); // slate-200
      doc.setLineWidth(0.3);
      doc.line(margin, y, pageW - margin, y);
      y += 8;

      // ── Inputs table ────────────────────────────────────────────────────
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(15, 23, 42);
      doc.text(t(locale, "labels.inputs"), margin, y);
      y += 6;

      doc.setFontSize(9);
      const colLabelW = contentW * 0.55;
      const colValueX = margin + colLabelW + 4;

      for (const input of calc.inputs) {
        if (y > pageH - 30) {
          doc.addPage();
          y = margin;
        }
        const inputLabel = bundle.inputs[input.id]?.label ?? input.id;
        const rawVal = inputs[input.id] ?? input.defaultValue;
        // unit lives inside input.type for NumberInputDef
        const inputUnit = input.type.kind === "number" ? input.type.unit : undefined;
        const displayVal = String(rawVal) + (inputUnit ? ` ${inputUnit}` : "");

        // Row background (alternating subtle)
        const rowIndex = calc.inputs.indexOf(input);
        if (rowIndex % 2 === 0) {
          doc.setFillColor(248, 250, 252); // slate-50
          doc.rect(margin, y - 4, contentW, 7, "F");
        }

        doc.setFont("helvetica", "normal");
        doc.setTextColor(71, 85, 105); // slate-600
        const labelLines = doc.splitTextToSize(inputLabel, colLabelW);
        doc.text(labelLines, margin + 2, y);

        doc.setTextColor(15, 23, 42); // slate-900
        doc.setFont("helvetica", "bold");
        doc.text(displayVal, colValueX, y, { align: "left" });

        y += Math.max(labelLines.length, 1) * 5 + 2;
      }

      y += 4;

      // Horizontal rule
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.3);
      doc.line(margin, y, pageW - margin, y);
      y += 8;

      // ── Results ─────────────────────────────────────────────────────────
      if (result) {
        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(15, 23, 42);
        doc.text(t(locale, "labels.results"), margin, y);
        y += 6;

        for (const output of calc.outputs) {
          if (y > pageH - 30) {
            doc.addPage();
            y = margin;
          }

          const rawValue = result[output.id];
          const dynamicUnit = result[`_unit_${output.id}`] as string | undefined;
          const displayUnit = dynamicUnit ?? output.unit;

          const formatted = formatOutputValue(
            rawValue,
            output.format,
            output.precision ?? 2,
            locale,
            displayUnit,
          );

          const outputLabel = bundle.outputs[output.id]?.label ?? output.id;
          const suffix = bundle.outputs[output.id]?.suffix ?? "";

          // Highlighted outputs get a blue tinted background
          if (output.highlight) {
            doc.setFillColor(239, 246, 255); // blue-50
            doc.rect(margin, y - 5, contentW, 10, "F");
            doc.setTextColor(29, 78, 216); // blue-700
          } else {
            doc.setFillColor(248, 250, 252); // slate-50
            doc.rect(margin, y - 5, contentW, 10, "F");
            doc.setTextColor(71, 85, 105); // slate-600
          }

          doc.setFontSize(9);
          doc.setFont("helvetica", "normal");
          doc.text(outputLabel, margin + 2, y);

          const valueText = suffix ? `${formatted} ${suffix}` : formatted;
          doc.setFont("helvetica", "bold");
          if (output.highlight) {
            doc.setFontSize(11);
            doc.setTextColor(30, 58, 138); // blue-900
          } else {
            doc.setFontSize(9);
            doc.setTextColor(15, 23, 42);
          }
          doc.text(valueText, pageW - margin - 2, y, { align: "right" });

          y += output.highlight ? 10 : 8;
        }

        y += 4;
      }

      // ── Formula ─────────────────────────────────────────────────────────
      if (calc.meta.formulaLatex) {
        if (y > pageH - 40) {
          doc.addPage();
          y = margin;
        }

        doc.setDrawColor(226, 232, 240);
        doc.setLineWidth(0.3);
        doc.line(margin, y, pageW - margin, y);
        y += 8;

        doc.setFontSize(10);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(15, 23, 42);
        doc.text(t(locale, "authority.formula"), margin, y);
        y += 6;

        // Render LaTeX as plain text (jsPDF doesn't support LaTeX rendering;
        // we strip backslash commands to get a readable approximation)
        const plainFormula = calc.meta.formulaLatex
          .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, "($1)/($2)")
          .replace(/\\sqrt\{([^}]+)\}/g, "√($1)")
          .replace(/\\cdot/g, "·")
          .replace(/\\times/g, "×")
          .replace(/\\div/g, "÷")
          .replace(/\\pm/g, "±")
          .replace(/\\\w+/g, "") // strip remaining \commands
          .replace(/[{}]/g, "")
          .trim();

        doc.setFontSize(9);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(71, 85, 105);
        const formulaLines = doc.splitTextToSize(plainFormula, contentW - 8);
        doc.setFillColor(248, 250, 252);
        doc.rect(margin, y - 4, contentW, formulaLines.length * 5 + 6, "F");
        doc.text(formulaLines, margin + 4, y);
        y += formulaLines.length * 5 + 8;
      }

      // ── References ──────────────────────────────────────────────────────
      const refs = calc.meta.references ?? [];
      if (refs.length > 0) {
        if (y > pageH - 40) {
          doc.addPage();
          y = margin;
        }

        doc.setDrawColor(226, 232, 240);
        doc.setLineWidth(0.3);
        doc.line(margin, y, pageW - margin, y);
        y += 8;

        doc.setFontSize(10);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(15, 23, 42);
        doc.text(t(locale, "authority.sources"), margin, y);
        y += 6;

        doc.setFontSize(8);
        doc.setFont("helvetica", "normal");
        for (const ref of refs) {
          if (y > pageH - 20) {
            doc.addPage();
            y = margin;
          }
          const refText = ref.authority
            ? `${ref.title} — ${ref.authority}`
            : ref.title;
          doc.setTextColor(29, 78, 216); // blue-700
          const refLines = doc.splitTextToSize(`• ${refText}`, contentW - 4);
          doc.text(refLines, margin + 2, y);
          if (ref.url) {
            y += refLines.length * 4;
            doc.setTextColor(100, 116, 139);
            doc.text(ref.url, margin + 6, y);
            y += 5;
          } else {
            y += refLines.length * 4 + 2;
          }
        }
      }

      // ── Footer on every page ─────────────────────────────────────────────
      const totalPages: number = (doc.internal as { getNumberOfPages?: () => number }).getNumberOfPages?.() ?? 1;
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFillColor(248, 250, 252);
        doc.rect(0, pageH - 10, pageW, 10, "F");
        doc.setFontSize(7);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(100, 116, 139);
        doc.text(
          `${labelGenerated} · ${window.location.href}`,
          margin,
          pageH - 4,
        );
        doc.text(`${i} / ${totalPages}`, pageW - margin, pageH - 4, {
          align: "right",
        });
      }

      // ── Save ────────────────────────────────────────────────────────────
      const filename = `${calc.slug}-${todayISO()}.pdf`;
      doc.save(filename);
    } catch (err) {
      console.error("[PdfExport] PDF generation failed:", err);
    } finally {
      setIsGenerating(false);
    }
  }, [calc, bundle, locale, inputs, result, isGenerating, labelGenerated]);

  return (
    <div className="flex gap-2 print:hidden" data-pdf-export-buttons>
      {/* Print button */}
      <button
        type="button"
        onClick={handlePrint}
        className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 min-h-[44px] sm:min-h-0"
        aria-label={labelPrint}
      >
        <span className="mr-1.5" aria-hidden="true">🖨️</span>
        {labelPrint}
      </button>

      {/* Download PDF button */}
      <button
        type="button"
        onClick={() => void handleDownload()}
        disabled={!result || isGenerating}
        className="rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700 shadow-sm hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 dark:hover:bg-emerald-900 min-h-[44px] sm:min-h-0"
        aria-label={isGenerating ? "Generating…" : labelDownload}
      >
        <span className="mr-1.5" aria-hidden="true">
          {isGenerating ? "⏳" : "⬇️"}
        </span>
        {isGenerating ? "…" : labelDownload}
      </button>
    </div>
  );
}
