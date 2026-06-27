# i18n directory

Holds locale resources. Faz 3'te bir Sonnet agent tarafından 16 dil için doldurulur. Faz 0/1 sırasında sadece EN ve TR placeholder olarak burada.

## Structure

- `ui/{locale}.json` — site-wide UI strings (nav, buttons, errors)
- `categories/{locale}.json` — category labels
- `slugs/{locale}.json` — calculator slug aliases (canonical → localized)

## Adding a locale

16 locales target: en, tr, de, fr, es, it, pt, id, ar, ru, zh, ja, ko, hi, nl, pl.

Each `{locale}.json` must mirror the EN structure. Missing keys fall back to EN at runtime, but `npm run validate:i18n` will report them.
