import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { markdownToHtml } from "./logic";

const DEFAULT_MD = `# Hello

Markdown to HTML in your browser.

- Lists work
- **Bold** and *italic*
- Inline \`code\` too

\`\`\`js
console.log("hi");
\`\`\`

> A quote
`;

export default function MarkdownToHtmlTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState(DEFAULT_MD);
  const html = markdownToHtml(text);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.input}</span>
          <TextArea value={text} onChange={setText} rows={16} />
        </div>
        <div className="space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.preview}</span>
          <div
            className="prose prose-sm h-[400px] overflow-y-auto rounded-md border border-slate-200 bg-white px-4 py-3 dark:prose-invert dark:border-slate-700 dark:bg-slate-800"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.html}</span>
          <CopyButton text={html} label={ui.copy} copiedLabel={ui.copied} />
        </div>
        <TextArea value={html} rows={6} readOnly />
      </div>
    </div>
  );
}
