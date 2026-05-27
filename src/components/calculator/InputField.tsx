/**
 * InputField — renders a single calculator input based on InputDef.type.kind
 *
 * Supported kinds: number | select | toggle | date | text
 */

import type { InputDef, SelectInputDef } from "@/types/calculator";
import type { CalculatorI18nBundle } from "@/types/i18n";

interface InputFieldProps {
  readonly input: InputDef;
  readonly value: number | string | boolean;
  readonly bundle: CalculatorI18nBundle;
  readonly onChange: (id: string, value: number | string | boolean) => void;
}

const baseInputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm " +
  "focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 " +
  "dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 " +
  "dark:focus:border-blue-400 dark:focus:ring-blue-400";

export function InputField({ input, value, bundle, onChange }: InputFieldProps) {
  const inputLabels = bundle.inputs[input.id];
  const label = inputLabels?.label ?? input.id;
  const help = inputLabels?.help;
  const placeholder = inputLabels?.placeholder;
  const { type } = input;

  const id = `calc-input-${input.id}`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const raw = e.target.value;
    if (type.kind === "number") {
      const parsed = parseFloat(raw);
      onChange(input.id, isNaN(parsed) ? "" : parsed);
    } else if (type.kind === "toggle") {
      onChange(input.id, (e.target as HTMLInputElement).checked);
    } else {
      onChange(input.id, raw);
    }
  };

  const renderControl = () => {
    switch (type.kind) {
      case "number": {
        const numType = type;
        return (
          <div className="relative flex items-center gap-2">
            <input
              id={id}
              type="number"
              min={numType.min}
              max={numType.max}
              step={numType.step ?? (numType.integer ? 1 : "any")}
              value={typeof value === "number" ? value : ""}
              onChange={handleChange}
              placeholder={placeholder}
              required={input.required}
              className={baseInputClass}
            />
            {numType.unit && (
              <span className="min-w-[3rem] text-sm text-slate-500 dark:text-slate-400">
                {numType.unit}
              </span>
            )}
          </div>
        );
      }

      case "select": {
        const selectType = type as SelectInputDef;
        return (
          <select
            id={id}
            value={typeof value === "string" ? value : String(value)}
            onChange={handleChange}
            required={input.required}
            className={baseInputClass}
          >
            {selectType.options.map((opt) => {
              // Lookup priority: nested (per-input) → flat (shared) → raw.
              const opts = bundle.options;
              const nested = opts?.[input.id];
              const optLabel =
                (typeof nested === "object" && nested !== null
                  ? (nested as Record<string, string>)[opt.value]
                  : undefined) ??
                (typeof opts?.[opt.value] === "string"
                  ? (opts[opt.value] as string)
                  : undefined) ??
                opt.value;
              return (
                <option key={opt.value} value={opt.value}>
                  {optLabel}
                </option>
              );
            })}
          </select>
        );
      }

      case "toggle": {
        return (
          <label
            htmlFor={id}
            className="flex cursor-pointer items-center gap-3"
          >
            <div className="relative">
              <input
                id={id}
                type="checkbox"
                checked={value === true}
                onChange={handleChange}
                className="sr-only"
              />
              <div
                className={`h-6 w-11 rounded-full transition-colors ${
                  value === true
                    ? "bg-blue-600"
                    : "bg-slate-200 dark:bg-slate-700"
                }`}
              />
              <div
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                  value === true ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </div>
            <span className="text-sm text-slate-700 dark:text-slate-300">
              {label}
            </span>
          </label>
        );
      }

      case "date": {
        const dateType = type;
        return (
          <input
            id={id}
            type="date"
            min={dateType.min}
            max={dateType.max}
            value={typeof value === "string" ? value : ""}
            onChange={handleChange}
            required={input.required}
            className={baseInputClass}
          />
        );
      }

      case "text": {
        const textType = type;
        return (
          <input
            id={id}
            type="text"
            maxLength={textType.maxLength}
            pattern={textType.pattern}
            value={typeof value === "string" ? value : ""}
            onChange={handleChange}
            placeholder={placeholder}
            required={input.required}
            className={baseInputClass}
          />
        );
      }

      default:
        return null;
    }
  };

  // For toggles, the label is rendered inside the control
  if (type.kind === "toggle") {
    return (
      <div className="flex flex-col gap-1">
        {renderControl()}
        {help && (
          <p className="text-xs text-slate-500 dark:text-slate-400">{help}</p>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        {label}
        {input.required && (
          <span className="ml-1 text-red-500" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {renderControl()}
      {help && (
        <p className="text-xs text-slate-500 dark:text-slate-400">{help}</p>
      )}
    </div>
  );
}
