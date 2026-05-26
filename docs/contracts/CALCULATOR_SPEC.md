# Calculator Specification — IMMUTABLE CONTRACT

> **Bu dosya bir anayasadır.** Faz 0'da yazıldı, sonraki tüm fazlar buna uyar.
> Değişiklik gerekirse: durdur, kullanıcıya sor, yeni revizyon oluştur.
> Sonnet agentleri bu dosyaya **sıkı sıkıya** uymak zorundadır.

---

## 1. Bir hesaplayıcı nedir?

Bir hesaplayıcı, kullanıcının girdiği parametrelerden deterministik bir sonuç üreten, görselleştirilebilen, çok dilde sunulan, SEO-uyumlu bir dilimdir.

Her hesaplayıcı **tek bir klasördür**:

```
src/calculators/{category}/{slug}/
├── definition.ts        # Tek default export: CalculatorDefinition
├── compute.ts           # Pure compute fonksiyonu
├── i18n.ts              # 12 dilde CalculatorI18n bundle
├── content.mdx          # SEO içerik (per-locale: önce EN+TR, sonra 10 dil)
├── visualizations.tsx   # (opsiyonel) React görsel componentleri
└── test/
    ├── compute.test.ts      # Numeric correctness
    ├── edge-cases.test.ts   # Sınır durumlar
    ├── i18n.test.ts         # 12 dil completeness
    └── snapshot.test.ts     # Definition shape snapshot
```

---

## 2. Zorunlu kurallar

### 2.1 `definition.ts`

- **Default export**: `defineCalculator(...)` çağrısı (TS factory)
- **Slug**: lowercase, hyphen-separated, English (örn. `loan-amortization`)
- **Category**: `health | finance | engineering | math | conversion`
- **Priority**: `P0 | P1 | P2` (envanterden gelir)
- **Icon**: Lucide icon name (örn. `"scale"`)
- **inputSchema**: Zod schema, runtime validation için zorunlu
- **inputs**: UI form için meta (id, type, default, required)
- **outputs**: Sonuç field meta (format, precision, unit)
- **compute**: Pure fonksiyon — `inputSchema` parsed input alır, result döner
- **i18n**: 12 dilde tam bundle (eksik dil = reject)
- **meta.references**: En az 1 otoriter kaynak link

### 2.2 `compute.ts`

- **PURE**: Date.now, Math.random, IO, fetch, localStorage YASAK
- **Deterministic**: Aynı input → aynı output, her zaman
- **Defensive**: Null/undefined input geldiyse Zod schema yakalar — compute schema'sı sonrasında çağrılır, içeride tekrar validate gerekmez
- **No side effects**: Console.log dahil dışarı sızıntı yok
- **Numeric stability**: Bilinen edge case'leri yorum satırında belgele

### 2.3 `i18n.ts`

12 zorunlu dil: `en, tr, de, fr, es, it, ar, ru, zh, ja, ko, hi`

Her dil için bundle:
- `title` — sayfa başlığı (örn. "Vücut Kitle İndeksi")
- `short` — 1 cümle özet (140 karakter max)
- `description` — meta description (140-160 karakter)
- `keywords` — 5-10 SEO keyword (array)
- `inputs.{id}.label` — her input için zorunlu
- `inputs.{id}.help` — opsiyonel ama önerilir
- `outputs.{id}.label` — her output için zorunlu
- `options.{inputId}.{value}` — select inputs için
- `errors.{key}` — özel hata mesajları
- `faq` — opsiyonel, ama SEO için önerilir (3-5 soru)

**YASAK**: `"TODO"`, `"FIXME"`, `"PLACEHOLDER"`, `"XXX"` stringleri. Test bunları yakalar = otomatik reject.

### 2.4 `content.mdx`

Her dilde 500+ kelime özgün içerik. EN ve TR önce yazılır, diğer 10 dil çevirisi sonra. Çeviri "literal MT" değil "natural" olmalı.

**Yapı:**
- H1: hesaplayıcı başlığı
- H2: "Nedir / What is..." — formül + açıklama
- H2: "Nasıl kullanılır / How to use" — adım adım
- H2: "Örnekler / Examples" — 2-3 sayısal örnek
- H2: "Sıkça sorulan sorular / FAQ" — 3-5 soru
- H2: "Kaynaklar / References" — otoriter link'ler

**SEO**: H2/H3 hiyerarşisi katı, keyword stuffing yok, kullanıcıya hitap eden ton.

### 2.5 `visualizations.tsx` (opsiyonel)

Eğer `definition.ts`'de `visualizations: [...]` varsa, bu dosya React island'larını export eder. Her component:
- `client:visible` ile lazy hydrate olur
- Props olarak `result` ve `inputs` alır
- ECharts veya SVG kullanır (Chart.js de OK, ama tutarlılık için ECharts öncelikli)
- Karmaşık değilse saf SVG yeğlenir (bundle hijyeni)

### 2.6 `test/` (4 dosya zorunlu)

- **compute.test.ts** — `runNumericTests` ile en az 3 referans değer testi. Her test case'inin kaynağı yorum satırında.
- **edge-cases.test.ts** — 0, negatif, NaN, çok büyük sayı, overflow, integer/float karışımı.
- **i18n.test.ts** — `assertI18nComplete(calc)` çağrısı. 12 dil tam, placeholder yok.
- **snapshot.test.ts** — `defineCalculator` output'unun shape'i.

Hepsi `npm test` yeşil olmadan validator APPROVE etmez.

---

## 3. Yasaklar (auto-reject sebepleri)

| # | Yasak | Sebep |
|---|---|---|
| 1 | Ortak dosyaya yazma (`registry.ts`, `sitemap`, `ui.json`, `package.json`) | Dispatcher'ın işi |
| 2 | `dangerouslySetInnerHTML`, `eval`, `Function()` constructor | Güvenlik |
| 3 | Network call (fetch, axios) | Client-side static, no server |
| 4 | `Date.now()`, `Math.random()` compute içinde | Determinism |
| 5 | `localStorage`, `sessionStorage` compute içinde | Pure fn ihlali |
| 6 | I18n placeholder ("TODO", "FIXME") | Eksik çeviri |
| 7 | Eksik test dosyası | Validator otomatik fail eder |
| 8 | Compute içinde async/Promise | Sync expected |
| 9 | `moment`, `lodash` gibi büyük lib import | Bundle hijyeni — `Intl`, native kullan |
| 10 | Slug çakışması | `src/i18n/slugs/` kontrol et |

---

## 4. Önerilen patternler

- **Shared helpers**: Aynı kategorideki hesaplayıcılar `src/calculators/{category}/_helpers/` altında ortak util oluşturabilir (örn. `amortization.ts`, `compound.ts`)
- **Type-safe compute**: `defineCalculator({ inputSchema: z.object({...}), compute: (input) => {...} })` — input tipini Zod'dan çıkarır
- **Unit conversion**: `src/lib/units.ts` içindeki `convert(value, from, to)` kullan — kendi dönüşümünü yazma
- **Number formatting**: `src/lib/format.ts` içindeki `formatNumber/Currency/Percent` kullan
- **References yorumu**: Test'lerde "// Referans: investopedia.com/.../mortgage-calc-example" satırı zorunlu

---

## 5. Örnek `definition.ts` iskeleti

```typescript
import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  amount: z.number().positive().max(10_000_000),
  rate: z.number().min(0).max(100),
  years: z.number().int().positive().max(50),
});

export default defineCalculator({
  slug: "loan-amortization",
  category: "finance",
  priority: "P0",
  icon: "calculator",
  inputs: [
    { id: "amount", type: { kind: "number", min: 1, max: 10_000_000, step: 100, unit: "usd" }, defaultValue: 100_000, required: true },
    { id: "rate", type: { kind: "number", min: 0, max: 100, step: 0.01, unit: "percent" }, defaultValue: 5.5, required: true },
    { id: "years", type: { kind: "number", min: 1, max: 50, step: 1, integer: true, unit: "year" }, defaultValue: 30, required: true },
  ],
  outputs: [
    { id: "monthlyPayment", format: "currency", precision: 2, highlight: true },
    { id: "totalPayment", format: "currency", precision: 2 },
    { id: "totalInterest", format: "currency", precision: 2 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "P \\cdot \\frac{r(1+r)^n}{(1+r)^n - 1}",
    references: [
      { title: "Loan Amortization Formula", url: "https://www.investopedia.com/terms/a/amortization.asp", authority: "Investopedia" },
    ],
  },
  related: ["mortgage", "auto-loan", "compound-interest"],
});
```

---

## 6. Versiyonlama

- Bu spec **v1.0**. Kontrat değişirse:
  - Yeni major version (v2.0) çıkar
  - Mevcut hesaplayıcılar migration script ile geçirilir
  - Sonnet brief'leri güncellenir
- Trivial revize (örn. yeni unit ekleme) minor bump (v1.1), backward-compatible.

---

## 7. Validator referansı

Tam kabul kriterleri için: `docs/contracts/OPUS_VALIDATOR_RUBRIC.md`
