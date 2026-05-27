# numio

Static, client-side calculator site — Astro + TypeScript + Tailwind + Zod.

- **Live URL**: https://karaman.dev/calculators/
- **Hosting**: GitHub Pages (custom domain via CNAME)
- **Languages**: 12 (en, tr, de, fr, es, it, ar, ru, zh, ja, ko, hi)
- **Target**: 100+ calculators (health, finance, engineering, math, conversion)
- **Built by**: parallel AI agents (Sonnet producers + Opus validator) per the orchestration plan

## Development

```bash
npm install
npm run dev          # http://localhost:4321/calculators/
npm run typecheck
npm test
npm run build        # static export to ./dist
```

## Adding a calculator

See `docs/contracts/CALCULATOR_SPEC.md` for the contract every calculator must satisfy. See `docs/contracts/SONNET_BRIEF_TEMPLATE.md` for how a calculator-producing agent is briefed.

Bootstrap a new calculator skeleton:
```bash
npm run new-calc -- --slug=my-calc --category=finance
```

## Project structure

- `src/calculators/{category}/{slug}/` — one folder per calculator (definition, compute, i18n, content, tests)
- `src/lib/` — shared helpers (registry, i18n, seo, format, units) — **immutable contracts**
- `src/types/` — TypeScript contracts (`CalculatorDefinition`, etc.)
- `src/i18n/` — site-wide UI translations + slug aliases
- `src/pages/[lang]/[category]/[slug].astro` — generic calculator route
- `docs/contracts/` — orchestration contracts (SPEC, BRIEF, RUBRIC, INVENTORY)

## Deploy

Push to `main`. GitHub Actions builds and publishes to GitHub Pages. CNAME (`karaman.dev`) is in `public/`.

## License

TBD
