/**
 * ToolHost — dynamically mounts a tool's `Tool.tsx` React island by slug.
 *
 * Tools live at `src/tools/{slug}/Tool.tsx` (default export, `{ locale }`
 * prop). Rather than hard-wiring every tool into the route, we resolve the
 * component from a Vite glob keyed by slug and lazy-load it. Adding a new tool
 * is then just dropping a folder — no route edits.
 */
import { lazy, Suspense, useMemo, type ComponentType } from "react";
import type { Locale } from "@/config/site";

type ToolModule = { default: ComponentType<{ locale: Locale }> };

const loaders = import.meta.glob<ToolModule>("../../tools/*/Tool.tsx");

const bySlug: Record<string, () => Promise<ToolModule>> = {};
for (const [path, loader] of Object.entries(loaders)) {
  const m = /\/tools\/([^/]+)\/Tool\.tsx$/.exec(path);
  if (m) bySlug[m[1]] = loader as () => Promise<ToolModule>;
}

interface ToolHostProps {
  readonly slug: string;
  readonly locale: Locale;
}

export default function ToolHost({ slug, locale }: ToolHostProps) {
  const Component = useMemo(() => {
    const loader = bySlug[slug];
    return loader ? lazy(loader) : null;
  }, [slug]);

  if (!Component) return null;

  return (
    <Suspense
      fallback={
        <div className="flex h-40 items-center justify-center text-sm text-slate-400">
          Loading…
        </div>
      }
    >
      <Component locale={locale} />
    </Suspense>
  );
}
